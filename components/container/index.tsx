import { ReactNode } from "react";

export function Container({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="p-4 border rounded flex flex-col gap-4">
      {children}
    </div>
  )
}
