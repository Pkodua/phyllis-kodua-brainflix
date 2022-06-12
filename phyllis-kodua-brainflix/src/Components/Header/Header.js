import './Header.scss'
import Logo from '../../Assets/Logo/logo.svg'
import Profile from '../../Assets/Images/profile.jpg'



export default function Header() {
    return (
        <header>
            <div className='header'>
                <img className='header__logo' src={Logo} alt='Logo'></img>
                <div className='header__container'>
                    <div className='header__search'>

                        <input placeholder='Search'></input>
                    </div>
                    <div className='header__profile'>

                        <img src={Profile} alt='profile'></img>
                    </div>
                </div >
                <div className='header__button'>
                    <button>UPLOAD</button>
                </div>
            </div>
        </header>
    )
}