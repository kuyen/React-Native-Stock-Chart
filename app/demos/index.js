import React, { PropTypes, Component } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Text from '../components/Text';
import { navigatePush } from '../redux/modules/routing';

class Demos extends Component {
  render() {
    const { handlePress } = this.props;

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => handlePress('BasicLineChart')}>
          <Text>Basic Line Chart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('ChartWithAxis')}>
          <Text>Line Chart with Axis</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('MultipleAxes')}>
          <Text>Line Chart with multiple Axes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('VolumeChart')}>
          <Text>Volume Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('StockChartWithVolume')}>
          <Text>Stock Chart with Volume</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('CustomStockChart')}>
          <Text>Custom Stock Chart</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

Demos.propTypes = {
  handlePress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    handlePress: (key) => {
      dispatch(navigatePush({ key }));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Demos);
