## posgresql

Voici la premiere étape que tu te doit de maitriser:
-Demarrer ton DOCKER avec la simple petite commande "sudo docker-compose up".
si cette commande ne marche pas c'est que ton postgresql tourne et empeche ton docker de tourner en premier
pour cela il te suffira de stoper ton service postgresql graçe a une toute petite commande "service postgersql stop".

## github

la branch a utiliser est dev
Pour effectuer une mise a jour de projet
-" git status "
-" git add . "
-(" git status ", si vous voulez revoir si votre git add . a bien tout ajouter)
-" git commit -m "votre message"
-" git push"

-" git checkout nomdelabranche " la branch a utiliser
-" git push origin nomdelabranch" ajoute seulement dans la branche marqué
-" git diff nomdelabranch" permet de voir les difference de status entre les branch
-" git merge nomdelabranch" ajouter toutes les modification sur la branch master

## heroku master

la branche a utiliser est master
-" git checkout nomdelabranche " la branch a utiliser
-" git push origin nomdelabranch" ajoute seulement dans la branche marqué
-" git diff nomdelabranch" permet de voir les difference de status entre les branch
-" git merge nomdelabranch" ajouter toutes les modification sur la branch master

## visual studio

Pour le visual studio il ne te suffit que de lancer ton "ng serve" dans le dossier front.

## ligne de commande a retenir en cas de probléme

- `history` : liste toutes les ligne de commande deja écrite
- `ps -ef | grep node` lister les processus node
- `kill (process)` tue le process nommer
