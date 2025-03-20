import  jwt from 'jsonwebtoken'
import { user } from '../models/userModel.js'
import { configDotenv } from 'dotenv'
import { Request, Response , NextFunction } from 'express'
import { authRequest } from '../types.js'
configDotenv()

const secret = process.env.PASS_KEY as any;



export const auth = async (req: authRequest, res: Response, next: NextFunction) => {
    // const token = req.cookies.token; // this throws error if req.cookies is undefined 
    try{
    const token = req.cookies?.token; // this checks if req.cookies is undefined or not if undeined it doesnt throw err 
    //rather it returns undefined
    if(!token){
        res.status(403).json({
            message : "No token provided ",
        })        
    }
    // now token is present for sure
        const decoded = jwt.verify(token , secret);
        const  userid = decoded .sub;
        const userdetail = await user.findOne({ email : userid });
        if(!userdetail){
            res.status(403).json({
                message : "User not found",
            })
        }
        else{
            req.user = userdetail;
            next();
        }
    }
    catch(err){
        res.status(403).json({
            message : "Error in verifying token",
        })
    }
}