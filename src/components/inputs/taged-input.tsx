import IconButton from "../buttons/icon-button"

function TagedInput({ label, required=false, tags, only=false }: { label: string, required?: boolean, tags: string[], only?: boolean }) {
    

    if (!tags) return

    return (
        <div className="flex flex-1 flex-col gap-3 w-full  min-w-[280px]">
            <label htmlFor={label} className="flex gap-1 text-sm font-open_sans font-semibold text-itg-700"> 
                <span className={` ${ required ? 'block ' : 'hidden'} text-red-500`}>*</span> 
                { label } 
            </label>
            <div className="flex gap-2 w-full">
                <div className="p-1 relative rounded border-[1px] border-itg-200 border-solid w-full flex justify-between bg-itg-100">
                    <div className="flex gap-1 flex-wrap">
                        {
                            tags.map((tag, i) => {
                                if (only) return <Tag key={i}>{tag}</Tag>
                                else return <TagClose key={i}>{tag}</TagClose>
                        })
                        }
                    </div>

                    <img className="absolute right-1 top-[6px]" src="/svg/buttons/clear.svg" width={20} height={20}/>
                </div>
                <IconButton src="/svg/buttons/plus.svg"/>
                <IconButton src="/svg/buttons/search.svg"/>
            </div>

        </div> 
    )
}

function Tag({ children } : { children: React.ReactNode }) {
    return( 
        <div className="px-2 border-[1px] border-[#99D5FF] border-solid bg-[#E5F4FF] rounded h-[24px] flex">
            <span className="text-itg-700 font-open_sans text-sm font-[400] line-clamp-1 break-all">
                { children }
            </span>
        </div>
    )
}

function TagClose({ children } : { children: React.ReactNode }) {
    return( 
        <div className="px-2 border-[1px] border-[#99D5FF] border-solid bg-[#E5F4FF] rounded  h-[24px] flex justify-between gap-1">
            <span className="text-itg-700 font-open_sans text-sm font-[400] line-clamp-1 break-all">
                { children }
            </span>
            <img src="/svg/buttons/close.svg" width={10} height={10}/>
        </div>
    )
}

export default TagedInput