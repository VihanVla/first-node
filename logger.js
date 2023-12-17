function log (req,res,next){
    console.log("we are logging");
    next();
}

function authentication(req,res,next){
    console.log("the authentication process is executong")
    next();
}

module.exports = log