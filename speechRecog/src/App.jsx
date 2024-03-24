import { useState } from "react";
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";



const App = () => {
  const [textToCopy, setTextToCopy] = useState()
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>Hey let me help you complete your exhausting assignments real quick so that you can do some real learning! </p>

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>
                
                <div className="btn-style">

                <button onClick={setCopied}>
                  {isCopied ? "Copied" : "Copy to Clipboard"}
                 </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default App;
