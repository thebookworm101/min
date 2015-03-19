# Headless testing with backbone

## Works with models, collections , views but not  yet with Backbone.Router

Errorss that iv  met:

```
  Route
    MinRouter
      1) "before each" hook

  0 passing (167ms)
  1 failing

  1) Route "before each" hook:
     Uncaught TypeError: Cannot call method 'toLowerCase' of undefined
      at _.extend.start (/home/user/min/vendor/backbone.js:1398:68)
      at /home/user/min/__test__/uroute/testrouter.js:14:30
      at Object.jsdom.env.done (/home/user/min/__test__/helpers/clientenv.js:30:13)
      at /home/user/min/node_modules/jsdom/lib/jsdom.js:249:18
      at process._tickCallback (node.js:419:13)
```

Iv no idea how  to solve this.



## Reproducing:

```
git clone https://github.com/thebookworm101/min.git
cd min
npm install
make test
```
 
