import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { LocationMarkerIcon } from '@heroicons/react/outline'

export default function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    return (
        <ReactMapGL
        mapStyle="mapbox://styles/ian038/ckz4e0ibe000e14lxuajuc5u1"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={0}
                        offsetTop={0}
                    >
                        <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">
                            <LocationMarkerIcon className="h-6 text-red-500"/>
                        </p>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            <div>
                                {result.title}
                            </div>
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}