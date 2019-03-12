import React, {Component} from "react";
import {connect} from 'react-redux';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as actions from "../store/actions";



export class MapContainer extends Component {
	render(){
		const {position} = this.props;
		if(!position) return <h2>Loading...</h2>;

		return (
      <Map google={this.props.google} zoom={5} center={position} style={{ width: 700}}>
        <Marker
          title={'EOG Drone'}
          name={'SOMA'}
          position={position} />
      </Map>
    );
	}
}

const mapState = (state) => {
  return {position: state.metric.position};
};

export default connect(
  mapState
)(GoogleApiWrapper({
  apiKey: 'AIzaSyDBWgmEGaSf1S2UGSAeQBnAA7JfRb_br1I'
})(MapContainer));
