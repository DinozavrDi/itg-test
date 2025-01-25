import { Avatar } from "@mui/material"
import IconButton from "./buttons/icon-button"
import Image from "next/image"
import { GlobalSearch } from "./inputs/search"

function Header() {
    return (
        <header className="w-full flex justify-between items-center border-b-[1px] border-itg-200 border-solid h-12 px-4">
            <Image className="hidden md:block" src={'/svg/logo.svg'} width={175} height={24} alt="logo"/>
            <Image className="block md:hidden" src={'/svg/buttons/drawer2.svg'} width={20} height={20} alt="logo"/>
            <div className="flex gap-2 items-center">
                <GlobalSearch/>
                <Avatar sx={{ width: 32, height: 32 }}/>
                <span className="font-open_sans text-sm text-itg-700 hidden md:block"> Максим Галактинов </span>
                <IconButton src="/svg/buttons/settings.svg"/>
            </div>
        </header>
    )
}

export default Header