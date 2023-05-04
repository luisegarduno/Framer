import * as React from 'react';

export class Flipbook extends React.Component {
    constructor() {
        super()
        
        this.onClickForward = this.onClickForward.bind(this);
        this.onClickBackward = this.onClickBack.bind(this);
    
        const img001 = require("./videoFrames/001.jpg");
        const img002 = require("./videoFrames/002.jpg");
        const img003 = require("./videoFrames/003.jpg");
        const img004 = require("./videoFrames/004.jpg");
    
        this.state = {
        index: 0,
        imgList: [img001, img002, img003, img004]
        }
    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
        })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
        })
        } else {
            this.setState({
                index: this.state.index -1
            })
        }
    }
    
    // This is a placeholder. Feel free to edit or remove this code :)
    render() {
        return (
        <div className="video">
            <main>
                <img id="flipbook" src={require("./videoFrames/001.jpg")} alt="Flipbook"/><br/>
                <button onClick={this.onClickBackward}>Previous</button>
                <button onClick={this.onClickForward}>Next</button>
            </main>
        </div>
        );
    }
}
export default Flipbook;