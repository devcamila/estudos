## GITHUB

***GERAL***

git status
git remote -v (conferir)
git config
git log: mostra todos commits e infos
git show SHA1 (inspeciona o commit)
git show (inspeciona o último commit)
fork é fazer uma coópia para seu GitHub

---
***INICIALIZAR REPOSITÓRIO LOCAL***

git init
git add nome do aquivo || git add . (todos os arquivos)
git reset: reverte o git add
git commit -m "nome commit"
git commit -am "nome commit" (atalho para adicionar e commitar juntos)
git branch -M "novo nome da branch"

---
***BRANCH FEATURE (CAMINHO ALTERNATIVO)***

git branch feature/nome-da-branch (criar)
git checkout feature/nome-da-branch (vai para ela)
git checkout -b nome-nova-branch (criar e já migra para nova branch)
git checkout master (volta para a principal)
git merge feature/nome-da-branch (une a feature a master)

git branch (mostra todas a branchs criadas)
git branch -D feature/nome-da-branch (deleta branch)

---
***ENVIAR PARA O GITHUB***

criar repositório vazio no site 
git remote add origin URL
git push -u origin nomeDaBranch

---
***PEGAR DO GITHUB***

git clone URL

---
***VOLTAR PARA UM COMMIT***

git checkout SHA1 
git status
faça outro commit e push

---
***ATUALIZAR REPOSITORIO LOCAL***
git pull 

---
***GIT IGNORE***
.gitignore (escreve nome de arquivos e pastas que devem ser ignorados)
