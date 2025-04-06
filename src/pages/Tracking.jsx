import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const cargoLocations = [
  { id: 1, name: "Cargo 101", lat: 22.5726, lng: 88.3639 }, // Kolkata
  { id: 2, name: "Cargo 102", lat: 19.076, lng: 72.8777 }, // Mumbai
  { id: 3, name: "Cargo 103", lat: 28.6139, lng: 77.209 }, // Delhi
];

const Tracking = () => {
  return (
    <div className="p-4 ml-60"> {/* Sidebar ke baad margin diya */}
      <h1 className="text-lg font-bold mb-3">Cargo Tracking</h1>

      <MapContainer
        center={[22.5726, 88.3639]}
        zoom={5}
        className="h-[500px] w-full rounded-lg shadow-lg"
      >
        {/* Map Tiles */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Cargo Markers */}
        {cargoLocations.map((cargo) => (
          <Marker key={cargo.id} position={[cargo.lat, cargo.lng]}>
            <Popup>
              <b>{cargo.name}</b> <br />
              Location: {cargo.lat}, {cargo.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Tracking;
