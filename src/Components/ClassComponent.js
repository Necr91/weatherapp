import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Container, Segment, Header } from 'semantic-ui-react';

class ClassComponent extends Component {

    componentDidMount() {        
        this.props.loadWeatherData(this.props.id);
        this.props.setRoot('class');
    }

    render() {
        return (
            this.props.loading
        ?
            <Container textAlign='center'>
                <Loader size='massive' active inline />
            </Container>
        :
            <div>
                <Container text >
                    <Header size='huge' textAlign='center' attached='top' block>{this.props.data.name}</Header>
                    <Segment raised attached textAlign='center' color='black'>
                        <List size='massive'>
                            <List.Item>Погода: {this.props.data.weather.map(item => ( `${item.description}, `))}</List.Item>
                            <List.Item>Температура: {this.props.data.main.temp} &deg;C,</List.Item>
                            <List.Item>Давление воздуха: {this.props.data.main.pressure} мм рт. ст.,</List.Item>
                            <List.Item>Скорость ветра: {this.props.data.wind.speed} м/с</List.Item>                        
                        </List>
                    </Segment>
                </Container>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    loadWeatherData: PropTypes.func.isRequired
};

export default ClassComponent;