import { FC, PropsWithChildren } from "react";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full p-4 bg-slate-900">{children}</div>
  );
};
