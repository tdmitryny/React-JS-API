import { ToggleButton } from './ToggleButton'

function Header(props) {
    return (
        <header className="header">

            <h1 style={{ fontSize: '12rem', color: '#000' }}>{props.name}</h1>
            {props.children}

            <ToggleButton />
        </header>
    )
}

export default Header
