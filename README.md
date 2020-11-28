# API wrapper for poe.watch

**Example usage:**

```javascript
const PoeWatch = require("./index")

let poe = new PoeWatch()

poe.getWeapons("Heist").then(items => {
    console.log(items)
})
```