import Subscription from "../models/model.sub.js"
export const createsubscription= async(res,req,next)=>{
    try {
        const subscription= await Subscription.create({
            ...req.body,
            user: req.user_id
        })
        res.status(201).json({success:true,date:subscription})
    } catch (error) {
        next(error)
    }
}
export const getUserSubscription = async (req,res,next)=>{
    try{
        if(req.user.id != req.params.id){
            const error = new Error("you are not the owner of this account")
            error.status=401
            throw error
        }
        const subscriptions= await Subscription.find({user:req.params.id})
        res.status(200).json({success:true,date:subscriptions})
    }catch(error){
        next(error)
    }
}