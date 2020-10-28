import React from 'react';

export type DetailType = {
    content: string
}

const Detail = ({ content }: DetailType) => {
    return (
        <p>{content}</p>
    )
}

export default Detail;