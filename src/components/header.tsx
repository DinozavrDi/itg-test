import { Avatar } from "@mui/material"
import IconButton from "./buttons/icon-button"

function Header() {
    return (
        <header className="w-full flex justify-between items-center border-b-[1px] border-itg-200 border-solid h-12 px-4">
            <h3>SIMPLEONE</h3>
            <div className="flex gap-2 items-center">
                <input placeholder="Поиск">
                
                </input>
                <Avatar sx={{ width: 32, height: 32 }}/>
                <span> Максим Галактинов </span>
                <IconButton src="/svg/buttons/settings.svg"/>
            </div>
        </header>
    )
}

export default Header