
import logo from './assets/logoBlack.svg'
import {CardSpotlightEffect} from './components/CardSpotlightEffect'
import NameCard from './components/NameCard'
import ExperienceCard from './components/ExperienceCard'
import octoPreview from './assets/OCTO_preview.png'
import {OCTO} from './data/expereinces'
import { Rezolve } from './data/expereinces'
import { Experiences, allTechnologies } from './data/expereinces'
import TechScroller from './components/TechScroller'
import { useState } from 'react'



export default function Home() {
    let stuff = []
    for (let i = 0; i < 10; i++) {
        stuff.push("hi")
    }
    
    return (
        <CardSpotlightEffect>
            <div className='w-[100vw]'>
                <div className='justify-self-center max-w-[90vw] xl:max-w-[65vw] 2xl:max-w-[50vw] space-y-10 mb-20'>
                    <div className='rounded-xl mt-20 mb-22'>
                        <CardSpotlightEffect><NameCard></NameCard></CardSpotlightEffect>
                    </div>
                    <div className='mb-15'>
                        <h1 className='text-2xl 2xl:text-3xl mb-12 text-gray-200'>Currently Working With:</h1>
                        <div className='current-projects-container space-y-10'>
                            { Experiences.filter((experience) => experience.current).map((experience, index) => {
                                return (
                                    <ExperienceCard key={index} title={experience.title} image={experience.image} image2={experience.image2} description={experience.description} link={experience.link} technologies={experience.technologies} reverse={index % 2 != 0}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className='mb-15'>
                        <h1 className='text-2xl 2xl:text-3xl mb-12 text-gray-200'>Previous Projects:</h1>
                        <div className='current-projects-container space-y-10'>
                            { Experiences.filter((experience) => experience.current).map((experience, index) => {
                                return (
                                    <ExperienceCard key={index} title={experience.title} image={experience.image} image2={experience.image2} description={experience.description} link={experience.link} technologies={experience.technologies} reverse={index % 2 != 0}/>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl 2xl:text-3xl mb-10 text-gray-200'>Experienced In:</h1>
                        <TechScroller title='all' technologies={allTechnologies}/>
                    </div>
                </div>
            </div>
        </CardSpotlightEffect>
    )
}
