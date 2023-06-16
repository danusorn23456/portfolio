import { DeviceObject, DeviceType, device } from "~/theme";
export type CSSBuilderPropertie = string;
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

function mediaCSSBuilder(cssArray: CSSBuilderArray) {
  let cssString = "";

  for (const cssItem of cssArray) {
    const cssPropertie = cssItem?.[0];
    const cssValue = cssItem?.[1];
    let cssTransformValue = cssItem?.[2];

    if (typeof cssValue !== "object") {
      let simplifyValue = cssTransformValue(cssValue);
      if (typeof simplifyValue === "number") {
        simplifyValue = `${simplifyValue}px`;
      }
      if (!simplifyValue) continue;
      cssString += `${cssPropertie}: ${simplifyValue};\n`;
    } else if (typeof cssValue === "object") {
      for (const media in cssValue) {
        const _deviceType = media as DeviceType;
        const valueOfDeviceName = cssValue[_deviceType];

        let simplifyValue = cssTransformValue(valueOfDeviceName);
        if (!simplifyValue) continue;

        if (typeof simplifyValue === "number") {
          simplifyValue = `${simplifyValue}px`;
        }

        cssString += `@media${device[_deviceType]}{\n${cssPropertie}: ${simplifyValue};\n}\n`;
      }
    }
  }

  return cssString;
}

export { mediaCSSBuilder };
