Example Usage
-------------

<h3>Verificador de Links</h3>

```js
const verify = require('verifica-links');

verify('https://github.com/)',(result, err) => {
    if (err) return console.log(err)
    
    console.log(`Link: ${result.link}, Status: ${result.statusCode}`)
})
```
