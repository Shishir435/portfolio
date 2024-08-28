import { Loader2 } from "lucide-react";

const Overlay = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-500/20">
      <Loader2 className="size-10 animate-spin" />
    </div>
  );
};

export default Overlay;
