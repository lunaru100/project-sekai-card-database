import "../Classes.css";

function Register() {
  return (
    <div className="h-[90vh] w-screen bg-[100%_auto] bg-fixed bg-no-repeat flex items-center !px-[5vw] justify-end bg-[url(/luka_register_bg.png)]">
      <div className="flex flex-col justify-center items-center backdrop-blur-[10px] gap-[1.5vh] h-[82.5vh] !px-[3vw] py-[3vh] rounded-[5vh] bg-white/30">
        <span className="font-black text-[6vh] text-center">SIGN UP</span>
        <span className="font-bold text-[3vh] text-center">
          Hello there!
          <br />
          It's nice to have you here
        </span>
        <form className="form mt-[2vh]" name="register">
          <label className="labels">Login</label>
          <input type="text" name="login" className="inputs" />
          <label className="labels !mt-[1vh]">Email address</label>
          <input type="text" name="login" className="inputs" />
          <label className="labels !mt-[1vh]">Password</label>
          <input type="text" name="login" className="inputs" />
          <label className="labels !mt-[1vh]">Repeat password</label>
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
