---
date: 2024-09-12T11:41
tags:
  - treino
cssclasses:
  - daily
links:
  - "[[Marcos]]"
  - "[[🏋️ Treino fisico|🏋️ Esporte]]"
  - "[[📈 Hábitos]]"
status:
  - ongoing
tipo: calistenia
---
# 🏋️ Calistenia
---
🤜 1 mão
💪 biceps
🦵 perna
🧎 agachamento
🦶 panturrilha
🫁 peito
🫀 cardio
🙅 flexão triangulo
🙆‍♂️ barra
🙋 barra 1 mão
🙇‍♂️ flexão
🤷 ?
💆 aquecimento
🚶andar
🏃‍♂️correr
🤸 bananeira
🕺capoeira
🤼 luta
🧘‍♂️ meditação

# **🏁** Ao final:
- informar tempo de treino
- qual exercício e repetições acompanhar Evolução(setar metas?)
- tipo de treino feito(peito/biceps)(triceps/costas) para acompanhar, saber próx
- criar query específica nesse arquivo e outra no habbits só com quantidade de treinos.

add properties
- todas tarefas aqui
- iniciar smartband timer
- aquecimento
- treino proposto

- **link** > arquivo com o ciclo de treino **peito**
	- que por sua vez, pegou numa outra lista que tem todos treinos **peito**
- **link** > arquivo com o ciclo de treino **biceps**
	- que por sua vez, pegou numa outra lista que tem todos treinos **biceps**
## 🏋️ Ações abertas de Reuniões

```dataview
task
from #treino
where !completed 
and (contains(string(section), "Agenda") or contains(tipo, "calistenia"))
and (file.day < date(today))
and !contains(string(text), "🌈") 
and !contains(string(text), "🏁")
and !contains(string(text), "📈")
and !contains(string(text), "📉")
group by split(split(string(section), ">")[1], "]")[0]
```

```dataview
task
from #treino 
where !completed 
and (file.day < date(today))
and !contains(string(text), "🌈") 
and !contains(string(text), "🏁")
and !contains(string(text), "📈")
and !contains(string(text), "📉")
group by split(split(string(section), ">")[1], "]")[0]
```


> [!Busca por:]
> - com tag: `#biceps | #treino`
> - tipo: calistenia
> - na seção: `Agenda`
### opção 1: ao criar a nota(pode ser automatico vai perguntar qual foi o último exercício e gerar a query de acordo.
- melhoria: posso tentar automaticamente pegar o valor do exercício anterior de algum lugar;
- com isso, basicamente só tem que marcar/desmarcar a variação pra cada ciclo.

pensar numa forma de criar automaticamente
sendo que vai ter que identificar qual treino feito ontem, e caso eu perca 1 dia eu não pule o exercício.
- no template vai ter que ter essa query, que filtra o tipo exercício+variação 