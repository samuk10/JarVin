CHEATSHEET. 
https://www.linuxtips.io/pages/cheatsheet


# DOCKER

### BASIC COMMANDS
```bash
docker version 			-	verifica a versão do docker
docker container run	-	executa um container
docker container ls 	-	lista os container em execução
docker container inspect-	traz detalhes de determinada imagem
docker container ls -a 	-	lista todos os containers, inclusive os parados
docker container stop 	-	para um container
docker container start 	-	inicia um container
docker container restart-	restart um container
docker container rm 	-	remove um container 
docker container rm -f	-	remove um container em execução
docker container top 	-	traz os processos em execução
docker container stats 	-	traz informaçõessobre o consumo de recursos como CPU e memória
docker container exec 	-	executa algo no container
docker container attach -	conecta no container
docker image ls 		-	lista as imagens presente no host
docker image rm 		-	remove um container parado
docker exec -it <container name> /bin/bash  -  to get a bash shell in the container
docker exec -it <container name> <command>  -  to execute whatever command you specify in the container.
docker-compose run <container name> /bin/bash  - 


docker exec -it zabbix-docker_zabbix-server_1 zabbix_server -R config_cache_reload 
docker exec -it zabbix-docker_zabbix-server_1 zabbix_server -R snmp_cache_reload
docker exec -it zabbix-conect_zabbix-server_1 zabbix_get -s 10.100.0.62 -k docker.info-get
```


### SWARM
```bash
docker swarm init 		-	inicia um cluster swarm
docker swarm join		-	comando para adicionar novos nodes no cluster
docker swarm join-token manager 	-	lista os token para adicionar novos managers ao cluster
docker swarm join-token worker		-	lsita o token para adicionar novos workers ao cluster
docker swarm leave		-	para que o node saia do cluster
docker swarm leave --force 	-	para que um node manager saia do cluster
docker node ls 			-	lista os nodes do cluster
docker node inspect 	-	traz detalhes sobre o node
docker node promote 	-	promove um node para manager
docker node denote		-	muda um node de manager para worker
docker node rm 			- 	remove um node
```

### SERVICES
```bash
docker service create	-	cria um service
docker service ls 		-	lista os services
docker service inspect 	-	traz os detalhes sobre o service
docker service scale 	-	aumenta/diminui a quantidade de réplicas de um service
docker service ps 		-	lista os pods de um service
docker service logs 	-	traz os logs de um service
docker service rm 		-	remove um service
```

### STACK
```bash
docker stack deploy 	-	realiza o deplay de uma stack
docker stack ls 		-	lista as stacks
docker stack services 	-	lista os servicos de uma stacks
docker stack rm 		-	remove uma stack
docker stack inspect 	-	traz detalhes sobre uma stack

```


# LINUX

