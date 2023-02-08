import React, { useState } from "react";
import {ScrollView, View, Text} from 'react-native';
import {styles} from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = () => {
    const[checked, setChecked] = useState(false)

    const onSignIn= () =>{
        console.log("he")
    }

    return(
        <ScrollView style={styles.mainStyle}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="Enter name"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword={true} label="Password" placeholder="*********"/>
            <View style={styles.agreement}>
                <CheckBox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeMessage}> I agree with <Text style={styles.terms}>Terms</Text> & <Text style={styles.terms}>privacy</Text></Text>
            </View>

            <Button style={styles.btn} title="Sign Up"/>
            <Seperator text="Or sign up with"/>
            <GoogleLogin/>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}> Sign in</Text>
            </Text>
            

        </ScrollView>
    )
}

export default React.memo(SignUp);