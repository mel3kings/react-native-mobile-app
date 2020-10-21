import React, {useState} from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function SelectionScreen({navigation} = props) {
    const [people, setPeople] = useState([
        {name: 'yoshi', id: '1'},
        {name: 'mario', id: '2'},
        {name: 'luigi', id: '3'},
        {name: 'peach', id: '4'},
        {name: 'toad', id: '5'},
        {name: 'bowser', id: '6'},
    ]);


    const alert = (id) => {
        Alert.alert('testing', 'hello', [
            {
                text: 'Exit', onPress: () => {
                }
            }
        ]);
        console.log(id)
    }

    const moveTo = (name) => {
        console.log('navigation')
        navigation.navigate('PromptScreen', {name})
    }
    const remove = (name) => {
        setPeople((prevProps) => {
            return prevProps.filter(curr => curr.name !== name)
        });
    }
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => moveTo(item.name)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title='change page' onPress={moveTo('mel')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    },
});

export default SelectionScreen
