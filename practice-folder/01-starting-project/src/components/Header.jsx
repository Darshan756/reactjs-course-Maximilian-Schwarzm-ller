import headerLogo from '../assets/react-core-concepts.png' 

const coreDiscription = [
  'Fundamental','Core','Crucial'
] 
function genRandInt(max){
    return Math.floor(Math.random() * (max + 1) )
}
const randomNumber = genRandInt(2)
const description = coreDiscription[randomNumber]

export default function Header(){
    return(
        <header>
        <img src={headerLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
           {description} concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}