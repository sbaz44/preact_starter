import { Link } from "preact-router";
import { FormCard, FormHeader } from "../../components/Formcard/Formcard";
import InputBox from "../../components/InputBox/InputBox";
import "./login.scss";

export default function Login() {
  return (
    <div className="__auth_login__ light-theme">
      <FormCard>
        <div className="card_holder">
          <FormHeader name="Sign in to" bold="Marketplace." />
          <p className="sub">Welcome, to the simplest AI platform.</p>
          <Link to={"/register"}>
            <p className="new_account">Create new account ?</p>{" "}
          </Link>
          <InputBox
            id="emailAddress"
            header="Email Address"
            // icon={emailIcon()}
            style={{ paddingLeft: "3vw" }}
            onChange={(e) => {
              // const value = e.target.value;
              // setUsername(value);
            }}
            // error={errors["isUsernameEmpty"]}
            // value={Username}
            // onFocus={() => clearError("isUsernameEmpty")}
          />
          <InputBox
            id="Password"
            header="Password"
            // type="password"
            //   icon={<img src={visibilityoff} className="input_icon" />}
            // icon={passIcon()}
            style={{ paddingLeft: "3vw" }}
            // onChange={(e) => setPassword(e.target.value)}
            // error={errors["isPasswordEmpty"]}
            // value={Password}
            // onFocus={() => clearError("isPasswordEmpty")}
            onKeyDown={(e) => {
              // if (e.keyCode === 13) {
              //   postData();
              // }
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span />
            <p className="forgot">Forgot your password?</p>
          </div>
          <div style={{ height: "1.5vw" }} />
          {/* <Button type="gradient" bg name="Sign In" onClick={postData} /> */}
          <div style={{ height: "2.7vw" }} />
          <div className="follow_us_wrapper">
            <p className="follow_title">Follow us at</p>
          </div>
          {/* <SocialMedia /> */}
        </div>
      </FormCard>
    </div>
  );
}
