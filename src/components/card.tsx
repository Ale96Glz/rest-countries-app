type CardProps = {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flag: string;
}

export default function Card({ name, population, region, capital, flag }: CardProps) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-md bg-blue-900 shadow-md">
      <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden">
        <img src={flag} alt={`Bandera de ${name}`} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-8">
        <h2 className="text-lg font-extrabold">{name}</h2>
        <dl className="flex flex-col gap-1 text-homepage">
          <div>
            <dt className="inline font-semibold">Population:</dt>
            <dd className="inline font-light"> {population.toLocaleString()}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Region:</dt>
            <dd className="inline font-light"> {region}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Capital:</dt>
            <dd className="inline font-light"> {capital || 'N/A'}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}