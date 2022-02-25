import {Request, Response} from "express";

export default interface MessageControllerI{
    userSendsMessage (req: Request, res: Response): void;
    userDeletesMessage (req: Request, res: Response): void;
    findAllUserSentMessages (req: Request, res: Response): void;
    findAllUserReceivedMessages (req: Request, res: Response): void;
};