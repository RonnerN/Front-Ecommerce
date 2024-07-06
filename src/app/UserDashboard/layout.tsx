import { Inter } from "next/font/google"
import SideNav from "@/components/sideNav/SideNav";


const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex h-screen">
      
        <div>
          <SideNav />
        </div>
  
        <div className="flex-grow">
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;