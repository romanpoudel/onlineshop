import {GrFormClose} from "react-icons/gr"
import { AiOutlineClose } from "react-icons/ai"

type offer={
    handleOffer: ()=>void
}

const Offer = ({handleOffer}:offer) => {
    
    return (
        <div className="flex items-center justify-center bg-black p-1 relative">
            <p className="text-xs text-gray-200 ">Sign up and <span className="text-white font-semibold">GET 20% OFF</span> for your first order. <span className="underline text-white font-semibold cursor-pointer">Sign up now</span></p>
            <div className="absolute right-36 cursor-pointer" onClick={handleOffer}>
            <AiOutlineClose color="white" />
            </div>
        </div>
    )
}

export default Offer
