import TechScroller from './TechScroller';
import { Experience } from '../data/expereinces';

export default function ExperienceCard({title, description, image, link, technologies}) {
    
    
    return(
    <div className='flex flex-row space-x-8 px-7 py-5 items-center'>
        <div className='w-[60%] h-[100%] flex flex-col justify-around'>
            <div className='flex flex-row justify-start space-x-5 items-center mb-1'>
                <h1 className='text-xl xl:text-2xl 2xl:text-3xl tracking-tight cursor-pointer'
                onClick={()=>window.open(link, '_blank')}>{title}</h1>
            </div>
            <p className='mb-2 text-md xl:text-xl 2xl:text-2xl text-gray-300'>{description}</p>
            <div className='justify-self-end'>
                <TechScroller title={title} technologies={technologies}/>
            </div>
        </div>

        <div className='relative w-[40%] transition-transform duration-300 ease-out transform hover:scale-125 cursor-pointer'>
            <img src={image} 
            onClick={()=>window.open(link, '_blank')}
            className=''></img>
            <img src={image} 
            onClick={()=>window.open(link, '_blank')}
            className='absolute top-0 grayscale-90 hover:opacity-0 transition-opacity duration-1000 ease-out'></img>
        </div>
    </div>
    )
}