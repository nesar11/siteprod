import React, { Component } from 'react';

class Map extends Component {

    render() {

        return (
            <div className="map-area">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.177517152809!2d101.68632021525235!3d3.047072054620201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b2d67c7018b%3A0xa347939273f1ccfe!2sAl-Ebreiz%20Global%20Capital%20Berhad!5e0!3m2!1sen!2smy!4v1655607636363!5m2!1sen!2smy" loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;