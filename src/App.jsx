// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '@/components/SideBar.jsx';
import ForYou from '@/pages/ForYou.jsx';
import Explore from '@/pages/Explore.jsx';
import Channels from '@/pages/Channels.jsx';
import NotFound from '@/pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar is always visible */}
        <Sidebar />

        <main className="flex-1 overflow-auto mx-3">
          <Routes>
            <Route path="/for-you" element={<ForYou />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/explore" element={<Explore />} />

            {/*404 page*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
