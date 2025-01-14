# Obsidian Templates

---

## 👋 Introdução

Este repositório forma a base do meu cofre pessoal do Obsidian. Espero que você o ache tão útil quanto eu!

## 🚀 Começando

1. Instale o [Obsidian](https://obsidian.md/)
2. Baixe este repositório
3. Abra este repositório como um cofre no Obsidian
4. Crie notas diárias, notas de reuniões, projetos, tarefas, etc.
5. Confira o restante deste README para aprender alguns fluxos de trabalho úteis

Dica: Faça os passos 1-3 já e abra este README no Obsidian. Assim, as próximas seções serão renderizadas de maneira agradável.

> [!AVISO] Apenas se você usar este repositório como seu cofre completo, seus atalhos de teclado e configurações de plugins serão os mesmos usados nas seções seguintes. Se você incorporar os modelos deste repositório em seu cofre existente, terá que configurar essas coisas por conta própria.


## 🧑‍🏫 O básico do Obsidian

Veja [Obsidian](https://obsidian.md/) para obter ajuda sobre o Obsidian em geral.
Veja as configurações de "Plugins da Comunidade" para informações sobre os plugins que usamos.
Veja [[Help]] para uma visão geral de como marcar, vincular arquivos, formatar, etc.


## 📓 Organize seus dias com notas diárias

Este cofre é principalmente centrado em **notas diárias**. É onde:
- Anotamos as tarefas do dia 📝
- Recuperamos tarefas que esquecemos de fazer 🧐
- Somos lembrados de tarefas com data de vencimento 🗓️
- Anotamos lições aprendidas 🌈
- Acompanhamos nossos hábitos e anti-hábitos 📈
- Somos lembrados de aniversários 🎉
- Navegamos rapidamente para notas de reuniões 👥
- E muito mais. 🚀

### 📝 Crie notas diárias

Confira o template [[00. Diário]] para aprender como as diferentes seções são definidas e como podem ser usadas. Aproveite para conferir os outros templates também!

### ↔ Navegue entre notas diárias

Existem várias maneiras de navegar entre as notas diárias:

- Use os links que são incluídos automaticamente na nota diária. Por exemplo, ao clicar no link "Amanhã", ele abrirá a nota diária de amanhã, se ela existir, ou criará um arquivo vazio com o título correto para a nota de amanhã. (Recomendado criar diretamente usando o calendário para que ele automaticamente adicione o nome e importe o template correto)

### ✅ Gerencie suas tarefas

Todas suas tarefas da pasta "`_Todo`" serão mostradas na seção "Aberto" nas notas diárias.

Se você tem uma tarefa que deseja fazer em breve, mas não hoje, coloque-a em [[_Curto prazo|⏱ Curto prazo]].
Se você tem uma tarefa que deseja fazer em algum momento, mas não em breve, coloque-a em [[_Longo prazo|📆 Longo prazo]].

A nota [[Backlog]] oferece uma visão geral de onde encontrar todas essas notas e tarefas, Revisão das **Ações de Tarefas ⏳Agendadas, 🗓️Com prazo**, e mais.

### ⏱ Consultar tarefas críticas no tempo

Qualquer tarefa, em qualquer lugar do cofre, pode ser suportada por um indicador de data. Eles nos ajudam a consultar as tarefas e apresentá-las em uma nota diária quando necessário. Existem dois indicadores suportados nos modelos: uma data de vencimento e uma data programada/agendada.

#### 🗓 Data de vencimento da tarefa

Se você deseja que uma tarefa seja concluída até uma data `<AAAA-MM-DD>` o mais tardar, adicione `🗓<AAAA-MM-DD>` à tarefa. Exemplo:

%% - [ ] Fazer algo 📅 2022-12-15 %%

Esse tipo de tarefa aparecerá tanto no dia quanto no dia anterior à data de vencimento em sua nota diária, na seção "Vencendo". Se a data de vencimento já passou, essa tarefa aparecerá na seção "Atrasada".

#### ⏳ Data programada da tarefa

Se você deseja ser lembrado de uma tarefa antes do dia anterior à data de vencimento, use `⏳<AAAA-MM-DD>` para programar a tarefa para `<AAAA-MM-DD>`. A partir desse dia, essa tarefa aparecerá na seção "Vencendo" em suas notas diárias. Exemplo:

- [x] Fazer outra coisa ⏳ 2022-12-01 📅 2024-12-15 ✅ 2024-10-31

> Dica: se você deseja acelerar a escrita de datas, considere criar um atalho de teclado para inserir a data atual. [Este](https://discussions.apple.com/thread/8651300) me ajudou a configurá-lo.

### ✨ Destaques
Acompanhe eventos marcantes, que aconteceram no seu dia e veja um resumo deles no final de cada tempo semana/mês/trimestre/ano.
Lembre quantas coisas boas fez nesse tempo😄

Basta adicionar `destaques::` na nota diária e escrever algo na frente.3
Ex: 
`destaques:: comprei um carro novo!`
Isto irá aparecer no seu resumo da `semana/mês/trimestre/ano`!
(Prefiro usar destaques envés de lições ou marcos, pela facilidade!)

### 🌈 Acompanhe suas lições diárias

Aprendeu algo significativo hoje? Anote como uma tarefa em sua nota diária, na seção correspondente, e adicione um arco-íris 🌈. Exemplo:

- [ ] Aprendi a falar inglês 🌈

Essas lições são consultadas na nota [[Lições]]. Na seção "Lições" da sua nota diária, também consultamos aleatoriamente uma dessas lições, para que você se lembre delas mais tarde.

### 🏁 Marcos

Algo importante aconteceu hoje? Dentro de suas notas diárias, você pode criar um marco adicionando 🏁`<AAAA-MM-DD>` a uma tarefa. Exemplo:

- [ ] Cheguei até aqui no readme! 🏁2023-01-16

Confira a nota [[Marcos]] para obter uma visão geral de todos esses eventos por sua seção correspondente.



### 📈 Rastreamento de hábitos

Cada nota diária vem com um rastreador de hábitos. Você pode configurá-lo em [[📈 Habits.config]].

Ao longo de suas notas diárias, você pode registrar marcando eles nas propriedades os seus hábitos.

> [!AVISO]
> Infelizmente não vou entrar em detalhes de como adicionar/remover hábitos, mas é bem simples. (Dica: ChatGPT)
> 1. Precisa adicionar/remover nas propriedades do template [[00. Diário]]
> 2. Precisa adicionar/remover nas query's do template [[01. Semanal]]


`.obsidian/scripts/dailyNotes.js,.obsidian/scripts/config.js,.obsidian/scripts/habitTracker.js, .obsidian/scripts/dailyNotes.js`

.obsidian/scripts/dailyNotes.js

### 🌍 Scrapping de notícias e previsão do tempo

Uma seção das notas diárias contém alguns blocos de Python.
Quando esses blocos são executados, um scraper será iniciado e coletará informações de sites de notícias ou clima.

Isso está incluído neste modelo como exemplo.
Para que funcione, você deve configurar as configurações do plugin "Execute Code".

#### old:
/home/samuel/Dropbox/Notepad/My-Vault/.obsidian/scripts/venv/bin/python3

#### new:
/home/samuel/Dropbox/Aplicativos/remotely-save/JarVin/.obsidian/scripts/venv/bin/python3

### 🎉 Aniversários

Os aniversários são consultados das notas "pessoa". Você pode encontrar um modelo para isso na pasta Templates. Tudo o que você precisa fazer é adicionar uma tarefa na nota da pessoa com 🎉`<aaaa-mm-dd>` e o aniversário dessa pessoa aparecerá na sua nota diária. Exemplo:

- [ ] Yke aniversário 🎉`0000-01-30`

Muitas vezes, você provavelmente não saberá o ano, mas preencher `0000` para o ano ainda funciona.

### 🗃 Organizar notas diárias

Abra um terminal no seu cofre e execute `make structure` para organizar todas as notas diárias (até hoje) em diferentes pastas. Por exemplo, a nota `2022-11-10, ...` seria colocada na pasta 
"🗓 2022/Novembro". `make structure` executa `structure.py` em `.obsidian/scripts/`

> **Nota:** esse script provavelmente quebrará se você mudar os nomes das pastas.

## 🤯 Reuniões, metas, projetos e mais

Existem algumas outras coisas que você pode fazer com este cofre:

- **Criar rapidamente notas de reuniões com os modelos certos**. Certifique-se de nomear suas notas de reunião: `<aaaa-mm-dd> Título da Reunião`, só assim ela aparecerá nas suas notas diárias. 👥
- **Acompanhar ações de reuniões**. Preencha as ações na seção "Ações" e as encontre novamente na visão geral [[🏃 Ações de reunião]]. (Ou consulte-as novamente em sua próxima nota de reunião) 🏃
- **Criar suas notas rapidamente** com um modelo de nota predefinido. E force-se a marcar! 📝
- **Definir projetos** e acompanhar seu progresso com as tags `todo`, `doing`, `done`. 🧩
- **Tornar suas metas concretas** com o modelo de metas. 🚀
- **Prepare-se para sua próxima viagem** antes mesmo de saber para onde está indo 🗺️

Existem possibilidades infinitas com o Obsidian,

 por isso é uma excelente ferramenta para ser explorada e ajustada conforme o uso e necessidade.