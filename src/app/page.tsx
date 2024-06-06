import Projetos from './components/projetos/projetos';
import Habilidades from './components/habilidades/habilidades';
import Navbar from './components/navbar/navbar';
import Contato from './components/contato/contato';
import Footer from './components/footer/footer';
import Sobre from './components/sobre/sobre';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <Navbar />

      <main className=" container mx-auto py-20 px-4 sm:px-6 lg:px-8">

        <Sobre />

        <Projetos />

        <Habilidades />

        <Contato />

      </main>
      
      <Footer />
    </div>
  );
}
