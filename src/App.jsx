import { useState } from 'react';
import Head from './Head/head';
import Me from './About me/me';
import Skills from './Skills/skills';
import Footer from './Footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return <div>
   <Head />
   <Me />
   <Skills />
   <Footer />
  </div>
}

export default App
