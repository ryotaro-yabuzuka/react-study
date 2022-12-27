import "./styles.css";
import { useCallback, useState, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = (e) => setOpen(!open);

  //useEffectと違うのは、第二引数に配列で値を設定できる
  //[]を空にすると最初に生成したものを使用する
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //tempは一生4を使い回される
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
