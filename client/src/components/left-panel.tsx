import { 
    CircleUserRound, 
    ListFilter, 
    LogOut, 
    MessageSquareDiff, 
    Search 
} from "lucide-react";


const LeftPanel = () => {
    const conversations = [];
    return (
        <div className="w-1/4 border-gray-600 border-r">
            <div className="sticky top-0 z-10">
                <div>
                    <div className="flex justify-between items-center bg-gray-800 h-16 px-4">
                        <CircleUserRound className="cursor-pointer text-gray-500" />

                        <div className="flex items-center gap-5">
                            <MessageSquareDiff size={23} className="cursor-pointer text-gray-500" />
                            <LogOut size={21} className="cursor-pointer text-gray-500" />
                            <ListFilter className="cursor-pointer text-gray-500" />
                        </div>
                    </div>
                    
                    <div className="p-3 flex items-center">
                        <div className="relative h-10 mx-2 flex-1">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
                            <input type="text" placeholder="Search chats" className="pl-7 py-2.5 text-sm w-full rounded bg-gray focus:outline-none"></input>
                        </div>
                    </div>
                </div>
                {/* Chat */}
                <div className="my-4 flex flex-col gap-0 max-h-[80%] overflow-auto">

                    {conversations?.length === 0 && ( 
                        <>
                            <p className="text-center text-sm mt-3 text-gray-500">Be the first to break the ice!</p>
                        </>
                     )} 
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;