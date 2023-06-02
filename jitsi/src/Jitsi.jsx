import React from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';
import { useParams } from 'react-router-dom';

export const Jitsi = () => {
    const {id} = useParams()
    
  return (
    <JitsiMeeting
    domain = { "jitsi.zoheb.me" }
    roomName = {id}
    configOverwrite = {{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false
    }}
    interfaceConfigOverwrite = {{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
    }}
    userInfo = {{
        displayName: 'YOUR_USERNAME'  
    }}
    onApiReady = { (externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
    } }
    getIFrameRef = { (iframeRef) => { iframeRef.style.height = '1000px'; iframeRef.style.width = '1000px'; } }
/>
  )
}
