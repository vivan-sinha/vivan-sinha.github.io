import {CardSpotlightEffect} from './components/CardSpotlightEffect'
import NameCard from './components/NameCard'
import BigExperienceCard from './components/BigExperienceCard'
import SmallExperienceCard from './components/SmallExperienceCard'
import { Experiences, allTechnologies } from './data/expereinces'
import TechScroller, { TechNonScroller } from './components/TechScroller'
import ContactFormModal from './components/ContactFormModal'
import { useState, useRef, useEffect } from 'react'



export default function Home() {

    const modalRef = useRef(null);
    const startRef = useRef(null);

    const textBoxClicked = useRef(false)

    const [contactToggled, setToggleContact] = useState(false)
    function toggleContactForm() {
        setToggleContact((prev) =>{
            if (prev && textBoxClicked.current) {
                textBoxClicked.current = false
                location.reload()
            }
            return !prev
        })
    }

    const [scrollDown, setScrollDown] = useState(true)


    function scrollToElement(ref) {
        if (!scrollDown) {
            window.scrollTo({top:0, behavior:'smooth'})
            return
        } else {
            ref.current?.scrollIntoView({behavior:'smooth'})
        }
    }

    const hoveringTopArrow = useRef(false)
    const topArrowTimeout = useRef(null)
    const hoverArrowTimeout = useRef(false)
    
    function handleArrowEnter(arrowRef, timeoutRef) {
        if (arrowRef == hoveringTopArrow && hoverArrowTimeout.current) {
            return
        }
        arrowRef.current = true
        timeoutRef.current = setTimeout(() => {
            if (arrowRef.current) {
                scrollToElement(startRef)
            }
        }, [1000])
    }
    

    function handleArrowLeave(arrowRef, timeoutRef) {
        clearTimeout(timeoutRef.current)
        arrowRef.current = false
    }


    const [startBlinking, setStartBlinking] = useState(false)
    const [stopBlinking, setStopBlinking] = useState(false)

    const [scrollDirection, setScrollDirection] = useState(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            setStopBlinking(true)
            if (window.scrollY > window.innerHeight/2) {
                setScrollDown(false)
            } else {
                setScrollDown(true)
            }

            if (window.scrollY > prevScrollY.current) {
                setScrollDirection(true);
            } else {
                setScrollDirection(false);
            }
            prevScrollY.current = window.scrollY;
        }
        document.addEventListener('scroll', handleScroll)

        setTimeout(() => {
            setStartBlinking(true)
        }, 12000)
        
        return () => {
            document.removeEventListener('scroll', handleScroll)
            clearTimeout(topArrowTimeout.current)
        }
    }, [])

    function ExperienceCardCol({numRows, styles, whichIndex}) {
        return (
            <div className={styles} key={whichIndex}>
                                
                {
                    Experiences.filter((experience) => experience.isProject && !experience.current).filter((_, index) => index % numRows == whichIndex).map((experience, index) => {
                        return (
                            <SmallExperienceCard key={index} title={experience.title} image={experience.image} image2={experience.image2} description={experience.description} link={experience.link} technologies={experience.technologies}/>
                        )
                    })
                }
            </div>
        )
    }
    
    return (
        <CardSpotlightEffect styles="" lag={'100'} intensity={contactToggled ? '0' : ''} radius='18000px'>
            <ContactFormModal modalRef={modalRef} contactToggled={contactToggled} toggleContactForm={toggleContactForm} textBoxClicked={textBoxClicked}/>

            <div className='w-[100vw] flex flex-col items-center'>
                <div className='justify-self-center max-w-[90vw] xl:max-w-[65vw] 2xl:max-w-[50vw] space-y-10 mb-5'>

                    <div className='flex flex-col justify-center items-center mb-10'>
                        <NameCard toggleContactForm={toggleContactForm}></NameCard>
                        
                        <CardSpotlightEffect intensity={'0.1'}customCSS={'hidden lg:block rounded-2xl'}>
                            <i className={`self-center justify-self-center fa-solid fa-angle-${scrollDown? 'down' : 'up'} text-5xl px-10 py-3 text-white ${scrollDown && startBlinking && !stopBlinking  ? 'animate-blink' : ''}
                            transition-opacity duration-300 opacity-25 hover:opacity-75`} 
                            onClick={() => {scrollToElement(startRef)}}
                            onMouseEnter={()=>handleArrowEnter(hoveringTopArrow, topArrowTimeout)}
                            onMouseLeave={()=>handleArrowLeave(hoveringTopArrow, topArrowTimeout)}
                            ></i>
                        </CardSpotlightEffect>
                    </div>


                    <div ref={startRef} className='mb-15 lg:pt-10'>
                        <h1 className='text-2xl 2xl:text-3xl mb-12 text-gray-200'>Currently Working With:</h1>
                        <div className='current-projects-container space-y-10'>
                            { Experiences.filter((experience) => experience.isCurrent && !experience.isProject).map((experience, index) => {
                                return (
                                    <BigExperienceCard key={index} title={experience.title} image={experience.image} image2={experience.image2} description={experience.description} link={experience.link} technologies={experience.technologies} reverse={index % 2 != 0}/>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className='mb-15 lg:pt-10'>
                        <h1 className='text-2xl 2xl:text-3xl mb-12 text-gray-200'>Previous Work:</h1>
                        <div className='current-projects-container space-y-10'>
                            { Experiences.filter((experience) => !experience.isCurrent && !experience.isProject).map((experience, index) => {
                                return (
                                    <BigExperienceCard key={index} title={experience.title} image={experience.image} image2={experience.image2} description={experience.description} link={experience.link} technologies={experience.technologies} reverse={index % 2 != 0}/>
                                )
                            })}
                        </div>
                    </div>

                    
                    <div className='mb-15'>
                        <h1 className='text-2xl 2xl:text-3xl mb-12 text-gray-200'>Previous Projects:</h1>
                        {/* lg:w-[30%] min-w-[80vw] md:w-[48%] sm:min-w-[10vw]  */}
                        <div className='current-projects-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-10'>
                            <ExperienceCardCol numRows={3} styles='3rows hidden lg:flex flex-col space-y-10' whichIndex={0}/>
                            <ExperienceCardCol numRows={3} styles='3rows hidden lg:flex flex-col space-y-10' whichIndex={1}/>
                            <ExperienceCardCol numRows={3} styles='3rows hidden lg:flex flex-col space-y-10' whichIndex={2}/>

                            <ExperienceCardCol numRows={2} styles='2rows hidden md:flex lg:hidden flex-col space-y-10' whichIndex={0}/>
                            <ExperienceCardCol numRows={2} styles='2rows hidden md:flex lg:hidden flex-col space-y-10' whichIndex={1}/>

                            <ExperienceCardCol numRows={1} styles='1rows flex md:hidden flex-col space-y-10' whichIndex={0}/>
                        </div>
                    </div>


                    <div className='mb-10 self-center'>
                        <h1 className='text-2xl 2xl:text-3xl mb-10 text-gray-200'>Experienced In:</h1>
                        <TechScroller title='all' technologies={allTechnologies}/>
                    </div>
                    
                </div>
            </div>
            <div 
            className={`hidden lg:flex flex-row justify-center rounded-full fixed bottom-15 right-15
            transition-opacity duration-300 ease-in-out
            ${((prevScrollY.current > window.innerHeight * 1.2) && !scrollDirection) ? 'z-auto opacity-100' : '-z-10 opacity-0'}`}
            onClick={() => {
                
                    window.scrollTo({top:0, behavior:'smooth'});
                
                
            }}>
                <CardSpotlightEffect intensity={'0.1'} 
                    customCSS={`rounded-full`}>
                        <i className='fa-solid fa-angle-up self-center justify-self-center text-5xl px-4 py-3 text-white/75'
                        />
                    </CardSpotlightEffect>
                    </div>
        </CardSpotlightEffect>
    )
}
