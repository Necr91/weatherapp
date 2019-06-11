import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Container, Segment, Header } from 'semantic-ui-react';

const FunctionComponent = ({data, loading, id, townSelect}) => {

    useEffect(() => {
        townSelect(id)
    }, [id]);
    
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
};

FunctionComponent.propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    id: PropTypes.string,
    townSelect: PropTypes.func
};

export default FunctionComponent;