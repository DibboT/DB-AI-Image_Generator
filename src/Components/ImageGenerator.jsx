import './ImageGenerator.css'

const ImageGenerator = () => {
    return (
        <div className="ai-image-generator">
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src="https://staticg.sportskeeda.com/editor/2021/12/34aff-16391409747063-1920.jpg" alt="" /></div>

            </div>
            <div className="search-box">
                <input type="text" className="search-input" placeholder='Type Here What Do You Want To Generate' />
                <div className="generate-btn">Generate</div>
            </div>
        </div>
    );
};

export default ImageGenerator;