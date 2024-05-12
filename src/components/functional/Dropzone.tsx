import React from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import CSS from "csstype";
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

type Props = {
    open?: () => void;
}


const Dropzone = ({ open }: Props) => {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({});

    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div style={styles} className="container">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="dropzone-content">
                        Release to drop the files here
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Arrastrar y soltar archivos aquí para subir
                    </p>
                )}
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    style={btnn}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                </Button>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}

const styles: CSS.Properties = {
    textAlign: 'center',
    padding: '20px',
    border: '3px #233044 dashed',
    width: '60%',
    margin: 'auto'
};

const btnn: CSS.Properties = {
    backgroundColor: '#233044'
};

export default Dropzone;