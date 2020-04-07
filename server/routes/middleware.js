var jwt = require('jsonwebtoken')




module.exports={
    auth: function(req,res,next) {
        try {
            const token = req.headers.authorization.replace("Bearer ", "");
            console.log(token);
            const decoded = jwt.verify(token, "secret");
            req.userData = decoded;
            // console.log(req.userData);
            next();
          } catch (err) {
            return res.status(401).json({
              message: "Authentification Failed"
            });
          }
    }
}