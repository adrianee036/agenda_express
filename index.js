import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(express.json({
    type : "*/*"
}))

const url = 'http://www.raydelto.org/agenda.php'



app.get('/', (req, res) => {

    fetch(url)
    .then(response => {
        for(const pair of response.headers){

          }
        return response.json();
    }).then(data => {
        res.json(data);
    

})
})

app.post('/', function (req, res) {
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));
 });


app.listen(8080, () => {
    console.log("¡Servidor listo!");
});