import icon from '../assets/Troll Face.png'

export default function Navbar() {
    return (
        <nav>
            <img src={icon} alt="icon" className='nav-icon' />
            <h1 className='nav-title'>MemeGenerator</h1>
            <h3 className='nav-subtitle'>React App</h3>
        </nav>
    )
}