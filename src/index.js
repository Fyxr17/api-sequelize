const app = require("./app/app")

const port = process.env.port || 3001;

app.listen(port, () => {
    console.log(`------ Server run on port ${port}`)
})