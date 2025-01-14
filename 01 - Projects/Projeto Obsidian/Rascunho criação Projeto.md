---
date: 2024-09-06T09:58
tags:
  - obsidian
  - projeto
cssclasses: 
status:
  - doing
---
free tier groq, sambanova

### datas
"Due to" e "schedule date" são conceitos diferentes em contextos de gestão de tempo e planejamento.

- **Due to**: Geralmente usado para indicar a data limite ou prazo final para algo ser concluído, seja um projeto, uma tarefa ou uma entrega. Por exemplo: "O projeto deve ser entregue até 15 de março" é um exemplo de "due to".

- **Schedule date** (ou simplesmente "date"): Refere-se a qualquer data específica marcada no calendário para realizar uma atividade, evento ou a própria entrega. Pode ser o início, meio ou fim de algo. Por exemplo: "O projeto começa em 1º de março" é um exemplo de schedule date.

Portanto, se você tem que entregar algo até uma data específica (due to), e essa data está marcada no seu calendário como uma atividade programada (schedule date), ambas as expressões estão relacionadas mas têm focos diferentes.

---
O plugin de `tasks` oferece suporte a tarefas recorrentes.
%% 
	\- [ ] Compra mensal 🔁 every week on Saturday 📅 2024-09-21
	\- [x] Compra mensal 🔁 every week on Saturday 📅 2024-09-14 ✅ 2024-09-14
%%

```
Next Sunday/Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/day/weekmonth/year/Tomorrow
```
## [reminder](https://uphy.github.io/obsidian-reminder/setting/#use-system-notification)

O plugin de `reminder` também oferece suporte a esse recurso.

Ao alternar o status da lista de verificação, a próxima tarefa recorrente será criada.

---

**zeltekstein**
**PKM**: Personal Knowledge Management(Gestão de Conhecimento Pessoal)

---
### opção 1:
[Tags vs Links](https://www.youtube.com/watch?v=zIh1S7ra3aI)
tags: pega tudo, geral em si, mas não filtra
link: é mais específico, assunto:
	- se eu colocar [[aprendizado]] em uma nota ela fica vermelho, caso não existe
	- mas se eu começar a várias notas, significa um assunto de interesse e posso promover e usá-la como um ponto de referência/contexto de várias notas que talvez você já tinha esquecido, ou ligando notas à um contexto que você não percebeu, pode talvez promove-la para uma área por ex
	- então basicamente vejo(pelo graph view, ex.) que tenho muitas notas tem esse link e posso promover

---

se eu usar igual o dele, tags=status e links=tags
PROS: 
- parece mais organizado.
- mais links, facilitando filtros específicos(pois pode chegar um momento em que vou ter tantas notas que as pastas não serão suficientes para filtra???)
- sem se preocupar em classificar, escolher pasta, gerenciar
- você pode gerenciar com o tempo, envés de de início planejar como será daqui a x tempos, ele fica modular e também organizado
CONS: 
- refazer querys, templates, notas...
- fazendo vários links não vai quebrar o PARA em favor do zeltekstein? pois vou ter muitos links gerando mais notas.
OUTROS:
- já existe o status=todo, ele vai virar uma tag?

---
### opção 2:
Manter as tags: padroẽs e meu filtro ser um novo campo: 
	==**Sobre**: [[assunto/tag]]==
e a tag continua as mesmas ou até mesmo ==sem tag==:
	==**tags**: Projetos/Areas/Recursos/Arquivo==



![[Pasted image 20240911114832.png]]


---

#### Flow Criação de PROJETOS:
	VER: [[_Projeto3]]
	Criar Pasta?
		- se tiver pasta eu poderia cria-la
		- poderia ter vários arquivos
		- com o **MAIN** no nome que seria o modelo
		- o resto ficaria as info e arquivos apontando pro **main-file**
	Mover de pasta?
	Usar doing
	
	Criar um TLDR com um Startup Point:
	#### Startup:
	- Abra o calendário e veja seu diário, suas notas do dia anterior migra pro dia atual;
	#### Criar um PROJETO:
	- Basta criar uma pasta na pasta em `01 - Projects`, se for com menos prioridade crie em `02 - Area` e quando for realmente realizar o projeto mova para a pasta correta: `01 - Projects`.
	- Dentro da pasta criada com o nome do seu projeto, por exemplo: `Projeto01`, crie uma nota com o nome: `_Projeto01` 
	- Insira o modelo com o **Templater**: `34. 🧩 Project`
	- Edite conforme preferir
	
	Todas "Tasks" criadas dentro desta nota irão aparecer na sua nota do dia, até que você finalize a task ou remova a tag `todo`
	As notas que contém tag `todo` vão aparecer em [[📖 Backlog]]