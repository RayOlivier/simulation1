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
    console.log(req)
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
  },
  getOne(req, res) {
    let db = req.app.get("db")
    db.getOne([req.params.id])
      .then((info) => {
        res.status(200).json(info)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  }
}
