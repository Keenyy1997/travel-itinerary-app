import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

export default class MapElement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      layer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '<a href="http://osm.org/copyright">' +
        'OpenStreetMap</a> contributors'
      },
      mapStyles: {
        height: '100%', 
        width: '100%',
        minHeight: '100vh',
        minWidth: '100vh',
      },
      zoomLevel: '13',
      initialCenter: [40.469742, -3.718684],
    };
  }


  render() {

    const { layer, mapStyles, zoomLevel, initialCenter } = this.state;
    
    return (
      <div className='map-container'>
        <Map 
          style={ mapStyles }
          zoom={ zoomLevel }
          center={ initialCenter }>

          <TileLayer
            url={ layer.url }
            attribution={ layer.attribution }
          />

        </Map>
      </div>
    );
  }
}
