import "./home.scss";
import { signal } from "@preact/signals";
import Dummy from "../../components/Dummy/Dummy";
const name = signal("ABC");
export default function home() {
  return (
    <div className="home_wrapper">
      {name}
      <button onClick={() => (name.value = "XYAA")} className="btn">
        ADd
      </button>
      <Dummy name={name} />
    </div>
  );
}
