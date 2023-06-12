import UserModel from "../models/UserModel";

const userModelFactory = (userProfile) => (
    new UserModel(userProfile)
)

export default userModelFactory;
