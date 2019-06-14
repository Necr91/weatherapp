import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setRoot } from '../actions/index';

const mapStateToProps = state => {
    return {
        root: state.get('root')
    };
};

let Navigation = ( root ) => {
    const towns = [        
        { 'New York': '5128638' },
        { 'Moscow': '524901' },
        { 'Tokyo': '1850147' }
    ];
            
    return (
        <div>
            <Grid columns='4' centered>
                <Grid.Column>
                    <Button.Group widths='2'>
                        <Button color='blue' onClick={() => {root.setRoot('function')}}>Function</Button>
                        <Button.Or />
                        <Button color='red' onClick={() => {root.setRoot('class')}}>Class</Button>
                    </Button.Group>                
                </Grid.Column>
            </Grid>
            <Grid columns={5} centered>
                {towns.map((item, index) => {
                    return (
                        <Grid.Column textAlign='center' key={index}>
                            <List selection size='massive' horizontal>
                                <Icon name='marker'/>
                                <List.Item>            
                                    <List.Content>
                                        <List.Header 
                                            id={Object.values(item)}
                                            as={Link} to={`${root.root}/${Object.values(item)}`}
                                        >{Object.keys(item)}
                                        </List.Header>
                                    </List.Content>
                                </List.Item>     
                            </List>          
                        </Grid.Column>
                    )                
                })}        
            </Grid>

        </div>
        
    )
}

Navigation = connect(mapStateToProps, { setRoot })(Navigation);

export default Navigation;