import React from 'react'
import Avatar from './Avatar'


function formatDate(date){
    return date.toLocaleDateString();
  }

const Kitty = (props)=>{
        return (
            <div>
                <Avatar user={props.author} />
                <div>
                    {props.author.name}
                </div>
                <div>
                    {props.text}
                </div>
                <div>
                    {formatDate(props.date)}
                </div>
            </div>
        )
}

export default Kitty