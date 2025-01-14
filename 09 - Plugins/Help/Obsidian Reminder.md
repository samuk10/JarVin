---
cssclasses:
  - pen-green
  - embed-blueprint
---
# Obsidian Reminder
### Fonte: [Documentation](https://uphy.github.io/obsidian-reminder/guide/)

---
### Descrição: 


#### Requisitos:

1. Opt: [[Obsidian Tasks]]
### Requisito para o plugin: 
%% (plugins que necessitam deste) %%

1. [[]]

#### Como Usar:

Ao inserir "`(@`" na Tarefa, você verá o pop-up do calendário.
![[Pasted image 20241002142446.png]]

> [!INFO]
> Você pode definir lembretes colocando (@YYYY-MM-DD HH:mm) na lista TODO.
> - (CERTO) - [ ] Tarefa 1 (@[[2024-10-02]] 14:38) 📅 2024-11-17
> - (ERRAD) - [ ] Tarefa 2 (@[[2024-10-02]] 14:38) #Tag 📅 2024-11-17

Se colocar no formato do tasks ele buga, não dá pra alterar o horário e fica em loop...

## [create Reminder/Task](https://obsidian.rocks/creating-a-today-view-in-obsidian/) + [query](https://publish.obsidian.md/tasks/Queries/Grouping)
1. Criar a Task com atalho: Ctrl+Shift+3
2. Adicionar Reminder com atalho: Ctrl+Shift+2
3. Usar query no formato ==`Tasks`==!
%% `- [ ] Jeito Certo ⏰ 2024-10-06 11:09 🔁 every month ⏳ 2024-11-07 📅 2024-11-06` %%

> tasks
> not done
> filter by function task.file.filename.includes("Entradas e Saídas Mensais")
> group by function task.heading
> short mode


#### Configuração:

