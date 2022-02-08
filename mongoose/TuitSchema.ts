import mongoose, {Schema} from "mongoose";
//from professor posted on piazza
const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;