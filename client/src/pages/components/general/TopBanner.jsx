import React from 'react';

function TopBanner(props){
    return <div className="top-banner">
    <h1>{ props.title }</h1>
    <p>{ props.content }</p>
    </div>
}

export default TopBanner;