import React from 'react'

const Weather = () => {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=27.7089543&lon=85.284933&appid=c270812438ed8b4dc83116cb32f7c86e";

    const option = {
        method: 'GET',
    }

    fetch(url, option)
        .then((response) => response.json())
        .then((data) => console.log(data))



    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px' }}>
            <h1>Today's Weather</h1>
        </div>
    )
}

export default Weather;

//lat=27.7089543&lon=85.284933
//896cbfcda948c22e76f426d12e46da71


