## GITHUB

***GERAL***<br>
git status<br>
git remote -v (conferir)<br>
git config<br>
git log: mostra todos commits e infos<br>
git show SHA1 (inspeciona o commit)<br>
git show (inspeciona o último commit)<br>
fork é fazer uma coópia para seu GitHub<br>

---
***INICIALIZAR REPOSITÓRIO LOCAL***<br>
git init<br>
git add nome do aquivo || git add . (todos os arquivos)<br>
git reset: reverte o git add<br>
git commit -m "nome commit"<br>
git commit -am "nome commit" (atalho para adicionar e commitar juntos)<br>
git branch -M "novo nome da branch"<br>


**Sempre mude a branch de MASTER para MAIN para não dar erro com o repositório remoto**

---
***BRANCH FEATURE (CAMINHO ALTERNATIVO)***<br>
git branch feature/nome-da-branch (criar)<br>
git checkout feature/nome-da-branch (vai para ela)<br>
git checkout -b nome-nova-branch (criar e já migra para nova branch)<br>
git checkout master (volta para a principal)<br>
git merge feature/nome-da-branch (une a feature a master)<br>
git branch (mostra todas a branchs criadas)<br>
git branch -D feature/nome-da-branch (deleta branch)<br>

---
***ENVIAR PARA O GITHUB***<br>
**criar repositório vazio no seu GitHub** <br>
**URL= do repositório que criou**<br>

git remote add origin URL<br>
git push -u origin nomeDaBranch<br>

---
***ATUALIZAR REPOSITORIO LOCAL***<br>
*Caso mude algum no repositório do GitHUb precisa atualizar o locals*<br>

git pull <br>

---
***PEGAR REPOSITÓRIO DO GITHUB***<br>
git clone URL

---
***VOLTAR PARA UM COMMIT***<br>
git checkout SHA1 <br>
git status <br>
faça outro commit e push <br>

---
***GIT IGNORE***<br>
.gitignore (escreve nome de arquivos e pastas que devem ser ignorados)<br>

---
