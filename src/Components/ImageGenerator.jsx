import { useState } from 'react';
import './ImageGenerator.css'
import { useRef } from 'react';
import deImage from "../assets/images/aiimage.webp"

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);
    const imgGenerator = async() => {
        if(inputRef.current.value === ""){
            return 0;
        }
        const response = await fetch(
            "//api.openai.com/v1/images/generations", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                    Authorzation: 
                    "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512"
                })
            }
        )
    }
    return (
        <div className="ai-image-generator">
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={image_url === "/" ? deImage  : image_url } alt="" /></div>

            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className="search-input" placeholder='Type Here What Do You Want To Generate' />
                <div className="generate-btn" onClick={() => {imgGenerator()}}>Generate</div>
            </div>
        </div>
    );
};

export default ImageGenerator;