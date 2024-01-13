const sessionValidate = (req,res,next) =>{
    console.log("Estas son las cookies",req.cookies)
    if (req.cookies.rememberMe && req.cookies.user){
            req.session.user = user;
        }
        next();
    }

module.exports = sessionValidate;