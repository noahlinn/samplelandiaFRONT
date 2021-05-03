import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleSample from '../components/SingleSample'
const backEnd = process.env.REACT_APP_BACKEND
const EachSamplePage = () => {
    const params = useParams()
    const [oneSample, setOneSample] = useState([])
    const [preview, setPreview] = useState(null)
    const getOneSample = async () => {
        const res = await axios.get(`${backEnd}/samples/${params.id}`)
        setOneSample(res.data)
        setPreview(res.data.previews['preview-hq-mp3'])
    }
    const downloadFile = () => {
        window.location.href = oneSample.download
    }

    useEffect(() => { getOneSample() }, [])

    return (
        <>
            <SingleSample oneSample={oneSample}
                preview={preview} downloadFile={downloadFile} />
        </>
    )
}
export default EachSamplePage