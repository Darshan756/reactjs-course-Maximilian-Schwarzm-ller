import investImage from '../assets/investment-calculator-logo.png'
export default function Header() {
    return (
        <header >
            <img src={investImage} alt="" />
            <h1>Investment Calculator</h1>
        </header>
    )
}