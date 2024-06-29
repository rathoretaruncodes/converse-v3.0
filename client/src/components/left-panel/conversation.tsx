interface conversationType {
    id: number;
    profilePicture: string;
    fullName: string;
}

const Conversation = ({ conversation } : { conversation: conversationType }) => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-gray-500 p-2 py-2.5 cursor-pointer border-b border-transparent">
                <div>
                    <div className="w-10 rounded-full">
                        <img src={conversation.profilePicture} alt="user-avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold">{conversation.fullName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Conversation;