### MANIPULAÇÃO DE ARQUIVOS
```bash
	. [pwd, cd, Is, mkdir, rmdir, cp, mv, rm, cat]

pwd 									- Mostra em qual diretorio você está
cd [caminho_ou_nome_diretorio] 			- Vai para o diretório desejado
cd ... 									- Vai para o diretório anterior
cd - 									- Vai para o diretório home do usuario
cd / 									- Vai para o diretório raiz
cd - 									- Volta para o último diretório que o usuario estava
ls [arquivo_ou_diretóriol 				- Lista o arquivo ou diretório desejado
ls -l 									- Lista os aquivos em formato detalhado
ls -a 									- Lista os arquivos ocultos
ls -h 									- Exibe o tamanho dos arquivos legiveis para humanos
ls *.yaml 								- Lista todos os arquivos do formato desejado
touch [nome_arquivol 					- Cria ou atualiza um arquivo
more [nome_arquivo] 					- Mostra o conteúdo de um arquivo
mkdir [nome_do_diretorio_desejado] 		- Cria um diretório com o nome desejado
rmdir [nome_diretório] 					- Delete APENAS diretório vazio
mkdir ~/[nome_do_diretorio desejado] 	- Irá criar o diretório desejado na home
cp -i [arquivo_origem] [arquivo_destino] - Pergunta antes de copiar cada arquivo
cp -R [diretorio_origem] [diretorio_destino] - Copia o diretório recursivamente
mv [arquivo] [diretório_destino] 		- Move um arquivo.
mv [arquivo_antigo] [arquivo_novo] 		- Renomeia um arquivo.
rm -r [nome_diretório] 					- Deleta um diretório recursivamente.
rm -i [arquivos] 						- Pergunta sim ou não antes de apagar cada arquivo.
cat (arquivo_ou_caminho_arquivo] 		- Mostra o conteúdo do arquivo.
cat [arquivo] > [arquivo2] 				- Faz uma cópia do arquivo.
cat [arquivo] » [arquivo2] 				- Acrescenta um arquivo do outro.
-

```
### PROCESSOS DO SISTEMA
```bash
	. [ps, pidof, top, kill, killall]

ps aux 					   - Lista todos processos e informações sobre
ps-X 					   - Lista todos processos criado pelo executor do comando
ps aux | grep "Inome_processo]" 	- Lista todos processos desejados
ps-U root-u root 		   - Lista todos processos rodando com privilégios root
pidof [processo] 		   - Lista os PIDs do processo desejado
pidof -s [processo] 	   - Força listar apenas um PID do processo
top 					   - Mostra todos os processos rodando em tempo real
kill [pid_processo] 	   - Envia um sinal para o processo terminar
kill -1 [pid_processo)     - Reinicia um processo
kill -9 [pid_processo]     - Força um processo a terminar
kill -L 				   - Lista todos sinais em uma tabela
killall [nome_processol    - Mata todos processos com o nome passado
killall -9 [nome_processol - Força todos processos com o nome passado terminarem
killall -i [nome_processol - Pergunta antes de matar cada processo
killall -u [nome_usuario]  - Mata todos processos do usuario desejado
killall -w [nome_processol - Espera os processos realmente terminarem


```

# GIT

### GIT CONFIGURATION
```bash
git config --global user.name "[username]"  - Configura seu username do Git
git config --global user.email "[email]" 	- Configura seu email do Git
git config --global color.ui auto 			- Configura cores que apareceram no terminal
git config --global alias.[alias_nome] [comando_git] 	- Configura um alias para comandos Git
git config --system core.editor [editor_de_texto] 		- Configura o editor de texto desejado
git config --global-edit					- Abre o arquivo de configuração do Git
```

### BRANCH MANAGING
```bash
git branch 				    	- Lista todas as branchs locais do repositorio
git branch -aa 			    	- Lista todas as branchs remotas do repositorio
git branch [nome_branch]   		- Cria uma nova branch
git checkout [nome_branch]  	- Muda para a branch desejada, caso não exista o Git irá criar
git branch -d [nome_branch] 	- Deleta a branch desejada
git branch -m [nome_novo] 		- Muda o nome da branch atual
git merge [branch] 				- Faz o merge da branch atual para a branch desejada

```
### GIT REPO SETUP
```bash
git init [diretório] 			 - Cria um novo repositório Git apartir de um diretório existente
git clone [URL/repo] 			 - Clona um repositório
git clone [URL/repo] [diretório] - Clona um repositório dentro de um diretório especifico na máquina
git pull origin main 			 - Atualiza o repositório local com os dados do repositório remoto
git add . 						 - Adiciona todas as novas mudanças do diretório atual
git add [arquivo] 	 			 - Adiciona o arquivo desejado
git commit -m "[mensagem]" -a 	 - Commita todas as novas mudanças
git commit --amend 				 - Adiciona novas mudanças ao commit anterior
git push origin main 			 - Atualiza o repositório remoto com os dados do repositório local
git reset [commit] 				 - Desfaz todos os commits apartir do commit especificado
git reset --hard [commit] 		 - Discarta todo histórico e mudanças para o commit especificado

```
### ao modificar um arquivo:
```bash
git add * ou <nome do arquivo>
git status
git commit -m "comentario"
git push origin main - atualizad dados do repo remoto

### FILE MANAGING
git status 						 - Mostra o status do diretório atual
git log 						 - Lista os logs da branch em que você está
git log--all 					 - Lista os logs de todas as branchs
git log [branch1]..[branch2] 	 - Compara logs das branchs desejadas
git diff 						 - Mostra todas mudanças que não foram commitadas

git diff [committ] [commit2] 	- Mostra a diferença entre dois commits
git diff [branch1] [branch2] 	- Mostra a diferença entre duas branchs
git diff [arquivo1] [arquivo2]  - Mostra a diferença entre dois arquivos
git show [objeto] 				- Mostra o conteúdo do objeto desejado

```




