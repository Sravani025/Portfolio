import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContactContentItem,
  ContentItemHeader,
  ContentItemSubHeader,
  IconBackground,
} from "./style";

interface ContactItemProps {
  icon: IconDefinition;
  header: String;
  content: String;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, header, content }) => {
  return (
    <>
      <ContactContentItem>
        <IconBackground>
          <FontAwesomeIcon icon={icon} style={{ fontSize: "3em" }} />
        </IconBackground>
        <ContentItemHeader>{header}</ContentItemHeader>
        <ContentItemSubHeader>{content}</ContentItemSubHeader>
      </ContactContentItem>
    </>
  );
};

export default ContactItem;
