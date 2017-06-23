module.exports = {
  getAll: function (req, res, next){
    req.app.get("db").getAll().then(function(response){
      res.send(response)
    }).catch(function(err){
      console.log(err);
    })
  },

  getImages: function(req, res, next) {
    console.log(req.params.Type)
    req.app.get('db').getImages(req.params.Type).then(function(response) {
      res.send(response)
    }).catch(function(err) {
      console.log(err)
    })
  },

  getDetails: function(req, res, next) {
    console.log(req.params.ID)
    req.app.get('db').getDetails(req.params.ID).then(function(response) {
      res.send(response)
    }).catch(function(err) {
      console.log(err)
    })
  }
}
