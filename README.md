# AngularApp

# API
j'ai crée une api en c# avec codefirst et j'ai utilisé la base de données sqlite

# Angular App

J'ai crée un site de sport 
on peut creer des comptes, se login/log out

On peut aussi saisir les exercices et ses differentes étapes lorsqu'on est loggé

Points a valider : 

Les composants => page login, creation de compte , navbar, liste des exos

Les services => service pour récuperer le current user et aussi le service pour les appels api

Les routes => app.routing pour gerer les routes entre les diffrents composants

Les guards => géré spour les composants creation exo et creation étapes exo en se basant sur le fait que l'utilisateur soit ou pa loggé

Les pipes => pipe de la date dans la navbar + pipe costum qu compte le nombre d'étapes d'un exo , lorsqu'on accéde aux détails d'un exercice

Les directives => utilisé dans la navbar pour afficher ou pas les differents boutons

Les formulaires => ajout exercice , login , création compte, ajout étape exercie 

Les observables => utilisé dans les services pour les appels api et aussi pour verifier si l'utilisateur est loggé

Les tests unitaires => present dans tous les composants

Les tests end-to-end => utilisation de cypress

Les intercepteurs (optionnel) => pas fait

Le module HttpClient (optionnel) => utilisé lors des appels api



