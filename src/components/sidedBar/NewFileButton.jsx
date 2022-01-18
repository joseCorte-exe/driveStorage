import React, {useState} from 'react'

import {AddIcon} from '@chakra-ui/icons';

import  { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'

import { NewFileButtonS } from './style';

import firebase from 'firebase';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { storage, db } from '../../firebase'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function NewFileButton() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);


    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    function handleUpload() {
        setUploading(true);

        storage.ref(`files/${file.name}`).put(file).then(snapshot => {
            console.log(snapshot);


            storage.ref('files').child(file.name).getDownloadURL().then(url => {
                    db.collection('myFiles').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: file.name,
                        fileUrl: url,
                        size: snapshot._delegate.bytesTransferred,
                })

                setUploading(false);
                setOpen(false);
                setFile(null);

                console.log(uploading);
            })
        })
    }
    
    function handleChange(e) {
        if(e.target.files[0]) {
            setFile(e.target.files[0])
        }
        console.log(e.target.files[0])
    }

    // console.log(file.name);

    return (
        <>
            <NewFileButtonS onClick={() => {setOpen(true)}}>
                <AddIcon />
                <p>New</p>
            </NewFileButtonS>

            <Modal
                open={open}
                onClose={() => {setOpen(false)}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Create New File</h2>
                    <p id="simple-modal-description">Select files you want to upload!</p>
                    {
                        uploading ? <p>uploading...</p> :
                        <>
                            <input type="file" onChange={handleChange} />
                            <button onClick={handleUpload}>Upload</button>
                        </>
                    }
                </div>
            </Modal>
        </>
    )
}
