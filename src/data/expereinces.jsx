import OCTO_preview from '../assets/OCTO_preview.png'
import Rezolve_preview from '../assets/Rezolve_preview.png'
import Rezolve2 from '../assets/Rezolve2.png'
import oracle_1 from '../assets/oracle_1.png'
import oracle_2 from '../assets/oracle_preview.png'
import website_preview from '../assets/website_preview.png'
import cal_preview from '../assets/calBad.png'
import scoreboard_preview from '../assets/scoreboard_preview.png'
import NEAT_preview from '../assets/NEAT_project.png'

export const techIcons = {
    'node': { className: "devicon-nodejs-plain-wordmark hover:text-green-700", link: "https://nodejs.org/en" },
    'tailwind': { className: "devicon-tailwindcss-original hover:text-blue-400", link: "https://tailwindcss.com/" },
    'vite': { className: "devicon-vitejs-plain hover:bg-gradient-to-tl hover:from-purple-500 hover:to-blue-700 hover:text-transparent hover:bg-clip-text", link: "https://vite.dev/" },
    'react': { className: "devicon-react-original-wordmark hover:text-blue-300", link: "https://react.dev/" },
    'typescript': { className: "devicon-typescript-original hover:text-blue-400", link: "https://www.typescriptlang.org/" },
    'html': { className: "devicon-html5-plain hover:text-orange-600", link: null },
    'npm': { className: "devicon-npm-original-wordmark hover:text-red-700", link: "https://www.npmjs.com/" },
    'python': { className: "devicon-python-plain-wordmark hover:bg-gradient-to-tl hover:from-yellow-500 hover:to-blue-700 hover:text-transparent hover:bg-clip-text", link: "https://www.python.org/" },
    'fastapi': { className: "devicon-fastapi-plain hover:text-teal-700", link: "https://fastapi.tiangolo.com/" },
    'flask': { className: "devicon-flask-original-wordmark hover:text-white", link: "https://flask.palletsprojects.com/en/stable/" },
    'docker': { className: "devicon-docker-plain hover:text-blue-400", link: "https://www.docker.com/" },
    'javascript': { className: "devicon-javascript-plain hover:text-yellow-300", link: null },
    'socketio': { className: "devicon-socketio-original hover:text-white", link: "https://socket.io/" },
    'postgres': { className: "devicon-postgresql-plain hover:text-blue-900", link: "https://www.postgresql.org/" },
    'gcloud': { className: "devicon-googlecloud-plain hover:text-blue-700", link: "https://cloud.google.com/" },
    'css': { className: "devicon-css3-plain hover:text-blue-600", link: null },
    'pandas': { className: "devicon-pandas-plain hover:text-blue-900", link: "https://pandas.pydata.org/" },
    'ruby': { className: "devicon-ruby-plain hover:text-red-700", link: "https://www.ruby-lang.org/en/" },
    'jekyll': { className: "devicon-jekyll-plain hover:bg-gradient-to-tl hover:from-red-900 hover:to-white hover:text-transparent hover:bg-clip-text", link: "https://jekyllrb.com/" },
    'git': { className: "devicon-git-plain hover:text-orange-700", link: "https://git-scm.com/" },
    'github': { className: "devicon-github-original hover:text-white", link: "https://github.com/about" },
    'bitbucket': { className: "devicon-bitbucket-original hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-800 hover:text-transparent hover:bg-clip-text", link: "https://bitbucket.org/product/" },
    'devicon': {className: "devicon-devicon-plain hover:text-green-900", link: "https://devicon.dev/"},
    'tensorflow': {className: "devicon-tensorflow-original hover:text-orange-500", link: "https://www.tensorflow.org/"},
  
}

export const allTechnologies = 
['node', 'tailwind', 'vite', 'react', 'typescript', 'html', 'npm', 'python', 'fastapi', 'tensorflow', 'flask', 'docker', 'javascript', 'socketio', 'postgres', 'gcloud', 'css', 'pandas', 'ruby', 'jekyll', 'git', 'github', 'bitbucket', 'devicon']

export class Experience {
    constructor(title, image, image2, description, link, technologies, current) {
        this.title = title;
        this.image = image;
        this.image2 = image2;
        this.description = description;
        this.link = link;
        this.technologies = technologies;
        this.current = current;
    }
}

export const OCTO = new Experience(
    'OCTO Berkeley',
    OCTO_preview,
    null,
    <>Developing websites for Berkeley's student organizations. Helping create communities by <span className='text-blue-300'>increasing visibility</span> and simplyfing communication.</>,
    'https://octo.asuc.org/',
    ['node', 'tailwind', 'vite', 'react', 'typescript', 'html', 'npm', 'css'],
    true,
)

export const Rezolve = new Experience(
    'Rezolve.ai',
    Rezolve_preview,
    Rezolve2,
    <>Creating tools that inform the creation of <span className='text-green-300'>agentic solutions</span>, automating tasks and generating reports with <span className='text-green-300'>large language models</span>.</>,
    'https://rezolve.ai/',
    ['python', 'gcloud', 'fastapi', 'flask', 'chatgpt', 'docker', 'socketio', 'postgres', 'pandas', 'bitbucket'],
    true,
)

const ThisWebsite = new Experience(
    'This Website',
    website_preview,
    null,
    <><span className='bg-white/75 px-1 font-bold text-black'>No libraries</span>, just react and tailwind.</>,
    "https://github.com/vivan-sinha/vivan-sinha.github.io",
    ['tailwind', 'vite', 'react', 'npm', 'github', 'devicon'],
    false,
)

const Oracle = new Experience(
    'Staffing App',
    oracle_1,
    oracle_2,
    <>Created an <span className='text-red-400 font-semibold'>AI powered</span> staffing automation tool to use work history to <span className='border-b-1 border-red-400'>generate skill tags</span> and match jobs with their <span className='border-b-1 border-red-400'>best candidates</span>.</>,
    null,
    ['python', 'docker', 'chatgpt', 'pandas', 'github'],
    false,
)

const CalBadminton = new Experience(
    'Cal Badminton',
    cal_preview,
    null,
    <>As president, <span className='text-blue-400 font-semibold'>optimized</span> and maintained our official Berkeley Badminton website. Not to mention we <span className='text-blue-400 font-semibold'>won collegiate nationals</span>.</>,
    "https://badminton.berkeley.edu",
    ['html', 'javascript', 'css', 'ruby', 'jekyll', 'git', 'github'],
    false,
)

const Scoreboard = new Experience(
    'Scoreboard Overlay',
    scoreboard_preview,
    null,
    <>Built a <span className='text-green-300'>real-time</span> scoreboard for recording my matches. Using <a href='https://socket.io/' target='_blank' className='border-b-1'>SocketIO</a> to send the data to an OBS overlay, I <span className='bg-green-400 px-1 text-black'>greenscreen</span> it over my footage and record the game.</>,
    'https://github.com/vivan-sinha/scoreboard',
    ['html','python', 'flask', 'javascript', 'socketio', 'css', 'git', 'github'],
    false
)

const NEAT = new Experience(
    'NEAT/LNN',
    NEAT_preview,
    null,
    <>Compared the performance of MIT's liquid neural network algorithm to the classical genetic NEAT on a simple driving game.</>,
    null,
    ['python', 'pandas', 'tensorflow', 'git', 'github'],
    false,
)

export const Experiences = [OCTO, Rezolve, ThisWebsite, Oracle, CalBadminton, Scoreboard, NEAT]