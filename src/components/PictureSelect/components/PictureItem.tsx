import React, { FC, useState } from "react";
import "./PictureItem.css";
import { useCheck } from "../utils";

interface Props {
  key: string;
  id: string;
  name: string;
  url: string;
  isChecked: boolean;
  onCheck: (value: boolean, id: string) => void;
}

const PictureItem: FC<Props> = (props) => {
  const { url, name, id, isChecked, onCheck } = props;
  const { pathname } = new URL(url);
  const pathnameArr = pathname.split("/");
  const fileName = pathnameArr[pathnameArr.length - 1];
  const [checked, setChecked] = useState<boolean>(isChecked);
  const handleChange = (value: boolean) => {
    setChecked(value);
    if (typeof onCheck === "function") {
      onCheck(value, id);
    }
  };
  const handleClick = () => {
    setChecked(!checked);
    if (typeof onCheck === "function") {
      onCheck(!checked, id);
    }
  };
  return (
    <div className="item-box">
      <input
        type="checkbox"
        name="singleCheck"
        id="singleCheck"
        className="single-check"
        {...useCheck(isChecked, handleChange)}
      />
      <img src={url} alt={name} title={name} onClick={handleClick} />
      <span title={fileName}>{fileName}</span>
    </div>
  );
};

export default PictureItem;
