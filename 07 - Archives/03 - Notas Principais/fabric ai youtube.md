#### sources:
- [# Fabric: The Best AI Integration Tool For Obsidian](https://www.youtube.com/watch?v=TIXNqBzx3O0)
- [# Fabric: The Best AI Tool That Nobody is Talking About](https://www.youtube.com/watch?v=2fj2R6vK6O0)

#### Tradução:
```bash
$ vim  ~/.config/fabric/contexts/pt
"please translate everything to português brasileiro"
$ yt ... | fabric -p summarize --context pt
```
####  fix error: yarn not installed
```
# add ao zshrc:
`alias yt="/home/samuel/go/bin/yt"`
```

#### exemplos:
```bash
# help
fabric -h

# usar algo que está no clipboard ou paste e criar tweet por ex:
pbpaste | fabric -p tweet

# perguntar ao ai
echo "o que são LLMs" | fabric --pattern ai
* LLMs: Linguagem Natural em Grande Escala
* Modelos de Processamento de Linguagem Avançados
* Tecnologia de Inteligência Artificial de Ponta

---

yt "https://www.youtube.com/watch?v=2fj2R6vK6O0" | fabric --pattern extract_ideas | fabric -p write_micro_essay --context pt

A Conversa com o Futuro

Você já imaginou que o futuro da inteligência artificial já está aqui? Que existem ferramentas que podem ajudá-lo a escrever, pesquisar e criar conteúdo de forma mais eficiente? É o caso do Fabric, um framework de código aberto que simplifica a interação com modelos de linguagem grandes e permite que os usuários apliquem a inteligência artificial a desafios do dia a dia.

O Fabric é construído em cima de modelos de linguagem existentes, mas fornece uma forma simples e amigável de interagir com eles. Ele usa padrões, que são essencialmente prompts rebrandidos, para guiar a inteligência artificial e fornecer instruções explícitas. Além disso, o Fabric suporta múltiplos modelos, incluindo provedores populares de LLM como OpenAI, Anthropic e Gro.

Mas o que torna o Fabric realmente poderoso é a capacidade de encadear múltiplos prompts juntos, permitindo fluxos de trabalho complexos usando a inteligência artificial. E, para torná-lo ainda mais útil, o Fabric é projetado com reutilização em mente, permitindo que os usuários reutilizem prompts sem precisar copiar e colar.

Imagine ser capaz de extrair ideias principais de um vídeo do YouTube, escrever um ensaio baseado nele ou até mesmo criar um resumo de um artigo. Tudo isso é possível com o Fabric. E, com a integração com o Obsidian, um aplicativo de notas, você pode aprimorar suas habilidades de escrita e pesquisa.

Mas o que realmente me impressiona é a capacidade do Fabric de criar conteúdo de forma personalizada. Você pode criar padrões personalizados e adicioná-los à lista de padrões disponíveis. E, com a capacidade de avaliar o conteúdo e fornecer feedback sobre a qualidade da escrita, você pode melhorar suas habilidades de escrita de forma eficaz.

O Fabric é uma ferramenta poderosa que pode ajudá-lo a criar conteúdo de forma mais eficiente e personalizada. E, com sua interface simples e amigável, é fácil de usar, mesmo para aqueles que não são especialistas em inteligência artificial. Então, se você está procurando por uma ferramenta que possa ajudá-lo a criar conteúdo de forma mais eficaz, o Fabric é definitivamente uma opção que vale a pena considerar.

```



