function GlobalSearch() {
    return (
        <div className="relative hidden md:block">
            <input placeholder="Поиск" className="w-full rounded border-[1px] border-itg-200 border-solid h-[32px] px-1 min-w-[296px]"/>
            <img className="absolute right-1 top-2" src="/svg/search.svg" width={16} height={16}/>
        </div>
    )
}

function MenuSearch() {
    return (
        <div className="relative">
            <input placeholder="Поиск по меню" className="w-full rounded border-[1px] border-itg-200 border-solid h-[32px] px-1"/>
            <img className="absolute right-1 top-2" src="/svg/filter.svg" width={16} height={16}/>
        </div>
    )
}

export { GlobalSearch, MenuSearch }