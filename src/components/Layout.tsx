import Header from './Header';
import Footer from './Footer';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-primary-dark">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
