import React from 'react';
import { List, Loader, Container, Segment } from 'semantic-ui-react';

const WeatherData = ({data, loading}) => {
    return (
        loading
        ?   <Container textAlign='center'>
                <Loader size='massive' active inline />
            </Container>
        :
            <Container text >
                <Segment raised textAlign='center' color='black'>
                    <List size='massive'>
                        {data.weather.map((item, index) => (
                            <List.Item key={index}>Погода: {item.description}</List.Item>
                        ))}
                        <List.Item>Температура: {data.main.temp} &deg;C</List.Item>
                        <List.Item>Давление воздуха: {data.main.pressure} мм рт. ст.</List.Item>
                        <List.Item>Скорость ветра: {data.wind.speed} м/с</List.Item>                        
                    </List>
                </Segment>
            </Container>
    )
}

export default WeatherData;