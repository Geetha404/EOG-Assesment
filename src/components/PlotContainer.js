import React, { Component} from 'react';
import Plot from 'react-plotly.js';
import { connect } from "react-redux";
import * as actions from "../store/actions";


class PlotContainer extends Component {
    render() {
      console.log(this.props.xyPosition);
        if(!this.
          props.xyPosition) return <h2>Loading...</h2>;
        const { x, y } = this.props.xyPosition;

        return (
            <Plot
                data={[{ x: x, y: y}]}
                layout={{width: '100%', height: '100%',  title: 'Drone Temperature'}}
                
            />
        );
    }
}

const mapState = (state) => {
  return {xyPosition: state.metric.xyPosition};
};


export default connect(
  mapState
)(PlotContainer);

