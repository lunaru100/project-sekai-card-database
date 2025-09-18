import "./Register.css";
import "../Classes.css";

function Register() {
  return (
    <div
      id="registerContainer"
      style={{ backgroundImage: `url(/luka_register_bg.png)` }}
    >
      <div id="register">
        <span id="registerTitle">SIGN UP</span>
        <span id="registerText">
          Hello there!
          <br />
          It's nice to have you here
        </span>
        <form id="registerForm" className="form" name="register">
          <label className="labels">Login</label>
          <input type="text" name="login" className="inputs" />
          <label className="labels" style={{ marginTop: "1vh" }}>
            Email address
          </label>
          <input type="text" name="login" className="inputs" />
          <label className="labels" style={{ marginTop: "1vh" }}>
            Password
          </label>
          <input type="text" name="login" className="inputs" />
          <label className="labels" style={{ marginTop: "1vh" }}>
            Repeat password
          </label>
          <input type="password" name="repeatPassword" className="inputs" />
          <div className="btnContainer">
            <button type="submit" id="submitBtn" className="formBtn">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
