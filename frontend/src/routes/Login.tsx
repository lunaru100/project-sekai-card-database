import "./Login.css";
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
        <form id="loginForm">
          <label form="login" className="labels">
            Login
          </label>
          <input type="text" id="loginInput" name="login" className="inputs" />
          <label form="password" className="labels" style={{marginTop: "1.5vh"}}>
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            name="password"
            className="inputs"
          />
          <div id="loginBtnContainer">
            <button type="submit" id="loginBtn">
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