# KUBEADM

```bash
kubeadm config images pull 					- Efetua o download das imagens dos componentes do kubernetes
kubeadm init 								- Efetua a inicialização do cluster, executar no node main
kubeadm token create --print-join-command   - Lista o token para a adição de novos nodes
kubeadm join --token [token] 				- Executar em outro node para ingressar no cluster como worker
```

### KUBECTL GET
```bash
kubectl get nodes 							- Lista todos os nodes no cluster
kubectl get namespaces 						- Lista todos os namespaces disponíveis cluster
kubectl get pod -n [nome_namespace] 		- Lista todos os pods no namespace desejado
kubectl get pods--all-namespaces -o wide 	- Lista os pods de todos os namespaces com maiores informações
kubectl get services 						- Lista todos services no namespace
kubectl get events 							- Lista os eventos do cluster
kubectl get all 							- Lista todos os recursos recém criados
kubectl get endpoints 						- Lista todos os EndPoints
kubectl get deployments.apps 				- Lista os Deployments
kubecti get replicaset 						- Lista os ReplicaSet
kubectl get daemonset 						- Lista os DaemonSet
kubectl get pv 								- Lista todos os PersistentVolume
kubectl get pvc 							- Lista todos os PersistentVolumeClaim
kubectl get cronjobs 						- Lista todos os cronjobs
```


### KUBECTL DESCRIBE
```bash
kubectl describe node [nome_node] 				- Lista os dados e status do node desejado
kubectl describe service [nome_service] 		- Lista os detalhes do service desejado
kubectl describe pod [nome_pod]			 		- Lista os dados e status do pod desejado
kubectl describe endpoints [nome_endpoint] 		- Lista os dados do EndPoint desejado
kubecti describe replicaset [nome_replicaset] 	- Lista os dados do ReplicaSet desejado
```

### KUBECTL CREATE
```bash
kubectl create -f [nome_arquivo.yaml]		 								- Cria algo a partir de um arquivo yaml
kubectl create deploy [nome_deploy] --image=[imagem_deploy] 				- Cria um deployment
kubectl create configmap [nome_config] --from-file=[caminho_arquivo] 		- Cria um novo configmap a partir de um arquivo
kubecti create cronjob [nome_cron] --image=[imagem] --schedule="[schedule]" - Cria um cronjob
kubectl create service [tipo_svc] [nome_svc] --tcp-[portal 					- Cria um service
```



# ANSIBLE

### BASIC COMMANDS
```bash
ansible [all_servers] -m ping 			- Verifica se todos os servidores estão funcionando
ansible [all_servers] -a hostname 		- Printa todos os hostnames dos servidores
ansible [all_servers] -a uptime 		- Confere a quanto tempo os servers estão em pé
ansible [server] -a free 				- Verifica o espaço em disco do servidor
ansible [all_servers] -f 1-a "free" 	- Roda um comando um servidor por vez
```

### MANAGE PACKAGES
```bash
ansible [server] -m apt -a "name-giropops state-present" 		- Instala o pacote desejado no servidor
ansible [server] -m apt -a "name-giropops-1.2 state-present" 	- Instala o pacote com a versão desejada
ansible [server] -m apt -a "name-giropops state-latest" 		- Instala a última versão do pacote desejado
ansible [server] -m apt -a "name-giropops state-absent" 		- Desinstala o pacote desejado no servidor
```

