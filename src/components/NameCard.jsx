import { useState } from 'react'
import logo from '../assets/logoBlack.svg'

export default function NameCard() {
    const [copied, setCopied] = useState(false)
    const [hoverCopy, setHoverCopy] = useState(false)
    
    function copyEmail() {
        setCopied(true)
        navigator.clipboard.writeText('vivan.sinha.003@gmail.com')

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    function logos() {
        return (
            <div className='links flex flex-row content-around space-x-5 text-xl text-gray-400'>
                <i className={"fa-brands fa-youtube cursor-pointer hover:text-red-700"}
                    onClick={() => window.open('https://www.youtube.com/@vivansinha', '_blank')}/>
                <i className={"fa-brands fa-github cursor-pointer hover:text-white"}
                    onClick={() => window.open('https://github.com/vivan-sinha', '_blank')}/>
                <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-600"
                    onClick={() => window.open('https://www.linkedin.com/in/vivan-sinha/', '_blank')}/>
                
                {copied ? 
                    <div className='flex flex-row space-x-1 text-green-600 items-end'>
                        <i className="fa-solid fa-clipboard-check px-0.5 "
                        onMouseEnter={()=>{setHoverCopy(true)}} 
                        onMouseLeave={()=>setHoverCopy(false)}
                        onClick={() => copyEmail()}/>
                        <p className='text-xs '>Copied!</p> 
                        </div>
                    : 
                    (
                        hoverCopy ? 
                        <i className="fa-solid fa-clipboard px-0.5 cursor-pointer text-white"
                        onMouseEnter={()=>{setHoverCopy(true)}} 
                        onMouseLeave={()=>setHoverCopy(false)}
                        onClick={() => copyEmail()}></i> :
                        <i className="fa-solid fa-envelope cursor-pointer"
                        onMouseEnter={()=>{setHoverCopy(true)}} 
                        onMouseLeave={()=>setHoverCopy(false)}
                        onClick={() => copyEmail()}/>
                    )
                    
                }
                
                {/* <img src={shuttle} className='inline w-5 fill-gray-400'/> */}
            </div>
        )
    }
    return (
        <div className='flex flex-row space-x-8 px-7 py-5 justify-center items-center'>
            <div className=''>
                <img src={logo} className='w-20 rounded-full border border-slate-200'></img>
            </div>

            <div>
                <div className='flex flex-row justify-start space-x-5 items-center mb-1'>
                    <h1 className='text-4xl tracking-tight'>Vivan Sinha</h1>
                    {/* <h1 
                    className='bg-gray-300 px-2 py-0.5 tracking-tight text-black rounded-md cursor-pointer
                    opacity-40'>
                        Contact Me</h1> */}

                </div>
                <p className='mb-2 text-lg'><span className='text-blue-400'>Full Stack Developer</span> & Badminton Enthusiast</p>
                <div className='flex w-full flex-col space-y-1 sm:space-y-0 sm:flex-row sm:justify-between sm:items-end'>
                    {logos()}
                    <p className='justify-self-end text-sm text-gray-300'><i className="fa-solid fa-location-dot"/> Berkeley, CA</p>
                </div>
            </div>
        </div>
    )
}