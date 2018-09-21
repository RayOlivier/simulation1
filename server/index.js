require("dotenv").config()

const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  port = 3001,
  massive = require("massive"),
  controller = require("./controller")

app.use(json())

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
  app.set("db", dbInstance)
})

app.get("/api/inventory", controller.getInventory)
app.post("/api/product", controller.postProduct)
app.delete("/api/product/:id", controller.deleteProduct)
app.put("/api/product/:id", controller.updateProduct)
app.get("/api/product/:id", controller.getOne)

app.listen(port, () => console.log(`Sim 1 listening on ${port}`))
