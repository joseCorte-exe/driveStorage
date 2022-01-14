import React, {useState} from 'react'

import {AddIcon} from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

import { NewFileButtonS } from './style';

// import firebase from 'firebase';
// import { storage, db } from '../../firebase'

export default function NewFileButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    function handleUpload() {

    }
    
    function handleChange() {

    }

    return (
        <>
            <NewFileButtonS onClick={onOpen}>
                <AddIcon />
                <p>New</p>
            </NewFileButtonS>

            <Modal isOpen={isOpen} onClose={onClose} isCentered >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader w={100} >Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody w={100} >
                    {/* <Lorem count={2} /> */}
                </ModalBody >

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
