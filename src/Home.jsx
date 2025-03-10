
import logo from './assets/logoBlack.svg'
import shuttle from './assets/shuttlecock.svg'
import {CardSpotlightEffect} from './components/CardSpotlightEffect'
import { useState } from 'react'

function NameCard() {
    const [copied, setCopied] = useState(false)
    const [hoverCopy, setHoverCopy] = useState(false)
    const [hoverYT, setHoverYT] = useState(false)
    const [hoverGH, setHoverGH] = useState(false)
    const [hoverLinkedIn, setHoverLinkedIn] = useState(false)
    function copyEmail() {
        setCopied(true)
        navigator.clipboard.writeText('vivan.sinha.003@gmail.com')

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className='flex flex-row space-x-8 px-7 py-5 items-center'>
            <div className=''>
                <img src={logo} className='w-20 rounded-full border border-slate-200'></img>
            </div>

            <div>
                <h1 className='text-3xl tracking-tight'>Vivan Sinha</h1>
                    
                <p className='mb-2 text-md'><span className='text-blue-400'>Full Stack Developer</span> & Badminton Enjoyer</p>
                <div className='flex flex-row w-full justify-between items-end'>
                    <div className='links flex flex-row content-around space-x-5 text-xl text-gray-400'>
                        <i className={"fa-brands fa-youtube cursor-pointer " + (hoverYT?'text-red-700':'')}
                            onMouseEnter={()=>setHoverYT(true)} 
                            onMouseLeave={()=>setHoverYT(false)}
                            onClick={() => window.open('https://www.youtube.com/@vivansinha')}/>
                        <i className={"fa-brands fa-github cursor-pointer " + (hoverGH?'text-white':'')}
                            onMouseEnter={()=>setHoverGH(true)} 
                            onMouseLeave={()=>setHoverGH(false)}
                            onClick={() => window.open('https://github.com/vivan-sinha')}/>
                        <i className={"fa-brands fa-linkedin cursor-pointer "  + (hoverLinkedIn?'text-blue-600':'')}
                            onMouseEnter={()=>setHoverLinkedIn(true)} 
                            onMouseLeave={()=>setHoverLinkedIn(false)}
                            onClick={() => window.open('https://www.linkedin.com/in/vivan-sinha/')}/>
                        
                        {copied ? 
                            <i className="fa-solid fa-clipboard-check pl-1 text-green-600"
                            onMouseEnter={()=>{setHoverCopy(true)}} 
                            onMouseLeave={()=>setHoverCopy(false)}
                            onClick={() => copyEmail()}/> : 
                            (
                                hoverCopy ? 
                                <i className="fa-solid fa-clipboard pl-1 cursor-pointer"
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
                    <p className='justify-self-end text-sm text-gray-300'><i className="fa-solid fa-location-dot"/> Berkeley, CA</p>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    let stuff = []
    for (let i = 0; i < 100; i++) {
        stuff.push("hi")
    }
  return (
        <div className='justify-self-center w-auto max sm:max-w-[60vw] md:max-w-[50vw] space-y-10 pt-20'>
            <CardSpotlightEffect><NameCard></NameCard></CardSpotlightEffect>
            <div>
            <h1>Currently Working On:</h1>

            </div>
            <div>
            <h1>Preivous Projects:</h1>
            { stuff.map((s, index)=> {
                return (
                    <CardSpotlightEffect key={index}><div className='w-50'>{s}</div></CardSpotlightEffect>
                )
            })}
            </div>
        </div>
  )
}
