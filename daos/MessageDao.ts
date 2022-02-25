import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/messages/Message";

export default class MessageDao implements MessageDaoI{

    private static messageDao: MessageDao | null = null;
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null){
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}
    findAllUserSentMessages = async(from: string): Promise<Message[]> =>
        MessageModel
            .find({from: from})
            .populate("from")
            .exec();
    findAllUserReceivedMessages = async(to: string): Promise<Message[]> =>
        MessageModel
            .find({to: to})
            .populate("to")
            .exec();
    userSendsMessage = async(message: String, uid1: string, uid2: string): Promise<Message> =>
        MessageModel.create({ message: String, to: uid1, from: uid2, sentOn: Date});
    userDeletesMessage = async(message: string,uid1: String, uid2: String): Promise<any> =>
        MessageModel.deleteOne({ message: String, to: uid1, from: uid2, sentOn: Date});
}