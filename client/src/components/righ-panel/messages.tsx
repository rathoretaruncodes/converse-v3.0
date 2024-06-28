import { sample_messages } from "../../sample-data/sample-data"
import Message from "./message"


const Messages = () => {
    return (
        <div>
            {sample_messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}

export default Messages;