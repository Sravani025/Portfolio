import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  ContactContent,
  ContactContentItem,
  ContactHeader,
  ContactHeaders,
  ContactSubHeader,
  Contacts,
} from "./style";
import ContactItem from "./contactItem";

const Contact: React.FC = () => {
  return (
    <Contacts id="contact">
      <ContactHeaders>
        <ContactHeader>Contact</ContactHeader>
        <ContactSubHeader>hbqoq</ContactSubHeader>
      </ContactHeaders>

      <ContactContent>
        <ContactItem
          icon={faPhone}
          header={"Phone"}
          content={"{+91}-9133710059"}
        />
        <ContactItem
          icon={faEnvelope}
          header={"E-Mail"}
          content={"naga.sravani3025@gmail.com"}
        />
        <ContactItem
          icon={faEnvelope}
          header={"E-Mail"}
          content={"naga.sravani3025@gmail.com"}
        />
        <ContactItem
          icon={faEnvelope}
          header={"E-Mail"}
          content={"naga.sravani3025@gmail.com"}
        />
      </ContactContent>
    </Contacts>
  );
};

export default Contact;
