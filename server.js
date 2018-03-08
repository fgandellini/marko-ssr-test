require('marko/express')
require('marko/node-require')
require('lasso').configure({ plugins: ['lasso-marko'] })
const express = require('express')
const app = express()

app.use(require('lasso/middleware').serveStatic())

const template = require('./page/index.marko')
app.get('/', (req, res) => res.marko(template))

app.listen(3000)
