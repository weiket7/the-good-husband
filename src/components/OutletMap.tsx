import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Outlet } from '#/types/content';

type Props = {
  outlets: Outlet[];
  activeId: string;
  onSelect: (id: string) => void;
};

function pinIcon(index: number, active: boolean) {
  return L.divIcon({
    className: '',
    html: `<div class="gh-pin ${active ? 'gh-pin--active' : ''}"><span>${index + 1}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 14, { duration: 0.9 });
  }, [lat, lng, map]);
  return null;
}

export function OutletMap({ outlets, activeId, onSelect }: Props) {
  const center = useMemo<[number, number]>(() => [1.3521, 103.8298], []);
  const active = outlets.find((o) => o.id === activeId) ?? outlets[0];

  return (
    <div className="h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200 lg:h-full lg:min-h-[560px]">
      <MapContainer
        center={center}
        zoom={11.5}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        aria-label="Map of The Good Husband laundromat outlets in Singapore"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {outlets.map((outlet, index) => (
          <Marker
            key={outlet.id}
            position={[outlet.lat, outlet.lng]}
            icon={pinIcon(index, outlet.id === activeId)}
            eventHandlers={{ click: () => onSelect(outlet.id) }}
          >
            <Popup>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">{outlet.name}</p>
              <p className="mt-1 text-xs text-ink-muted">{outlet.address}</p>
              <p className="mt-1 text-xs font-semibold text-brand-600">{outlet.hours}</p>
            </Popup>
          </Marker>
        ))}
        <FlyTo lat={active.lat} lng={active.lng} />
      </MapContainer>
    </div>
  );
}
