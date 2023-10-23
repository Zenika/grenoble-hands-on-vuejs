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
- State management: [Pinia](https://pinia.vuejs.org/)
- Weather data: [7timer](http://www.7timer.info/)
- Build tools: [Vite](https://vitejs.dev/)
- CSS: [Bulma](https://bulma.io/documentation/)

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

## Step 1 : Afficher la météo du jour pour Grenoble

- Sur la page d’une ville : récupérer et afficher la météo du jour
- La page d’une ville correspond au composant [`CityView`](src/views/CityView.vue) 
- Utiliser le [service d’API](src/api/weather.api.js) pour récupérer la météo en function des coordonnées GPS de Grenoble lorsque le composant est créé (https://vuejs.org/guide/essentials/lifecycle)
- Binder les données de la météo du jour avec le template (https://vuejs.org/guide/essentials/reactivity-fundamentals)

## Step 2 : Afficher la météo du jour pour toutes les villes Zenika

- Pour le moment on affiche uniquement la première ville de la liste dans le composant [`HomeView`](src/views/HomeView.vue), itérer sur la liste pour toutes les afficher (https://vuejs.org/guide/essentials/list) 
- Le paramètre de la route `/city` est mappé sur les props du composant que l’on peut récupérer avec `props.cityName`
- Utiliser les getters du store `Pinia` pour récupérer les coordonnées de la ville : `[latitude, longitude]` (https://pinia.vuejs.org/core-concepts/getters)
- Appeler le service d'API avec les coordonnées de la ville
- Afficher la ville sur la carte et la météo du jour

## Step 3 : Afficher la météo des 7 prochains jours pour chaque ville

- Via le service d’API récupérer maintenant la météo des 7 prochains jours
- Binder les données avec le template pour afficher les jours suivants au clic de l’utilisateur

## Step 4 : Avoir la possibilité de passer en Fahrenheit

- Ajouter des radios boutons, checkbox ou n’importe quoi d’autre pour choisir l’unité à afficher 
- Créer un `Composable` VueJS pour retourner les degrees dans la bonne unité (https://vuejs.org/guide/reusability/composables)
- Appliquer la fonction de conversion `F = C * 9/5 + 32`

## Step 5 : Ajouter un page pour enregistrer une nouvelle ville

- Créer un nouveau composant dans le dossier `views`
- Créer dans le router une route liée à ce composant 
- Modifier le store pour créer une action pour ajouter la nouvelle ville à la liste existante (https://pinia.vuejs.org/core-concepts/actions)
- Créer un formulaire avec des inputs pour le nom de la ville, latitude et longitude
- Mettre des protections sur les inputs (non vide, entre -180 et 180…)
- Dispatcher l’action créée précédemment lors de l’envoi du formulaire valide

## Bonus : Afficher la météo détaillée d'une ville

- Une seconde API sur `7timer` permet d'obtenir une météo plus détaillée avec une prévision toutes les 3 heures (http://www.7timer.info/bin/civil.php?lon=0&lat=0&unit=metric&output=json)
- Créer un nouveau point d'entrée sur le service d'api pour consommer ces données
- Afficher le résultat de la météo détaillée sur la page de la ville
- Ajouter un bouton pour afficher le mode simple ou le mode détaillé
- Afficher un loader pendant le chargement des données pour faire patienter l'utilisateur, avec une durée d'au moins 2 secondes.

## Correction

<details>
  <summary>Step 1</summary>
  https://github.com/Zenika/grenoble-hands-on-vuejs/compare/step0...step1
</details>

<details>
  <summary>Step 2</summary>
  https://github.com/Zenika/grenoble-hands-on-vuejs/compare/step1...step2
</details>

<details>
  <summary>Step 3</summary>
  https://github.com/Zenika/grenoble-hands-on-vuejs/compare/step2...step3
</details>

<details>
  <summary>Step 4</summary>
  https://github.com/Zenika/grenoble-hands-on-vuejs/compare/step3...step4
</details>

<details>
  <summary>Step 5</summary>
  https://github.com/Zenika/grenoble-hands-on-vuejs/compare/step4...step5
</details>

<details>
  <summary>Bonus</summary>
  https://github.com/Zenika/grenoble-hands-on-vuejs/compare/step5...bonus
</details>
