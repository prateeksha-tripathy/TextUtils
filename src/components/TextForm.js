import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case!", "success");
  }

  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text );
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case!", "success");

  }

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text );
    let newText = '';
    setText(newText);
    props.showAlert("text cleared!", "success");

  }

  const handleOnChange = (event) => {
    // console.log("ON change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard !", "success");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");

  }

  const [text, setText] = useState(''); //default value of a variable "text" which will be represesting the text in the tetxtbox
  // text = "newText";        ---> Wrong way to change the state
  // setText ("new state")    ---> correct way to change the state
  // setText=("asdhftva")     ---> update text 
  return (
    <>
    <div className="container"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3">
        <h1 className='mb-3'>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#474949' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea> 
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to see in preview!"}</p>
    </div>
    </>
  )
}
