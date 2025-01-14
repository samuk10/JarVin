---
tags:
  - tarefas
status:
  - ongoing
---
# 🎵 Música
---

- [ ] Praticar alguns rudimentos

- [x] I know I can threat you better
- [x] I am - Axwell & Ingrosso
- [x] Dancing in my Head - Avicii


---

# 🥁 Escala Louvor
```dataview
TASK 
FROM #hino
where !completed 
group by split(split(string(section), ">")[1], "]")[0]
sort file.path
```

---

