import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2 min-h-screen">
      <Loader className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
};

export default Loading;