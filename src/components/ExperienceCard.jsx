import TechScroller, { TechNonScroller } from './TechScroller';
import { Experience } from '../data/expereinces';
import { CardSpotlightEffect } from './CardSpotlightEffect';
import Rezolve_preview_old from '../assets/Rezolve_preview_old.png'

export default function ExperienceCard({title, description, image, image2, link, technologies, reverse}) {
    // let reverse = true;
    if (image2 == null) {
        image2 = image;
    }
    
    return(
    <div className={'flex [&>*]:mx-4 sm:px-4 py-8 items-center flex-col-reverse sm:flex-row' + (reverse ? '-reverse' : '')}>
        {/* <CardSpotlightEffect> */}
        <div className='mx-3 w-[100%] sm:w-[60%] sm:h-[100%] flex flex-col justify-around'>
            <div className='flex flex-row justify-start space-x-5 items-center mb-1'>
                <h1 className='text-xl xl:text-2xl 2xl:text-3xl tracking-tight cursor-pointer'
                onClick={()=>window.open(link, '_blank')}>{title}</h1>
            </div>
            <p className='mb-2 mt-0.5 text-md xl:text-xl 2xl:text-2xl text-gray-300'>{description}</p>
            <div className='justify-self-end mt-3'>
                <TechNonScroller technologies={technologies}/>
            </div>
        </div>
        {/* </CardSpotlightEffect> */}
        
        <div className='relative w:[80%] sm:w-[40%] transition-transform duration-300 ease-out transform hover:scale-115 cursor-pointer'>
            <a href={link} target="_blank">
            <img src={image2}/>
            <img src={image} className='absolute top-0 grayscale-90 brightness-90 hover:opacity-0 transition-opacity duration-1000 ease-out'/>
            </a>
        </div>
    </div>
    )
}