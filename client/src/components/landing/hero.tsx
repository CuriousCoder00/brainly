const Hero = () => {
  return (
    <div className="h-dvh w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center gap-5 justify-center text-center dark:text-white">
        <h1 className="text-7xl font-extrabold">Brainly</h1>
        <p className="text-5xl font-bold lg:text-6xl lg:w-[900px] md:text-5xl md:w-[700px] dark:text-zinc-00">
          A second brain to manage your important links and docs
        </p>
      </div>
    </div>
  );
};

export default Hero;
