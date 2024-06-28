import { Lock } from "lucide-react";


const ChatPlaceholder = () => {
    return (
        <div className="w-3/4 bg-gray-800 flex flex-col items-center justify-center py-10">
            <div className="flex flex-col items-center text-center justify-center py-10 gap-4 px-10">
                <p className="text-3xl font-extralight text-white mt-5 mb-2">Download Converse for Windows</p>
                <p className="w-1/2 text-center text-gray-500 text-sm text-muted-foreground">
                    Get a faster experience with the Windows app.
                </p>
                <button className="rounded-full my-5 py-2 px-3 bg-purple-700 hover:bg-purple-600" >
                    Get from Microsoft Store
                </button>
            </div>
            <p className="w-1/2 mt-auto text-center text-gray-500 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock size={10} />
                Your personal messages are end-to-end encrypted.
            </p>
        </div>
    )
}

export default ChatPlaceholder;