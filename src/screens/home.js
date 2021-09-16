import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const quote = "https://api.kanye.rest/"

const Home = () => {
    const [fakeData, setFakeData] = useState([]);
    const navigation = useNavigation();
    // const getQuote = async () => {
    //     try {
    //         let response = await fetch('https://api.kanye.rest/');
    //         let json = await response.json();
    //         return json.quote;
    //     }catch(error) {
    //         console.error(error);
    //     }
    // }


    useEffect(() => {
        fetch(quote)
        .then(response => response.json())
        .then(json => {
            setFakeData(json.quote);
        });
    });

    const refreshData = () => {
        setFakeData()
    }

    return(
        <View style={styles.page}>
            <View style={styles.container} >
                <Image 
                source={{uri: 'https://images.unsplash.com/photo-1631772763694-ccb14230b650?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'}} style={styles.image}/>
                <Text style={styles.quote}>{fakeData}</Text>
            </View>
            <View style={styles.buttonGroup}>
                <Button title="Get another Quote" color="#A9E4D7"/>
                <View style={{marginTop: 10}}>
                    <Button title="Already In Fav" onPress={() => navigation.navigate("favorite")}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      },
    container: {
        marginTop: -20
    },
    image : {
        width: 200,
        height: 200
    },
    buttonGroup : {
        marginTop: '20%'
    },
    qoute: {
        justifyContent: 'center'
    }
});

export default Home;