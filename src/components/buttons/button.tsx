function MainButton({ children } : { children: React.ReactNode }) {
    return( 
        <button className="px-2 py-1 rounded border-[1px] border-itg-200 border-solid font-semibold">
            { children }
        </button>
    )
}

function BlueButton({ children } : { children: React.ReactNode }) {
    return (
        <button className="px-2 py-1 rounded bg-[#0078CF] border-[1px] border-[#0078CF] border-solid font-semibold text-white">
            { children }
        </button>
    )
}

export { MainButton, BlueButton}