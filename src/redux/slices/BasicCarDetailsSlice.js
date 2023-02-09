import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registrationNumber:"",
     make:"",
     model:"",
     mfgYear:"",
     mfgMonth:"",
     version:"",
     color:"",
     numberOfOwners:0,
     registrationDate:"",
     odometerReading:"",
     chassisNumber:"",
     engineNumber:"",
      QcData:{
        "success": true,
        "data": {
          "_id": "63e25926c84706be20bf38e6",
          "certificationId": 6,
          "leadInfo": {
            "email": "leadnewtest1@gmail.com",
            "phone": "7034448855"
          },
          "inspectionVenue": {
            "date": "2023-02-07T13:58:51.965Z",
            "time": "2023-02-06T20:30:00.389Z",
            "location": "Bangalore Yard"
          },
          "status": "Verified",
          "remark": "this is for clientnew",
          "history": [
            {
              "status": "Pending",
              "remark": "this is for clientnew",
              "timestamp": 1675778342606,
              "doneBy": {
                "_id": "63d70f81c71155aaf80185bd",
                "name": "EVALUATION",
                "type": "ADMIN",
                "email": "evaluation@admin.com",
                "username": "evaluation@admin",
                "contact": "9123456789",
                "order": 0,
                "status": "ACTIVE",
                "roles": [],
                "createdAt": "2023-01-30T00:29:53.305Z",
                "updatedAt": "2023-01-30T00:29:53.305Z",
                "__v": 0
              }
            },
            {
              "status": "Verified",
              "remark": null,
              "timestamp": 1675779116900,
              "doneBy": {
                "_id": "63d70f81c71155aaf80185bd",
                "name": "EVALUATION",
                "type": "ADMIN",
                "email": "evaluation@admin.com",
                "username": "evaluation@admin",
                "contact": "9123456789",
                "order": 0,
                "status": "ACTIVE",
                "roles": [],
                "createdAt": "2023-01-30T00:29:53.305Z",
                "updatedAt": "2023-01-30T00:29:53.305Z",
                "__v": 0
              }
            },
            {
              "status": "Verified",
              "remark": "this is for clientnew",
              "timestamp": 1675835504415,
              "doneBy": {
                "_id": "63d70f81c71155aaf80185bd",
                "name": "EVALUATION",
                "type": "ADMIN",
                "email": "evaluation@admin.com",
                "username": "evaluation@admin",
                "contact": "9123456789",
                "order": 0,
                "status": "ACTIVE",
                "roles": [],
                "createdAt": "2023-01-30T00:29:53.305Z",
                "updatedAt": "2023-01-30T00:29:53.305Z",
                "__v": 0
              }
            },
            {
              "status": "Pending",
              "remark": "Neww",
              "timestamp": 1675836776110,
              "doneBy": {
                "_id": "63d8f529087a52c56e6933e6",
                "name": "TestUserr",
                "type": "EMPLOYEE",
                "email": "TestUser@test.com",
                "username": "testuser-046831@employee",
                "contact": "9123456782",
                "order": 1,
                "status": "ACTIVE",
                "employeeType": "63d764efc71155aaf80189ea",
                "roles": [],
                "createdAt": "2023-01-31T11:02:01.274Z",
                "updatedAt": "2023-01-31T11:42:52.807Z",
                "__v": 0
              }
            },
            {
              "status": "Pending",
              "remark": "Neww",
              "timestamp": 1675836789392,
              "doneBy": {
                "_id": "63d8f529087a52c56e6933e6",
                "name": "TestUserr",
                "type": "EMPLOYEE",
                "email": "TestUser@test.com",
                "username": "testuser-046831@employee",
                "contact": "9123456782",
                "order": 1,
                "status": "ACTIVE",
                "employeeType": "63d764efc71155aaf80189ea",
                "roles": [],
                "createdAt": "2023-01-31T11:02:01.274Z",
                "updatedAt": "2023-01-31T11:42:52.807Z",
                "__v": 0
              }
            },
            {
              "status": "Pending",
              "remark": "Neww",
              "timestamp": 1675836807919,
              "doneBy": {
                "_id": "63d8f529087a52c56e6933e6",
                "name": "TestUserr",
                "type": "EMPLOYEE",
                "email": "TestUser@test.com",
                "username": "testuser-046831@employee",
                "contact": "9123456782",
                "order": 1,
                "status": "ACTIVE",
                "employeeType": "63d764efc71155aaf80189ea",
                "roles": [],
                "createdAt": "2023-01-31T11:02:01.274Z",
                "updatedAt": "2023-01-31T11:42:52.807Z",
                "__v": 0
              }
            },
            {
              "status": "Verified",
              "remark": "this is for clientnew",
              "timestamp": 1675837396445,
              "doneBy": {
                "_id": "63d70f81c71155aaf80185bd",
                "name": "EVALUATION",
                "type": "ADMIN",
                "email": "evaluation@admin.com",
                "username": "evaluation@admin",
                "contact": "9123456789",
                "order": 0,
                "status": "ACTIVE",
                "roles": [],
                "createdAt": "2023-01-30T00:29:53.305Z",
                "updatedAt": "2023-01-30T00:29:53.305Z",
                "__v": 0
              }
            },
            {
              "status": "Verified",
              "remark": "this is for clientnew",
              "timestamp": 1675838427736,
              "doneBy": {
                "_id": "63d70f81c71155aaf80185bd",
                "name": "EVALUATION",
                "type": "ADMIN",
                "email": "evaluation@admin.com",
                "username": "evaluation@admin",
                "contact": "9123456789",
                "order": 0,
                "status": "ACTIVE",
                "roles": [],
                "createdAt": "2023-01-30T00:29:53.305Z",
                "updatedAt": "2023-01-30T00:29:53.305Z",
                "__v": 0
              }
            }
          ],
          "inspectionDetails": [
            {
              "question": {
                "_id": "63da3fe13dd3d7c6b2394fda",
                "name": "INVENTORY QUESTION 1",
                "choices": [
                  {
                    "value": "good",
                    "weightage": 20
                  },
                  {
                    "value": "great",
                    "weightage": 12
                  }
                ],
                "required": true,
                "status": "ACTIVE",
                "category": "63da33698ab1c49d17c23f9a",
                "createdAt": "2023-02-01T10:33:05.746Z",
                "updatedAt": "2023-02-02T07:52:33.680Z",
                "__v": 1
              },
              "answer": "good"
            },
            {
              "question": {
                "_id": "63da41d73dd3d7c6b2395019",
                "name": "INVENTORY QUESTION 2",
                "choices": [
                  {
                    "value": "correct",
                    "weightage": 23
                  }
                ],
                "required": true,
                "status": "ACTIVE",
                "category": "63da337f8ab1c49d17c23faa",
                "createdAt": "2023-02-01T10:41:27.519Z",
                "updatedAt": "2023-02-01T10:41:27.519Z",
                "__v": 0
              },
              "answer": "correct"
            },
            {
              "question": {
                "_id": "63dbeebbfede18422dc31a94",
                "name": "Q1",
                "choices": [
                  {
                    "value": "op1",
                    "weightage": 56
                  },
                  {
                    "value": "op2",
                    "weightage": 23
                  },
                  {
                    "value": "op3",
                    "weightage": 24
                  }
                ],
                "required": true,
                "status": "ACTIVE",
                "category": "63dbee9cfede18422dc31a85",
                "createdAt": "2023-02-02T17:11:23.181Z",
                "updatedAt": "2023-02-02T17:11:23.181Z",
                "__v": 0
              },
              "answer": "op1"
            }
          ],
          "assignedTo": {
            "_id": "63dcb486c6113acc5ec1bd8c",
            "name": "testnewinspection",
            "type": "EMPLOYEE",
            "email": "aliaspaul11@gmail.com",
            "username": "testnew@ev",
            "roles": [
              {
                "module": "USER",
                "key": "user",
                "add": true,
                "delete": true,
                "edit": true,
                "fetch": true
              },
              {
                "module": "MAKE",
                "key": "make",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "MODEL",
                "key": "model",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "EMPLOYEE TYPE",
                "key": "employee-type",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "TRANSMISSION",
                "key": "transmission",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "FUEL TYPE",
                "key": "fuel-type",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "BODY TYPE",
                "key": "body-type",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "VEHICLE TYPE",
                "key": "vehicle-type",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "COLOR",
                "key": "color",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "VERSION",
                "key": "version",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "LEAD",
                "key": "lead",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "QUESTION CATEGORY",
                "key": "question-category",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "INVENTORY QUESTION",
                "key": "inventory-question",
                "add": false,
                "delete": false,
                "edit": false,
                "fetch": false
              },
              {
                "module": "INVENTORY",
                "key": "inventory",
                "add": true,
                "delete": true,
                "edit": true,
                "fetch": true
              }
            ],
            "contact": "7034441155",
            "order": 5,
            "status": "ACTIVE",
            "employeeType": "63dcb413c6113acc5ec1bd56",
            "createdAt": "2023-02-03T07:15:18.198Z",
            "updatedAt": "2023-02-03T07:15:18.198Z",
            "__v": 0
          },
          "lead": {
            "_id": "63e258fbc84706be20bf38b8",
            "name": "LEADNEWTEST1A",
            "email": "leadnewtest1@gmail.com",
            "phone": "7034448855",
            "message": "check my car",
            "vehicleCount": 1,
            "status": "Pending",
            "vehicleType": "63d8cfced497d24d7a7cf1cc",
            "createdAt": "2023-02-07T13:58:19.470Z",
            "updatedAt": "2023-02-07T13:58:19.470Z",
            "__v": 0
          },
          "createdAt": "2023-02-07T13:59:02.607Z",
          "updatedAt": "2023-02-08T06:40:27.737Z",
          "__v": 1,
          "finalPrice": 100,
          "bodyType": {
            "_id": "63da5c713dd3d7c6b23952ae",
            "name": "BODYTYPE3",
            "order": 2,
            "status": "ACTIVE",
            "createdAt": "2023-02-01T12:34:57.945Z",
            "updatedAt": "2023-02-01T12:34:57.945Z",
            "__v": 0
          },
          "color": {
            "_id": "63da0798c057f30c0faca8a9",
            "name": "COLOR!",
            "code": "#FFFFFF",
            "order": 1,
            "status": "ACTIVE",
            "createdAt": "2023-02-01T06:32:56.925Z",
            "updatedAt": "2023-02-01T06:33:18.998Z",
            "__v": 0
          },
          "details": {
            "registrationNumber": "R1234567",
            "registrationDate": "2023-02-08T05:50:49.437Z",
            "mfgYear": 2023,
            "mfgMonth": "2023-05-08T05:50:54.016Z",
            "numberOfOwners": 2,
            "chasisNumber": "C12345678",
            "engineNumber": "E12345678"
          },
          "fuelType": {
            "_id": "63da5b043dd3d7c6b23951f2",
            "name": "DIESEL2",
            "order": 4,
            "status": "ACTIVE",
            "createdAt": "2023-02-01T12:28:52.644Z",
            "updatedAt": "2023-02-01T12:28:52.644Z",
            "__v": 0
          },
          "inspectionVideo": "https://car-evaluation.s3.amazonaws.com/general/6e0d16f6-eef4-47df-a807-32c20bb9e3c6.mp4",
          "make": {
            "_id": "63da5cc73dd3d7c6b23952c7",
            "name": "MAKE77",
            "order": 7,
            "status": "ACTIVE",
            "createdAt": "2023-02-01T12:36:23.136Z",
            "updatedAt": "2023-02-01T12:36:23.136Z",
            "__v": 0
          },
          "model": {
            "_id": "63d8dbf7d497d24d7a7cf2d9",
            "name": "MODELTEST",
            "image": "https://car-evaluation.s3.amazonaws.com/general/6f07ea6e-48c9-4a99-96f0-939e4eeb316f.jpg",
            "order": 4,
            "status": "ACTIVE",
            "make": "63d7511fc71155aaf801899d",
            "createdAt": "2023-01-31T09:14:31.340Z",
            "updatedAt": "2023-01-31T12:14:28.093Z",
            "__v": 0
          },
          "transmission": {
            "_id": "63da5af43dd3d7c6b23951e8",
            "name": "TESTTRANSMISSION2",
            "order": 4,
            "status": "ACTIVE",
            "createdAt": "2023-02-01T12:28:36.724Z",
            "updatedAt": "2023-02-01T12:28:36.724Z",
            "__v": 0
          },
          "vehicleImages": {
            "profile": {
              "image": "https://car-evaluation.s3.amazonaws.com/general/59de5bc6-2e66-4d2b-aa51-06a2c8404a2e.jpg"
            }, 
            "dd": {
                "image": "https://car-evaluation.s3.amazonaws.com/general/59de5bc6-2e66-4d2b-aa51-06a2c8404a2e.jpg"
              }
          },
          "version": {
            "_id": "63de3b926d61c242bb38ea04",
            "name": "TESTYEARS",
            "order": 6,
            "yearlyValues": [
              {
                "year": 2019,
                "value": 2
              }
            ],
            "status": "ACTIVE",
            "colors": [
              "63da0798c057f30c0faca8a9",
              "63da2241faa7b9a672056cd6",
              "63da5b423dd3d7c6b239522a",
              "63dbedbbfede18422dc31a30"
            ],
            "transmission": "63da5af43dd3d7c6b23951e8",
            "fuelType": "63da5b043dd3d7c6b23951f2",
            "bodyType": "63da5c713dd3d7c6b23952ae",
            "make": "63da5cc73dd3d7c6b23952c7",
            "model": "63d8dbf7d497d24d7a7cf2d9",
            "createdAt": "2023-02-04T11:03:46.272Z",
            "updatedAt": "2023-02-04T11:03:46.272Z",
            "__v": 0
          },
          "autoPrice": 195000,
          "alternateBaseColor": {
            "_id": "63da5b423dd3d7c6b239522a",
            "name": "WHITE",
            "code": "#000",
            "order": 2,
            "status": "ACTIVE",
            "createdAt": "2023-02-01T12:29:54.886Z",
            "updatedAt": "2023-02-02T17:06:57.467Z",
            "__v": 0
          }
        }
      }
};

