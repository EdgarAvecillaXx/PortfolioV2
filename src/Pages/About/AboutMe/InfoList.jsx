import React from "react";
import Info from "./Info";
import myInfo from "../../../models/myInfo";

const InfoList = () => {
  return (
    <div>
      <ul>
        {myInfo.map(info => (
          <Info name={info.name} value={info.value} key={info.name + "Info"} />
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
