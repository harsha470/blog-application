const userModel = require('./userModel') ; 
const jwt = require("jsonwebtoken")
const  createUserControllerFn = async(req,res) =>{

    try{
        const body = req.body ; 
        const userModelData = new userModel() ; 
        userModelData.firstName = body.firstName; 
        userModelData.lastName = body.lastName; 
        userModelData.email = body.email; 
        userModelData.password = body.password; 

        await userModelData.save() ; 

        res.status(200).send({
            "status":true, "message" : "user created successfully"
        })

    }
    catch(error){
        // console.log(JSON.stringify(error)); 
        res.status(500).json({message:error.message}) ; 
    }
}

const findUserControllerFn = async(req,res) =>{
    try {
        // console.log(req.body) ; 
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email, password: password });

        if(!user) return res.status(401).send({
            "status": false, "message": "Invalid credentials"
        });

        const payload = {
            userId: user._id,
            email: user.email, 
            firstName: user.firstName, 
            lastName : user.lastName
            
          };

        const secretKey = "harshavardhan" ; 
        const token = jwt.sign(payload,secretKey,{expiresIn: '100000'}) ; 

            res.send({"token" : token, "userId" : payload.userId}) ; 


    } catch (error) {
        console.log(error)
        res.status(500).send({
            "status": false, "message": "Internal Server Error"
        });
    }
}

module.exports = {
    createUserControllerFn: createUserControllerFn,
    findUserControllerFn: findUserControllerFn
};