### FILE TRANSFER
```bash
ansible [server] -m copy -a "src=/etc/hosts dest=/tmp/hosts" 	- Copia o arquivo para outro servidor desejado
ansible [server] -m file -a "dest-/srv/foo/a.txt mode=600" 		- Para mudar as permissões de um arquivo no servidor remoto
ansible [server] -m file -a "dest=/srv/foo/b.txt mode=600 owner-example group-example" 				- Para mudar as permissões e o dono/grupo de um arquivo no servidor remoto
ansible [server] -m file -a "dest-/path/to/c mode-755 owner-example group-example state-directory"  - Cria um diretório no servidor remoto
ansible [server] -m file -a "dest=/path/to/c state=absent" 		- Para desinstalar um pacote no servidor remoto
```

### MANAGE SERVICES
```bash
ansible [server] -m service -a "name=httpd state-started" 		- Inicia o service desejado.
ansible [server] -m service -a "name=httpd state-restarted" 	- Restarta o service desejado.
ansible [server] -m service -a "name=httpd state-stopped" 		- Pausa o service desejado.
```

### CREATE USER AND GROUP
```bash
ansible [server] -s-m group -a "name=admin state-present" 				 	- Cria um grupo no servidor remoto
ansible [server] -s-m user -a "name=giropops group-admin createhome=yes" 	- Cria um usuário do grupo no servidor remoto
ansible [server] -m user -a "name=giropops password-strigus" 				- Cria um usuário com senha no servidor remoto
ansible [server] -a "id giropops" 											- Confirma a criação no servidor
ansible [server] -s-m user -a "name-giropops state-absent" 					- Deleta um usuário no servidor remoto
```



cgroups - respnsavel pela limitação de recursos do host pelos containers
Netfilter - A já conhecida ferramenta iptables faz parte de um módulo chamado netfilter. Para que os containers consigam se comunicar, o Docker constrói diversas regras de roteamento através do iptables; 
$ iptables -t nat -L

### ver imagens no host
$ docker image ls

### parar container e remover imagem
$ docker rm -f

### ver container em execução, parados e/ou finalizados
$ docker container ls -a

    -t -- Disponibiliza um TTY (console) para o nosso container.

    -i -- Mantém o STDIN aberto mesmo que você não esteja conectado no container.

    -d -- Faz com que o container rode como um daemon, ou seja, sem a interatividade que os outros dois parâmetros nos fornecem.

    -ti -- usar modo interativo (quando tiver montando imagem personalizada)

### baixa e roda img centos 5
$ docker container run -ti centos:7

### testa e prova que estmaos dentro do container centos7
$ cat /etc/redhat-release

### Sair do modo interativo, sairá do container e ele continuará em execução
mantenha o botão Ctrl pressionado + p + q


### acessar o container (entrar nele)
$ docker container attach <CONTAINER ID>


### criar container e não executar
$ docker container create -ti ubuntu

### startar executar o container criado
$ docker container start [CONTAINER ID]

parar container e restartar pausar
### docker container stop [CONTAINER ID]
### docker container restart [CONTAINER ID]
### docker container pause [CONTAINER ID]

vizualizar consumo do container
### docker container stats [CONTAINER ID]

visualizar UID e o PID do processo
### docker container top [CONTAINER ID]

ver logs
### docker container logs [CONTAINER ID]

logs dinamicos
### docker container logs -f [CONTAINER ID]

inspecionar recursos utilizados por um container
### docker container inspect teste | grep -i mem


### Limitando a MEMORIA
a opção -m é para limitar o uso de memória e quando chegar a esse ponto teoricamente ele fecha os processos dentro desse container. Então ativando a opção swap ele usaria o swap assim que atingisse o limite de memória

	usshd@cloudop0035:~$ docker container run -ti -m 512M --name novo_container debian
	WARNING: Your kernel does not support swap limit capabilities or the cgroup is not mounted. Memory limited without swap.
	
### verificando o uso de memoria	
	# docker container inspect novo_container | grep -i mem

Podemos ver no campo "Memory" o valor utilizado na criação do container. Vale re
ssaltar que o valor exibido é em bytes.


### Limitando a CPU: esse container poderá utilizar no máximo 0,5 CPU, ou seja, metade de 1 core.
	# docker container run -d --cpus=0.5 --name teste1 nginx
