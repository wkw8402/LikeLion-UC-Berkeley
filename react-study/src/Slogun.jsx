import React from "react";
import { SlogunSection, SlogunBig, SlogunSmall } from "./styledComponent";

function Slogun() {
  return (
    <SlogunSection>
      <SlogunBig>Hack Your Life</SlogunBig>
      <SlogunSmall>Embody My Idea Myself</SlogunSmall>
    </SlogunSection>
  );
}

export default React.memo(Slogun);