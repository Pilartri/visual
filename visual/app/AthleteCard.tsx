import Image from 'next/image';

interface AthleteProps {
  name: string;
  imageUrl: string;
}

const AthleteCard: React.FC<AthleteProps> = ({ name, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <Image src={imageUrl} alt={name} width={250} height={250} className="mb-8" />
      <h2 className="text-2xl font-bold text-[#5F1BBF]">{name}</h2>
    </div>
  );
};

export default AthleteCard;