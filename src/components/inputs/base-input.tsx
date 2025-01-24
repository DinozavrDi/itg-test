function BaseInput({ label, required=false }: { label: string, required?: boolean }) {
    return (
        <div className="flex flex-col gap-3 flex-1 w-full min-w-[550px]">
            <label htmlFor={label} className="flex gap-1 text-sm font-open_sans font-semibold text-itg-700"> 
                <span className={` ${ required ? 'block ' : 'hidden'} text-red-500`}>*</span> 
                { label } 
            </label>
            <input id={label} name={label} className="px-2 py-1 rounded border-[1px] border-itg-200 border-solid font-open_sans text-sm h-[32px] bg-itg-100  "/>
        </div>
    )
}

export default BaseInput