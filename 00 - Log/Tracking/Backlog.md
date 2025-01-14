---
tags:
  - colecao
---
# 📖 Backlog
---
URI: `obsidian://open?vault=My-Vault-script&file=00%20-%20Log%2F_Tracking%2F%F0%9F%93%96%20Backlog`

---
## 👥 Ações abertas de Reuniões
```dataview
task
from #reunião | #treinamento | #workshop
where !completed 
and contains(string(section), "Ações")
group by join(split(split(path, "\.")[1], "/"), " / ")
```
> [!Busca por:]
> - com tag: `#reunião | #treinamento | #workshop`
> - na seção: `Ações`

---
## ⏱ ToDos de Curto Prazo

```dataview
TASK
FROM #tarefas
WHERE !completed and (contains(string(section), "Curto prazo") or contains(status, "ongoing"))
GROUP BY join(split(path, "/")[1], " / ")
```


> [!Busca por:]
> - com stat: `#ongoing`
> - na seção: `Curto Prazo`

---

## ✨ ToDos Em Andamento

```dataview
LIST
WHERE contains(status, "ongoing")
```
--- 

# 🧩 Projetos
### 📚 ToDos a Fazer
```dataview
list
WHERE contains(status, "todo")
```

### ✍ ToDos Fazendo
```dataview
LIST
WHERE contains(status, "doing")
```
---
## 🚀 Objetivos 

[[_Obsidian]]
FIX: ⏰ 2024-10-10
```dataviewjs

for (let path_ of dv.pagePaths("#Objetivos").sort()) {
	let result = await dv.tryQuery("" +
	"task " +
	'where (path = "' + path_ + '") ' +
	"and ( " +
		'(!completed and !contains(text, "🏁2") and !contains(text, "🎯2")) ' +
		'or (completed and (contains(text, "🏁<") or contains(text, "🎯<"))) ' +
	") " +
	"sort section ASC " +
	"limit 1 "
	)
	dv.taskList(result.values)
}
```


