import React, { useState } from 'react';
import { Routes, Route } from './router/Router';
import { Layout } from './components/Layout';
import { ExploreView } from './views/ExploreView';
import { BidsView } from './views/BidsView';
import { SavedView } from './views/SavedView';
import { CollectionsView } from './views/CollectionsView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <Routes>
        <Route path="/" element={<ExploreView searchQuery={searchQuery} />} />
        <Route path="/bids" element={<BidsView />} />
        <Route path="/saved" element={<SavedView searchQuery={searchQuery} />} />
        <Route path="/collections" element={<CollectionsView searchQuery={searchQuery} />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/settings" element={<SettingsView />} />
      </Routes>
    </Layout>
  );
}
