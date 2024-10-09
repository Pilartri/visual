import Image from "next/image";

import AthleteCard from './AthleteCard';

export default function Home() {
  const athletes = [
    {
      name: 'Natación',
      imageUrl:'/natacion.svg',
    },
    {
      name: 'Atletismo',
      imageUrl: '/run.svg',
    },
    {
      name: 'Ciclismo',
      imageUrl:'/bici.svg',
    },
    {
      name: 'Salto con garrocha',
      imageUrl: '/garrocha.svg',
    },
    {
      name: 'Gimnasia artística',
      imageUrl: '/gim.svg',
    },
    {
      name: 'Judo',
      imageUrl: '/judo.svg',
    },
    {
      name: 'Arco y flecha',
      imageUrl: '/arco.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
    {
      name: 'Katie Ledecky',
      imageUrl: '/natacion.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-black text-center text-[#5F1BBF]">
          VISUAL
        </h1>
        <p className="text-lg font-light text-center mb-16 text-gray-500"> 
          Juegos Olímpicos
        </p>

        <Image className='ml-[300px]'
          src="desarrollo.svg" 
          alt="Olympic Women Participation"
          width={700}
          height={700}
        />
        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-12">
         COLORES
        </h1>

          <Image className='ml-[430px] mt-12'
          src="colores.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={400}
        />

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
         LOGOS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24"></div>
        <Image className='ml-[100px]'
          src="logo_par.svg" 
          alt="Olympic Women Participation"
          width={200}
          height={300}
        />
        <Image className='ml-[540px] mt-[-320px]'
          src="logo2.svg" 
          alt="Olympic Women Participation"
          width={200}
          height={300}
        />
       <Image className='ml-[960px] mt-[-320px]'
          src="logo3.svg" 
          alt="Olympic Women Participation"
          width={200}
          height={300}
        />

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
         ICONOS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          {athletes.map((athlete) => (
            <AthleteCard key={athlete.name} {...athlete} />
          ))}
        </div>

        <h1 className="text-2xl font-black text-center text-[#5F1BBF] mt-24">
         MEDALLERO
        </h1>

        <Image className='ml-[350px] mt-12'
          src="medallero.svg" 
          alt="Olympic Women Participation"
          width={600}
          height={600}
        />

      </div>
    </div>
  );
}

