import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/screen/LoginScreen';
import InspectionScreen from '../screens/InspectionScreen'
import InspectionCompleteScreen from '../screens/InspectionCompleteScreen'
import InspectionRequestScreen from '../screens/InspectionRequestScreen'
import ViewCarDetailScreen from '../screens/ViewCarDetailScreen/screen/ViewCarDetailScreen'
import InspectBasicCarDetail from '../screens/InspectBasicCarDetail';
import CheckScreen from '../screens/CheckScreen/screen/CheckScreen'
import CarBasicInputScreen from '../screens/CarBasicInputScreen'
import ImageUploadScreen from '../screens/ImageUploadScreen';
import VehicleImagesScreen from '../screens/VehicleImagesScreen'
import VehicleVideoScreen from '../screens/VehicleVideoScreen'
const Stack = createNativeStackNavigator();
export default function Navigation(props) {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}
             initialRouteName={"LoginScreen"}

            >


                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="InspectionScreen" component={InspectionScreen} />
                <Stack.Screen name="InspectionRequestScreen" component={InspectionRequestScreen} />
                <Stack.Screen name="InspectionCompleteScreen" component={InspectionCompleteScreen} />
                <Stack.Screen name="CarBasicInputScreen" component={CarBasicInputScreen} />
                <Stack.Screen name="ViewCarDetailScreen" component={ViewCarDetailScreen} />
                <Stack.Screen name="VehicleImagesScreen" component={VehicleImagesScreen} />
                <Stack.Screen name="CheckScreen" component={CheckScreen} />
                <Stack.Screen name="InspectBasicCarDetail" component={InspectBasicCarDetail} />
                <Stack.Screen name="ImageUploadScreen" component={ImageUploadScreen} />
                <Stack.Screen name="VehicleVideoScreen" component={VehicleVideoScreen} />

            </Stack.Navigator>
        </NavigationContainer >
    );
}