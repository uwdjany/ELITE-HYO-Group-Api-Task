import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config({path:"../../"})

class Password{
    static encryptPassword(psw){
        return bcrypt.hashSync(pswd,parseInt(process.env.SALT))
    }

    static checkPassword(hashedPswd,normalPswd){
        return bcrypt.compareSync(normalPswd,hashedPswd)
    }
}

export default Password;