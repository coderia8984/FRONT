import React from "react";
import kakaobtn from "./kakao_login_medium_narrow.png";

function Kakaologin() {
  const kakaologinApi = "http://abc.com";
  return (
    <a href={kakaologinApi}>
      <img src={kakaobtn} alt="kakao Login button" />
    </a>
  );
}

export default Kakaologin;
