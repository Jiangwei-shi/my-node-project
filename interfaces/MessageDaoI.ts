import Message from "../models/messages/Message";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI{
    userSendsMessage (message: String, uid1: string, uid2: string): Promise<Message>;
    userDeletesMessage (message: string,uid1: string, uid2: string): Promise<any>;
    findAllUserSentMessages(from: string): Promise<Message[]>;
    findAllUserReceivedMessages(to: string): Promise<Message[]>;
};