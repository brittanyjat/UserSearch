import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const preset = process.env.REACT_APP_CLOUDINARY_PRESET;
const url = process.env.REACT_APP_CLOUDINARY_URL;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;

export default class PhotoUpload extends Component {
    constructor(props) {
        super(props)

        this.state = { files: [] }
    }

    handleDrop = files => {
        this.props.forceLoading();

        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", preset);
            formData.append("api_key", apiKey);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url
                this.props.handleInput('picture', fileURL)
                // console.log(data);
                this.props.forceLoading();
            })
        });

        axios.all(uploaders).then(() => {
        });
    }

    render() {
        const dropzoneStyle = {
            width: "89%",
            border: "dashed 1.25px #DEE7E7",
            cursor: "pointer",
            height: '40px',
            fontSize: '16px',
            fontFamily: "'Sunflower', sans-serif",
            color: '#7A7E7E',
            marginTop: '10px',
            fontWeight: '300',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '10px',
            boxSizing: 'border-box'
        };
        return (
            <React.Fragment>
                <Dropzone
                    onDrop={this.handleDrop}
                    multiple
                    accept="image/*"
                    style={dropzoneStyle}
                >
                    <p>Drop your files or click here to upload</p>
                </Dropzone>
            </React.Fragment>
        )
    }
}
