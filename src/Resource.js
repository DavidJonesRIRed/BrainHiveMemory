import React from 'react';

const Resource = ({ resource }) => {
    return(
        <div className={'box'}>
        <h2>{ resource.title }</h2>
        <p>{ resource.resourceAuthor }</p>
        <p>{ resource.datePublished }</p>
        <p>{ resource.rating }</p>
        </div>
    )
}

export default Resource;