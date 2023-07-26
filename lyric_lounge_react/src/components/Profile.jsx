import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from '../Context'

const ProfilePage = () => {
    const { userInfo, setUserInfo } = useContext(Context)
    const [ user, setUser ] = useState({})
    let { id } = useParams()
    const [ name, setName ] = useState('')
    const [ photo_url, setPhoto_url ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ contact, setContact ] = useState('')
    const [ password, setPassword ] = useState('')


    const userData = {
        name,
        photo_url,
        location,
        contact,
        password,
    }

    const saveUserData = async () => {
        try {
            const response = await axios.put(
                'localhost:8000/user/', userData
            )
            console.log('User profile updated successfully:', response.data)
        } catch (error) {
            console.error('Error updating user profile:', error)
        }
    }

    const handleSubmitProfile = (e) => {
        e.preventDefault()

        console.log(userData)
        saveUserData(userData)

        alert('User profile updated successfully!')
    }

    useEffect(()=> {
        const getUser = async () => {
            try {
                const response = await axios.get(`localhost:8000/user`)
                setUser(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getUser()
        console.log(getUser())
    }, [])
    console.log(user)


    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className='updateProfileForm' onSubmit={handleSubmitProfile}>
                <h2>{user.name}'s profile</h2>
                <h5>Update your user profile by entering the new details in the form below and clicking the "Update User Profile" button.</h5>
                <form>
                    <label htmlFor='name'>Update username / alias</label>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder={user.name}/>

                    <label htmlFor='photo_url'>Update photo</label>
                    <input type='text' name='photo_url' value={photo_url} onChange={(e)=> setPhoto_url(e.target.value)} placeholder={user.photo_url}/>

                    <label htmlFor='location'>Update your location</label>
                    <input type='text' name='location' value={location} onChange={(e)=> setLocation(e.target.value)} placeholder={user.location}/>

                    <label htmlFor='contact'>Update your contact info</label>
                    <input type='text' name='contact' value={contact} onChange={(e)=> setContact(e.target.value)} placeholder={user.contact}/>

                    <label htmlFor='password'>Update your password</label>
                    <input type='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder={user.password}/>
                    <button className='submit' id='updateBtn' type='submit'>Update User Profile</button>

                </form>
            </div>
        </div>
    )
}

export default ProfilePage