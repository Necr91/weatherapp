import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { townSelect, loadWeatherData } from '../actions/index';

let Navigation = ({ dispatch }) => {
    const towns = [        
        { 'New York': '5128638' },
        { 'Moscow': '524901' },
        { 'Tokyo': '1850147' }
    ]           
            
    return (        
        <Grid columns={5} centered>
            {towns.map((item, index) => {
                return (
                    <Grid.Column textAlign='center' key={index}>
                        <List selection size='massive' horizontal>
                            <Icon name='marker'/>
                            <List.Item>            
                                <List.Content>
                                    <List.Header onClick={e => {
                                    dispatch(townSelect(e.target.id));
                                    dispatch(loadWeatherData());
                                    }}
                                    id={Object.values(item)} as={Link} to='/1'>
                                    {Object.keys(item)}
                                    </List.Header>
                                </List.Content>
                            </List.Item>     
                        </List>          
                    </Grid.Column>
                )                
            })}        
    </Grid>
    )
}

Navigation = connect()(Navigation);

export default Navigation;