# Instructions

## Build app

```
npm install
npm run lint
npm run serve
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Step 1 : Afficher la météo du jour pour Grenoble

- Sur la page d'une ville récupérer et afficher la météo du jour.
- Le page d'une ville correspond au composant `City` 
- Utiliser le service d'API pour récupérer la météo en function des coordonnées GPS de Grenoble lorsque le composant est créé (https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)
- Binder les données de la météo du jour avec le template (https://vuejs.org/v2/guide/instance.html#Data-and-Methods)

## Step 2 : Afficher la météo du jour pour toutes les villes Zenika

- Utiliser les getters `Vuex` pour récupérer les coordonnées de la ville récupérée des `props` du composant (https://vuex.vuejs.org/guide/getters.html)
- Appeler le service d'API avec ces coordonnées

## Step 3 : Afficher la météo des 8 prochains jours pour chaque ville

- Via le service d'API récupérer maintenant la météo des 8 prochains jours
- Binder les données avec le template 

## Step 4 : Avoir la possibilité de passer en Fahrenheit

## Step 5 : Avoir une nouvelle page pour enregistrer une nouvelle ville

## Step 6 : Avoir une nouvelle page avec le details tous les trois heures
