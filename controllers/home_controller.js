module.exports.home=function(req,res){  //home is the name of this exported function
    //Rendering an ejs file
    return res.render('home',{
        title:"HOME",
    });
}