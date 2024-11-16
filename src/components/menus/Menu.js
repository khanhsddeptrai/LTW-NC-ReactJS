import { Link } from "react-router-dom"

import './Menu.scss'

export default function Menu() {
    let list = [
        { link: "https://react.dev/", content: "link to react" }
    ]

    return (
        <div className="topnav header">
            <div className="row">
                <div className="col-10">
                    <Link to='/car'>Cars</Link>
                    <Link to='/hello'>Hello</Link>
                    <Link to='/infor'>Information</Link>
                </div>

                <div className="col-2">
                    <Link className="text" to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}