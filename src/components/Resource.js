import React from 'react';

const Resource = ({ resource }) => {
    
    return(
        <div className={'box'}>
            <h2>{ resource.title } </h2>
            <p>{ resource.resourceAuthor }</p>
            <p>Published on: { resource.datePublished }</p>
            { resource.videoLength ? ( <p>{ resource.videoLength }</p> ) : null }
            { /* conditional / true code : false code */ }
            <p>Comments: { resource.comments.length }</p>
        </div>
    )
}

export default Resource;