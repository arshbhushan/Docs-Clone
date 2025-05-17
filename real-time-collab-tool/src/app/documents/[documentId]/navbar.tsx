import Image from "next/image"

export const Navbar = () =>{
    return(
        <nav>
            <Image src="/logo.svg" alt="Logo" width={46} height={46}/>
        </nav>
    )
}