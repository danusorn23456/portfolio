import { imagesPaths } from "./image-paths";
import { TechStackName } from "./type";

export interface TechStackIconProps {
  name: TechStackName;
}

function TechStackIcon({ name }: TechStackIconProps) {
  name = name.toLocaleLowerCase().replace(/\s/g, "") as TechStackName;
  return (
    <div
      style={{
        width: "1rem",
        height: "1rem",
        background: "black",
        borderRadius: 2,
      }}
    >
      <img
        src={imagesPaths[name]}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export { TechStackIcon };
export type { TechStackName };
