import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FunctionComponent from '../Components/FunctionComponent'
import { townSelect } from '../actions/index'

const mapStateToProps = (state, {match: {params}} ) => {
    return {
        data: state.data,
        loading: state.loading,
        id: params.id
    };
};

const FunctionContainer = compose(
    withRouter,
    connect(mapStateToProps, {townSelect})
)(FunctionComponent);

export default FunctionContainer;