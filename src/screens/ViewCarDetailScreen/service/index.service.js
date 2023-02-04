import React, { useEffect, useState } from "react";
const ViewCarDetailComponent = ({ children, navigation, route }) => {

    const [tabs, setTabs] = useState([
        {
            name: 'Document', progress: "100%", color: '#008000'
        },
        {
            name: 'Document Images', progress: "70%", color: '#FFFF00'
        }


        ,
        {
            name: 'Vehicle’s Images', progress: "40%", color: '#FFFF00'
        }
        ,
        {
            name: 'Exterior - Front', progress: "100%", color: '#008000'
        }
        ,
        {
            name: 'Exterior - Back', progress: "80%", color: '#FFFF00'
        }
        ,
        {
            name: 'Exterior - Right', progress: "20%", color: '#FFFF00'
        }
        ,
        {
            name: 'Exterior - Left', progress: "40%", color: '#FFFF00'
        }
        ,
        {
            name: 'Exterior - Other', progress: "100%", color: '#008000'
        }
        ,
        {
            name: 'Interior AC', progress: "60%", color: '#FFFF00'
        }

        ,
        {
            name: 'Recommendation', progress: "30%", color: '#FFFF00'
        }

        ,
        {
            name: 'Interiors In Elevation', progress: "70%", color: '#FFFF00'
        }


    ])

    return children({
        navigation,
        tabs

    });

}


export default ViewCarDetailComponent;
