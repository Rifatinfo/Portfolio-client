import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2 min-h-screen">
      <Loader className="h-12 w-12 animate-spin text-primary" />
      {/* <span className="text-xl font-medium text-gray-600">Loading...</span> */}
    </div>
  );
};

export default Loading;