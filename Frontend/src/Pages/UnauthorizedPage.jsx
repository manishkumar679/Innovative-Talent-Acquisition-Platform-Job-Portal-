import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-[#0a0a0a] flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-[#1a1a1a] rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-[#4682B4] mb-4">Unauthorized Access</h2>
        <p className="text-[#4682B4] mb-6">
          Sorry, you don’t have permission to view this page.
        </p>
        <Button onClick={()=>navigate('/')}>
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;