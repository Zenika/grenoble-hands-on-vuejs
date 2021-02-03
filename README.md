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
- CSS: [Bulma](https://bulma.io/documentation/)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 101 tests

Un **code de qualité** doit avoir des tests car ils montrent que ton code marche et que tu gères les
edge cases, on aime montrer la qualité du travail fourni.

**La qualité c’est la confiance dans le code 🤑**

On fait comme Elon Musk qui teste ses fusées 🚀, elles vont de plus en plus loin…

On remonte la pyramide 🐫 :
- niveau 0 : TS / lint / tests unitaires (pas composants)
- niveau 1 : tests unitaires (composants)
- niveau 2 : tests d’intégration (testing-library sur la forme + @vue/test-utils)
- niveau 3 : mutation testing (tester nos tests)
- niveau 4 : e2e (cypress) + a11y

## Step 1 : Afficher la météo du jour pour Grenoble

- Sur la page d’une ville : récupérer et afficher la météo du jour
- La page d’une ville correspond au composant [`City`](src/views/City.vue) 
- Utiliser le [service d’API](src/api/weather.api.js) pour récupérer la météo en function des coordonnées GPS de Grenoble lorsque le composant est créé (https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)
- Binder les données de la météo du jour avec le template (https://vuejs.org/v2/guide/instance.html#Data-and-Methods)

## Step 2 : Afficher la météo du jour pour toutes les villes Zenika

- Pour le moment on affiche uniquement la première ville de la liste dans le composant [`Home`](src/views/Home.vue), itérer sur la liste pour toutes les afficher (https://vuejs.org/v2/guide/list.html) 
- Le paramètre de la route `/city` est mappé sur les props du composant que l’on peut récupérer avec `this.cityName`
- Utiliser les getters `Vuex` pour récupérer les coordonnées de la ville : `[latitude, longitude]` (https://vuex.vuejs.org/guide/getters.html)
- Appeler le service d'API avec les coordonnées de la ville
- Afficher la ville sur la carte et la météo du jour

## Step 3 : Afficher la météo des 7 prochains jours pour chaque ville

- Via le service d’API récupérer maintenant la météo des 7 prochains jours
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

## Bonus : Afficher la météo détaillée d'un ville

- Une seconde API sur `7timer` permet d'obtenir une météo plus détaillée avec une prévision toute les 3 heures (http://www.7timer.info/bin/civil.php?lon=0&lat=0&unit=metric&output=json)
- Créer un nouveau point d'entrée sur le service d'api pour consommer ces données
- Afficher le résultat de la météo détaillée sur la page de la ville
- Ajouter un bouton pour afficher le mode simple ou le mode détaillé

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
