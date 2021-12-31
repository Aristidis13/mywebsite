 /*Link Module that can contain a series of attributes */
 import React from "react";

 const Link = (props) => {
    return (
        <a class={props.linkClass}
           id={props.id}
           href={props.url}
           target="_blank"
           rel="nofollow">
            <p class={props.textClass}>{props.title}</p>
        </a>
    )
}

 export default 'Link';