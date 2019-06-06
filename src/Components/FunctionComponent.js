import React, {useState, useEffect} from 'react';
import { List, Loader, Container, Segment, Header } from 'semantic-ui-react';

const FunctionComponent = ({data, loading, id, townSelect}) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (!init) {
            townSelect(id);
            setInit(true);
        }
    }, [init, townSelect, id]);

    useEffect(() => {
        townSelect(id)
    }, [id, townSelect]);
    
    return (
        loading
    ?
        <Container textAlign='center'>
            <Loader size='massive' active inline />
        </Container>
    :
        <div>
            <Container text >
                <Header size='huge' textAlign='center' attached='top' block>{data.name}</Header>
                <Segment raised attached textAlign='center' color='black'>
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
        </div>
    );
}

export default FunctionComponent;