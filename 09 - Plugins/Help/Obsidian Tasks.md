---
cssclasses:
  - pen-green
---
# Tasks
### Fonte: [Documentation](https://publish.obsidian.md/tasks/Reference/Task+Formats/Tasks+Emoji+Format)

## [Uso com reminder](https://publish.obsidian.md/tasks/Advanced/Notifications)

---
### Descrição: 


#### Requisitos:

1. Opt: [[Obsidian Reminder]]
### Requisito para o plugin: 
%% (plugins que necessitam deste) %%

1. 

#### Como Usar:


###### [create Reminder/Task](https://obsidian.rocks/creating-a-today-view-in-obsidian/) + [query](https://publish.obsidian.md/tasks/Queries/Grouping)
1. Criar a Task com atalho: Ctrl+Shift+3
2. Adicionar Reminder com atalho: Ctrl+Shift+2
3. Usar query no formato ==`Tasks`==!
%% `- [ ] Jeito Certo ⏰ 2024-10-06 11:09 🔁 every month ⏳ 2024-11-07 📅 2024-11-06` %%

> tasks
> not done
> filter by function task.file.filename.includes("Entradas e Saídas Mensais")
> group by function task.heading
> short mode


---
Geral: 

ps: coloquei "\" para não adicioná-las ao meus lembretes!
##### Formato de Emoji para Datas
```json
\- [ ] #task Tem uma data de criação ➕ 2023-04-13
\- [ ] #task Tem data agendada ⏳ 2023-04-14
\- [ ] #task Tem uma data de início 🛫 2023-04-15
\- [ ] #task Tem data prevista 📅 2024-04-16
\- [x] #task Tem data ✅ 2023-04-17
\- [-] #task Tem data cancelada ❌ 2023-04-18
```

##### Formato de Emoji para Prioridades
 
```json
\- [ ] #task Menor prioridade ⏬
\- [ ] #task Baixa prioridade 🔽
\- [ ] #task Prioridade normal
\- [ ] #task Média prioridade  🔼
\- [ ] #task Alta prioridade ⏫
\- [ ] #task Maior prioridade 🔺
```


##### Formato de Emoji paracorrência
```json
\- [ ] #task É uma tarefa recorrente 🔁 todos os dias quando feito
```

 
##### Formato de Emoji para `Ao_Concluir`
```json
\- [ ] #task Mantenha esta tarefa quando feito
\- [ ] #task Mantenha esta tarefa quando feito também 🏁 keep
\- [ ] #task Remover esta tarefa quando feito 🏁 delete
\- [ ] #task Remover instância desta tarefa recorrente quando feita 🔁 every day 🏁 delete
```
# Tarefas recorrentes

O plugin de tarefas oferece suporte a tarefas recorrentes.

%% - [ ] Compra mensal 🔁 every month 📅 2024-10-01 %%
%% - [x] Compra mensal 🔁 every month 📅 2024-09-01 ✅ 2024-09-19 %%

```
Next Sunday/Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/day/weekmonth/year/Tomorrow
```

#### Configuração:

