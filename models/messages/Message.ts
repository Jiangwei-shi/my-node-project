/**
 * @file Declares Message data type representing relationship between
 * 2 users, as in user messages another user
 */
import User from "../users/User";
/**
 * @typedef Message Represents messages relationship between 2 users,
 * as in user messages another user.
 * @property {String} message The message information.
 * @property {User} to The user received the message.
 * @property {User} from The user sent the message.
 * @property {Date} sentOn The time of the message.
 */
export default interface Message {
    message: String,
    to: User,
    from: User,
    sentOn: Date
};