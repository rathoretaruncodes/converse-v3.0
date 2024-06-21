import { Request, Response } from "express";
import prisma from "../db/prisma";

export const sendMessage = async (req:Request, res:Response) => {
    try {
        const { message } = req.body;  //message from sender
        const { id:receiverId } = req.params;     //id of the receiver
        const senderId = req.user.id;
        let conversation = await prisma.conversation.findFirst({
            where: {
                participantsIds: {
                    hasEvery: [senderId, receiverId],
                }
            }
        })
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantsIds: {
                        set: [senderId, receiverId]
                    }
                }
            })
        }
        const newMessage = await prisma.message.create({
            data: {
                senderId: senderId,
                body: message,
                conversationId: conversation.id
            },
        });
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        },
                    },
                },
            });
        }
        //Socket.io will go here
        res.status(201).json(newMessage)
    } catch (error:any) {
        console.log("Error in sending Message", error.message);
        res.status(500).json({
            error: "Internal server error."
        });
    }
};