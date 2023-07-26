import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Profile from './Profile'
import Context from '../Context'
import WorkList from './WorkList'

export default function Main () {

    const [user, setUser] = useState('')
    const { userInfo, setUserInfo } = useContext(Context)
    console.log(userInfo)


    
//         return (
//             <Routes>
//                 <Route path='/' element={<SignIn />}/>
//                 <Route path='/createUser' element={<SignUp />}/>
//                 <Route path='/profile' element={<Profile />}/>
//                 <Route path='/WorkList/:id' element={<WorkList />}/>
//             </Routes>
//         )
// }

















    if (userInfo.name === '') {
        return (
            <Routes>
                <Route path='/' element={<SignIn />}/>
                <Route path='/createUser' element={<SignUp />}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/WorkList/:id' element={<WorkList />}/>
            </Routes>
        )
    }
}