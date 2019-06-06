import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { townSelect } from '../actions/index';
import ClassComponent from '../Components/ClassComponent'

const mapStateToProps = (state, {match: {params}} ) => {
    return {
        data: state.data,
        loading: state.loading,
        id: params.id
    };
};

const ClassContainer = compose(
    withRouter,
    connect(mapStateToProps, {townSelect})
)(ClassComponent);

export default ClassContainer;