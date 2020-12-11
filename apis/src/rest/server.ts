import express from "express"

const app: express.Application = express()
const PORT: number = 3001

app.get("/", (req, res) => res.send("Hello World"))
app.listen(PORT, () => console.log(`Server listening @ http://localhost:${PORT}`))








