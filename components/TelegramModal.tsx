
import React from 'react';
import { LocationData } from '../types';

interface TelegramModalProps {
  location: LocationData;
  onClose: () => void;
}

const TelegramModal: React.FC<TelegramModalProps> = ({ location, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
      <div 
        className="vintage-paper max-w-lg w-full p-8 shadow-2xl relative border-[1px] border-stone-400 rotate-1 md:rotate-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rough texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-red-800 transition-colors text-2xl"
        >
          ✕
        </button>

        {/* Telegram Header */}
        <div className="border-b-2 border-double border-red-800 pb-4 mb-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-bold tracking-widest text-red-900 uppercase">Telegram / 战时电报</p>
              <h2 className="text-3xl font-bold text-stone-800">{location.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-xs text-stone-500">YEAR / 时间</p>
              <p className="font-bold text-red-800 underline decoration-dotted">{location.year}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6 relative">
          <section>
            <h3 className="text-xs font-bold text-stone-500 uppercase mb-2 tracking-tighter">Meaning / 意义</h3>
            <p className="text-stone-700 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
              {location.history}
            </p>
          </section>

          <section className="bg-red-50/50 p-4 border-l-4 border-red-800 italic">
            <h3 className="text-xs font-bold text-red-800 uppercase mb-2">History / 史实记载</h3>
            <div className="max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
              <p className="text-stone-800 text-sm whitespace-pre-wrap text-justify leading-relaxed">
                {location.thought}
              </p>
            </div>
          </section>
        </div>

        {/* Stamp Effect */}
        <div className="absolute bottom-6 right-6 opacity-40 select-none">
          <div className="border-4 border-red-900/60 rounded-full w-16 h-16 flex items-center justify-center text-red-900/60 font-bold rotate-12 text-[10px] text-center p-1 leading-tight uppercase">
            Strictly Private
          </div >
        </div>
        
        {/* Decorative Grid Lines */}
        <div className="mt-8 pt-4 border-t border-stone-200 text-[10px] text-stone-400 font-mono tracking-widest">
          MSG_ID: TKP_EXILE_{location.id.toUpperCase()} // STATUS: ARCHIVED
        </div>
      </div>
    </div>
  );
};

export default TelegramModal;
