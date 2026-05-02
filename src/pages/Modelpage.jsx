import React from "react";
import Model from "../component/model";
const Modelpage = ({ closeModel }) => {
  return (
    <div className="divBlock">
      <i class="ri-close-large-line" onClick={closeModel}></i>
      <Model closeModel={closeModel} />
    </div>
  );
};
export default Modelpage;
