import { FC, PropsWithChildren } from "react";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen  p-4 bg-zinc-800">
      <div className="m-auto w-full md:w-5/6 lg:w-8/12">{children}</div>
    </div>
  );
};
