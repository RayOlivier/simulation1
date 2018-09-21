module.exports = {
  getInventory(req, res) {
    let db = req.app.get("db")
    db.getInventory()
      .then((inventory) => {
        return res.status(200).json(inventory)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  postProduct(req, res) {
    let db = req.app.get("db")
    db.postProduct([req.body.name, req.body.price, req.body.img])
      .then((inv) => {
        return res.status(200).json(inv)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  deleteProduct(req, res) {
    let db = req.app.get("db")
    db.deleteProduct([req.params.id])
      .then((inv) => {
        res.status(200).json(inv)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  updateProduct(req, res) {
    let db = req.app.get("db")
    db.updateProduct([
      req.body.name,
      req.body.price,
      req.body.img,
      req.params.id
    ])
      .then((inv) => {
        res.status(200).json(inv)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  }
}
