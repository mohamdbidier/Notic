import {useState,useRef} from "react"

export default function VoiceRecorder({onAudio}){

const mediaRecorder=useRef()
const [recording,setRecording]=useState(false)

const start=async()=>{

const stream=await navigator.mediaDevices.getUserMedia({audio:true})
mediaRecorder.current=new MediaRecorder(stream)

const chunks=[]

mediaRecorder.current.ondataavailable=(e)=>{
chunks.push(e.data)
}

mediaRecorder.current.onstop=()=>{
const blob=new Blob(chunks)
onAudio(blob)
}

mediaRecorder.current.start()
setRecording(true)
}

const stop=()=>{
mediaRecorder.current.stop()
setRecording(false)
}

return(
<button onClick={recording?stop:start} className="bg-blue-500 text-white p-2 rounded">
{recording?"Stop":"Record"}
</button>
)
}
