import { HTMLAttributes } from "react"

function MainButton({ children, ...props } : { children: React.ReactNode } & HTMLAttributes<HTMLButtonElement>) {
    return( 
        <button className="px-2 py-1 rounded border-[1px] border-itg-200 border-solid font-semibold" {...props}>
            { children }
        </button>
    )
}

function BlueButton({ children, ...props } : { children: React.ReactNode } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="px-2 py-1 rounded bg-[#0078CF] border-[1px] border-[#0078CF] border-solid font-semibold text-white" {...props}>
            { children }
        </button>
    )
}

export { MainButton, BlueButton}