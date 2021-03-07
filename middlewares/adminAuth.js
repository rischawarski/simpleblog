function adminAuth(req,res,next){
        if(req.session.user != undefined){
            next();
    }else{
        //usuario não logado
        res.redirect('/login');
    }
}

module.exports = adminAuth;