import React, { Component } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";

import { ItemList } from "../../../components/layouts/list/itemList";

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default class Client extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    clientDetailsHandler = () => {
        this.props.navigation.navigate('ClientDetails');
    }

    clientDetailsHandlerDelete = () => {
        console.log('Client Details Handler Deleted');
    }


    render() {
        let globalStyle = require('../../../components/styles/styles');

        return (
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <ScrollView>

                    {/*====================SEARCH BAR STARTS HERE ==============================*/}
                    <View style={{ flex: 1, justifyContent: "center" }, styles.searchboxContainer}>
                        <TextInput placeholder="Search Client" style={[{ position: "absolute", left: 0, right: 0, top: 0, height: 40, paddingLeft: 20, backgroundColor: "white", zIndex: 2 }, globalStyle.f500]}
                            onChangeText={(searchInput) => this.setState({ searchInput })}
                            value={this.state.searchInput}
                            onSubmitEditing={() => this.setState({ bankFilterVisible: false })}
                        ></TextInput>

                        {/*================== SEARCH BAR ICON =======================*/}
                        <View style={styles.searchboxIcon}>
                            <Icon style={styles.icon} name="magnifier" size={20} color="white"></Icon>
                        </View>
                    </View>

                    <View style={styles.listView}>
                        <ItemList onItemPressed={this.clientDetailsHandler} onIconPressed={this.clientDetailsHandlerDelete} scale="Deprecated" backgroundColor="red" title="Gyanu Ojha" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Fresher" backgroundColor="darkgrey" title="Keshab Gautam" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Moderate" backgroundColor="lightgreen" title="Regan Timsina" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Fresher" backgroundColor="darkgrey" title="Pabitra Ojha" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="High" backgroundColor="green" title="Pooja Gautam" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Low" backgroundColor="pink" title="Romisha Timsina" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Deprecated" backgroundColor="red" title="Nischal Timsina" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Moderate" backgroundColor="lightgreen" title="Yana Swami Muttu Swami" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                    <View style={styles.listView}>
                        <ItemList scale="Fresher" backgroundColor="darkgrey" title="Yana Swami Muttu Swami Yan Gopal Aeyar" iconName="trash" textColor="white" iconColor="red" iconSize={20} />
                    </View>

                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    // list view
    listView: {
        marginVertical: 15,
    },

    // Searchbox
    searchboxContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20
    },
    icon: {
        color: 'black',
    },
    searchboxIcon: {
        zIndex: 999,
        marginTop: 10,
        marginRight: 12,
    },
})