### Verificar o uso de cpu
	# docker container inspect teste1 | grep -i cpu
O campo "NanoCpus" traz a informação que configuramos. :)



### Alterando container em execução!

	$ docker container update -m 256m --cpus=1 teste1

lista completa de comandos
"docker update --help".

			6. Meu primeiro e tosco dockerfile...

### mkdir /root/primeiro_dockerfile
### cd /root/primeiro_dockerfile
### vim Dockerfile

Vamos adicionar as instruções que queremos para essa imagem de container que iremos criar:

	FROM debian

	RUN /bin/echo "HELLO DOCKER"
fecha e salva.

	root@cloudop0035:~/primeiro_dockerfile# docker build -t tosko:1.0 .

Veja que usamos o diretório corrente, representado pelo caractere ".", para indicar o path do meu arquivo dockerfile, mas você não precisa necessariamente estar no mesmo diretório, basta passar o path do diretório onde o arquivo se encontra.

Lembre apenas que é o path do diretório e não do arquivo.

				7. Entendendo volumes

Bom, volumes nada mais são que diretórios externos ao container, que são montados diretamente nele, e dessa forma bypassam seu filesystem, ou seja, não seguem aquele padrão de camadas que falamos. Decepcionei você? Que bom, sinal de que é bem simples e você não vai ter problemas para entender. :)

A principal função do volume é persistir os dados. Diferentemente do filesystem do container, que é volátil e toda informação escrita nele é perdida quando o container morre, quando você escreve em um volume aquele dado continua lá, independentemente do estado do container.

Existem algumas particularidades entre os volumes e containers que valem a pena ser mencionadas:

    O volume é inicializado quando o container é criado.

    Caso ocorra de já haver dados no diretório em que você está montando como volume, ou seja, se o diretório já existe e está "populado" na imagem base, aqueles dados serão copiados para o volume.

    Um volume pode ser reusado e compartilhado entre containers.

    Alterações em um volume são feitas diretamente no volume.

    Alterações em um volume não irão com a imagem quando você fizer uma cópia ou snapshot de um container.

    Volumes continuam a existir mesmo se você deletar o container.



### DOCKER MACHINE
subir docker em ambiente não linux(AWS, windows, MAC)
vc sobe um vmware e nela sobe o docker machine.

### DOCKER SWARM
cluster/balanceador de containers

### DOCKER SECRETS
senha criada em um arquivo de texto que só o container lê

### DOCKER COMPOSE
criar todo ambiente em apenas um arquivo, definindo as caracteristicas de cada service (quantidade de containers debaixo daquele service, volumes, network, secrets, etc.).

### SERVICE
serviço é uma stack de containers: service, volumes, network, secrets, etc.
Com o docker stack é responsável por subir os services atravez do docker compose.

### DOCKER STACK
realizar deploy através de compose file.	

docker stack deploy -c docker-compose.yml primeiro

checar o stack
root@linuxtips-01:~/Composes/1# docker stack ls 					!!! stacks rodando
root@linuxtips-01:~/Composes/1# docker stack services segundo 		!!! detalhes do stack
root@linuxtips-01:~/Composes/1# docker service ls 					!!! lista serviços
root@linuxtips-01:~/Composes/1# docker service ps segundo_db 		!!! 
root@linuxtips-01:~/Composes/1# docker service ps segundo_wordpress !!! 

Para visualizar os logs de determinado service:
root@linuxtips-01:~/Composes/2# docker service logs segundo_wordpress

### VOLUME
Para que você possa montar o volume criado em algum container/service, basta executar o seguinte comando:

### docker container run -d --mount type=volume,source=giropops,destination=/var/opa nginx

Onde:

    --mount -- Comando utilizado para montar volumes.

    type=volume -- Indica que o tipo é "volume". Ainda existe o tipo "bind", onde, em vez de indicar um volume, você indicaria um diretório como source.

    source=giropops -- Qual o volume que pretendo montar.

    destination=/var/opa -- Onde no container montarei esse volume.


### PROFILES
tipo vc só habilita certo serviço on-demand.
profile troubleshoot, ai tu ativa o serviço desse profile em certa ocasião