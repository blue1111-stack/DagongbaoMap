
import React from 'react';
import WarMap from './components/WarMap';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-[#f4f1ea] text-stone-900 selection:bg-red-200 selection:text-red-900">
      <header className="mb-8 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 border-b-2 border-red-800 pb-2 inline-block">
          抗战烽火中的 “舆论旗帜”
        </h1>
        <p className="text-lg text-stone-700 italic">
          (1931-1945)一路流亡，一路发声：战火中的办报长征
        </p>
      </header>

      <main className="w-full max-w-6xl aspect-[4/3] relative">
        <WarMap />
      </main>

      <footer className="mt-12 text-sm text-stone-500 max-w-xl text-center leading-relaxed">
        <p>“只要中国还有一寸土地，我们就办一天报。”</p>
        <p className="mt-2">— 1937年11月《大公报》上海版休刊辞</p>
      </footer>
    </div>
  );
};

export default App;
