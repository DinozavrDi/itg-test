import Image from "next/image";

function NavButton({children} : {children: React.ReactNode}) {
    return (
        <nav>
            <button className="flex gap-2 font-[400] font-open_sans items-center text-itg-700 text-sm text-left whitespace-nowrap">
                <Image src={'/svg/nav-arrow-right.svg'} width={8} height={8} alt="nav-arrow"/>
                {children}
            </button>
        </nav>
    )
}

export default NavButton