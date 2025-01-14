---
date: 2024-09-10T00:14
tags:
  - Marco
cssclasses:
  - page-blueprint
links:
  - "[[_Longo prazo|📆 longo prazo]]"
  - "[[Marcos]]"
---
# Marco1

---

## 📈 Progresso

```dataviewjs
let s1 = "🎯"
let s2 = "🏁"
let s3 = "🎉"
let s4 = "timelines"

let not_completed = dv.current().file.tasks.where(
	t => !t.completed && !t.text.contains(s1) && !t.text.contains(s2) && !t.text.contains(s3) && !t.text.contains(s4)
).length
let completed = dv.current().file.tasks.where(
	t => t.completed && !t.text.contains(s1) && !t.text.contains(s2) && !t.text.contains(s3) && !t.text.contains(s4)
).length

dv.header(1, Math.round(completed / (completed + not_completed) * 100) + " %");
```


## 👉 Próxima ação

```dataview
task
from #marco
where file.name = this.file.name
and ( 
	(!completed and !contains(text, "🏁2") and !contains(text, "🎯2")) 
	or (completed and (contains(text, "🏁<") or contains(text, "🎯<")))
)
sort section ASC
limit 1
```


## 🎬 Ponto de partida




## 🎯 Alvo

*Marco claro, conciso e mensurável para alcançar ao completar esse Marco*
- [ ] Alvo 🎯2024-09-10


## 🔁 Feedback

*Feedback de colegas, amigos, família ou feedback de dados*




## ✅ Tarefas e marcos

- [x] Defina cronogramas ⏳2024-09-11 🗓2024-09-11 [completion:: 2024-09-10]
- [x] Tarefa 1 [completion:: 2024-09-10]
- [ ] Marco 1 🏁 2024-09-16

- [x] Refine cronogramas ⏳2024-09-10 🗓2024-09-10 [completion:: 2024-09-10]
- [x] Tarefa 2 [completion:: 2024-09-10]
- [ ] Marco 2 🏁 2024-09-10
- [ ] #task Keep this task when done
- [ ] #task Keep this task when done too 🏁 keep
- [ ] #task Remove this task when done 🏁 delete
- [ ] #task Remove completed instance of this recurring task when done 🔁 every day 🏁 delete



## 🗓 Planejador

*Tarefas de Marcos marcadas para o mês vindouro*
```dataview
task
from #marco
where due >= date(today) and due < date(today) + dur(1 month)
and !completed
group by file.name
```


## ⬇️ Símbolos

```Due
🗓
```
```Scheduled
⏳
```
```Milestone
🏁< *TODO: insira data* >
```
```Target
🎯< *TODO: insira data* >
```


## 🥳 Feito

- [x] Você alcançou seu Marco! 🎉 [completion:: 2024-09-10]