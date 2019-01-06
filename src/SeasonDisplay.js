import React from 'react';

const seasonConfig={
    Summer:{
        text: 'Knits & Jackets! hoodie season has hit us',
        iconName: 'sun'
    },
    Winter:{
        text: 'Time for surfing and beach',
        iconName:'snowflake'
    }
};


const getSeason =(lat,month)=>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else{
        return lat > 0 ? 'Winter': 'Summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const {text, iconName} =seasonConfig[season];
return <div><i className={`${iconName}icon`} /><h1>{text}</h1><i className ={`${iconName} icon`}/></div>
};

export default SeasonDisplay;