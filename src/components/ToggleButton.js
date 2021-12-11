import { useState } from 'react';



export function ToggleButton() {

    // const [toggleBtn, setToggleBtn] = useState();

    // const changeBack = () => {
    //     const html = document.getElementsByTagName('html')
    //     setToggleBtn((toggle) => {
    //         toggle.classList.toggle
    //     })

    // onClick={changeBack}
    // }

    return (
        <div className="toggle">
            <form>
                <input className="slider round" id="checkbox" type="checkbox" />
                <label className="switch" for="checkbox">
                    <div className="ball"></div>
                </label>
            </form>
        </div>
    )
}



export default ToggleButton
