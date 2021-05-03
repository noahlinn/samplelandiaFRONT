import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleSample from '../components/SingleSample'
const backEnd = process.env.REACT_APP_BACKEND
const UserSamplePage = () => {
    const params = useParams()
    const [oneSample, setOneSample] = useState([])
    const [preview, setPreview] = useState(null)
    const getOneSample = async () => {
        const res = await axios.get(`${backEnd}/usercreatedsamples/${params.id}`)
        setOneSample(res.data)
        setPreview(res.data.file)
    }

    useEffect(() => { getOneSample() }, [])


    const downloadURI = (uri, name) => {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }
    const downloadFile = () => {
        downloadURI(preview, oneSample.name)
    }

    return (
        <SingleSample oneSample={oneSample}
            preview={preview} downloadFile={downloadFile} />
    )
}

export default UserSamplePage