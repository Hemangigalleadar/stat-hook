import React,{ useState } from "react"
import translate from 'translate'




export default function TextForm(props) {
    const onUpclick = ()  => {
        console.log("Your Function Click..!!!")
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const onLoclick = () => {
        console.log("Your Function Click!!");
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const onUpchange = (event) => {
        setText(event.target.value)
    } 
    const convertGujarati=async()=>{
        try {
            let result =await
            translate(text, {
                to:"gu"
            });
            setText(result || "");
        } catch (error) {
            console.log(error);
            alert("Translation Error");
        }
        
        }

        const convertHindi =async()=>{
        try {
            let result =await
            translate(text, {
                to:"hi"
            });
            setText(result || "");
        } catch (error) {
            console.log(error);
            alert("Translation Error");
        }
        
        }
        const changeColor=()=>{
            if(textColor==="black"){
                setTextColor("green");
            }
            else{
                setTextColor(" light  pink");
            }
        };

        const makeBold=()=>{
            setisBold(!isBold);
        };

        const toggledarkmode=()=>{
            if(bgColor === "white")
            {
                setBgColor("black");
                setTextColor("white");
            }
            else{
                setBgColor("white");
                setTextColor("black");
            }
        }


        const[text,setText]=useState("");
        const [textColor,setTextColor]=useState("black");
        const[isBold,setisBold]=useState(false);


        const [bgColor,setBgColor] = useState("white");
        
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

      <div className="font-group "  style={{color:textColor, backgroundColor:bgColor}}>

            <h1>{props.title}</h1>
            <div className="form-group pt-5 text-center">
                <label for="emailInput fw-3">Email address</label>
                <textarea className="form-control mx-5" value={text} onChange={onUpchange} 
                style={{color:textColor,fontWeight:isBold? "bold":"normal"}}
               ></textarea>                
        
                <button className="btn btn-primary my-3 mx-3" onClick={onUpclick}>Upper</button>
                <button className="btn btn-primary my-3 mx-3" onClick={onLoclick}>Lower</button>
                <button className="btn btn-primary my-3 mx-3" onClick={convertGujarati}>Gujarati</button>
                <button className="btn btn-primary my-3 mx-3" onClick={convertHindi}>Hindi</button>
                <button className="btn btn-primary my-3 mx-3" onClick={changeColor}>Color</button>
                <button className="btn btn-primary my-3 mx-3" onClick={makeBold}>Bold</button>
                 <button className="btn btn-primary my-3 mx-3" onClick={toggledarkmode}>darkmode</button>
                <div className="container" style={{color:textColor}}>
                    <h2>Your text summary</h2>
                    <p>{text.split("").length -1}word and {text.length} characters</p>
                    <p>{0.008* text.split("").length} Time</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
                </div>
                </div>
                </>
     )
    }
                
    
        
    
        

    
        
    
        
    
        
    
        
    





