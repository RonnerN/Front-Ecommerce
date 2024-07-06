import React from "react";
import Carousel from "@/components/carousel/carousel";
import SalesProducts from "@/components/salesProducts/SalesProducts";
import RecommendedProducts from "@/components/recommendedProducts/RecommendedProducts";

const Home: React.FC = () => {
    return (
  
        <div>
          <Carousel/>
          <SalesProducts/>
          <RecommendedProducts/>
        </div>
        
    );
  };
  
  export default Home;