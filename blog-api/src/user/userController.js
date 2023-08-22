var userModel = require('./userModel') ; 
 
var createUserControllerFn = async(req,res) =>{

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
        res.status(400).send(error) ; 
    }
}

var findUserControllerFn = async(req,res) =>{
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email, password: password });

        if (user) {
            res.status(200).send({
                "status": true, "message": "Login successful"
            });
        } else {
            res.status(401).send({
                "status": false, "message": "Invalid credentials"
            });
        }
    } catch (error) {
        res.status(500).send({
            "status": false, "message": "Internal Server Error"
        });
    }
}

module.exports = {
    createUserControllerFn: createUserControllerFn,
    findUserControllerFn: findUserControllerFn
};

