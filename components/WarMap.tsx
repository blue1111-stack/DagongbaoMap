
import React, { useState, useMemo } from 'react';
import { LOCATIONS } from '../constants';
import { LocationData } from '../types';
import TelegramModal from './TelegramModal';

const WarMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

  // Generate SVG path points
  const pathData = useMemo(() => {
    return LOCATIONS.map((loc, index) => {
      return `${index === 0 ? 'M' : 'L'} ${loc.x} ${loc.y}`;
    }).join(' ');
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg shadow-inner overflow-hidden border-4 border-stone-300 bg-stone-200">
      {/* Background Vintage Map */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url("china_map.jpg")',
          filter: 'sepia(0.6) contrast(1.1) brightness(0.9)'
        }}
      />
      
      {/* Map Overlay Texture */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30"></div>

      {/* SVG Path Layer */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke="rgba(153, 27, 27, 0.4)" // Red-800 with transparency
          strokeWidth="0.4"
          strokeDasharray="1, 1"
          className="animate-[dash_60s_linear_infinite]"
        />
      </svg>

      {/* City Pins */}
      {LOCATIONS.map((loc) => (
        <button
          key={loc.id}
          onClick={() => setSelectedLocation(loc)}
          className="group absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-125 focus:outline-none"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
        >
          {/* Breathing Ping Effect */}
          <span className="absolute inset-0 animate-ping rounded-full bg-red-700/60 inline-flex"></span>
          
          {/* Core Dot */}
          <div className="relative w-4 h-4 md:w-5 md:h-5 bg-red-700 rounded-full border-2 border-stone-100 shadow-md group-hover:bg-red-800 transition-colors"></div>
          
          {/* Label */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/90 backdrop-blur-sm border border-stone-300 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <span className="text-xs font-bold text-stone-800">{loc.name}</span>
          </div>
          
          {/* Persistent Label for mobile readability */}
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold text-stone-900 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] md:group-hover:hidden">
            {loc.name}
          </span>
        </button>
      ))}

      {/* Tooltip / Helper Text */}
      <div className="absolute bottom-4 left-4 text-[10px] md:text-xs text-stone-600 font-serif italic max-w-[200px] pointer-events-none">
        * 点击城市圆点查看迁徙详情与历史记录
      </div>

      {/* Detail Modal */}
      {selectedLocation && (
        <TelegramModal 
          location={selectedLocation} 
          onClose={() => setSelectedLocation(null)} 
        />
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}} />
    </div>
  );
};

export default WarMap;
