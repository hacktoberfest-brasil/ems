# app-schedule

This library was generated with [Nx](https://nx.dev).

```shell
# Para gerar a biblioteca:
nx generate @nrwl/angular:library --name=schedule --style=scss --directory=app --importPath=@emx/app-schedule --prefix=emx --publishable --routing
```

```shell
# Para gerar os componentes:
nx generate @schematics/angular:component --name=schedule --project=app-schedule --style=scss --displayBlock --export --no-interactive

nx generate @schematics/angular:component --name=schedule-filter --project=app-schedule --style=scss --displayBlock --export --no-interactive

nx generate @schematics/angular:service --name=schedule-data --project=app-schedule --no-interactive
```

```shell
# para rota no app hub
nx g m feature/schedule --route agenda --module app --project hub
```


## Running unit tests

Run `nx test app-schedule` to execute the unit tests.
