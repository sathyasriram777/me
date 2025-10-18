import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen p-8 lg:mt-15 lg:ml-100 lg:mr-100">
      <Navbar />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
        Hi, I'm Sathya!
      </h1>
      <p className="text-md md:text-lg lg:text-xl mb-13 max-w-4xl text-foreground">
        I'm a third year computer science and neuroscience student at McGill University. 
      </p>
    </div>
  );
}
