import React, { Component } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';

import RupiText from './RupiText';


// ================= OTP VERIFY ============================
export class OTPVerify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: [],
            value: ""
        };
    }

    render() {
        var globalStyle = require('../../components/styles/styles');

        return (
            // ====================== OTP WRAPPER ============================
            <View style={{ flex: 1, justifyContent: "space-around" }}>

                {/* =================== OTP PINS ====================== */}
                <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: 210 }}>
                        <TextInput
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            value={this.state.otp[0]}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp[0] ? 1 : 0.3, height: 60, padding: 0, flex: 1, letterSpacing: 15 },
                            globalStyle.thin]}
                        ></TextInput>
                        <TextInput
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            value={this.state.otp[1]}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp[1] ? 1 : 0.3, height: 60, padding: 0, flex: 1, letterSpacing: 15 },
                            globalStyle.thin]}
                        ></TextInput>
                        <TextInput
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            value={this.state.otp[2]}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp[2] ? 1 : 0.3, height: 60, padding: 0, flex: 1, letterSpacing: 15 },
                            globalStyle.thin]}
                        ></TextInput>
                        <TextInput
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            value={this.state.otp[3]}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp[3] ? 1 : 0.3, height: 60, padding: 0, flex: 1, letterSpacing: 15 },
                            globalStyle.thin]}
                        ></TextInput>
                    </View>
                </View>
                {/* =================== OTP PINS ====================== */}


                {/* OTP KEYBOARD */}
                <View style={{ width: 291 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('9')}
                            style={otpStyles.keypads}>

                            <RupiText text="9" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('8')}
                            style={otpStyles.keypads}>

                            <RupiText text="8" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('7')}
                            style={otpStyles.keypads}>

                            <RupiText text="7" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('6')}
                            style={otpStyles.keypads}>

                            <RupiText text="6" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('5')}
                            style={otpStyles.keypads}>

                            <RupiText text="5" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('4')}
                            style={otpStyles.keypads}>

                            <RupiText text="4" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('3')}
                            style={otpStyles.keypads}>

                            <RupiText text="3" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('2')}
                            style={otpStyles.keypads}>

                            <RupiText text="2" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('1')}
                            style={otpStyles.keypads}>

                            <RupiText text="1" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('0')}
                            style={otpStyles.keypads}>

                            <RupiText text="0" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                </View>
                {/* OTP KEYBOARD */}

            </View>
        );
    }

    // CLEAR PIN
    onClearArray = () => {

        this.setState({ otp: [] });
    };

    // // RESET PIN TO SOME DEFAULT
    // onResetArray = () => {
    //     this.setState({ otp });
    // };

    otpFunction(val) {
        if (this.state.otp.length < 4) {
            this.setState({ otp: [...this.state.otp, val] }, () => {
                this.props.onValueChanges({ otpVerify: this.state.otp })
            });
        }
    }
}


// ================= PHONE UNMBER VERIFY ============================
export class PhoneInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            otp1: '',
            otp2: '',
            otp3: ''
        };
    }

    render() {
        var globalStyle = require('../../components/styles/styles');

        return (
            // ====================== OTP WRAPPER ============================
            <View>

                {/* =================== OTP PINS ====================== */}
                <View style={{ alignItems: "center", marginBottom: 22 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", maxWidth: 290, letterSpacing: 0 }}>
                        <RupiText
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            text={this.state.otp1}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp1 ? 1 : 0.3, height: 60, padding: 0, marginRight: 5, letterSpacing: 0 },
                            globalStyle.thin]}
                        ></RupiText>
                        <RupiText
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            text={this.state.otp2}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp2 ? 1 : 0.3, height: 60, padding: 0, marginRight: 5, letterSpacing: 0 },
                            globalStyle.thin]}
                        ></RupiText>
                        <RupiText
                            placeholder="#"
                            placeholderTextColor="white"
                            editable={false}
                            text={this.state.otp3}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, opacity: this.state.otp3 ? 1 : 0.3, height: 60, padding: 0, letterSpacing: 0 },
                            globalStyle.thin]}
                        ></RupiText>
                    </View>
                </View>
                {/* =================== OTP PINS ====================== */}


                {/* OTP KEYBOARD */}
                <View style={{ width: 291 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('9')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="9" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('8')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="8" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('7')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="7" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('6')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="6" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('5')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="5" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('4')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="4" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('3')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="3" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('2')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="2" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('1')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="1" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('.')}
                            style={otpStyles.keypads}>

                            <RupiText text="." style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.otpFunction('0')
                            }}
                            style={otpStyles.keypads}>

                            <RupiText text="0" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onBackArray()}
                            style={otpStyles.keypads}>

                            <RupiText text="<" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                </View>
                {/* OTP KEYBOARD */}

            </View>
        );
    }

    // CLEAR PIN
    onClearArray = () => {
        // this.setState({ otp: ""});
    };


    // // RESET PIN TO SOME DEFAULT
    // onResetArray = () => {
    //     this.setState({ otp });
    // };


    // RESET PIN TO ONE STEP BACK
    onBackArray = () => {
        if (this.state.otp3.length > 0) {
            this.setState({ otp3: this.state.otp3.slice(0, -1) }, () => {
                this.props.onValueChanges({ otp3Value: this.state.otp3, req: 'otp3' })
            });
        }
        else if (this.state.otp2.length > 0) {
            this.setState({ otp2: this.state.otp2.slice(0, -1) }, () => {
                this.props.onValueChanges({ otp2Value: this.state.otp2, req: 'otp2' })
            });
        }
        else if (this.state.otp1.length > 0) {
            this.setState({ otp1: this.state.otp1.slice(0, -1) }, () => {
                this.props.onValueChanges({ otp1Value: this.state.otp1, req: 'otp1' })
            });
        }
    };


    otpFunction(val) {
        if (this.state.otp1.length < 3) {
            this.setState({ otp1: [...this.state.otp1, val] }, () => {
                this.props.onValueChanges({ otp1Value: this.state.otp1, req: 'otp1' })
            });
        }
        else if (this.state.otp2.length < 3) {
            this.setState({ otp2: [...this.state.otp2, val] }, () => {
                this.props.onValueChanges({ otp2Value: this.state.otp2, req: 'otp2' })
            });
        }
        else if (this.state.otp3.length < 4) {
            this.setState({ otp3: [...this.state.otp3, val] }, () => {
                this.props.onValueChanges({ otp3Value: this.state.otp3, req: 'otp3' })
            });
        }
    }
}

