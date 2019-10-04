import React from 'react';
import { values } from "mobx";
import { Button, Text, View } from 'react-native';
import { useStore } from './useStore';
import { selectTodos } from './Selectors';
import { observer } from 'mobx-react';

let id = 1;
const randomId = () => ++id;

export const InnerScreen: React.FC<any> = observer((props) => {
    const store = useStore();
    const taskDict = selectTodos(store);
    const taskArr = values(taskDict);


    const taskItems = taskArr.map((item) => {
       return (<Text key={item.id}>Task {item.id}: {item.name}</Text>)
    });

    setTimeout(()=> {
        console.log('Timeout:', taskArr);
    }, 200);

    const onAddTaskPressed = () => {
        store.addTodo(randomId(), 'New Task');
    };

    console.log('InnerScreen.context:', taskArr);
    return (
        <View>
            <Button title="Add new Task" onPress={onAddTaskPressed} />
            <Text>Inner Component2</Text>
            {taskItems}
        </View>
    );

});
