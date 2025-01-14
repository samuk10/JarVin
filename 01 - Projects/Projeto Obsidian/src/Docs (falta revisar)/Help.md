# 🤔 Ajuda

---

Links: [Documentação de Obsidian](https://help.obsidian.md/Obsidian/Index)
Etiquetas: #obsidian
Data: 2022-12-17

---

## 👋 Introdução

Obsidian é uma ótima aplicação para tomar notas. No entanto, ela requer alguma conhecimento sobre como usá-la. Este guia irá lhe ensinar alguns conceitos básicos e sintaxe para começar.

---

## 🗃 Estrutura

Use etiquetas e links para facilmente procurar ou navegar pelas notas.

### `#️⃣` Etiquetas

Etiquetas gerais:  `#tag`
Etiquetas aninhadas:  `#tag/nested`

### 🔗 Links

Link para a nota "X":  `[[note X]]`
Link para o título "Y" na nota "X":  `[[note X#heading Y]]`
Link para um bloco de texto dentro da nota "X":  `[[note X^]]` 
Link para um bloco de texto dentro de qualquer arquivo:  `[[^^]]`

---

## Formatação

### Lista de tarefas

- [x] Item
- [?] Item
- [ ] Item

### Tabela

| Primeiro cabeçalho | Segundo cabeçalho |
|--------------|---------------|
| Coluna 1        | Coluna 2         |

### Estilo de texto

| Original                 | Visualização                |
| ------------------------ | ------------------- |
| `**negrito**` ou `__negrito__` | **negrito**            |
| `*itálico*` ou `_itálico_` | *itálico*            |
| `~~texto destacado~~`    | ~~texto destacado~~ |

### Citação de bloco

> "Este é um bloco de citação" - Yke

### Bloco de informação

> [!INFO] > Aqui está um bloco de informações.

### Código em Python

```python
import this
```

### Matemática

$$\begin{vmatrix}a & b\\ c & d \end{vmatrix}=ad-bc$$

### Imagens

`![[img.jpg|200x100]]`

### Exibição de link

[[🤔 Ajuda|Ajuda]] - link para "🤔 Ajuda", mas exibe "Ajuda"

### Texto colorido

?? escolha um tema legal, ou edite o CSS você mesmo

### Nota de rodapé

Adicione uma nota de rodapé como essa [^1].

[^1]: Nota de rodapé

### Consulta

Usando [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
```dataview
LIST
FROM #project
```

---

## Atalhos

Alguns desses são específicos do vault.

- `CTRL + SHIFT + U` - Clipboard > Firefox Obsidian Web Clipper

- `^ + SHIFT + ENTER` - Inserir novo desenho Excalidraw
- `CTRL + N` - Novo arquivo
- `CTRL + K` - Converter palavras selecionadas em link
- `CTRL + E` - Alternar modo de visualização/editação
- `CTRL + U` - Sublinhar
- `CTRL + T` - Nova aba
- `CTRL + Q` - Fechar todas as outras abas
- `CTRL + 1` - Alternar checkbox
- `CTRL + Shift + F` - Procurar em todos os arquivos
- `CTRL + (Shift) + P` - Abrir painel de comando
- `CTRL + ] / [` - Alterar indentation esquerda ou direita
- `CTRL + D` - Nota diária de hoje
- `CTRL + Shift + D` - Próxima nota diária
- `CTRL + Shift + A` - Nota diária anterior
- `CTRL + Shift + I` - Inserir modelo
- `CTRL + Shift + S` - Inserir modelo de nota diária
- `Option + A` - Nota anterior
- `CTRL + Esc` - Excluir arquivo atual

---

## Truques

- Segure a tecla `CTRL` e clique em várias notas para abri-las lado a lado
- Arraste uma nota e fixe-a na barra lateral para acesso rápido
- Crie apresentação usando `---` para separar slides, e comece do painel de comando
- Adicione imagens simplesmente arrastando-as para sua nota
- Segure a tecla `CTRL` enquanto estiver sobre o link para ver a visualização
- Segure a tecla `CTRL` e clique no link para abrir em tela dividida
- Fixe uma janela para garantir que ela nunca seja substituída
- Linkie para nota de Obsidian do outro aplicativo usando "Copiar URL Obsidian"
- Sincronize suas notas colocando seu vault em um folder iCloud
- Use a extensão `.nosync` para evitar que o folder seja sincronizado com iCloud