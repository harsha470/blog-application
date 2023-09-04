const userModel = require("./userModel");
const jwt = require("jsonwebtoken");
const createUserControllerFn = async (req, res) => {
  try {
    const body = req.body;
    const userModelData = new userModel();
    userModelData.firstName = body.firstName;
    userModelData.lastName = body.lastName;
    userModelData.email = body.email;
    userModelData.password = body.password;

    await userModelData.save();

    res.status(200).send({
      status: true,
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findUserControllerFn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email, password: password });

    if (!user)
      return res.status(401).send({
        status: false,
        message: "Invalid credentials",
      });

    const payload = {
      userId: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const secretKey = "harshavardhan";
    const token = jwt.sign(payload, secretKey, { expiresIn: "100000" });

    res.send({ token: token, userId: payload.userId });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error",
    });
  }
};

const getUserControllerFn = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      res.status(400).send({
        message: "No such user",
      });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const updateUserControllerFn = async(req,res)=>{
    const userId = req.params.userId ; 
    try {
    const updatedUser =  await userModel.findByIdAndUpdate(
        userId,
            {$set : {
                firstName : req.body.firstName ,
                lastName : req.body.lastName,
                email : req.body.email,
                password: req.body.password 
            }},
            {new : true}
        ) ; 

        if (!updatedUser) {
            return res.status(404).json({ status: false, message: 'user not found' });
        }

        res.status(200).json({ status: true, message: 'user updated successfully', user: updatedUser });

    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ status: false, message: 'Internal server error' });
    }
}

module.exports = {
  createUserControllerFn: createUserControllerFn,
  findUserControllerFn: findUserControllerFn,
  getUserControllerFn: getUserControllerFn,
  updateUserControllerFn : updateUserControllerFn 
};
