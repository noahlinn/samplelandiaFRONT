import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios'
const backEnd = process.env.REACT_APP_BACKEND
const EditSamplePage = () => {
    const params = useParams()
    const [redirect, setRedirect] = useState(false)
    const [oneSample, setOneSample] = useState('')

    const getOneSample = async () => {
        try {
            const res = await axios.get(`${backEnd}/usercreatedsamples/${params.id}`)
            setOneSample(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getOneSample() }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(oneSample)
        try {
            const res = await axios.put(`${backEnd}/usercreatedsamples/${params.id}`, oneSample)
            console.log(res)
            setRedirect(true)
        } catch (error) {
            console.log(error)
        }
    }

    // const urltoFile = (url, filename, mimeType) => {
    //     mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
    //     return (fetch(url)
    //         .then(function (res) { return res.arrayBuffer(); })
    //         .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    //     );
    // }
    // useEffect(() => { test() }, [getOneSample])


    // const test = () => {
    //     urltoFile(oneSample.file, oneSample.name)
    //     .then(function (file) {
    //         setFile(file);
    //     })
    // }


    return (
        <div>
            {redirect && <Redirect to={`/sample/${oneSample.id}`} exact />}

            <form className="log-sign-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input value={oneSample.name} onChange={(e) => setOneSample({ ...oneSample, name: e.target.value })} />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" value={oneSample.description} onChange={(e) => setOneSample({ ...oneSample, description: e.target.value })} />
                </div>
                <div>
                    <input type="submit" value="Update Sample!" />
                </div>
            </form>
        </div>
    )
}

export default EditSamplePage