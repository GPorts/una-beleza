# úna — MVP de assinatura de beleza

Protótipo navegável, responsivo e sem banco de dados. Nome, valores, parceiros, endereços, avaliações e disponibilidade são fictícios. Imagens ilustrativas do Unsplash, fontes do Google Fonts, com fontes locais de reserva.

## Abrir localmente

Com Node.js instalado, abra esta pasta no terminal e execute `npm start`. Acesse http://127.0.0.1:4173. Não exige instalação de pacotes. Também é possível abrir index.html diretamente, mas o servidor é recomendado.

## Demonstração sugerida

1. Explore os espaços e filtre por categoria, bairro ou serviço.
2. Compare os planos e ative Equilíbrio usando um nome de teste. Não há pagamento.
3. Abra um espaço, escolha serviço, dia e horário e confirme a reserva simulada.
4. Veja o agendamento e o saldo em Minha agenda. Cancele para devolver a utilização.
5. Favorite espaços e recarregue a página: as escolhas continuam no mesmo navegador.
6. Teste a tela no celular e use Deixar uma opinião para registrar feedback local e copiar para o grupo.

## Regras do protótipo

- Essencial: R$129, 4 cuidados/mês, serviços básicos.
- Equilíbrio: R$249, 6 cuidados/mês, inclui o Essencial e serviços de cabelo, pele e depilação completa.
- Plenitude: R$399, 8 cuidados/mês, inclui anteriores e cuidados estéticos não invasivos.
- Cada agendamento ativo consome uma utilização no mês da data agendada. Limites não acumulam.
- Troca de plano preserva reservas anteriores e impede reduzir o limite abaixo do uso atual do mês.
- Janela de reserva: próximos sete dias. Impede reservas no mesmo horário para a pessoa.
- Cancelamento devolve a utilização do mês correspondente.
- Botox/injetáveis não integram as assinaturas. O catálogo inclui avaliação estética, sem aplicação.

Os dados ficam em localStorage (chave una-mvp-v1). Não há conta autenticada, pagamento, integração com parceiros ou sincronização entre aparelhos. Meu espaço permite reiniciar a demonstração. O feedback também fica apenas neste navegador.

## Arquivos

index.html: estrutura. styles.css: identidade visual e responsividade. app.js: catálogo e fluxos. server.cjs: servidor local sem dependências.

## Site publicado

Veja o MVP em https://profound-mooncake-73678e.netlify.app.

O aplicativo é estático e usa navegação por hash. Na Netlify, o comando `npm run build` prepara a pasta `dist`, com apenas os arquivos públicos. O arquivo `netlify.toml` já contém essa configuração. `server.cjs` serve apenas para desenvolvimento local. A pasta `.netlify` guarda o vínculo local com o projeto e está ignorada pelo Git.

## Trabalhar em grupo

1. Clone este repositório e entre na pasta criada.
2. Execute `npm start` e abra http://127.0.0.1:4173.
3. Antes de começar uma alteração, atualize a branch principal com `git pull`.
4. Crie uma branch para sua tarefa, por exemplo `git switch -c melhoria-busca`.
5. Execute `npm run check`, `npm test` e `npm run build` depois das alterações.
6. Envie sua branch e abra um pull request para o grupo revisar.

Para receber acesso de escrita, o responsável deve convidar cada integrante em **Settings > Collaborators > Add people** no GitHub. Um repositório público permite leitura, mas as alterações diretas exigem convite aceito.

O repositório contém o código do MVP. Arquivos de sessão da Netlify, dependências instaladas, saídas de build e arquivos `.env` não devem ser enviados ao GitHub. As imagens são ilustrativas do Unsplash; a foto local do Raiz & Cor usa https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f (identificador de origem: `photo-1521590832167-7bcbfaa6381f`).
