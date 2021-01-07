# Creating Components

```terminal
ng g c header --skipTests=true
ng g c recipes --skipTests=true
ng g c recipes/recipe-list --skipTests=true
ng g c recipes/recipe-detail --skipTests=true
ng g c recipes/recipe-list/recipe-item --skipTests=true
ng g c shopping-list --skipTests=true
ng g c shopping-list/shopping-edit --skipTests=true
```

## using the component

**recipe.component.html**

```html
<div class="row">
  <div class="col-md-5">
    <app-recipe-list></app-recipe-list>
  </div>
  <div class="col-md-5">
    <app-recipe-detail></app-recipe-detail>
  </div>
</div>
```

**recipe-list.component.html**

```html
<app-recipe-item></app-recipe-item>
```

**shopping-list.component.html**

```html
<div class="row">
  <div class="col-xs-10">
    <app-shopping-edit></app-shopping-edit>
    <hr />
    <p>List goes here</p>
  </div>
</div>
```
