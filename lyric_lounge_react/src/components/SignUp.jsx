import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp () {
    const BASE_URL = 'http://localhost:8000'

    const initialState = {
        name: "",
        photo_url: "",
        location: "",
        contact: "",
        password: "",
        passwordValid: ""
    }

    const [formState, setFormState] = useState(initialState)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            name: formState.name,
            photo_url: formState.photo_url,
            location: formState.location,
            contact: formState.contact,
            password: formState.password
        }

        await axios.post(`${BASE_URL}/user/`, newUser)

        setFormState(initialState)
        navigate('/')
    }

    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value })
    }
    const cancel = () => {
        setFormState(initialState)
        navigate('/')
    }
    return (
        <div className='createUserContainer'>
            <div className='createUserForm' onSubmit = {handleSubmit}>
                <form>
                    <label htmlFor='name'>Name / Alias: </label>
                    <input type='text' placeholder="Enter username / alias here" id="name" onChange={handleChange} value={formState.name}></input>

                    <label htmlFor='photo_url'>Photo Link: </label>
                    <input type='text' placeholder="Enter photo url here" id='photo_url' onChange={handleChange} value={formState.photo_url}></input>

                    <label htmlFor='location'>Location: </label>
                    <input type='text' placeholder="Enter location" id='location' onChange={handleChange} value={formState.location}></input>

                    <label htmlFor='contact'>Preferred Contact: </label>
                    <input type='text' placeholder='Enter preferred contact here' id='contact' onChange={handleChange} value={formState.contact}></input>

                    <label htmlFor='password'>Password: </label>
                    <input type='password' placeholder='Enter password here' id='password' onChange={handleChange} value={formState.password}></input>
                    
                    <label htmlFor='passwordValid'>Confirm Password: </label>
                    <input type='passwordValid' placeholder='Enter password here' id='passwordValid' onChange={handleChange} value={formState.passwordValid}></input>

                    <div className='createButtons'>
                        <button type="submit" className='createBtn'>Create New Account</button>
                        <button type="cancel" className='submit' id='cancelBtn' onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}