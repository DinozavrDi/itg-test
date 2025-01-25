import IconButton from "../buttons/icon-button"

function DateInput({ label, required=false }: { label: string, required?: boolean }) {
    return (
        <div className="flex flex-col gap-3 flex-1 w-full min-w-[252px]">
            <label htmlFor={label} className="flex gap-1 text-sm font-open_sans font-semibold text-itg-700"> 
                <span className={` ${ required ? 'block ' : 'hidden'} text-red-500`}>*</span> 
                { label } 
            </label>
            <div className="flex gap-2">
                <input id={label} name={label} className="px-2 py-1 rounded border-[1px] border-itg-200 border-solid font-open_sans text-sm h-[32px] bg-itg-100 w-full "/>
                <IconButton src="/svg/buttons/calendar.svg"/>
            </div>
        </div>
    )
}

export default DateInput