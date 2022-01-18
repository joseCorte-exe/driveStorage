import React from 'react';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { Card } from './style';

export default function FileCard({ name }) {
    return (
        <Card>
            <header>
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </header>

            <footer>
                <p>{name}</p>
            </footer>
        </Card>
    )
}
