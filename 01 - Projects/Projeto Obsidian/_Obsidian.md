---
date: 2024-09-06T09:58
tags:
  - obsidian
  - projeto
cssclasses: 
status:
  - todo
---
# Obsidian

##### ===Requisitos==
```bash
sudo apt install python3-pip
sudo apt install python3-venv

cd /home/samuel/Dropbox/Notepad/My-Vault/.obsidian/scripts/
source ./venv/bin/activate
pip install -r requirements.txt
```

INSPIRAÇÕES:
- ### [Ykerus](https://github.com/ykerus/obsidian-templates)
- ### [LifeOS By Quanru](https://obsidian-life-os.netlify.app/)
- ### [PARA Method - Thiago Forte](https://www.youtube.com/watch?v=T6Mfl1OywM8)
> [!meta]+ Metadata
> source:: [How to Organize Your Digital Life in Seconds (PARA Method)  Part 1](https://www.youtube.com/watch?v=T6Mfl1OywM8)
> channel:: [Tiago Forte](https://www.youtube.com/@TiagoForte)
> released:: 
> watched:: 2024-09-12
> thumbnail:: ![](https://i.ytimg.com/vi/T6Mfl1OywM8/hqdefault.jpg)

 - ### [Bryan Jenks](https://www.youtube.com/watch?v=5k4LfCVY0yQ)
> [!meta]+ Metadata
> source:: [📅️ My Fully Automated Daily Note Review System In Obsidian 🤖️](https://www.youtube.com/watch?v=5k4LfCVY0yQ)
> channel:: [Bryan Jenks](https://www.youtube.com/@BryanJenks)
> released:: 
> watched:: 2024-09-12
> thumbnail:: ![](https://i.ytimg.com/vi/5k4LfCVY0yQ/hqdefault.jpg)

- ### Habit Tracker: [+1creator](https://www.youtube.com/watch?v=v4R4_QbosP4)
> [!meta]+ Metadata
> source:: [How To Use Obsidian Create A Habit Tracker & Reach Your 2024 Goals](https://www.youtube.com/watch?v=v4R4_QbosP4)
> channel:: [+1creator](https://www.youtube.com/@plus1creator)
> released:: 
> watched:: 2024-10-01
> thumbnail:: ![](https://i.ytimg.com/vi/v4R4_QbosP4/hqdefault.jpg)


---

# [Dashboard++](https://github.com/TfTHacker/DashboardPlusPlus?tab=readme-ov-file)
# [Temas, Dashboards](https://obsidianninja.com/obsidian-daily-notes-template/)
# [Temas, Dashboards](https://ryan.himmelwright.net/post/started-using-obsidian-tasks-plugin/)


# 📚 Todo
```dataview
TABLE WITHOUT ID
	file.link as "Title"
FROM #obsidian  
WHERE contains(status,"doing")

```

## 🎯 Objetivos

- Permitir que outros possam se beneficiar dos meus modelos Obsidian
- Facilidade de Implementação e Uso
- Criar notas básicas e projetos
- Conseguir explicar o flow

0
# ==adicionar à doc:==
## Qual diferença entre [[📈 Hábitos]], [[Marcos]]/Objetivos e ✨Destaques?

- ### Hábitos: Eventos ongoing/frequentes
	- Treino diário de [[Calistenia]]
	- Ler
	- Caminhar
	- Limpar casa
	- [[NoFap]] (criar projeto)
	- Tocar [[Música]]
- ### ✨ Destaques: Eventos marcantes, sendo que normalmente estão no presente(mas posso voltar e ler elas e ver quantas coisas boas fiz nesse tempo😄)
	- Promoção no trabalho
	- Entrar na faculdade
	- Passar na prova
	- Li 4x livros na semana
- ### Metas/Objetivos: Planos e tarefas, que são pré-setados, eu já identifico crio elas ao iniciar um ==PROJETO== e também posso ir concluindo cada um dos objetivos até terminá-lo.
	- Finalizar um projeto

# Inline javascript!
# Vault Info  
- 🗄️ Recent file updates  
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
- 🔖 Tagged:  favorite   
 `$=dv.list(dv.pages('#projeto').sort(f=>f.file.name,"desc").limit(4).file.link)`
- 〽️ Stats  
	-  File Count: `$=dv.pages().length`  
	-  Templates: `$=dv.pages('"99 - Meta/00 - Templates"').length`

## ❌ Problema


- [x] limpar o [[_Curto prazo]] e usar tags: ⏰ 2024-11-05 📅 2024-10-25 ✅ 2024-11-05
- [ ] No diário usar:
	# Trabalho1:
	- #projeto #trabalho1 e status todo / doing
	# Pessoal:
	 - ==not== #projeto #trabalho1 e status todo / doing
- [ ] No curto prazo usar só a query, com prazo de 1 semana
	- #projeto #trabalho1 e status todo / doing
- [ ] [[_Longo prazo]] usar query, com prazo acima de 1 semana:
- [ ] ideia trabalho template 🛫 2024-10-06 📅 2025-01-07
	1. dentro de [[trabalho]]
	2. vou inserir uma task de template que:
	   ira criar uma task + query do projeto em [[trabalho]] 
	   criar um novo arquivo na pasta do trabalho com projeto que vou dentro criar as tarefas desse projeto até conclui-lo
	
- [x] Acertar o Done do Tasks VS Reminder(query do diario)  ⏰ 2024-10-25 📅 2024-10-19 ✅ 2024-10-25
	-  💊 Velija (@[[2024-10-04]] 08:30) 🔼 
	- 💧 Beber água x1 (@2024-10-04 10:00) ✅ 2024-10-04
	- [x] talvez criar um script que alterar a data do **tasks** para **reminder** (@[[2024-10-13]]) ✅ 2024-10-06
	- [x] no tasks é melhor, tentar alterar o calendário pelo `(@` ✅ 2024-10-06
	- [ ] add 📅 2024-10-07 após o relóginho...⏰
	- [ ] usar sem reloginho para tasks normais com query
### how to [create Reminder/Task](https://obsidian.rocks/creating-a-today-view-in-obsidian/) + [query](https://publish.obsidian.md/tasks/Queries/Grouping)
1. Criar a Task com atalho: Ctrl+Shift+3
2. Adicionar Reminder com atalho: Ctrl+Shift+2
4. Usar query no formato ==`Tasks`==!
%% `- [ ] Jeito Certo ⏰ 2024-10-06 11:09 🔁 every month ⏳ 2024-11-07 📅 2024-11-06` %%

> tasks
> not done
> filter by function task.file.filename.includes("Entradas e Saídas Mensais")
> group by function task.heading
> short mode



- [ ] Criar templater para Trabalho diário 🔼 ➕ 2024-10-03 🛫 2024-10-05 ⏳ 2025-01-07 📅 2025-01-07
	- 1 pra cada dia
	- task com data criação, inicio, agenda e prazo.
	- tasks não feitas no dia irão migrar para próximo dia.
- [x] fix `#daily` para `#diário` ✅ 2024-09-12
- [x] Tags/properties 🌈 ✅ 2024-09-16
- [x] Add [[📈 Hábitos]] to weekly/montly etc ✅ 2024-10-01
- [x] [[📈 Hábitos]] usando properties ✅ 2024-10-01
- [x] Adicionar ao [[📈 Hábitos]] : sem espaços: usar ou camelCase ✅ 2024-10-01
	- [x] ler livro ✅ 2024-10-01
	- [x] ler bíblia ✅ 2024-10-01
	- [x] oração ✅ 2024-10-01
	- [x] estudo ✅ 2024-10-01
	- [x] Treino diário de [[Calistenia]] ✅ 2024-10-01
	- [x] Ler ✅ 2024-10-01
	- [x] Caminhar ✅ 2024-10-01
	- [ ] capoeira
	- [x] Limpar casa ✅ 2024-10-01
	- [x] [[NoFap]] criar projeto ✅ 2024-10-01
	- [x] Tocar [[Música]] ✅ 2024-10-01
- [x] Adicionar [[📈 Hábitos]] aos Templates [[02. Mensal]][[01. Semanal]] ✅ 2024-10-01
- [x] [[Marcos]] e [[Lições]] vão ficar floodado com o tempo, vou ter que apagar minhas paradas feitas... ✅ 2024-10-01
	- [x] o jeito é filtrar na query por: dia/semana/mês ✅ 2024-10-01
	- [x] usar destaques:: ✅ 2024-10-01
- [ ] IOS Obsidian Workflow: https://forum.obsidian.md/t/journal-log-workflow-drafts-like-just-start-writing-for-your-daily-notes-ios/18382
- [ ] 🚩 #fix = criar tag para fix-me?
- [ ] verificar permissão script
- [ ] INSTALAÇÃO REPO:
	- [ ] trocar pasta script em 00 templates
	- [ ] instalar venv
	- [ ] remover API keys
	- [ ] instalar fontes
	- [ ] instalar ollama
- [ ] Documentar!
- [ ] Existem muitos arquivos irrelevantes que eu não quero compartilhar
- [x] #fixed weekly query para o novo formato da property W-XXX ✅ 2024-10-01

==erros obsidian start new pc(CGR):==
- [ ] criação daily não funfa devido scripts
- [ ] acertei umas referencias pois removi o "_" e "emojis" do nome das pastas/arquivos.
- [ ] acertar templates
- [ ] verificar email agendado
- [ ] verificar ansible rhennan para adição zabbix agent hosts;

# #fix-me execute code:
```bash
/home/samuel/.nvm/versions/node/v22.6.0/bin/node
	- em outros PCs precisa acertar o python tbm(meu venv está direto no meu dropbox)
```
- [ ] acertar esse script, está hardcoded: 
```bash
/home/samuel/Dropbox/Aplicativos/remotely-save/JarVin/09 - Plugins/Scripts/dailyVerse.js
		const pitao = "/home/samuel/Dropbox/Notepad/My-Vault/.obsidian/scripts/venv/bin/python3";
		const script = "/home/samuel/Dropbox/Notepad/My-Vault/.obsidian/scripts/dailyVerse.py";
```

## 👷 Trabalho Proposto


- [x] Consertar templates: 
	- [x] `🧑‍💻 Trabalho1/2`
	- [x] `🏡 Pessoal`
	- [x] [[arvore]]
- [ ] Montly?? pagamentos, contas,compras
- [x] Acertar o `Person` para fazer sentido usar ✅ 2024-10-01
- [x] Add Pessoas e Aniversários
- [x] Testar `inserção` de todos `Templates`
- [x] ULTIMO: `Habitos` ✅ 2024-10-01
- [x] Acertar pasta `Work` e vale mudar para `Trabalho`?
- [x] Acertar pasta `Person` e vale mudar para `Pessoa`?
- [ ] Acertar o HOME.CANVAS
- [ ] Documentar modelos relevantes e outros arquivos relevantes
- [ ] Remover arquivos irrelevantes
- [ ] Carregar o vault com modelos no GitHub
- [ ] Divulgar a notícia

## #todo 
- [ ] IA Local: lê arquivos
- [ ] entende o contexto e resume respondendo de acordo
- [ ] Whatsapp ultimo

## ✅ Critério de sucesso  

- Modelos disponíveis para que qualquer pessoa possa baixá-los e usá-los
- Fazer alguém feliz com isso


## 📈 Resultados

...

## 📓 Log

- [x] tarefas
- [x] traduzção
- [x] filtros
- [x] scripts