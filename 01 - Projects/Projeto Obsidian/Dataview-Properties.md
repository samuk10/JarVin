---
date: 2024-09-06T08:42
tags:
  - obsidian
  - projeto
cssclasses: 
status:
  - doing
---
---


Vale a pena usar properties?

Eu acho que muda a query
Já que muda a query, será que muda o flow?

### funfando

#### query muda se for "lista" envés de "texto"
```json
// aqui está pegando arquivo com tag #projeto e propriedade x=y
TABLE WITHOUT ID
	file.link as "Title"
FROM #projeto  
WHERE contains(status,"doing")

```

```json
// aqui está pegando qualquer arquivo com propriedade x=y
LIST
WHERE contains(status, "doing")
```


https://forum.obsidian.md/t/properties-feature-dataview-query-help-please/63882

---

### ✍ Doing
```dataview
list
from #doing
```
```dataview
LIST
from #obsidian
WHERE contains(status, "doing")
```


---


[Exemplo](https://forum.obsidian.md/t/dataview-query-using-property-in-the-current-note/81107)
#### Moc das **Propriedades**
```json
tipo de contato: poc
contact_info: Breve descrição de como eu os conheço
contact_role: Gerente Sênior, Desenvolvimento de Software
contact_lob: Dev Cloud Segurança e Identidade OCI
contact_location: Seattle WA, EUA
contact_timezone: PDT
```

```json
TABLE contact_type, contact_info, contact_role, contact_timezone, date_last_spoken  
WHERE tipo = "person"
WHERE contact_lob = "Dev Cloud Segurança e Identidade OCI"
SORT contact_type ASC, arquivo.nome ASC
```

```json
TABLE contact_type, contact_info, contact_role, contact_timezone, date_last_spoken  
WHERE type = "person"
WHERE contact_lob = this.contact_lob
SORT contact_type ASC, file.name ASC
```
