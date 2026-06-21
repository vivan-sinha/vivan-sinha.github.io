import { useState } from 'react'
import logo from '../assets/logoBlack.svg'
import { CardSpotlightEffect } from './CardSpotlightEffect'
import pfp from '../assets/pfp.jpeg'
import resume from '../assets/Vivan_Sinha_Resume.pdf'

function PFP() {
    return (
        <div className={'relative w-10 min-w-[25vw] md:w-28 sm:min-w-[12vw] md:min-w-0 hover:transform hover:rotate-[-15deg] hover:scale-120 ease-in-out duration-500 rounded-full overflow-hidden border-2 border-slate-200'}>
            <img className='' src={pfp}/>
            <img className='absolute top-0 hover:transform hover:opacity-0 ease-in-out duration-500' src={logo}/>

        </div>
        
    )
}

function Logos() {
    const [isArc, setIsArc] = useState(false)
    window.addEventListener("load", function() {
        setTimeout(function(){
            setIsArc(getComputedStyle(document.documentElement).getPropertyValue('--arc-palette-background') ? true : false);
        }, 1000);
    });
    const [copied, setCopied] = useState(false)
    
    function copyEmail() {
        setCopied(true)
        if (isArc) {
            navigator.clipboard.writeText('vivan.sinha.003@gmail.com')
        } else {
            window.open('mailto:vivan.sinha.003@gmail.com', '_blank')
        }

        setTimeout(() => {
            setCopied(false)
        }, 3000)
        // 
    }
    return (
        <>  
            <a href={resume} download="Vivan Sinha Resume.pdf" target='_blank'>
            <i className={"fa-solid fa-file-arrow-down cursor-pointer hover:text-blue-200"} /></a>
            
            <a href='https://www.youtube.com/@vivansinha' target='_blank'>
                <i className={"fa-brands fa-youtube cursor-pointer hover:text-red-700"} /></a>
            <a href='https://github.com/vivan-sinha' target='_blank'>
                <i className={"fa-brands fa-github cursor-pointer hover:text-white"} />
            </a>
            <a href='https://www.linkedin.com/in/vivan-sinha/' target='_blank'>
                <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-800" />
            </a>

            
            <i className={"fa-solid fa-envelope cursor-pointer " + (copied ? "text-green-600" : "hover:text-white")}
            onClick={() => copyEmail()}/>
        </>
    )
}

function SmallScreenName() {
    return (
    <div className='flex lg:hidden mt-20 mb-10'>
    <CardSpotlightEffect customCSS={'rounded-xl'}>
        <div className='flex lg:hidden flex-row space-x-8 sm:px-7 py-5 justify-center items-center'>
            <div className=''>
                <PFP/>
            </div>

            <div className='flex flex-col items-start sm:items-stretch'>
                <div className='flex flex-row justify-start space-x-5 items-center mb-1'>
                    <h1 className='text-4xl tracking-tight'>Vivan Sinha</h1>

                </div>
                <p className='mb-2 text-lg'><span className='text-blue-400'>Full Stack Developer</span> & Badminton Enthusiast</p>
                <div className='flex flex-col space-y-1 sm:items-center sm:space-y-0 sm:flex-row sm:justify-between'>

                    <div className='links flex flex-row content-around space-x-5 text-2xl text-gray-400'>
                        <Logos/>
                    </div>

                    <p className='justify-self-start sm:justify-self-end text-sm text-gray-300'><i className="fa-solid fa-map-location-dot text-md"/> San Francisco, CA</p>
                </div>
            </div>
        </div>
    </CardSpotlightEffect>
    </div>
    )
}

function LargeScreenName({toggleContactForm}) {
    return (
        
        <div className='hidden lg:flex h-[90vh] flex-col justify-items-center justify-center items-center space-y-5 pt-10'>
            <div className='flex flex-row items-center space-x-5 justify-center text-center'>
                <PFP/>
                <div>
                    <CardSpotlightEffect customCSS={'px-1'} intensity={'0.1'}>
                    <h1 className='text-4xl tracking-tight'>Vivan Sinha</h1></CardSpotlightEffect>
                    <p className='justify-self-start text-xs px-1 md:text-xl text-gray-300'><i className="fa-solid fa-map-location-dot"/> San Francisco, CA</p>
                </div>
            </div>
            <div className='text-4xl sm:text-9xl font-bold text-center'>
                <div className='flex flex-row justify-center'>
                    <CardSpotlightEffect intensity={'0.1'} customCSS={'pr-2 '}>
                        <h1 className=''>FULL-STACK</h1>
                    </CardSpotlightEffect>
                </div>
                <div className='flex flex-row space-x-6 items-center w-full'>

                    <CardSpotlightEffect intensity={'0.1'} customCSS={'pr-2 '}>
                    <h1 className=''>DEVELOPER</h1>
                    </CardSpotlightEffect>
                    <CardSpotlightEffect intensity={'0.16'} customCSS={'rounded-full'}>
                        <div className='flex flex-row items-center space-x-4 w-full px-2 py-2 sm:px-5 sm:py-3 h-min rounded-full font-light text-sm md:text-2xl whitespace-nowrap' onClick={() => toggleContactForm()}>
                            <i className="fa-regular fa-paper-plane"></i>
                            <p className='w-full cursor-pointer'>Contact<span className='text-sm'> </span>Me</p>
                        </div>
                    </CardSpotlightEffect>
                </div>
            </div>
            
            <div className='py-5 links flex flex-row space-x-20 text-6xl text-gray-300'>
                <Logos/>
            </div>
            
        </div>
        
    )
}
export default function NameCard({toggleContactForm}) {

    return (
        
        <div className=''>
            <SmallScreenName toggleContactForm={toggleContactForm}/>
            <LargeScreenName toggleContactForm={toggleContactForm}/>
        </div>
    )
}