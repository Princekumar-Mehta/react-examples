import { useState } from "react";

export function MultipleChat() {
  let [recipientId, setRecipientId] = useState(0);
  const contactList = [
    { id: 0, name: "Raj" },
    { id: 1, name: "Maurya" },
    { id: 2, name: "Malhar" },
  ];
  function handleOnChangeRecipient(id) {
    setRecipientId(id);
  }
  return (
    <>
      <Chat recipient={contactList[recipientId]} />
      Select Recipient
      <RecipientList
        contactList={contactList}
        handleOnChangeRecipient={handleOnChangeRecipient}
      />
      <br />
      <button>{`send to ${contactList[recipientId].name}@gmail.com`}</button>
    </>
  );
}

function RecipientList({ contactList, handleOnChangeRecipient }) {
  return (
    <>
      {contactList.map((contact) => {
        return (
          <button
            key={contact.id}
            onClick={handleOnChangeRecipient.bind(null, contact.id)}
          >
            {contact.name}
          </button>
        );
      })}
    </>
  );
}
function Chat({ recipient }) {
  return (
    <>
      <textarea
        key={recipient.id}
        cols={30}
        rows={10}
        placeholder={`Message for ${recipient.name}`}
      />
    </>
  );
}
