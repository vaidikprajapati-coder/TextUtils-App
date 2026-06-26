import React, {useState} from 'react'

export default function TextForm(props) {

  const [findText, setFindText] = useState('');
const [replaceText, setReplaceText] = useState('');

const handleFindReplace = () => {
  if (!findText) return;
  let newText = text.split(findText).join(replaceText);
  setText(newText);
  setFindText('');
  setReplaceText('');
}

    const handleUpClick = () => {
        
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
    }
    const handleLoclick = () => {
        let newText =  text.toLowerCase();
        setText(newText);
    }

    const handleRemoveExtraSpaces = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText);
}

    const handleOnChange = (event) => {
        
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here'); // this state use in only function like setText("..")
    // text = "new text"; // wrong way to change the state
    // setText("new text");
  return (
    <>
   <div className="container" style={{color: props.mode=== 'dark' ? 'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
     
      <textarea className="form-control" id="MyBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark' ? 'grey':'white', 
        color : props.mode=== 'dark' ? 'white':'black'}} rows="8"></textarea>
      
      </div>
      <button className="btn-primary mx-2 my-1" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn-primary mx-2 my-1" onClick={handleLoclick}>convert to lowercase</button>
      <button className="btn-primary mx-2 my-1" onClick={handleClearClick}>clear</button>
      <button className="btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="my-3 p-3 border rounded">
  <h6 style={{color: props.mode=== 'dark' ? 'white':'black'}}>Find & Replace</h6>
  <div className="d-flex gap-2 mb-2">
    <input
      type="text"
      className="form-control"
      placeholder="Find..."
      value={findText}
      onChange={(e) => setFindText(e.target.value)}
    />
    <input
      type="text"
      className="form-control"
      placeholder="Replace with..."
      value={replaceText}
      onChange={(e) => setReplaceText(e.target.value)}
    />
    <button className="btn btn-warning" onClick={handleFindReplace}>
      Replace All
    </button>
  </div>
</div>

    <div className="container" style={{color: props.mode=== 'dark' ? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
