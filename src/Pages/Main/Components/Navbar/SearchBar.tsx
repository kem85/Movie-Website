import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
export default function Searchbar() {
    return(
        <>
        <div className="relative flex items-center justify-center w-[450px] h-13 bg-[#3b3d3d] rounded-full mt-[5px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-[15px] top-[33%] text-[17px]"/> 
            <input
            type="email"
            placeholder="Enter keywords..."
            className="w-[450px] h-13 bg-[#3b3d3d] placeholder:text-[#8E92AA] px-[50px] border-2 border-transparent outline-none transition-colors duration-250 focus:bg-[#545555] text-center rounded-full text-[15px] "
            />
        </div>
        </>
    )
}