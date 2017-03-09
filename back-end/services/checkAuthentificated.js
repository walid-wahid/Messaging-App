module.exports = {
  function checkAuthentificated(req,res,next){

  if(!req.header("Authorization")){
    return res.status(401).send({msg='Make sure your request has an authorization header'}) ;
  } ;
  var token = req.header("Authorization").split(" ").[1] ;
  var payload = jwt.decode(token, "secret") ;
  if(payload.exp <= moment().unix()) {
    return res.status(401).send(msg="token expired") ;
 }
  req.user = payload.sub ;
    next() ;
  }
}
