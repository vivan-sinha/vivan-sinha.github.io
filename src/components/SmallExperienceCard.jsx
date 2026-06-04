import { TechNonScroller } from "./TechScroller"
import { CardSpotlightEffect } from "./CardSpotlightEffect"

export default function SmallExperienceCard({ title, description, image, image2, link, technologies }) {
  return (
    <div className='relative z-0 hover:z-50 flex flex-col h-min bg-white/2 backdrop-blur-3xl p-2 space-y-2 overflow-visible'>
        <div className='relative w-full transition-transform duration-500 ease-out transform hover:scale-110 md:hover:scale-115 lg:hover:scale-130'>
            <a href={link} target="_blank" className='block'>
            <img src={image2 !== null ? image2 : image} className='w-full h-full object-cover'/>
            <img src={image} className='absolute top-0 grayscale-95 brightness-100 hover:opacity-0 transition duration-500 ease-out'/>
            </a>
        </div>
        <a href={link} className='self-start' target="_blank"><CardSpotlightEffect intensity={'0.12'} customCSS={'w-fit'}><h1 className='text-2xl w-fit'>{title}</h1></CardSpotlightEffect></a>
        <p className='text-md mb-4'>{description}</p>
        <TechNonScroller styles={'small'} technologies={technologies}></TechNonScroller>
    </div>
  )
}
