import { connect } from 'react-redux';
import WeatherData from '../Components/WeatherData';

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading
    };
};

const WeatherDataContainer = connect(mapStateToProps)(WeatherData);

export default WeatherDataContainer;