const xp = require("express");
const router = require("./server/routes");
const bp = require('body-parser')
const app = xp();

app.use(bp.json());
app.use(xp.static(__dirname + '/public/dist/public'));
require('./server/routes')(app);
router(app);

app.listen(8000, (errs) => console.log(errs?errs:"Now listening on port 8000"));