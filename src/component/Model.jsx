import React from "react";
import myImage from "../assets/images/imagephoto.jpg";
const Model = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="imgBlock">
          <img src={myImage} alt="image" />
        </div>
        <div className="subDiv">
          <h1>Login</h1>
          <p>Welcome back please login to your account</p>
          <form action="">
            <div className="inputField">
              <label for="">Username</label>
              <input type="text" />
            </div>
            <div className="inputFieldBlock">
              <label for="">Password</label>
              <input type="password" />
            </div>
            <div className="boxBlock">
              <div className="labelBlock">
                <input type="checkbox" />
                <label for="">Remember</label>
              </div>
              <div className="passwordBlock">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <div className="buttonBlock">
              <button>Login</button>
            </div>
          </form>
          <p className="orBlock">OR</p>
          <div className="continueBlock">
            <button>Continue with google</button>
            <button>
              <i
                class="ri-facebook-circle-fill"
                style={{
                  fontSize: "16px",
                  color: "blue",
                }}
              ></i>
              Continue with FaceBook{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Model;
