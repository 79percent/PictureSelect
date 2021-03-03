import { useState, useEffect } from "react";

/**
 * checkHook
 * @param initialValue 初始值
 * @param callback 值改变回调
 */
export const useCheck = (
  initialValue: boolean,
  callback?: (value: boolean) => void
) => {
  const [checked, setChecked] = useState<boolean>(initialValue);
  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);
  return {
    checked,
    onChange: () => {
      setChecked(!checked);
      if (typeof callback === "function") {
        callback(!checked);
      }
    },
  };
};
