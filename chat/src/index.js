import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = "Helllo World!";

const MessageComponent = ({ message }) => {
return (
    <div class="main">
        <h1>{ title }</h1>
        <div>Переданный текст: {message}</div>
    </div>
    );
};

const AppComponent = ({ messageApp }) => {
  return <MessageComponent message={messageApp}/>
}

ReactDOM.render( 
    <React.StrictMode>
      <MessageComponent message="Здесь скоро что-то будет..." />
      <AppComponent messageApp="Еще одна прикольная инфа."/>
    </React.StrictMode>,
    document.getElementById('root')
);