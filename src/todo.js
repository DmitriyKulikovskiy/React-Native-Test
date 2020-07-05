import React from 'react'
import { View , Text, StyleSheet, TouchableOpacity} from 'react-native'

const Todo = ({todo,deleteTodo, index,changeTodoStatus}) => {

    return (
        <TouchableOpacity activeOpacity={0.4} onLongPress={() => deleteTodo(todo.id)} onPress={() => changeTodoStatus(todo.id)}>
            <View style={styles.container} >
                <View style={todo.status === false ? styles.todoHeaderActive : styles.todoHeaderDone}>
                    <Text style={styles.number}>Task №{index + 1}</Text>
                </View>
                <View style={styles.todoContainer}>
                    <Text style={styles.todo}>{todo.toDo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 10,
        marginHorizontal: 20,
        flexDirection: 'column',
    },
    todo: {
        fontSize: 20,
        padding: 5,
        alignItems: 'center',
        height: 40
    },
    number: {
        fontSize: 20,
        paddingLeft: 5,
        color: '#fff',
        textAlign: 'center'
    },
    todoHeaderActive: {
        backgroundColor: '#f01000',
        width: '100%'
    },
    todoHeaderDone: {
        backgroundColor: '#03fc0f',
        width: '100%'
    },
    todoContainer: {
        borderStyle: 'solid',
        borderColor: '#4287f5',
        borderWidth: 1,
        width: '100%',
    }
})

export default Todo