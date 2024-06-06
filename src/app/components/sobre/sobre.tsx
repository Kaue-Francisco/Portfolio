import FotoKaue from '../../../../public/images/Foto-Kauê.png';

export default function Sobre() {
  return (
    <div id='sobre' className="flex flex-col-reverse items-center justify-center h-screen gap-8 px-4 sm:px-0 sm:flex-row">
      <div className="relative w-full max-w-md rounded-full overflow-hidden sm:w-80 sm:h-80 sm:mr-8 order-2 sm:order-1">
        <img
          src={FotoKaue.src}
          alt="Profile Picture"
          width={320}
          height={320}
          className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-300"
        />
      </div>
      <div className="text-center sm:text-left order-1 sm:order-2">
        <h1 className="text-4xl sm:text-5xl font-bold">Kauê dos Santos Francisco</h1>
        <p className="text-gray-700 mt-4 max-w-md">
          Kauê Francisco é um desenvolvedor backend apaixonado por tecnologia. Ele tem trabalhado na indústria por mais
          de 10 anos, explorando constantemente novas tecnologias e ultrapassando os limites do que é possível.
        </p>
        <span className="block text-gray-700 text-lg font-normal mt-2">Software Engineer | Tech Enthusiast</span>
        <div className="mt-6">
          <a
            href="/curriculo.pdf"
            download
            className="bg-purple-500 text-white py-2 px-4  hover:bg-purple-600 transition-colors duration-300"
            style={{borderRadius: '10px'}}
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </div>
  );
}
