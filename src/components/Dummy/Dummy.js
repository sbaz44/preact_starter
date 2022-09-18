import { useEffect, useCallback } from "preact/compat";
import { signal } from "@preact/signals";
const count = signal(0);
const selected = signal("Apple");
const fruits = ["Apple", "Mango", "Banana", "Strawberry"];
export default function Dummy({ name }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => count.value++}>ADd</button>
      <div style={{ display: "flex" }}>
        {fruits.map((item) => (
          <div
            style={{
              backgroundColor: selected.value === item ? "red" : "yellow",
            }}
            onClick={() => (selected.value = item)}
          >
            {item}
          </div>
        ))}
      </div>
      {selected}
      {name}
    </div>
  );
}
