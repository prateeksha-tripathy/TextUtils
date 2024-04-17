import React from 'react'

export default function Alert(props) {
    // to captialize "s" in the warning for success messages
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1); 
    }
    return (
        // && ---> checks if props.alert is true or false.. if false ,the rest of the code is not executed (similar to if else but a more simple code)
        <div style={{height:'50px'}}>
            { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
  )
}
