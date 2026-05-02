# Typing Speed Game 🎮⌨️

Um jogo interativo para testar e melhorar sua velocidade de digitação. Digite as citações aleatórias que aparecem na tela no tempo máximo de 60 segundos e veja seus resultados em WPM (Palavras Por Minuto) e CPM (Caracteres Por Minuto).

## 🎯 Funcionalidades

- **Citações Aleatórias**: Citações diferentes carregadas de uma API em cada rodada
- **Contador de Tempo**: 60 segundos para digitar o máximo de caracteres possível
- **Métricas de Desempenho**:
  - WPM (Words Per Minute) - Palavras por minuto
  - CPM (Characters Per Minute) - Caracteres por minuto
  - Caracteres Corretos
  - Caracteres Incorretos
- **Feedback Visual**: 
  - Caracteres corretos aparecem em verde
  - Caracteres incorretos aparecem em vermelho com fundo destacado
- **Controles Intuitivos**: Botões Play e Try Again para controlar o jogo

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização responsiva
- **JavaScript (ES6+)**: Lógica do jogo
- **Font Awesome 7.0.1**: Ícones dos botões
- **Google Fonts (Roboto)**: Tipografia
- **API DummyJSON**: Fonte de citações aleatórias

## 📁 Estrutura do Projeto

```
Typing-Speed-Game/
├── index.html          # Arquivo HTML principal
├── css/
│   └── style.css       # Estilos da aplicação
├── js/
│   └── script.js       # Lógica do jogo
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Clique no botão "Play"** para iniciar o jogo
3. **Digite a citação** que aparece na tela com o máximo de velocidade possível
4. **Observe seus resultados** no painel de controle à direita
5. **Clique em "Try Again"** para jogar novamente com uma nova citação

## 📊 Métricas Explicadas

| Métrica | Descrição |
|---------|-----------|
| **Correct** | Total de caracteres digitados corretamente |
| **Incorrect** | Total de caracteres digitados incorretamente |
| **WPM** | Velocidade de digitação em palavras por minuto (1 palavra = 5 caracteres) |
| **CPM** | Velocidade de digitação em caracteres por minuto |

### Cálculo de WPM
```
WPM = (Caracteres Corretos / 5) × (60 / Tempo Decorrido)
```

## 🎨 Paleta de Cores

- **Fundo Principal**: #7ab6ba (Azul-verde)
- **Fundo Containers**: #faf9f9 (Branco)
- **Texto**: #646464 (Cinza)
- **Botões**: #146e74 (Verde-escuro)
- **Correto**: #4ae11c (Verde)
- **Incorreto**: #b31515 (Vermelho)

## 🔧 Funcionalidades Técnicas

### Funções Principais

- **`getData()`**: Busca citações da API DummyJSON
- **`displayQuote(quotes)`**: Exibe uma citação aleatória na tela
- **`startTyping()`**: Monitora a entrada do usuário e valida caracteres
- **`timer()`**: Controla a contagem regressiva de tempo
- **`resetGame()`**: Reinicia o jogo e carrega uma nova citação

### Estados do Jogo

- `gameStarted`: Indica se o jogo está em andamento
- `isTyping`: Controla se o temporizador está ativo
- `timeLeft`: Tempo restante em segundos
- `charIndex`: Índice do caractere atual sendo digitado

## 💡 Dicas para Melhorar sua Velocidade

1. Mantenha a postura correta
2. Coloque os dedos na posição inicial do teclado (fila inicial)
3. Não olhe para o teclado, mantenha o foco na tela
4. Pratique regularmente para melhorar consistentemente
5. Qualidade sobre velocidade: evite erros para manter o WPM alto

## 🐛 Tratamento de Erros

- A aplicação valida a resposta da API antes de exibir citações
- Mensagens de erro são exibidas no console do navegador em caso de falha na conexão
- O jogo reinicia adequadamente após cada rodada

## 📝 Requisitos

- Navegador moderno com suporte a:
  - ES6+ JavaScript
  - Fetch API
  - CSS Grid/Flexbox
  - Font Awesome 7.0+

## 🎓 Conceitos de Aprendizado

Este projeto demonstra:
- Manipulação do DOM com JavaScript
- Event listeners e tratamento de eventos
- Async/await e Promises
- Integração com APIs REST
- Cálculos de desempenho
- Design responsivo com CSS

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Autor

Projeto criado como exercício de desenvolvimento web.

---

**Divirta-se digitando e melhorando suas habilidades!** ⌨️✨
