## Welcome to System app

## Start app

```
npm start
```

## Run Test in Watch Mode

```
npm run watch:tests
```

## Run Test in Single Run

```
npm run sr:tests
```

## Integrate with CI (Continuous Integration)

```
npm run ci
```
### Once we run above script it will: 

* run test in single run mode 
* build app in production mode 
* create a `dist` folder 
* create a `TESTS-junit.xml`

## Using npm local Lib

Go to lib app and run `npm run lib:link` this will compile your library app and install your local npm module in global `node_modules` folder. Once this is done successfully, Come back to this application and run `npm start` in example app 