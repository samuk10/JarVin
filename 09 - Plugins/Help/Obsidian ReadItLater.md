---
cssclasses:
  - pen-green
---
# Obsidian ReadItLater
### Fonte: [Github](https://github.com/DominikPieper/obsidian-ReadItLater)

---
### Descrição: 
ReadItLater é um plugin simples para Obsidian coletar informações interessantes da sua área de transferência para o seu cofre.

Para adicionar algo ao seu cofre, basta clicar na faixa `ReadItLater: Salvar área de transferência` ou executar o comando `ReadItLater: Salvar área de transferência`. Uma nova nota será adicionada à pasta (o padrão é `ReadItLater Inbox`) configurada nas configurações do plugin.

#### Requisitos:

1. [[]]
### É Requisito para o plugin: 
%% (plugins que necessitam deste) %%

1. [[]]

#### Como Usar:


#### Configuração:

Baixar e configurar pasta onde a nota será criada: 
`09 - Plugins/ReadItLater Inbox`


---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: <% await tp.system.prompt("1. Qual tag deseja incluir na nota?\n 2. Sem HashTag(#) \n 3. Separe por espaços", "", throw_on_cancel=true, multiline=true) %>
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[Backlog]]"
- "[[_Curto prazo|⏱ Curto prazo]]"
- "[[_Longo prazo|📆 longo prazo]]"
- "[[Lições]]"
- "[[🚩 Conquistas]]"
- "[[🏋️ Treino físico|🏋️ Esporte]]"
- "[[📈 Habits]]"
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
<%* 
let tag = await tp.system.suggester(
  ["Sem tag por enquanto", "youtube", "trabalho2", "outro"],
  ["", "youtube", "trabalho2", "outro"],
  false, // remove throw_on_cancel para evitar erro ao cancelar
  "Qual tag da Reunião?"
);

tR += "tags:\n  - " + tag + "\n  - reunião\n";
-%>

## 🎥 YouTube
```
---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: 
  - ReadItLater
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[🔍 Pesquisar]]"
tipo:
- Youtube
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
### 🎥️ Youtube
- [ ] [%videoTitle%](%videoURL%)

%videoPlayer%

```

### Twitter/X

```
---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: 
  - ReadItLater
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[🔍 Pesquisar]]"
tipo: Twitter
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
### 🐦‍⬛ Twitter
- [ ] [%tweetAuthorName%](%tweetURL%)

%tweetContent%

```


### TikTok

```
---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: 
  - ReadItLater
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[🔍 Pesquisar]]"
tipo: TikTok
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
### 🤔 TikTok
%videoDescription%

- [ ] [%videoURL%](%videoURL%)

%videoPlayer%


```

### TextSnippet
```
---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: 
  - ReadItLater
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[🔍 Pesquisar]]"
tipo: Textsnippet
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
### 📝 Textsnippet

- [ ] %content%


```

# Non-Readable Article

```
---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: 
  - ReadItLater
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[🔍 Pesquisar]]"
tipo: Article
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
### 📝 Article

- [ ] [%articleURL%](%articleURL%)


```

### Readable Article
```
---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags: 
  - ReadItLater
cssclasses:
  - page-blueprint
  <%''%>
links: 
- "[[🔍 Pesquisar]]"
tipo: Article
status: <% await tp.system.suggester(["Sem Status, não precisa trackear","todo/todo", "todo/doing", "todo/ongoing", "todo/done"], ["", "todo/todo", "todo/doing", "todo/ongoing", "todo/done"], throw_on_cancel=true, placeholder="Qual Status da Tarefa?") %>
---
### 📝 Article

- [ ] [%articleTitle%](%articleURL%)

%articleContent%


```


