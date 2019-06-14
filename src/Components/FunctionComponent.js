import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Container, Segment, Header } from 'semantic-ui-react';

const FunctionComponent = ({data, loading, id, loadWeatherData, setRoot, root}) => {
    useEffect(() => {
            setRoot('function')
        }, [root]);

    useEffect(() => {
        loadWeatherData(id)
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
                <Header size='huge' textAlign='center' attached='top' block>{data.get('name')}</Header>
                <Segment raised attached textAlign='center' color='black'>
                    <List size='massive'>
                        <List.Item>Погода: {data.get('weather').map(item => ( `${item.get('description')}, `))}</List.Item>
                        <List.Item>Температура: {data.get('main').get('temp')} &deg;C,</List.Item>
                        <List.Item>Давление воздуха: {data.get('main').get('pressure')} мм рт. ст.,</List.Item>
                        <List.Item>Скорость ветра: {data.get('wind').get('speed')} м/с</List.Item>                        
                    </List>
                </Segment>
            </Container>
        </div>
    );
};

FunctionComponent.propTypes = {
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    loadWeatherData: PropTypes.func.isRequired
};

export default FunctionComponent;