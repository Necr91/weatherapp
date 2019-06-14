import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FunctionComponent from '../Components/FunctionComponent'
import { loadWeatherData, setRoot } from '../actions/index'

const mapStateToProps = (state, {match: {params}} ) => {
    return {
        data: state.get('data'),
        loading: state.get('loading'),
        id: params.id,
        root: state.get('root')
    };
};

const FunctionContainer = compose(
    withRouter,
    connect(mapStateToProps, {loadWeatherData, setRoot})
)(FunctionComponent);

export default FunctionContainer;