import { HTMLAttributes } from "react"

function IconButton({ src, ...props } : { src: string }  & HTMLAttributes<HTMLButtonElement>) {

    return (
        <button className="p-[6px] min-w-[32px] max-h-[32px] flex justify-center items-center rounded border-[1px] border-itg-200 border-solid" {...props}>
            <img src={src} width={20} height={20} alt="icon"/>
        </button>
    )
}

export default IconButton