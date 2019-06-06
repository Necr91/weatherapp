import React, { Component } from 'react';
import { List, Loader, Container, Segment, Header } from 'semantic-ui-react';

class ClasComponent extends Component {
    componentDidMount() {        
        this.props.townSelect(this.props.id)               
    }

    componentDidUpdate(prevProps){        
        if (this.props.id === prevProps.id && this.props.loading) {
            this.props.townSelect(this.props.id);
        }
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
                            {this.props.data.weather.map((item, index) => (
                                <List.Item key={index}>Погода: {item.description}</List.Item>
                            ))}
                            <List.Item>Температура: {this.props.data.main.temp} &deg;C</List.Item>
                            <List.Item>Давление воздуха: {this.props.data.main.pressure} мм рт. ст.</List.Item>
                            <List.Item>Скорость ветра: {this.props.data.wind.speed} м/с</List.Item>                        
                        </List>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default ClasComponent;