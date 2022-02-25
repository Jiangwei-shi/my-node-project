import {Request, Response, Express} from "express";
import Message from "../models/messages/Message";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageControllerI";

export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    public static getInstance = (app: Express): MessageController => {
        if (MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("api/users/:uid1/messages/users/:uid2",
                MessageController.messageController.userSendsMessage);
            app.delete("/api/messages/:messageID",
                MessageController.messageController.userDeletesMessage);
            app.get("/api/users/:uidTo/receiver",
                MessageController.messageController.findAllUserReceivedMessages);
            app.get("/api/users/:uidFrom/sender",
                MessageController.messageController.findAllUserSentMessages);
        }
        return MessageController.messageController;
    }

    private constructor() {
    }

    userSendsMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userSendsMessage(req.body.message, req.params.uid1, req.params.uid2)
            .then(message => res.json(message));

    userDeletesMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userDeletesMessage(req.body.message, req.params.uid1, req.params.uid2)
            .then(status => res.json(status));

    findAllUserReceivedMessages = (req: Request, res: Response) =>
        MessageController.messageDao.findAllUserReceivedMessages(req.params.from)
            .then(messages => res.json(messages));

    findAllUserSentMessages = (req: Request, res: Response) =>
        MessageController.messageDao.findAllUserReceivedMessages(req.params.to)
            .then((messages: Message[]) => res.json(messages));
};
