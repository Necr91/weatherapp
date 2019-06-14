import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { loadWeatherData, setRoot } from '../actions/index';
import ClassComponent from '../Components/ClassComponent'

const mapStateToProps = (state, {match: {params}} ) => {
    return {
        data: state.get('data'),
        loading: state.get('loading'),
        id: params.id
    };
};

const ClassContainer = compose(
    withRouter,
    connect(mapStateToProps, {loadWeatherData, setRoot})
)(ClassComponent);

export default ClassContainer;