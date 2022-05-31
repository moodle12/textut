import React, { useState } from 'react';

export default function Text(props) {
  const handUp = ()=>{
    let newtext = Text2.toUpperCase();
    setText(newtext);
    props.showAlert("Text has been uppercased", "success");
  } 
  const handLo = ()=>{
    let newtext = Text2.toLowerCase();
    setText(newtext);
    props.showAlert("Text has been lowercased", "success");
  } 
  const handCl = ()=>{
    let newtext = "";
    
    setText(newtext);
    props.showAlert("Text has been cleared", "success");
  }
  const handCopy = ()=>{
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Text has been copied to clipboard", "success");
  }
  const handextra = ()=>{
    let newtext = Text2.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra spaces has been removed", "success");
  }
  const capitalize = () => {
        
    let firstchar = Text2.charAt(0); // storing the first char of the string
    let newText= firstchar.toUpperCase(); // converting that to uppercase
    setText(newText+Text2.slice(1)); // printing it with rest excluding the first char by using slice
    props.showAlert("Text has been capitalized", "success");

}
  const handOn = (event)=>{
    setText(event.target.value)
  } 
  // const Bold = ()=>{
  //   let newtext = Text2.
  //   setText(newtext);
  // } 
  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = Text2;
  //   window.speechSynthesis.speak(msg);
  // }

  const [Text2, setText] = useState(' ');
  let le=Text2.length;
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mt-3 '>{props.headop}</h1>
      <textarea name="t" id="mybox" value={Text2} onChange={handOn} cols="120" rows="10" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
      <br />
      <button className="btn btn-primary mx-2" onClick={handUp}>Convert To Uppercase</button>
      <button className="btn btn-success mx-2" onClick={handLo}>Convert To Lowercase</button>
      <button className="btn btn-secondary mx-2" onClick={capitalize}>Convert To Capitalize Case</button>
      <button className="btn btn-danger mx-2" onClick={handCl}>Clear Text</button>
      <button className="btn btn-warning mx-2" onClick={handCopy}>Copy Text</button>
      <button className="btn btn-info mx-2" onClick={handextra}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    {(() => {

if (le === 0) {

  return (
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
      0 words and {Text2.length} characters
      <p>{0 * Text2.split(' ').length } Minutes an average person would read in</p>
    </div> 

  )

}  else {

  return (

    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
      <p>{Text2.split(' ').length} words and {Text2.length} characters</p>
      <p>{0.008 * Text2.split(' ').length } Minutes an average person would read in</p> 
    </div>

  )

}

})()}
        {/* <h1>Text Analysis</h1>
        <p>{Text2.split(' ').length} words and {Text2.length} characters</p>
        <p>{0.008 * Text2.split(' ').length } Minutes an average person would read in</p> */}
    </div>
    <div style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Preview</h2>
      <p >{Text2.length>0?Text2:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
