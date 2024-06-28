import { sample_conversations } from "../../sample-data/sample-data";
import Conversation from "./conversation";

const Conversations = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {sample_conversations.map((conversation) => (
                <Conversation key={conversation.id} conversation={conversation} />
            ))}
        </div>
    )
}

export default Conversations;