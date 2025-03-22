import "./Login.css";
import "./Classes.css";
import bg from "./../assets/rui_login_bg.jpg";

function Login() {
  return (
    <div id="loginContainer" style={{ backgroundImage: `url(${bg})` }}>
      <div id="login">
        <span id="loginTitle">LOGIN</span>
        <span id="loginText">
          Welcome back!
          <br />
          Please log into your account
        </span>
        <form id="loginForm" className="form">
          <label className="labels">Login</label>
          <input type="text" name="login" className="inputs" />
          <label className="labels" style={{ marginTop: "1.5vh" }}>
            Password
          </label>
          <input type="password" name="password" className="inputs" />
          <div id="loginBtnContainer" className="btnContainer">
            <button type="submit" id="loginBtn" className="formBtn">
              LOG IN
            </button>
          </div>
        </form>
        <span id="forgotPassword">Forgot your password?</span>
      </div>
    </div>
  );
}

export default Login;
