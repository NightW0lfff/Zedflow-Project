import { useState } from "react";
import Main from "../Components/Main";
import "./ProductCreate.css";


function ProductCreate() {
  
  const [description,setDescription] = useState("")
  function handleSubmite(e){
      e.preventDefault()
      console.log(description)  
  }
  const data = [
    {"description":""}
  ]    


  return (
    <div>
      <Main>

      <form role="form" method="post" onSubmit={handleSubmite} class>
          <div class="front">
            <div class="pc-pt-1">
              <h1>Product Title</h1>
              <hr></hr>
              <div class="row">
                <div class="fp-control">
                <div class="pc-ept">
                <input class="fp-input" name="description" onChange={e=>setDescription(e.target.value)} value={description} type="next" placeholder="Enter Product Title" required-type="text" maxLength={25}>
                </input>
                </div>
                <div class="pc-pt">
                <button class="btn-check" type="submit">Check</button>
                <button class="btn-wd" type="button" >Next</button>
                </div>
                </div>
              </div>
            </div>
            <div class="pc-text">
              <h1>Product Create Instructions</h1>
              <hr></hr>
              <small class="pci-text">
              DO NOT PROCEED IF WORD SHOWS BANNED
              <br/>
              <br/>
              DO NOT PROCEED IF YOU SUSPECT THE WORD MAYBE TRADEMARKED EVEN IF NO ERROR
              <br/>
              <br/>
              YOU CANNOT USE A WORD, PHRASE, LYRICS OR QUOTE FROM MUSIC, MOVIES
              <br/>
              <br/>
              IF YOU SUSPECT ANY DESIGN OR WORD IS RELATED TO A COPYRIGHT OR TRADEMARK ITEM IN ANY WAY, DO NOT PROCEED.
              <br/>
              <br/>
              WHEN CHECKING THE NAME OF YOUR TITLE, REMEMBER TO LEAVE THE SPECIAL CHARACTER IN AT FIRST TO MAKE SURE IT IS NOT TRADEMARKED.
              IF IT IS NOT TRADEMARKED THEN DELETE THE SPECIAL CHARACTER FROM THE TITLE AND CHECK AGAIN, IF IT IS ALL CLEAR THEN PROCEED WITHOUT THE SPECIAL CHARACTER.
              <br/>
              <br/>
              SPECIAL CHARACTERS INCLUDE:
              APOSTROPHE ('), EXCLAMATION MARKS (!), COMMAS (,), FULL STOPS(.), DASHES (-), BACKSLASH (\) (/) AND SPECIAL CHARACTERS INCLUDING QUESTION MARKS (?).
              </small>
            </div>
          </div>
        </form>

      </Main>
    </div>
  );
}

export default ProductCreate;
