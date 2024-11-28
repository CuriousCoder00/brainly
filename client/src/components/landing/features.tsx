const Features = () => {
  return (
    <div className="sm:p-20 xl:p-24 lg:p-20 md:p-16 p-8 bg-gradient-to-b dark:from-black dark:to-zinc-950 flex flex-col items-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto">
        <div className="space-y-4 col-span-1 shadow-inner rounded-lg shadow-slate-500 px-4 py-7">
          <h3 className="text-2xl font-bold">Organize Everything</h3>
          <p className="text-muted-foreground">
            Create collections, add tags, and structure your content the way
            that works best for you.
          </p>
        </div>
        <div className="space-y-4 col-span-1 shadow-inner rounded-lg shadow-slate-500 px-4 py-7">
          <h3 className="text-2xl font-bold">Quick Access</h3>
          <p className="text-muted-foreground">
            Powerful search and filtering to find what you need instantly.
          </p>
        </div>
        <div className="space-y-4 col-span-1 shadow-inner rounded-lg shadow-slate-500 px-4 py-7">
          <h3 className="text-2xl font-bold">Share Securely</h3>
          <p className="text-muted-foreground">
            Collaborate with your team by sharing specific collections or
            documents.
          </p>
        </div>
        <div className="space-y-4 col-span-1 shadow-inner rounded-lg shadow-slate-500 px-4 py-7">
          <h3 className="text-2xl font-bold">Sync Everywhere</h3>
          <p className="text-muted-foreground">
            Access your content seamlessly across all your devices with
            real-time synchronization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
