import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Context from "../Context"

export default function SignIn () {

    const BASE_URL = "http://localhost:8000/user/"

    const initialState = { 
        userName: '',
        password: '',
    }

    const [formState, setFormState] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const { userInfo, setUserInfo } = useContext(Context)

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = async () => {
            const myUser = await axios.get(`${BASE_URL}`, )
            console.log(myUser)
            if (myUser.data.length === 0) {
                setIsActive(true)
            }
            
            if (myUser.data[0].password === formState.password) {
                setUserInfo({...userInfo, name: myUser.data[0].name, userId: myUser.data[0]._id,})
                console.log(myUser.data[0].password)
                setIsActive(false)
                navigate("/Profile")
            } else {
                setIsActive(true)
            }
        }
        user()
        setFormState(initialState)
    }

    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const logIn = async () => {
        await axios.get(`http://localhost:8000/`)
    }

    const create = () => {
        navigate('/createUser')
    }

    return (
        <div>
            <div className="loginForm" onSubmit={handleSubmit}>
                <h2>Welcome to Lyric Lounge, please login to continue:</h2>
                <form className="loglogformform">

                    <label htmlFor="username">Username / Alias: </label>
                    <input type="text" placeholder="Enter username/alias here" id="userName" onChange={handleChange} value={formState.userName}/>

                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Enter password here" id="password" onChange={handleChange} value={formState.password} />
                    <p className="invalid" style={{display: isActive? "": "none"}}>Username or password is incorrect. Please try again!</p>
                    <button type="submit" className="submit">Log In</button>
                    <button type="reset" className="submit" id="resetBtn">Forgot Password ?</button>
                </form>       
            </div>
            <div className="lineBreak"></div>
            <div>
               
            <button className="createBtn" onClick={create}>Create An Account</button>
          </div>
       </div>
    )
}
