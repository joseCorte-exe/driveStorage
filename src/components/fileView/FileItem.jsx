import React from 'react'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { FileItemView } from './style';

export default function FileItem({ id, caption, timestamp, fileUrl, size }) {
    
    const month = [ "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec" ]

    const fileDate = `${timestamp?.toDate().getDate()} ${month[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}`

    function getReadableFileSizeString(fileSizeInBytes) {
        let i = -1;
        const byteUnits = [ ' kB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB' ];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i]
    }

    return (
        <FileItemView href={fileUrl} target='_blank' rel='noreferrer' download >
            <div>
                <InsertDriveFileIcon />
                {caption}
            </div>
            <div>
                <p>{fileDate}</p>
                <p>{getReadableFileSizeString(size)}</p>
            </div>
        </FileItemView>
    )
}
