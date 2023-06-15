const size = {
  mobile: "0px",
  tablet: "425px",
  laptop: "768px",
  desktop: "1024px",
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export type DeviceObject<T = any> = Partial<{
  [K in keyof typeof device]: T;
}>;

export type DeviceType = keyof typeof device;

export { size, device };
