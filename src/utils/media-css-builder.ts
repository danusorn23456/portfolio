import { DeviceObject, DeviceType, device } from "~/theme";
export type CSSBuilderPropertie = string;
//@ts-ignore
export type CSSBuilderValue<T = any> =
  | string
  | number
  | CSSBuilderPropertie
  | DeviceObject
  | undefined
  | null
  | boolean;

export type CSSBuilderTransformValue = (v: CSSBuilderValue) => any;
export type CSSBuilderArray = [
  CSSBuilderPropertie,
  CSSBuilderValue,
  CSSBuilderTransformValue
][];

function maybePxUnit(key: string, value: any) {
  if (
    typeof value === "number" &&
    ["opacity", "z-index"].every((predict) => key !== predict)
  ) {
    return `${value}px`;
  }
  return value;
}

function mediaCSSBuilder(cssArray: CSSBuilderArray) {
  let cssString = "";

  for (const cssItem of cssArray) {
    const cssPropertie = cssItem?.[0];
    const cssValue = cssItem?.[1];
    let cssTransformValue = cssItem?.[2];

    if (typeof cssValue !== "object") {
      let simplifyValue = cssTransformValue(cssValue);
      simplifyValue = maybePxUnit(cssPropertie, simplifyValue);
      if (!simplifyValue) continue;
      cssString += `${cssPropertie}: ${simplifyValue};\n`;
    } else if (typeof cssValue === "object") {
      for (const media in cssValue) {
        const _deviceType = media as DeviceType;
        const valueOfDeviceName = cssValue[_deviceType];

        let simplifyValue = cssTransformValue(valueOfDeviceName);
        if (!simplifyValue) continue;

        simplifyValue = maybePxUnit(cssPropertie, simplifyValue);

        cssString += `@media${device[_deviceType]}{\n${cssPropertie}: ${simplifyValue};\n}\n`;
      }
    }
  }

  return cssString;
}

export { mediaCSSBuilder };
