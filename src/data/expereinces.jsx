import OCTO_preview from '../assets/OCTO_preview.png'
import Rezolve_preview from '../assets/Rezolve_preview.png'
import Rezolve2 from '../assets/Rezolve2.png'
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
    'socketio': { className: "devicon-socketio-original-wordmark hover:text-white", link: "https://socket.io/" },
    'postgres': { className: "devicon-postgresql-plain hover:text-blue-900", link: "https://www.postgresql.org/" },
    'gcloud': { className: "devicon-googlecloud-plain hover:text-blue-700", link: "https://cloud.google.com/" },
    'css': { className: "devicon-css3-plain hover:text-blue-600", link: null },
    'pandas': { className: "devicon-pandas-plain hover:text-blue-900", link: "https://pandas.pydata.org/" },
    'ruby': { className: "devicon-ruby-plain hover:text-red-700", link: "https://www.ruby-lang.org/en/" },
    'jekyll': { className: "devicon-jekyll-plain hover:bg-gradient-to-tl hover:from-red-900 hover:to-white hover:text-transparent hover:bg-clip-text", link: "https://jekyllrb.com/" },
    'git': { className: "devicon-git-plain hover:text-orange-700", link: "https://git-scm.com/" },
    'github': { className: "devicon-github-original hover:text-white", link: "https://github.com/about" },
    'bitbucket': { className: "devicon-bitbucket-original hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-800 hover:text-transparent hover:bg-clip-text", link: "https://bitbucket.org/product/" },
}

export const allTechnologies = 
['node', 'tailwind', 'vite', 'react', 'typescript', 'html', 'npm', 'python', 'fastapi', 'flask', 'docker', 'javascript', 'socketio', 'postgres', 'gcloud', 'css', 'pandas', 'ruby', 'jekyll', 'git', 'github', 'bitbucket']

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
    <>Creating tools that inform the creation of <span className='text-green-300'>agentic solutions</span>, generating reports and automating tasks with <span className='text-green-300'>large language models</span>.</>,
    'https://rezolve.ai/',
    ['python', 'gcloud', 'fastapi', 'flask', 'docker', 'socketio', 'postgres', 'pandas', 'bitbucket'],
    true,
)

export const Experiences = [OCTO, Rezolve]