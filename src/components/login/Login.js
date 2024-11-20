import { useState } from "react";
import './Login.scss'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCheck, setCheck] = useState(false);

    const handleChangeEmail = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmail(values => ({ ...values, [name]: value }))
    }

    const handleChangePassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPassword(values => ({ ...values, [name]: value }))
    }

    const handleChecked = () => {
        setCheck(!isCheck)
    }

    const handleSubmit = (event) => {
        console.log(email, password, isCheck)
        event.preventDefault()

    }

    return (
        <form className="form-control">

            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email address</label>
                <input onChange={(event) => { handleChangeEmail(event) }} name="email" type="email" id="form2Example1" class="form-control" />
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input onChange={(event) => { handleChangePassword(event) }} name="password" type="password" id="form2Example2" class="form-control" />

            </div>

            <div className="form-outline mb-4">
                <label className="form-label">
                    <input
                        type="checkbox"
                        checked={isCheck} // Kiểm tra xem checkbox có được chọn không
                        onChange={handleChecked} // Cập nhật giá trị khi checkbox thay đổi
                    />
                    {" "} Is Admin?
                </label>
            </div>

            <div>
                <button onClick={(event) => { handleSubmit(event) }} className="btn btn-primary" type="submit">Login</button>
            </div>

        </form>
    )
}

export default Login;
