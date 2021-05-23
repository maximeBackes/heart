# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Authors of this project:
Maxime Backes, Julie Billon, Cédric Darrou, Elise Perrot

## Available Scripts

In the project directory, you can run:

### `yarn start`


### `yarn test`


### `yarn build`


### `yarn eject`


## Le concept
une application de suivi de cardiologie destinée à la fois aux patients et aux médecins.

## Philosophie de l'application
Cette plateforme s’adresse à toute personne souffrant de troubles cardiaques nécessitant un suivi continu, ainsi qu’aux professionnels de santé dans le cadre des soins coordonnés du patient. La plateforme a vocation à centraliser toutes les informations relatives à l’état de santé du patient pour les partager avec les professionnels de santé ou une personne tierce choisie explicitement. Les données sont issues de capteurs biométriques présents dans la plupart des montres connectées ou bien directement renseignées par l’utilisateur. Attention cependant : cette plateforme ne saurait se substituer aux visites régulières chez un professionnel de santé, il s’agit d’un outil supplémentaire pour formaliser le suivi de santé auprès du professionnel.

## Les fonctionnalités de l'application
### Must have :

* Fréquence cardiaque en temps réel avec un accès à l’historique sur une journée, une semaine, un mois. L’historique est automatique à partir de la montre
* Suivi de l’activité physique : suivi du nombre de pas et recommandations générales fournies par l’application pour atteindre des objectifs et/ou des recommandations personnalisées émanant du médecin.
* Annuaire des coordonnées du/des professionnels de santé pour le côté patient de l’application .
* Annuaires des patients pour le côté docteur : comprend l’historique des patients issus des données de la montre, historique des rendez-vous, des traitements en cours ou passés, coordonnées du patient et des professionnels ou proches liés au patient.
* Calendrier : agenda de rendez-vous pour le côté docteur et un agenda de prise de rendez-vous pour le patient.
* Suivi des constantes avec la montre : stress, glycémie, pression artérielle, fréquence cardiaque, saturation en oxygène.


### Should have :

* Rappel de médicaments à prendre (programmé ou non par le médecin).
* Rubrique “à propos” : pour les différentes constantes mesurées donne des indications générales, les valeurs de norme de références (ex : 60 < Fréquence cardiaque normale au repos < 80) ainsi que des conseils en cas de non-norme (ex : en cas de pression artérielle trop élevée).
* Rubrique “recommandation perso”: listes des recommandations à suivre pour la période en cours. Éditable par le médecin en fonction de l’état de santé globale du patient ainsi que par l’appli qui donnerait des recommandations génériques en fonction des constantes mesurées.



### Could have :

* Espace pour renseigner les informations relatives au sommeil, à la prise alimentaire, etc...
* Proposer spontanément des défis communs aux utilisateurs ou afficher la moyenne d’activité des utilisateurs par jour, “gamification” des objectifs.


## Difficultés rencontrées lors du développement :

Accès à l’API : Les données de e-santé étant considérées comme sensibles, il est difficile d’en trouver sans fournir un cadre légal d’utilisation des données. Pour des APIs moins restrictives (accès directement donné au endpoint) nous n’avons pas pu en trouver au format .json avec toutes les informations dont nous avions besoin.


