import { techIcons } from "../data/expereinces";
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

    function technologyToIcon(tech, index) {
        const cur = techIcons[tech]
        if (cur.link === null) {
            return (
                <i key={index} className={cur.className}/>
            )
        }
        return (
            <i key={index} className={cur.className} onClick={()=>window.open(cur.link, '_blank')}/>
        )
    }
    return (
        <div
        className='w-[100%] inline-flex flex-nowrap
        overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)'
        onMouseEnter={()=>{handleHovered()}}
        onMouseLeave={()=>{handleExited()}}>
            {Array(numDuplicates).keys().map((i) => {
                return (
                    <div
                    id={title + i}
                    key={i}
                    className='animate-infinite-scroll'>
                        <div className={'w-auto text-3xl xl:text-4xl 2xl:text-5xl text-gray-300 [&>*]:mx-2.5 [&>*]:cursor-pointer '}>
                            {technologies.map((tech, index) => technologyToIcon(tech, index))}
                            {/* <i className="devicon-nodejs-plain-wordmark hover:text-green-700"
                            onClick={()=>window.open("https://nodejs.org/en", "_blank")}/>
                            <i className="devicon-tailwindcss-original hover:text-blue-400"
                            onClick={()=>window.open("https://tailwindcss.com/", "_blank")}/>
                            <i className="devicon-vitejs-plain 
                            hover:bg-gradient-to-tl hover:from-purple-500 hover:to-blue-700 hover:text-transparent hover:bg-clip-text"
                            onClick={()=>window.open("https://vite.dev/", "_blank")}/>
                            <i className="devicon-react-original-wordmark hover:text-blue-300"
                            onClick={()=>window.open("https://react.dev/", "_blank")}/>
                            <i className="devicon-typescript-original hover:text-blue-400"
                            onClick={()=>window.open("https://www.typescriptlang.org/", "_blank")}/>
                            <i className="devicon-html5-plain hover:text-orange-600"/>
                            <i className="devicon-npm-original-wordmark hover:text-red-700"
                            onClick={()=>window.open("", "_blank")}/>
                            <i className="devicon-python-plain-wordmark
                            hover:bg-gradient-to-tl hover:from-yellow-300 hover:to-blue-700 hover:text-transparent hover:bg-clip-text"
                            onClick={()=>window.open("https://www.python.org/", "_blank")}/>
                            <i className="devicon-fastapi-plain hover:text-teal-700"
                            onClick={()=>window.open("https://fastapi.tiangolo.com/", "_blank")}/>
                            <i className="devicon-flask-original-wordmark hover:text-white"
                            onClick={()=>window.open("https://flask.palletsprojects.com/en/stable/", "_blank")}/>
                            <i className="devicon-docker-plain hover:text-blue-400"
                            onClick={()=>window.open("https://www.docker.com/", "_blank")}/>
                            <i className="devicon-javascript-plain hover:text-yellow-300"/>
                            <i className="devicon-socketio-original-wordmark hover:text-white"
                            onClick={()=>window.open("https://socket.io/", "_blank")}/>
                            <i className="devicon-postgresql-plain hover:text-blue-900"
                            onClick={()=>window.open("https://www.postgresql.org/", "_blank")}/>
                            <i className="devicon-googlecloud-plain hover:text-blue-700"
                            onClick={()=>window.open("https://www.postgresql.org/", "_blank")}/>
                            <i className="devicon-css3-plain hover:text-blue-600"/>
                            <i className="devicon-pandas-plain hover:text-blue-900"
                            onClick={()=>window.open(null, "_blank")}/>
                            <i className="devicon-ruby-plain hover:text-red-700"
                            onClick={()=>window.open("https://www.ruby-lang.org/en/", "_blank")}/>
                            <i className="devicon-jekyll-plain
                            hover:bg-gradient-to-tl hover:from-red-900 hover:to-white hover:text-transparent hover:bg-clip-text"
                            onClick={()=>window.open("https://www.ruby-lang.org/en/", "_blank")}/>
                            <i className="devicon-git-plain hover:text-orange-700"
                            onClick={()=>window.open("https://git-scm.com/", "_blank")}/>
                            <i className="devicon-github-original hover:text-white"
                            onClick={()=>window.open("https://github.com/about", "_blank")}/>
                            <i className="devicon-bitbucket-original 
                            hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-800 hover:text-transparent hover:bg-clip-text"
                            onClick={()=>window.open("https://bitbucket.org/product/", "_blank")}/> */}

                        </div>
                    </div>
                )
            })}
        </div>
    )
}