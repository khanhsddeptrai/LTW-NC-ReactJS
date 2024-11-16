import { useState } from "react";
import './Login.scss'

function Login() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [isCheck, setCheck] = useState(false);
    const handleChecked = () => {
        setCheck(!isCheck)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
        console.log(isCheck)
    }

    return (
        <form>

            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email address</label>
                <input type="email" id="form2Example1" class="form-control" />
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control" />

            </div>

            <div>
                <button className="btn btn-primary" type="submit">Login</button>
            </div>

        </form>
    )
}

export default Login;
