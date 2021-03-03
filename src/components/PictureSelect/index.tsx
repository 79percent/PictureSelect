/**
 * 图片选择组件
 */
import React, { FC, useState, useEffect } from "react";
import "./styles.css";
import PictureItem from "./components/PictureItem";
import { useCheck } from "./utils";

/**
 * pictures每一项类型
 */
type picturesItem = {
  id: string;
  name: string;
  url: string;
};

interface Props {
  pictures: picturesItem[];
  value: string[];
  onChange: (value: string[]) => void;
  [props: string]: any;
}

const PictureSelect: FC<Props> = (props: Props) => {
  const { pictures, value, onChange } = props;
  const [checkedId, setCheckedId] = useState<string[]>([]); // 选中的id
  const [allCheckedId, setAllCheckedId] = useState<string[]>([]); // 全部的id
  const nums = value?.length || 0; // 已选的数量
  const isAllChecked = nums === pictures.length; // 是否全选
  /**
   * 全选
   * @param value
   */
  const handleAllChecked = (value: boolean) => {
    const newValue = value ? allCheckedId : []; // 全选id或空数组
    setCheckedId(newValue);
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  };
  /**
   * 选择某一个
   * @param v
   * @param id
   */
  const handleCheckItem = (v: boolean, id: string) => {
    const idIdex = value.indexOf(id);
    let newValue;
    // 当前未选中时，改为选中
    if (idIdex < 0) {
      newValue = [...value, id];
    } else {
      // 已选中时，取消选中
      const copy = [...value];
      copy.splice(idIdex, 1);
      newValue = [...copy];
    }
    setCheckedId(newValue);
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  };
  useEffect(() => {
    setAllCheckedId(pictures.map((item) => item.id));
  }, [pictures]);
  useEffect(() => {
    setCheckedId([...value]);
  }, [value]);
  return (
    <div className="picture-box">
      <div className="all-check-box">
        <input
          type="checkbox"
          name="allChecked"
          id="allChecked"
          className="allChecked"
          {...useCheck(isAllChecked, handleAllChecked)}
        />
        <span>已选中{nums}个文件</span>
      </div>
      <div className="items-box">
        {pictures?.map((item) => {
          const { id } = item;
          const isChecked = checkedId.includes(id);
          return (
            <PictureItem
              key={id}
              isChecked={isChecked}
              onCheck={handleCheckItem}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PictureSelect;
