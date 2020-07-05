import React, { useState } from 'react'
import { View,StyleSheet,TextInput,Button, FlatList, Alert} from 'react-native'
import Todo from './todo'
import { colors } from './assets/style'
import { Image } from 'react-native'
import firebase from 'firebase'


const AddTodo = () => {

    const [value,setValue] = useState('')
    const [todoArr, setTodoArr] = useState([])

    const handleTodoCreator = () => {
        if(value.length < 3){
            Alert.alert('The field must contain at least 3 signs...')
        }else {
            setTodoArr(todo => [
                ...todo,
                {
                    id: Date.now().toString(),
                    toDo: value,
                    status: false
                }
            ]),
            setValue('')
        }
    }

    const deleteTodo = id => {
        setTodoArr(prevArr => prevArr.filter(el => el.id !== id))
    }

    const changeTodoStatus = id => {
        setTodoArr(prevArr => prevArr.map(el => el.id === id ? ({...el, status: !el.status }) : el))
    }

    const clearAll = () => {
        setTodoArr(() => [])
    }

    const clearDone = () => {
        setTodoArr(prevArr => prevArr.filter(el => !el.status))
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextInput  style={styles.input} 
                            placeholder='Type your To-Do'
                            value={value} 
                            onChangeText={setValue}
                />
                <Button title='ADD' 
                        color={colors.MAIN_COLOR}
                        onPress={handleTodoCreator}
                />
            </View>
            
            {todoArr.length === 0 
                ? <Image source={require('./assets/icon-smile.png')} 
                         style={{width: 400, height: 400}}
                  />
                : null
            }
            
            <FlatList   data={todoArr} 
                        renderItem={({item,index}) => 
                            <Todo   index={index} 
                                    todo={item} 
                                    deleteTodo={deleteTodo} 
                                    changeTodoStatus={changeTodoStatus}
                            />
                        }
            />
            <View style={styles.buttonClear} activeOpacity={0.8}>
                <Button title='Clear All'
                        color={colors.MAIN_COLOR}
                        onPress={clearAll}
                />

                <Button title='Clear Done' 
                        color={colors.MAIN_COLOR}
                        onPress={clearDone}
                />
                <Button title="Sign out" 
                        color={colors.MAIN_COLOR}
                        onPress={() => firebase.auth().signOut()} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    box: {
        color: '#000',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 20
    },
    input: {
        width: '90%',
        marginRight: 5,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#4287f5',
        color: '#4287f5'
    },
    buttonClear: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default AddTodo