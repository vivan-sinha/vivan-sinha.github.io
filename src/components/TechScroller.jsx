import { techIcons } from "../data/expereinces";

export function technologyToIcon(tech, index) {
    const cur = techIcons[tech]
    if (cur.link === null) {
        return (
            <i key={index} className={cur.className}/>
        )
    }
    return (
        <a href={cur.link} target='_blank'>
            <i key={index} className={cur.className}/>
        </a>
    )
}

export function TechNonScroller({technologies}) {
    return (
        <div className={'w-auto text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 [&>*]:mx-2.5 overflow-hidden'}>
            {technologies.map((tech, index) => technologyToIcon(tech, index))}
        </div>
    )
}

export default function TechScroller({title, technologies}) {
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
        }
    }

    return (
        <div
        className='w-[100%] inline-flex flex-nowrap
        overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)'
        onMouseEnter={()=>{handleHovered()}}
        onMouseLeave={()=>{handleExited()}}>
            {[...Array(numDuplicates).keys()].map((i) => {
                return (
                    <div
                    id={title + i}
                    key={title+i}
                    className='animate-infinite-scroll'>
                        <div className={'w-auto text-5xl xl:text-6xl 2xl:text-7xl text-gray-300 [&>*]:mx-2.5 [&>*]:cursor-pointer '}>
                            {technologies.map((tech, index) => technologyToIcon(tech, index))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}