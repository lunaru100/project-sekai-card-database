import "../Classes.css";

function Login() {
  return (
    <div className="h-[90vh] w-screen bg-[100%_auto] bg-fixed bg-no-repeat bg-[url(/tsukasa_login_bg.png)] flex items-center !px-[5vw] justify-end">
      <div className="flex flex-col justify-center items-center backdrop-blur-[10px] gap-[2vh] h-[72vh] !px-[3vw] !py-[3vh] rounded-[5vh] bg-white/30">
        <span className="font-black text-[6vh] text-center">LOGIN</span>
        <span className="font-bold text-[3vh] text-center">
          Welcome back!
          <br />
          Please log into your account
        </span>
        <form id="loginForm" className="form">
          <label className="labels">Login</label>
          <input type="text" name="login" className="inputs" />
          <label className="labels mt-[1.5vh]">Password</label>
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
