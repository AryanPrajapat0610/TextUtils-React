import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
      }
      const handleLoClick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
      }
      const handleSpeakClick=()=>{
        // console.log("uppercase was clicked" + text);
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
      }
      const handleClearClick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
      }
      const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to clipboard", "success");
    }
    
    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState(' ');
    // text ="new text"; //Wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}} >
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleSpeakClick}>Speak</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>CopyText</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
    <div className='container my-3' style={{color: props.mode==='dark' ? 'white':'#042743'}}>
       <h2>Your text summary</h2>
       <p>{text.split(" ").length>1? text.split(" ").length-1 : 0} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
