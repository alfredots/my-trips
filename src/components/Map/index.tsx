import { LatLngTuple } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position: LatLngTuple = [51.505, -0.09]

const Map = () => (
  <MapContainer
    center={position}
    zoom={3}
    style={{ width: '100%', height: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)

export default Map
