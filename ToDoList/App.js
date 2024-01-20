// import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App(){
  const tasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import 'react-native-get-random-values'
// // import { v4 as uuidv4 } from 'uuid';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
