
import mongoose from "mongoose";
const subModel= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'subscription name is required'],
        trim:true,
        minLength:2,
        maxLength:100,
    },
    price:{
        type:Number,
        required:[true,'sub price is required'],
        min:0,
        max:1000,
    },
    currency:{
        type:String,
        required:[true,'Currency  is required'],
        default:"USD",
        enum:['USD','EUR','GBP','TOM']

    },
    frequency:{
        type:String,
        enum:["daily",'weakly','monthly','yearly']
    },
    category:{
        type:String,
        enum:['food','transport','housing','utilities','entertainment','other'],
        required:true
}, paymentMethod:{
    type:String,
    required:true,
    trim:true
},
 status:{
    type:String,
    enum:['active','cancelled','expired'],
    default:"active",
 },
 startDate:{
     type:Date,
     required:true,
     validate:{
        validator:(value)=>value <= new Date(),
        message:"start  date must  be in past"
     }
 },
 renewalDate:{
    type:Date,
    required:true,
    validate:{
       validator:function(value){
       return value <= this.startDate()
       },
       message:"renewalDate must be in past"
    }
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
cancelDate:{
    type:Date,
    default:null
},
cancelReason:{
    type:String,
    default:null
},
canceledBy:{
    type:String,
    enum:['user','admin'],
    default:"user"
}
},{timestamps:true});

subModel.pre("save", function(next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }

        this.renewalDate = new Date(this.startDate)
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
    }

    if (this.renewalDate < new Date()) {
        this.status = "expired"
    }

    next()
})
const Subscription= mongoose.model("Subscription", subModel)
export default Subscription;