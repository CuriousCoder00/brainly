import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="border-t">
      <div className="container py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to get organized?
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Join thousands of users who are already managing their digital
            content more effectively.
          </p>
          <Button size="lg" className="mt-4">
            Start for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
