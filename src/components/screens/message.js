import React, { useRef } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';

import Loading from 'src/components/screens/loading';
import styles from 'src/components/screens/styles';

const Message = (props) => {
  const { messages, customer, loading } = props;
  const contentRef = useRef(null);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : null}
          style={styles.messageContainer}
        >
          <ScrollView
            style={styles.contentContainer}
            scrollEnabled={true}
            ref={contentRef}
            onContentSizeChange={(contentWidth, contentHeight) => {
              contentRef.current.scrollToEnd({ animated: true });
            }}
          >
            <View style={{ flexGrow: 1 }}>
              {messages?.length > 0 &&
                messages.map((row, index) => (
                  <View style={styles.messageRow} key={index}>
                    {row.user === 'recipient' ? (
                      <Text style={styles.recipient}>{customer}:</Text>
                    ) : (
                      <Text style={styles.sender}>You:</Text>
                    )}
                    <Text style={styles.message}>{row.message}</Text>
                  </View>
                ))}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

export default Message;
