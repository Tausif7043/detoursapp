'use strict';
const model = require('../../models');
const User = model.users;
class AuthService {
    /**
	*@CheckUserExist
    * its a function fetch user's data by its username or email or phone number
    * @param | username | String | it should be username
    * @param | email | String | it should be email
    * @param | phoneNumber | Number | it should be phone number
	**/
    async CheckUserExist(condition) { 
       return User.find(condition).exec(); 
    //    return query;
    }

    /**
	*@registerUser
    * its a function fetch user's data by its username or email or phone number
    * @param | user | Object | User object 
	**/
    async registerUser(user) {
       await User.create(user);
    }

    /**
	*@CheckUserVerified
    * its a function to verify if user's details by checking the isVerified flag value is true or false 
    * @param | user | Object | User object 
	**/
    async CheckUserVerified(username, email) {
       await User.find({ $or: [{ email: email }, { username: username }], isVerified: true }).exec();
    }
}
module.exports = new AuthService();
