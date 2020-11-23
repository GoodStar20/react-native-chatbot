import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Header from 'src/components/screens/Header';
import Message from 'src/components/screens/Message';
import Chatbox from 'src/components/screens/Chatbox';

import Data from 'src/constants/data';
import styles from './styles';

const Chat = () => {
  const customer = 'Elon';
  const [questions, setQuestions] = useState([]);
  const [currentQus, setCurrentQus] = useState('');
  const [messages, setMessages] = useState([]);
  const [path, setPath] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let messagesArr = [];
    let newQuestion;
    if (path === 1) {
      setMessages([]);
      newQuestion = getQuestion(1);
      setCurrentQus(newQuestion);
    } else {
      newQuestion = getQuestion(path);
      setCurrentQus(newQuestion);
      messagesArr = messages;
    }
    const msgRow = { user: 'recipient', message: newQuestion.question };
    messagesArr.push(msgRow);
    setMessages(messagesArr);
  }, [path]);

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
    const messageArr = messages;
    messageArr.push({ user: 'sender', message: message });
    setMessages(messageArr);
    checkValidation();
    setMessage('');
  };
  const errMessage = (message) => {
    const messageArr = messages;
    messageArr.push({ user: 'recipient', message: message });
    setMessages(messageArr);
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
      <Message messages={messages} customer={customer} loading={loading} />
      <Chatbox
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        currentQus={currentQus}
      />
    </View>
  );
};
export default Chat;
