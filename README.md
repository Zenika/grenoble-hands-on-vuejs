# Instructions

## Build app

```
npm install
npm run lint
npm run serve
```

## Dépendances

- Framework: [Vue](https://v3.vuejs.org/guide) 
- Router: [Vue Router](https://router.vuejs.org/)
- State management: [Vuex](https://vuex.vuejs.org/)
- Weather data: [7timer](http://www.7timer.info/)
- Build tools: [Vue CLI](https://cli.vuejs.org/guide/)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Step 1 : Afficher la météo du jour pour Grenoble

- Sur la page d’une ville : récupérer et afficher la météo du jour
- La page d’une ville correspond au composant [`City`](src/views/City.vue) 
- Utiliser le [service d’API](src/api/weather.api.js) pour récupérer la météo en function des coordonnées GPS de Grenoble lorsque le composant est créé (https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)
- Binder les données de la météo du jour avec le template (https://vuejs.org/v2/guide/instance.html#Data-and-Methods)

## Step 2 : Afficher la météo du jour pour toutes les villes Zenika

- Pour le moment on affiche uniquement la première ville de la liste dans le composant [`Home`](src/views/Home.vue), itérer sur la liste pour toutes les afficher (https://vuejs.org/v2/guide/list.html) 
- Le paramètre de la route `/city` est mappé sur les props du composant que l’on peut récupérer avec `this.cityName`
- Utiliser les getters `Vuex` pour récupérer les coordonnées de la ville : `[lattitude, longitude]` (https://vuex.vuejs.org/guide/getters.html)
- Appeler le service d'API avec les coordonnées de la ville
- Afficher la ville sur la carte et la météo du jour

## Step 3 : Afficher la météo des 8 prochains jours pour chaque ville

- Via le service d’API récupérer maintenant la météo des 8 prochains jours
- Binder les données avec le template pour afficher les jours suivants au clic de l’utilisateur

## Step 4 : Avoir la possibilité de passer en Fahrenheit

- Ajouter des radios boutons, checkbox ou n’importe quoi d’autre pour choisir l’unité à afficher 
- Créer une méthode VueJS pour retourner les degrees dans la bonne unité (https://vuejs.org/v2/api/#methods)
- Appliquer la fonction de conversion `F = C * 9/5 + 32`

## Step 5 : Ajouter un page pour enregistrer une nouvelle ville

- Créer un nouveau composant dans le dossier `views`
- Créer dans le router une route liée à ce composant 
- Modifier le store pour créer une action et une mutation pour ajouter la nouvelle ville à la liste existante (https://vuex.vuejs.org/guide/actions.html)
- Créer un formulaire avec des inputs pour le nom de la vile, latitude et longitude
- Mettre des protections sur les inputs (non vide, entre -180 et 180…)
- Dispatcher l’action créée précédemment lors de l’envoi du formulaire valide

## Step 6 : Avoir une nouvelle page avec le details tous les trois heures