export const BasicCarDetailSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setRegistrationNo: (state, action) => {
            state.registrationNumber = action.payload;
        },
        setMake: (state, action) => {
            state.make = action.payload;
        },
        setModel: (state, action) => {
            state.model = action.payload;
        },
        setMfgYear: (state, action) => {
            const year=Number(action.payload)
            state.mfgYear = year;
        },
        setMfgMonth: (state, action) => {
            state.mfgMonth = action.payload;
        },
        setVersion: (state, action) => {
            state.version = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setNumberOfOwner: (state, action) => {
            state.numberOfOwners = Number(action.payload);
        },
        setRegistrationDate: (state, action) => {
            state.registrationDate = action.payload;
        },
        setOdometerReading: (state, action) => {
            state.odometerReading = action.payload;
        },
        setChassisNumber: (state, action) => {
            state.chassisNumber = action.payload;
        },
       setEngineNumber: (state, action) => {
            state.engineNumber = action.payload;
        },
        setQcData: (state, action) => {
            state.QcData = action.payload;
        },
        
    },
});

export const {setRegistrationNo,setMake,setModel,setMfgYear,setMfgMonth,setVersion,setColor,setNumberOfOwner,setRegistrationDate,setOdometerReading,setChassisNumber,setEngineNumber,setQcData} = BasicCarDetailSlice.actions;
 

export const selectRegistrationNo = (state) => state.basicCarDetail.registrationNumber;
export const selectMake = (state) => state.basicCarDetail.make;
export const selectModel = (state) => state.basicCarDetail.model;
export const selectMfgYear = (state) => state.basicCarDetail.mfgYear;
export const selectMfgMonth = (state) => state.basicCarDetail.mfgMonth;
export const selectVersion = (state) => state.basicCarDetail.version;
export const selectColor = (state) => state.basicCarDetail.color;
export const selectNumberOfOwners = (state) => state.basicCarDetail.numberOfOwners;
export const selectRegistrationDate = (state) => state.basicCarDetail.registrationDate;
export const selectOdometerReading = (state) => state.basicCarDetail.odometerReading;
export const selectEngineNumber = (state) => state.basicCarDetail.engineNumber;
export const selectChassisNumber = (state) => state.basicCarDetail.chassisNumber;

export const selectBasicCarDetails = (state) => state.basicCarDetail;
export default BasicCarDetailSlice.reducer;