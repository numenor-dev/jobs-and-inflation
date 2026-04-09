'use client';

import { useState } from 'react';
import Header from './components/header';
import JobChart from './components/jobchart';
import InfoContainer from './components/infocontainer';
import Footer from './components/footer';

export default function AppContainer() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <main className="flex flex-col bg-zinc-200/50 dark:bg-slate-950 w-auto m-h-screen">
      <Header />
      <JobChart isMounted={() => setIsLoading(false)} />
      {!isLoading && <InfoContainer />}
      {!isLoading && <Footer />}
    </main>
  )
}
