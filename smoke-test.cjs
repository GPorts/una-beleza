const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = new Map();
const element = id => {
 if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',open:false,classList:{add(){},remove(){},toggle(){}},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;}});
 return elements.get(id);
};
let stored;
const context = {console,URL,Intl,Date,FormData:class{},navigator:{},setTimeout:()=>1,clearTimeout(){},localStorage:{getItem:()=>null,setItem:(k,v)=>stored=v},location:{hash:''},window:{addEventListener(){},scrollTo(){}},document:{querySelector:element,querySelectorAll:()=>[],addEventListener(){}}};
vm.createContext(context);
vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8')+`
 globalThis.runChecks=()=>{
 const assert=globalThis.assert;
 assert.equal(places.length,6);
 assert.ok($('#places').innerHTML.includes('Ateliê do Fio'));
 filter.query='limpeza';renderCards();assert.ok($('#places').innerHTML.includes('Lume Skin Studio'));assert.ok(!$('#places').innerHTML.includes('Oliva Nail Bar'));
 filter.query='';filter.category='Unhas';renderCards();assert.ok($('#places').innerHTML.includes('Oliva Nail Bar'));assert.ok(!$('#places').innerHTML.includes('Ateliê do Fio'));
 state.plan='Essencial';openPlace('atelie');assert.ok($('#modal-content').innerHTML.includes('Conhecer os planos'));
 openPlace('oliva');assert.ok($('#modal-content').innerHTML.includes('Escolha o horário'));
 state.plan='Equilíbrio';state.name='Teste';openPlace('atelie');
 const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);selectedDate=localDate(tomorrow);selectedTime='09:00';confirmBooking();
 assert.equal(state.bookings.length,1);assert.equal(monthUsage(selectedDate),1);assert.ok($('#modal-content').innerHTML.includes('Momento reservado.'));
 confirmBooking();assert.equal(state.bookings.length,1);assert.ok($('#toast').textContent.includes('já tem'));
 const date=selectedDate;state.bookings[0].status='cancelado';assert.equal(monthUsage(date),0);
 state.bookings=[];for(let i=0;i<6;i++)state.bookings.push({id:String(i),status:'confirmado',date,time:'08:00'});
 selectedTime='16:00';confirmBooking();assert.equal(state.bookings.length,6);assert.ok($('#toast').textContent.includes('limite'));
 state.plan='Plenitude';openPlace('essenza');assert.ok($('#modal-content').innerHTML.includes('Escolha o horário'));
 assert.equal(esc('<script>'),'&lt;script&gt;');
 state.bookings=[];renderAgenda();assert.ok($('#main').innerHTML.includes('Sua próxima pausa começa aqui'));
 state.favorites=['lume'];save();
 renderPlans();assert.ok($('#main').innerHTML.includes('Essencial'));assert.ok($('#main').innerHTML.includes('Plenitude'));
 renderAccount();assert.ok($('#main').innerHTML.includes('Meu <em>espaço.'));
 };
`,context);
context.assert=assert;context.runChecks();
assert.deepEqual(JSON.parse(stored).favorites,['lume']);
console.log('OK: catálogo, busca, categorias, acesso por plano, reserva, conflito de horário, cancelamento, limite mensal, persistência e telas.');
