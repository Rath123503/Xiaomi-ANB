import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { SmartHomeHeroCarousel } from '../../components/Smart/SmartHomecarousel';
import { ProductSection } from '../../components/Smart/ProductSection';
import { 
  tvsAndHAProducts, 
  vacuumCleanersProducts, 
  environmentApplianceProducts, 
  kitchenApplianceProducts, 
  cookingAppliancesProducts, 
  smartLightingProducts, 
  homeSecurityProducts 
} from '../../data/SmartHome';

export const SmartHome = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      <SmartHomeHeroCarousel onSelectProduct={onSelectProduct} />

      <div className="bg-[#f5f5f5]">
        <ProductSection 
          title="TVs & HA" 
          products={tvsAndHAProducts} 
          navigatePath="/smart-home/tvs-ha"
          onViewAll={() => handleNavigate('/smart-home/tvs-ha')}
        />

        <ProductSection 
          title="Vacuum Cleaners" 
          products={vacuumCleanersProducts} 
          navigatePath="/smart-home/vacuum-cleaners"
          onViewAll={() => handleNavigate('/smart-home/vacuum-cleaners')}
        />

        <ProductSection 
          title="Environment Appliance" 
          products={environmentApplianceProducts} 
          navigatePath="/smart-home/environment-appliance"
          onViewAll={() => handleNavigate('/smart-home/environment-appliance')}
          specialLayout={true}
        />

        <ProductSection 
          title="Kitchen Appliance" 
          products={kitchenApplianceProducts} 
          navigatePath="/smart-home/kitchen-appliance"
          onViewAll={() => handleNavigate('/smart-home/kitchen-appliance')}
          singleLine={true}
        />

        <ProductSection 
          title="Cooking Appliances" 
          products={cookingAppliancesProducts} 
          navigatePath="/smart-home/cooking-appliances"
          onViewAll={() => handleNavigate('/smart-home/cooking-appliances')}
        />

        <ProductSection 
          title="Smart Lightings" 
          products={smartLightingProducts} 
          navigatePath="/smart-home/smart-lightings"
          onViewAll={() => handleNavigate('/smart-home/smart-lightings')}
          specialLayout={true}
        />

        <ProductSection 
          title="Home Security" 
          products={homeSecurityProducts} 
          navigatePath="/smart-home/home-security"
          onViewAll={() => handleNavigate('/smart-home/home-security')}
          specialLayout={true}
        />
      </div>

      <Footer />
    </div>
  );
};

export default SmartHome;