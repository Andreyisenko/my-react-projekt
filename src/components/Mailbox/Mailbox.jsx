import { FcAssistant } from "react-icons/fc";


const Mailbox = ({ name, unreadMessages }) => {
  // console.log(unreadMessages);
  
  return (
    <div>
      <p>Hello {name} <FcAssistant size='25'/></p>
      
        {unreadMessages > 0
          ? <p>You have {unreadMessages} unread messages
      </p>
          : <p>No unread messages</p>}
    </div>
  );
};
export default Mailbox;
