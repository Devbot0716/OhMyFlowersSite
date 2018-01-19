module.exports = {
  getAll: (req, res, next)=>{
    req.app.get("db").getAll().then((response)=>{
      res.send(response)
    }).catch((err)=>{
      console.log(err);
    })
  },

  getImages: (req, res, next)=>{
    console.log(req.params.Type)
    req.app.get('db').getImages(req.params.Type).then((response) =>{
      res.send(response)
    }).catch((err) =>{
      console.log(err)
    })
  },

  getDetails: (req, res, next)=>{
    console.log(req.params.ID)
    req.app.get('db').getDetails(req.params.ID).then((response) =>{
      res.send(response)
    }).catch((err) => {
      console.log(err)
    })
  }

}
