import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput,
    Button
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Cal extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: null,
        headerRight: <Button
            title="Setting"
            onPress={() => {
                 const { navigate } = navigation;
                navigate('Setting');
            }}/>
    });

    constructor(){
        super();
        this.state = {
            selectedIndex: 0,
            billAmount: 0,
            result: 0,
            tipAmount: 0
        };
    }


    handleIndexChange =  (index) => {
        this.setState({
            selectedIndex: index,
        });

        this.handleBillAmountChange(this.state.billAmount, index);
    };

    handleBillAmountChange = (billAmount, index) => {
        this.setState({
            billAmount: billAmount,
        });


        if (!index && index != 0) {
            index = this.state.selectedIndex;
        }

        billAmount = parseFloat(billAmount);
        var percent = this.segmentValue()[index];
        percent = parseFloat(percent)/100;

        var result = billAmount + (billAmount*percent);

        this.setState({
            result: result,
            tipAmount: billAmount*percent
        });

    };

    segmentValue () {
        return ["10%", "15%", "20%"];
    }

    render() {



        return (
            <View >

                <View>
                    <Text style={{alignContent: 'center', fontSize:30, fontWeight:'bold', textAlign:'center',
                                    marginTop: 30}}>
                        Tip Calculator
                    </Text>
                </View>

                <View style = {{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 5, marginRight:5}}>
                    <Text style = {{flex: 1, fontSize: 20}}>Bill amount</Text>
                    <TextInput
                        onChangeText={this.handleBillAmountChange}
                        keyboardType='numeric'
                        maxLength={10}
                        style = {styles.inputText}
                    />
                </View>

                <View>
                    <Text style = {{fontSize: 20, marginLeft: 5, marginRight:5, marginTop: 10}}>Tip amount: {this.state.tipAmount}</Text>
                </View>

                <View style={{marginTop: 10, marginLeft:5, marginRight:5}}>
                    <SegmentedControlTab
                        values={this.segmentValue()}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                    />
                </View>

                <View style={{marginTop: 10, marginLeft:5, marginRight:5}}>
                    <Text>Bill input: {this.state.billAmount}</Text>
                    <Text>Tip amount: {this.state.tipAmount}</Text>
                    <Text>Segment control: {this.segmentValue()[this.state.selectedIndex]}</Text>
                </View>

                <View style={{marginTop: 30, marginLeft:5, marginRight:5}}>
                    <Text style={{fontWeight: 'bold'}}>Result: {this.state.result}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputText: {
        color: 'blue',
        fontSize: 15,
        flex: 2,
        borderWidth: 2,
    }
});

module.exports = Cal
