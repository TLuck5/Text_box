import React, { useState } from 'react'

export default function Textbox(props) {
    const[text,setText] = useState("")

    const ChangeText = (e)=>{
        setText(e.target.value)
    }

    const changeUpper = ()=>{
        setText(text.toUpperCase())
    }

    const changeLower = ()=>{
        setText(text.toLowerCase())
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }

    const clearText = ()=>{
        setText("")
    }
  return (
    <>
    <div className="container">
        <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Enter your text here</h1>
        <div className="form-floating">
  <textarea className="form-control"  value={text} onChange = {ChangeText} >{text}</textarea>
</div>
<button className='btn btn-primary mx-1 my-2' onClick={changeUpper}>Upper case</button>
<button className='btn btn-primary mx-1 my-2' onClick={changeLower}>Lower case</button>
<button className='btn btn-primary mx-1 my-2' id='copyText' onClick={copyText}>Copy text</button>
<button className='btn btn-primary mx-1 my-2' onClick={clearText}>Clear text</button>
</div>
<h2 className={`text-${props.mode==="light"?"dark":"light"}`}>Text Summary</h2>
<p className={`text-${props.mode==="light"?"dark":"light"}`}>Textbox have {text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} letters</p>
<h3 className={`text-${props.mode==="light"?"dark":"light"}`}>Enter something in the textbox to preview the text below</h3>
<p className={`text-${props.mode==="light"?"dark":"light"}`}>{text}</p>
    </>
  )
}
