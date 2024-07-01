type messageType = {
    id: number;
    fromMe: boolean;
    body: string;
}

const message = ({ message } : { message: messageType }) => {
    const image = message.fromMe 
        ? "https://avatar.iran.liara.run/public/boy?username=johndoe"
        : "https://avatar.iran.liara.run/public/girl?username=janedoe";
    const bubbleBg = message.fromMe ? "text-right ": "text-left";
    return (
        <div>
            <div className="hidden">
                <div className="w-6 rounded-full">
                    <img alt="avatar-image" src={image} />
                </div>
            </div>
            <p className={`text-white rounded-md px-4 pt-6 ${bubbleBg}`}>
                {message.body}
            </p>
        </div>
    );
};

export default message;