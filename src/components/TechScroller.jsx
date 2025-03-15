import { techIcons } from "../data/expereinces";
import React, { useRef, useEffect } from 'react';
import chatgpt from '../assets/chatgpt.png'


export function technologyToIcon(tech, index) {
    if (tech == 'chatgpt') {
        return (
            <img key={index} src={chatgpt} className="translate-y-[-2px] inline-block h-8 xl:h-8 2xl:h-10 invert-100 opacity-80 hover:opacity-100 transition-opacity duration-500 ease-out cursor-pointer"
            onClick={() => window.open('https://platform.openai.com/docs/overview', '_blank')}/>
        )
    }
    const cur = techIcons[tech]
    if (cur.link === null) {
        return (
            <i key={index} className={cur.className}/>
        )
    }
    return (
        <a  key={index} href={cur.link} target='_blank'>
            <i className={cur.className}/>
        </a>
    )
}

export function TechNonScroller({technologies, styles}) {
    if (styles == null || styles == undefined || styles == '') {
        styles = 'text-3xl xl:text-4xl 2xl:text-5xl space-x-5'
    }

    if (styles == 'small') {
        styles = 'text-3xl xl:text-3xl 2xl:text-4xl space-x-3'
    }
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className={`w-auto ${styles} text-gray-300 overflow-x-auto overflow-y-hidden flex items-center [mask-image:linear-gradient(to_right,black_90%,transparent_100%)]`}>
            {technologies.map((tech, index) => technologyToIcon(tech, index))}
            {/* <i className="fa-solid fa-circle text-white/0"></i> */}
        </div>
    )
}

export default function TechScroller({title, technologies}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        container.scrollTo({left:500, behavior:'smooth'})

        const handleWheel = (e) => {
            if (e.deltaY * e.deltaY > e.deltaX * e.deltaX) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const numDuplicates = 3;
    function handleHovered() {
        for (let i = 0; i < numDuplicates; i++) {
            const element = document.getElementById(title+i)
            element.style.animationPlayState = 'paused';
        }
    }
    function handleExited() {
        for (let i = 0; i < numDuplicates; i++) {
            const element = document.getElementById(title+i)
            element.style.animationPlayState = 'running';

            const container = containerRef.current; 
            container.scrollTo({left:500, behavior:'smooth'})
        }
    }

    return (
        <div
        ref={containerRef}
        className='w-full inline-flex flex-nowrap overflow-x-auto overflow-y-hidden 
  [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]'
        onMouseEnter={()=>{handleHovered()}}
        onMouseLeave={()=>{handleExited()}}>
            {[...Array(numDuplicates).keys()].map((i) => {
                return (
                    <div
                    id={title + i}
                    key={title+i}
                    className='animate-infinite-scroll'>
                        <div className={'w-auto text-5xl xl:text-6xl 2xl:text-7xl text-gray-300 [&>*]:mx-2.5 [&>*]:cursor-pointer flex items-center'}>
                            {technologies.map((tech, index) => technologyToIcon(tech, index))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}