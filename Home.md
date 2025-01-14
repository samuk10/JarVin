---
cssclasses:
  - dashboard
banner_y: 0.688
---
<div class="title" style="color:Sienna">HOME</div>

# Trabalho
- ⏫ Doing `$= dv.list(dv.pages('#projeto and #trabalho1').where(f =>f.status == "doing").sort(f => f.file.name, "desc").limit(4).file.link)`
- 🔼 Todo `$= dv.list(dv.pages('#projeto and #trabalho1').where(f =>f.status == "todo").sort(f => f.file.name, "desc").limit(4).file.link)`
- 🔼 Ongoing `$= dv.list(dv.pages('#projeto and #trabalho1').where(f =>f.status == "ongoing").sort(f => f.file.name, "desc").limit(4).file.link)`
- ✅ Done `$= dv.list(dv.pages('#projeto and #trabalho1').where(f =>f.status == "done").sort(f => f.file.name, "desc").limit(4).file.link)`
- 💰 Budget review
	- [[Q1 2022]]
	- [[Q2 2022]]
	- [[Q3 2022]]
	- [[Q4 2022]]
- 👥 Personnel Review
	- [[People1]]
	- [[People2]]
	- [[People3]]
	- [[People4]]

 # Projetos Pessoais
 - 🥁 Escala Louvor `$= dv.list(dv.pages('#hino and #escala').where(f =>f.status == "todo").sort(f => f.file.name, "desc").limit(4).file.link)` 
- 🏡 Remodeling Projects
	- [[Bathroom Remodel]]
	- [[Paint entryway]]
	- [[Research building Garage]] 
 - ✍️ Writing Projects
	- [[5 ways to love PKM more]]
	- Read: [Obisidian core principles](https://tfthacker.medium.com/obsidian-understanding-its-core-design-principles-7f3fafbd6e36)
- 📚 Learning
	- [[Early American History]]
	- [[Spanish - Entry Level]]

# Família
- 🏈 Sunday Game
	- [[Spicy-Sweet Buffalo Popcorn]]
	- [[Guest list]]
	- [Jalapeno Popper Wantons](https://www.allrecipes.com/recipe/166991/jalapeno-popper-wontons/)
- 👨‍👩‍👦 Objectives
	- [[Family Recipes]]
	- [[Family Calendar]]
	- [[Education Plan]]
	- [[Yearly Budget]]
- 🌅 Exotic Vacations 
	- [[Peru]]
	- [[Austria]]
	- [[Texas]]  
- 🎥 Movies to Watch
	- [Sleepless in Seattle](https://www.imdb.com/title/tt0108160/)
	- [Joe vs the Volcano](https://www.imdb.com/title/tt0099892/)

# Vault Info
- 🗄️ Recent file updates
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
- 🔖 Tagged:  projeto 
 `$=dv.list(dv.pages('#projeto').sort(f=>f.file.name,"desc").limit(4).file.link)`
- 〽️ Stats
	-  File Count: `$=dv.pages().length`
	-  Personal recipes: `$=dv.pages('"Family/Recipes"').length`
	-  Templates: `$=dv.pages('"99 - Meta/00 - Templates"').length`
	- [[Obsidian Dicas e Teclas de Atalhos]]