export class AmountInputPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            zero: '50',
            value: ""
        };
    }
    render() {
        var globalStyle = require('../../components/styles/styles');

        return (
            // ====================== OTP WRAPPER ============================
            <View style={[this.props.style]}>

                {/* =================== OTP PINS ====================== */}
                <View style={{ alignItems: "center", marginBottom: 22 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", maxWidth: 290, letterSpacing: 0 }}>
                        <RupiText text="USD" style={{ fontSize: 20, lineHeight: 25, marginBottom: 12, marginRight: 17 }}></RupiText>
                        <RupiText
                            placeholder="0"
                            placeholderTextColor="white"
                            editable={false}
                            text={this.state.amount == '' ? this.state.zero : this.state.amount}
                            style={[{ color: "white", fontSize: 48, lineHeight: 60, height: 60, padding: 0, marginRight: 5, letterSpacing: 0 },
                            globalStyle.thin]}
                        ></RupiText>
                    </View>
                </View>
                {/* =================== OTP PINS ====================== */}


                {/* OTP KEYBOARD */}
                <View style={{ width: 291 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('9')}
                            style={otpStyles.keypads}>

                            <RupiText text="9" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('8')}
                            style={otpStyles.keypads}>

                            <RupiText text="8" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('7')}
                            style={otpStyles.keypads}>

                            <RupiText text="7" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('6')}
                            style={otpStyles.keypads}>

                            <RupiText text="6" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('5')}
                            style={otpStyles.keypads}>

                            <RupiText text="5" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('4')}
                            style={otpStyles.keypads}>

                            <RupiText text="4" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('3')}
                            style={otpStyles.keypads}>

                            <RupiText text="3" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('2')}
                            style={otpStyles.keypads}>

                            <RupiText text="2" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('1')}
                            style={otpStyles.keypads}>

                            <RupiText text="1" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('.')}
                            style={otpStyles.keypads}>

                            <RupiText text="." style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.otpFunction('0')}
                            style={otpStyles.keypads}>

                            <RupiText text="0" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onBackArray()}
                            style={otpStyles.keypads}>

                            <RupiText text="<" style={otpStyles.keys}></RupiText>

                        </TouchableOpacity>
                    </View>
                </View>
                {/* OTP KEYBOARD */}

            </View>
        );
    }

    // CLEAR PIN
    onClearArray = () => {
        // this.setState({ otp: ""});
    };


    // // RESET PIN TO SOME DEFAULT
    // onResetArray = () => {
    //     this.setState({ otp });
    // };


    // RESET PIN TO ONE STEP BACK
    onBackArray = () => {
        this.setState({ amount: this.state.amount.slice(0, -1) }, () => {
            this.props.onAmountChange(this.state.amount)
        });
    };

    otpFunction(val) {
        this.setState({ amount: [...this.state.amount, val] }, () => {
            this.props.onAmountChange(this.state.amount)
        });
    }
}


const otpStyles = StyleSheet.create({
    keypads: {
        height: 64,
        width: 64,
    },
    keys: {
        textAlign: "center",
        fontSize: 32,
        lineHeight: 64,
        fontFamily: "Apercu Light",
        width: 64
    }
})
