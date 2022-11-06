import {
    FooterDiv,
    FooterBig,
    FooterSmall,
  } from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <Footer>
          <FontAwesomeIcon icon={faReact} />
          <FooterBig>for react study</FooterBig>
          <FooterSmall>2022. by kun</FooterSmall>
        </Footer>
    );
}

export default Footer;