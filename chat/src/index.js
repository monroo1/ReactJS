import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './index.css';

const MessageItem = ({messageList = []}) => {
  return (
    <div>
      <h1>Messages:</h1>
    {messageList.map((message, index) => (
      <div className="messageItem" key={index}> 
        <div>Author: {message.author}</div>
        <div>Text: {message.text}</div>
      </div>
    ))}
    </div>
  )
}
const App = () => {
  // const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    setMessageList([...messageList, {text: messageText, author: "messageAuthor"}]);
    setMessageText("");
  };
  // const changeInputAuthor = (event) => {
  //   setMessageAuthor(event.target.value);
  // }
  const changeInputText = (event) => {
    setMessageText(event.target.value);
  }

  useEffect(() => {
    if(messageList.length > 0){
      if(messageList[messageList.length-1]?.author !== "Bot"){
        setTimeout(() => {
          setMessageList([...messageList, {text: "botMessage", author: "Bot"}]);
        }, 1000);
      }
    }
  }, [messageList]) 

  return(
    <div>
      {/* <input type="text" placeholder="Введите автора" onChange={changeInputAuthor} value={messageAuthor}/><br/> */}
      <input type="text" placeholder="Введите сообщение" onChange={changeInputText} value={messageText}/><br/>
      <input type="button" value="Отправить" onClick={sendMessage}/>
      <MessageItem messageList={messageList}/>
    </div>
  )
}

ReactDOM.render( 
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

