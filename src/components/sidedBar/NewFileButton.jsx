import React from 'react'

import {AddIcon} from '@chakra-ui/icons';

import { NewFileButtonS } from './style';

export default function NewFileButton() {
    return (
        <NewFileButtonS>
            <AddIcon />
            <p>New</p>
        </NewFileButtonS>
    )
}
