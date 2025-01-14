---
tags:
  - colecao
status:
---
# 🏁 Marcos
---

```dataview
task
where contains(string(text), "🏁")
sort file.name DESC
group by split(split(string(section), ">")[1], "]")[0]
```
> [!Busca por:]
> - string: "🏁"
> - não completadas


## 🚀 Objetivos(tem data)

```dataview
task
from #marco
where contains(string(text), "🏁 2")
group by file.name
```
> [!Busca por:]
> - com tag: `#marco`
> - com a string: "🏁 2" ou seja, com Data estipulada(a query do reminder não pega isso, é apenas para trackear aqui)
> - não completadas
