import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const WorkList = (props) => {
    const BASE_URL = "http://127.0.0.1:8000/work/"

    const [works, setWorks] = useState([])

    useEffect(() => {
        const getWorks = async () => {
          const response = await axios.get(`${BASE_URL}`)
          setWorks(response)
        }
        getWorks()
      }, [])


    let navigate = useNavigate()
    const showWork = (id) => {
        navigate(`${id}`)
    }

    if (!works.data) {
        return <div>Loading...please wait.</div>
    } else {
        return (
            <div className='work-list'>
                <h2>Works</h2>
                {
                    works.data.map((work)=> (
                        <div key={work.title} className='work-info' onClick={()=>showWork(work)}>
                            <div className='workBox'>
                                <h3>{work.name}</h3>
                                <ul className='workUL'>
                                    <li>Content: {work.content}</li>
                                    <li>Genre: {work.genre}</li>
                                    <li>Likes: {work.likes}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    } }

export default WorkList
