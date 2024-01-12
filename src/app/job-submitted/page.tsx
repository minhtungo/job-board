import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3">
      <h1 className="tracking text-4xl font-bold tracking-tight lg:text-5xl">
        Job Submitted
      </h1>
      <p>Your job posting has been submitted and is pending approval.</p>
    </main>
  );
};

export default page;
