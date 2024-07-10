Funcionalidades
-Geração de Número Aleatório: O jogo gera um número aleatório entre 1 e 10.
-Verificação do Chute: O jogador insere um número e o jogo verifica se é o número secreto.
-Feedback: O jogo fornece feedback sobre se o número secreto é maior ou menor que o número chutado.
-Voz: O jogo utiliza a biblioteca responsivevoice.js para falar o feedback em voz alta.
-Reiniciar Jogo: O jogador pode reiniciar o jogo após acertar o número secreto.
-Interface Interativa: O jogo possui uma interface amigável e responsiva.
 
Tecnologias Utilizadas
-HTML5: Para a estrutura do jogo.
-CSS3: Para a estilização do jogo.
-JavaScript: Para a lógica do jogo.
-responsivevoice.js: Para a funcionalidade de síntese de voz.
-Google Fonts: Para a utilização das fontes 'Chakra Petch' e 'Inter'.

Estrutura do Código
-HTML
O arquivo HTML define a estrutura básica do jogo, incluindo a importação das bibliotecas e arquivos CSS necessários. Ele também contém os elementos HTML para exibir o jogo e capturar a entrada do usuário.

-CSS
O arquivo CSS (style.css) estiliza a interface do jogo, tornando-a atraente e responsiva. Ele define estilos para o contêiner, botões, textos, e outros elementos visuais.

-JavaScript
O arquivo JavaScript (app.js) contém a lógica do jogo:

Geração de Número Aleatório: A função gerarNumeroAleatorio gera um número aleatório entre 1 e 10, garantindo que não haja repetições até que todos os números tenham sido escolhidos.
Exibição de Texto: A função exibirTextoNaTela exibe mensagens na tela e utiliza a biblioteca responsivevoice.js para falar as mensagens.
Verificação do Chute: A função verificarChute compara o chute do jogador com o número secreto e fornece feedback adequado.
Reiniciar Jogo: A função reiniciarJogo reinicia o jogo, gerando um novo número secreto e resetando o número de tentativas.
