function MapPlaceholder() {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-slate-300 dark:border-slate-600">
        <div className="absolute inset-0 flex items-center justify-center font-semibold text-slate-400">
          지도 컴포넌트 자리 (추후 Leaflet / Mapbox GL)
        </div>
      </div>
    );
  }