/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Performance from './components/Performance';
import GoldSavings from './components/GoldSavings';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Performance />
        <GoldSavings />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
