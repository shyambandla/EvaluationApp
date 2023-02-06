import * as React from 'react'
import { SafeAreaView, View, Image, Dimensions, Switch, ScrollView } from 'react-native'
import EmailIcon from '../../../assets/svg/EmailIcon'
import SecureIcon from '../../../assets/svg/SecureIcon'
import Button from '../../../component/Button'
import InputText from '../../../component/InputText'
import SimpleText from '../../../component/SimpleText'
import { LoginPicture, LoginCircles } from '../../../constants/Images'
const LoginComponent = ({
    navigation,
    isEnabled,
    setIsEnabled,
    toggleSwitch,
    email,
    setEmail,
    password,
    setPassword,
    onSubmit
}) => {
    const LoginDetail = () => {
        return (
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <SimpleText
                    text="Evaluation"
                    Style={{ fontSize: 30, fontWeight: '500', color: 'white' }}
                />
                <SimpleText
                    text="Check your car's price with us"
                    Style={{
                        marginTop: 6,
                        fontSize: 12, fontWeight: '500', color: 'white'
                    }}

                />
            </View>
        )
    }
    const TextArea = () => {
        return (
            <View style={{ marginTop: 71, backgroundColor: 'white', paddingHorizontal: 16, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 57 }}>
                <InputText
                    Icon={<EmailIcon />}
                    placeHolder={'Email Adress'}
                    value={email}
                    onValueChange={(text) => setEmail(text)}
                />
                <View style={{ marginTop: 10 }} />
                <InputText
                    isSecure={isEnabled}
                    Icon={<SecureIcon />}
                    placeHolder={'Password'}
                    value={password}
                    onValueChange={(text) => setPassword(text)}

                />
                <View style={{
                    marginTop: 18,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                }}>
                    <Switch
                        trackColor={{
                            false: "#FFC527", true: "gray"
                        }}
                        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                        ios_backgroundColor="#FFC527"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <SimpleText
                        text={"Show Password"}
                        Style={{
                            marginLeft: 9,
                            alignSelf: 'center',
                            fontSize: 10, fontWeight: '500', color: '#7C82A1'
                        }}
                    />
                </View>
                {LoginButton()}
            </View>
        )
    }

    const LoginButton = () => {

        // () => navigation.navigate('InspectionScreen')


        return (
            <View style={{ marginVertical: 43, }}>
                <Button
                    backgroundColor="#F5B00F"
                    textColor={'black'}
                    title="Login"
                    borderRadius={12}
                    onPress={onSubmit}
                />

            </View>)
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#08a542' }}>
                <View style={{ flex: 1 }}>
                    {/* <Image
                    source={LoginPicture}
                    resizeMode={'stretch'}
                    style={{ width: Dimensions.get('screen').width }}

                /> */}
                    <Image
                        source={LoginCircles}
                        resizeMode={'stretch'}
                        style={{ width: Dimensions.get('screen').width }}

                    />

                    {LoginDetail()}
                    {TextArea()}
                    {/*     */}
                </View>
            </View>
        </ScrollView>
    )

}

export default LoginComponent