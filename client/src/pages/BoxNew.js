import { InputField } from "../components/Input";
import Button from "../components/Button";
import IconAdd from "../assets/icon-add-primary.svg";
import IconPen from "../assets/icon-pen-primary.svg";
import { useState } from "react";
import IconBox from "../assets/icon-box-primary.svg";

export default function BoxNew() {
  const [boxName, setBoxName] = useState(null);
  const [item, setItem] = useState(null);

  function handleChangeBoxName(event) {
    setBoxName(event.target.value);
  }

  function handleChangeItem(event) {
    setItem(event.target.value);
  }

  return (
    <>
      <InputField
        onSubmit
        title="Geben Sie der Box einen Namen"
        icon={IconPen}
        alt="Icon Add"
        value={boxName}
        onChange={handleChangeBoxName}
      />
      <InputField
        title="Neuer Eintrag"
        icon={IconAdd}
        alt="Icon Add"
        value={item}
        onChange={handleChangeItem}
      />
      <Button type="submit">
        <p>Erstelle eine neue Kiste</p>
        <img src={IconBox} alt="Icon Box" />
      </Button>
    </>
  );
}
