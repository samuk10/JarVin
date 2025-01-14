---
tags:
  - atas
  - colecao
---
# 🏃 Atas de Reuniões
---
```dataview
task
from #atas
where !completed
and contains(string(section), "Ações")
group by join(split(split(path, "\.")[1], "/"), " / ")
```
> [!Busca por:]
> - com tag: `#atas`
> - não completadas

