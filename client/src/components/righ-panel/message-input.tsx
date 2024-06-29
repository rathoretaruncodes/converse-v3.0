import { Laugh, Plus, Send } from "lucide-react";

const MessageInput = () => {
    return (
        <div className="bg-gray-800 p-2 flex gap-4 items-center">
            <div className="relative flex gap-2 ml-2">
                <Laugh className="text-gray-500" />
            </div>
            <Plus className="text-gray-500" />
            <form className="w-full flex gap-3">
                <div className="flex-1">
                    <input 
                        type="text"
                        placeholder="Type a message"
                        className="py-1.5 pl-3 w-full rounded-lg shadow-sm bg-gray-700 focus:outline-none"
                    />
                </div>
                <div className="mr-4 flex items-center gap-3">
                    <button type="submit">
                        <Send className="text-gray-500" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MessageInput;