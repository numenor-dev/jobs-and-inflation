'use client';

import { useState, useCallback } from 'react';
import Header from './components/header';
import JobChart from './components/jobchart';
import InfoContainer from './components/infocontainer';
import Footer from './components/footer';
import { ThemeToggle } from "./components/themetoggle";

export default function AppContainer() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleMounted = useCallback(() => setIsLoading(false), []);

  return (
    <main className="flex flex-col bg-zinc-200/50 dark:bg-slate-950 w-auto m-h-screen">
      <div className="flex justify-end mt-12 mr-12">
      <ThemeToggle />
      </div>
      <Header />
      <JobChart isMounted={handleMounted} />
      {!isLoading && <InfoContainer />}
      {!isLoading && <Footer />}
    </main>
  )
}
