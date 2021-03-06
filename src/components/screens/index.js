import React, { useState, useEffect, useStateCallback } from 'react';
import { View } from 'react-native';

import Header from 'src/components/screens/Header';
import ChatList from 'src/components/screens/ChatList';
import Chatbox from 'src/components/screens/Chatbox';

import Data from 'src/constants/data';
import styles from './styles/HeaderStyle';

const Chat = () => {
  const customer = 'Elon';
  const [questions, setQuestions] = useState([]);
  const [currentQus, setCurrentQus] = useState('');
  const [messages, setMessages] = useState([]);
  const [path, setPath] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [pathState, setPathState] = useState(true);

  useEffect(() => {
    let messagesArr = [];
    let newQuestion;
    if (path === 1) {
      setMessages([]);
      newQuestion = getQuestion(1);
    } else {
      newQuestion = getQuestion(path);
      messagesArr = [...messages];
    }
    setCurrentQus(newQuestion);
    getNewMessageSate(newQuestion);
    const msgRow = { user: 'recipient', message: newQuestion.question };
    messagesArr.push(msgRow);
    setMessages(messagesArr);
  }, [path]);
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.user === 'sender') {
        checkValidation();
        setMessage('');
      }
    }
  }, [messages]);
  useEffect(() => {
    (async () => {
      const fetchData = await fetch(Data.URL);
      const result = await fetchData.json();
      setQuestions(result);
      setLoading(false);
      setPath(1);
    })();
  }, []);

  const getQuestion = (id) => {
    if (!questions) return '';
    const filterQuestion = questions.filter((row) => row.id === id);
    const question = filterQuestion?.length > 0 ? filterQuestion[0] : '';
    return question;
  };
  const sendMessage = () => {
    const messageArr = [...messages, { user: 'sender', message: message }];
    setMessages(messageArr);
  };

  const errMessage = (msg) => {
    let messageArr = [...messages, { user: 'recipient', message: msg }];
    setMessages(messageArr);
  };
  const getNewMessageSate = (newMessage) => {
    if (typeof newMessage.validation === 'boolean') {
      setPathState(newMessage.validation);
    }
  };
  const checkValidation = () => {
    const { validation, paths } = currentQus;
    const msg = message.toLocaleLowerCase();
    switch (typeof validation) {
      case 'object':
        if (validation.includes(msg)) {
          switch (typeof paths) {
            case 'object':
              setPath(paths[msg]);
              return;
            case 'number':
              setPath(paths);
              return;
            default:
              return;
          }
        } else {
          if (Array.isArray(validation)) {
            let word = '';
            validation.map((arr, index) => {
              word += arr;
              if (index + 2 === validation.length) {
                word += ' or ';
              } else if (index + 1 !== validation.length) {
                word += ', ';
              }
            });
            errMessage(`Please answer "${word}".`);
            return;
          }
          errMessage('Please answer again');
        }
        return;
      case 'boolean':
        setPathState(validation);
        if (validation) {
          setPath(paths);
        } else {
          errMessage('Please answer again');
        }
        return;
      case 'string':
        const regexConst = new RegExp(validation);
        const result = regexConst.test(msg);
        if (result) {
          setPath(paths);
        } else {
          if (currentQus.style === 'password') {
            errMessage('Password must be at 6 characters!');
            return;
          }
          errMessage('Please answer again');
        }
        return;
    }
  };

  return (
    <View style={styles.background}>
      <Header customer={customer} />
      <ChatList messages={messages} customer={customer} loading={loading} />
      <Chatbox
        message={message}
        setMessage={setMessage}
        onSubmit={sendMessage}
        pathState={pathState}
        currentQus={currentQus}
      />
    </View>
  );
};
export default Chat;
