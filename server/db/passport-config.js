var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcrypt')
 
function initialize(passport,getUserByName,getUserById) {
    const authenticateUser = async (username , password , done)=>{
        const user = getUserByName(username)

        if(user == false){
          return  done(null , false , {message: "whO aRe yOU?"})
        }
        try {
            if(await bcrypt.compare(password,user.password)){
                console.log("tttttt")
               return done(null,user)
            }   else{
                console.log("this")
                return done(null, false, {message:"wrong password"})

            }   
        } catch (error) {
            return done(e)
        }
         
    }

    passport.use(new LocalStrategy({usernameField: 'username'},authenticateUser ))

    passport.serializeUser((user,done)=>{done(null,user.id)})
    passport.deserializeUser((id,done)=>{
        return done(null,getUserById(id))
    })
}


module.exports = initialize