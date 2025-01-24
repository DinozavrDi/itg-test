import { Avatar } from "@mui/material"

function Header() {
    return (
        <header className="w-full flex justify-between items-center border-b-[1px] border-itg-200 border-solid h-12">
            <h1>SIMPLEONE</h1>
            <div className="flex gap-2 items-center">
                <input placeholder="Поиск">
                
                </input>
                <Avatar sx={{ width: 32, height: 32 }}/>
                <span> Максим Галактинов </span>
                <button>
                    НС
                </button>
            </div>
        </header>
    )
}

export default Header