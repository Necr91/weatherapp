import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon} from 'semantic-ui-react';

export default () => (    
    <Header as='h1' icon  textAlign='center'>
        <Icon name='building' circular/>
        <Header.Content as={Link} to='/'>WEATHER IN TOWNS</Header.Content>
    </Header>
)