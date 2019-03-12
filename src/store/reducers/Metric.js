import * as actions from "../actions";

const initialState = {
  xyPosition: {},
  position: null
};

const toF = c => (c * 9) / 5 + 32;

const metricDataReceived = (state, action) => {
  //console.log('reducer metricDataReceived', action.data)
  // const { data } = action;
  // const x = data.map(d => new Date(d.timestamp));
  // const y = data.map(d => d.metric);
  let xyPosition = {};
  let position = {};
  if(action.data && action.data.data){
    const data = action.data.data;
    const x = data.map(d => new Date(d.timestamp));
    const y = data.map(d => d.metric);
    xyPosition = { x, y };
    
    const latestData = data[data.length-1];

    position= {
      lat: latestData.latitude,
      lng: latestData.longitude
    }
  }
 
  return {
    ...state,
    xyPosition,
    position
  };
};

const handlers = {
  [actions.METRIC_DATA_RECEIVED]: metricDataReceived
};

export default (state = initialState, action) => {
  //console.log('reducer metric action ', action);
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
