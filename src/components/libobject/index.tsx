import React from "react";

export default function LibObject({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex size-64 items-center justify-center rounded-lg bg-neutral-950/70 transition-all hover:rounded-xl hover:p-4">
      <div className="flex size-full items-center justify-center rounded-lg bg-neutral-800">
        {children}
      </div>
    </div>
  );
}
