
import logo from './assets/logoBlack.svg'
import {CardSpotlightEffect} from './components/CardSpotlightEffect'
import NameCard from './components/NameCard'
import ExperienceCard from './components/ExperienceCard'
import octoPreview from './assets/OCTO_preview.png'
import {OCTO} from './data/expereinces'
import { useState } from 'react'



export default function Home() {
    let stuff = []
    for (let i = 0; i < 10; i++) {
        stuff.push("hi")
    }
  return (
        <div className='justify-self-center w-auto max-w-[90vw] xl:max-w-[70vw] 2xl:max-w-[50vw] space-y-10 mt-12'>
            <div className='rounded-xl shadow-2xl'>
                <CardSpotlightEffect><NameCard></NameCard></CardSpotlightEffect>
            </div>
            <div>
            <h1 className='text-2xl 2xl:text-3xl mb-5 text-gray-200'>Currently Working On:</h1>
            <div className='current-projects-container space-y-5 mb-5'>
            <ExperienceCard title={OCTO.title} image={octoPreview} description={OCTO.description} link={OCTO.link} technologies={OCTO.technologies}></ExperienceCard>
            </div>
            </div>
            <div>
            <h1>Preivous Projects:</h1>
            <div className='projects-container space-y-5'>
            { stuff.map((s, index)=> {
                return (
                    <CardSpotlightEffect key={index}><div className='px-5 shadow-2xl'>{s}</div></CardSpotlightEffect>
                )
            })}
            </div>
            </div>
        </div>
  )
}
