import { Video, X } from "lucide-react";


const RightPanel = () => {
    const conversationName = "John Doe";
    return (
        <div className="w-3/4 flex flex-col">
            <div className="sticky top-0 z-10">
                <div className="flex justify-between bg-gray-800">
                    <div className="flex justify-between items-center h-16 px-4">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img className="w-9 h-9 rounded-full" src="https://github.com/shadcn.png" alt="avatar-image"/>
                                <span className="top-0 left-7 absolute  w-3 h-3 bg-green-400 border-2 border-black rounded-full"></span>
                            </div>
                            <div className="flex flex-col text-white">
                                <p>{conversationName}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-7 mr-5">
                        <a href="/video-call" title="video-call" target="_blank" className="cursor-pointer text-gray-500">
                            <Video size={23} />
                        </a>
                        <X size={20} className="cursor-pointer text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPanel;