import { useState } from "react";
import Main from "../Components/Main";
import { useNavigate } from "react-router-dom";
import "./ProductCreate.css";

function ProductCreate() {
  const [description, setDescription] = useState("");
  const [isContentRecognized, setContentRecognized] = useState(false);

  function handleSubmite(e) {
    e.preventDefault();
    console.log(description);
  }

  let navigate = useNavigate();
  const jumpPageHandler = () => {
    let path = "/pcsecond";
    console.log("print");
    navigate(path);
  }

  function handleCheck() {
    // TODO: 根据填写内容进行识别，更新isContentRecognized状态
    
    const isRecognized = true; // 假设识别结果为true

    setContentRecognized(isRecognized);

    if (isRecognized) {
      window.alert("Checked");
    } else {
      window.alert("Unrecognized，try again");
    }
  }

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
                    <input
                      class="fp-input"
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      type="next"
                      placeholder=" Title"
                      required-type="text"
                      maxLength={25}
                    />
                  </div>
                  <div class="pc-pt">
                    <button class="btn-check" type="button" onClick={handleCheck}>
                      Check
                    </button>
                    <div>
                      {isContentRecognized ? (
                        <button class="btn-wd" type="button" onClick={jumpPageHandler}>
                          Next
                        </button>
                      ) : (
                        <button class="btn-retry" type="button" onClick={handleCheck}>
                          Retry
                        </button>
                      )}
                    </div>
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
