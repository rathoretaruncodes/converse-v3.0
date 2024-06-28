interface messageType {
    id: number;
    fromMe: boolean;
    body: string;
}

const message = ({ message } : { message: messageType }) => {
    return (
        <div className="flex gap-2 items-center text-white p-2 py-2">  
            {message.body}
        </div>
    )
}

export default message;