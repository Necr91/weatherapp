import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { townSelect, loadWeatherData } from '../actions/index';

let Navigation = ({ dispatch }) => {
    return (
        <Grid columns={5} centered>
        <Grid.Column textAlign='center'>
            <List selection size='massive' horizontal>
                <Icon name='marker'/>
                <List.Item>            
                    <List.Content>
                        <List.Header onClick={e => {
                            dispatch(townSelect(e.target.id));
                            dispatch(loadWeatherData());
                        }}
                        id='5128638'
                        as={Link} to='/1'>
                        New York
                        </List.Header>
                    </List.Content>
                </List.Item>     
            </List>          
        </Grid.Column>
        <Grid.Column textAlign='center'>
            <List selection size='massive' horizontal>
                <Icon name='marker'/>
                <List.Item>            
                    <List.Content>
                        <List.Header onClick={e => {
                            dispatch(townSelect(e.target.id));
                            dispatch(loadWeatherData());
                        }}
                        id='524901'
                        as={Link} to='/2'>
                        Moscow
                        </List.Header>
                    </List.Content>
                </List.Item>     
            </List>        
        </Grid.Column>
        <Grid.Column textAlign='center'>
            <List selection size='massive' horizontal>
                <Icon name='marker'/>
                <List.Item>            
                    <List.Content>
                        <List.Header onClick={e => {
                            dispatch(townSelect(e.target.id));
                            dispatch(loadWeatherData());
                        }}
                        id='1850147'
                        as={Link} to='/3'>
                        Tokyo
                        </List.Header>
                    </List.Content>
                </List.Item>     
            </List>          
        </Grid.Column>
    </Grid>

    )
}

Navigation = connect()(Navigation);

export default Navigation;