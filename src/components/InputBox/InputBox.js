import React, { useEffect, useState } from "preact/compat";
import visibilityon from "../../assets/visibility-on.png";
import visibilityoff from "../../assets/visibility-off.png";
import "./inputStyle.scss";
export default function InputBox(props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleIcon = () => {
    setSecureTextEntry(!secureTextEntry); //false
    props.typeValue(secureTextEntry);
  };

  const renderPasswordAccessory = () => {
    let name = secureTextEntry ? visibilityoff : visibilityon;
    return (
      <img
        src={name}
        alt="password-icon"
        className="icon-toggle"
        onClick={() => toggleIcon()}
      />
    );
  };

  useEffect(() => {
    if ((props.error && props.id) || (props.helperText && props.id)) {
      var ele = document.querySelector("#" + props.id);
      ele.classList.add("error_shake");
      setTimeout(function () {
        ele.classList.remove("error_shake");
      }, 300);
    }
  }, [props.error, props.helperText]);
  return (
    <div className="__input__">
      {props.header && <label>{props.header}</label>}
      <div style={{ position: "relative" }}>
        {props.icon && props.icon}
        <input
          id={props.id}
          type={props.type ? props.type : "text"}
          className={
            props.error || props.helperText
              ? "input_style input__error"
              : "input_style"
          }
          onChange={props.onChange}
          autoFocus={props.autoFocus}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          onKeyDown={props.onKeyDown}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          disabled={props.disabled}
          style={props.style}
          onKeyUp={props.onKeyUp}
        />
      </div>

      {props.helperText && <p className="helperText"> {props.helperText}</p>}
      {/* {props.tooltip && (
        <div className="_tooltip_container_">
          <Tooltip
            tooltip={props.tooltip}
            type={props.type ? props.type : "left"}
          />
        </div>
      )} */}
      {props?.children}
      {props.password && renderPasswordAccessory()}
    </div>
  );
}
