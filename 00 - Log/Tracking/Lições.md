---
tags:
  - colecao
---
# 🌈 Lições

---
```dataview
task
where contains(string(text), "🌈")
group by split(split(string(section), ">")[1], "]")[0]
sort file.path
```
> [!Busca por:]
> - Tasks com "🌈"


