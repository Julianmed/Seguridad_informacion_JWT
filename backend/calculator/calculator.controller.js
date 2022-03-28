const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';

const calculatorControl = {};

calculatorControl.getSuma = (req,res) =>{
    let {numero1, numero2} = req.body;
    try {
        if(!jwt.verify(req.get('x-access-token'), SECRET_KEY, (err, decoded) => {return decoded})){
            res.json('you need a valid token for use this service')
        }
        else{
            res.json(numero1 + numero2);
        }
    } catch (error) {
        res.json(error);
    }
}

module.exports = calculatorControl;