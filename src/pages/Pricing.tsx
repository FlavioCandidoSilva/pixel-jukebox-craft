
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  const toggleBillingCycle = (value: string) => {
    setBillingCycle(value as "monthly" | "yearly");
  };
  
  return (
    <div className="pb-24">
      {/* Header with Minecraft grass block texture */}
      <div className="relative">
        <div 
          className="h-16 w-full bg-craft-grass/60 absolute top-0 left-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' width='4' height='4' fill='%2367943A'/%3E%3Crect y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='12' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='12' width='4' height='4' fill='%235D8731'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated'
          }}
        ></div>
        <div className="relative pt-16 pb-6 px-6 bg-gradient-to-b from-craft-dirt/40 to-transparent">
          <h1 className="text-3xl font-minecraft text-white mb-2">Choose Your Plan</h1>
          <p className="font-minecraft text-gray-300 max-w-2xl mb-6">
            Unlock the full potential of SpotiCraft with our premium plans
          </p>
          
          {/* Billing cycle toggle */}
          <Tabs 
            defaultValue="monthly" 
            className="w-auto inline-block" 
            onValueChange={toggleBillingCycle}
            value={billingCycle}
          >
            <TabsList className="bg-spotify-lightBlack border border-gray-700 h-auto p-1">
              <TabsTrigger 
                value="monthly" 
                className="font-minecraft text-sm data-[state=active]:bg-craft-grass data-[state=active]:text-white rounded-none px-4 py-2"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger 
                value="yearly" 
                className="font-minecraft text-sm data-[state=active]:bg-craft-grass data-[state=active]:text-white rounded-none px-4 py-2"
              >
                Yearly <span className="text-xs bg-craft-grass text-white px-1 py-0.5 ml-1 rounded-sm">Save 20%</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="p-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="minecraft-card bg-spotify-lightBlack p-6 border border-gray-800">
            <div className="mb-4">
              <div className="w-12 h-12 bg-craft-stone pixel-border flex items-center justify-center mb-4">
                <span className="font-minecraft text-white text-2xl">F</span>
              </div>
              <h2 className="font-minecraft text-white text-xl mb-1">Free</h2>
              <div className="font-minecraft text-2xl text-white mb-4">
                $0<span className="text-sm text-gray-400">/month</span>
              </div>
              <p className="font-minecraft text-sm text-gray-400">
                Start your musical journey with basic features
              </p>
            </div>
            
            <Button 
              className="w-full mb-6 pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock"
            >
              Start Free
            </Button>
            
            <ul className="space-y-3 font-minecraft text-sm">
              <PricingFeature available={true}>Stream music with ads</PricingFeature>
              <PricingFeature available={true}>Create playlists</PricingFeature>
              <PricingFeature available={true}>Access on desktop only</PricingFeature>
              <PricingFeature available={false}>Ad-free listening</PricingFeature>
              <PricingFeature available={false}>Offline playback</PricingFeature>
              <PricingFeature available={false}>AI music recommendations</PricingFeature>
              <PricingFeature available={false}>High quality audio</PricingFeature>
            </ul>
          </div>
          
          {/* Individual Plan */}
          <div className="minecraft-card bg-spotify-lightBlack p-6 border-4 border-craft-grass relative transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-craft-grass text-white font-minecraft text-xs py-1 px-3">
              Popular
            </div>
            <div className="mb-4">
              <div className="w-12 h-12 bg-craft-grass pixel-border flex items-center justify-center mb-4">
                <span className="font-minecraft text-white text-2xl">P</span>
              </div>
              <h2 className="font-minecraft text-white text-xl mb-1">Premium</h2>
              <div className="font-minecraft text-2xl text-white mb-4">
                ${billingCycle === "monthly" ? "9.99" : "7.99"}<span className="text-sm text-gray-400">/{billingCycle === "monthly" ? "month" : "month, billed annually"}</span>
              </div>
              <p className="font-minecraft text-sm text-gray-400">
                The complete musical experience for individuals
              </p>
            </div>
            
            <Button 
              className="w-full mb-6 pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
            >
              Get Premium
            </Button>
            
            <ul className="space-y-3 font-minecraft text-sm">
              <PricingFeature available={true}>Stream music ad-free</PricingFeature>
              <PricingFeature available={true}>Create unlimited playlists</PricingFeature>
              <PricingFeature available={true}>Access on all devices</PricingFeature>
              <PricingFeature available={true}>Download music for offline listening</PricingFeature>
              <PricingFeature available={true}>High quality audio (320kbps)</PricingFeature>
              <PricingFeature available={true}>AI music recommendations</PricingFeature>
              <PricingFeature available={false}>Family account sharing</PricingFeature>
            </ul>
          </div>
          
          {/* Family Plan */}
          <div className="minecraft-card bg-spotify-lightBlack p-6 border border-gray-800">
            <div className="mb-4">
              <div className="w-12 h-12 bg-purple-600 pixel-border flex items-center justify-center mb-4">
                <span className="font-minecraft text-white text-2xl">F</span>
              </div>
              <h2 className="font-minecraft text-white text-xl mb-1">Family</h2>
              <div className="font-minecraft text-2xl text-white mb-4">
                ${billingCycle === "monthly" ? "14.99" : "11.99"}<span className="text-sm text-gray-400">/{billingCycle === "monthly" ? "month" : "month, billed annually"}</span>
              </div>
              <p className="font-minecraft text-sm text-gray-400">
                Share the music with up to 6 accounts
              </p>
            </div>
            
            <Button 
              className="w-full mb-6 pixel-button bg-purple-600 hover:bg-purple-700 text-white border-craft-bedrock"
            >
              Get Family Plan
            </Button>
            
            <ul className="space-y-3 font-minecraft text-sm">
              <PricingFeature available={true}>Everything in Premium</PricingFeature>
              <PricingFeature available={true}>Up to 6 accounts</PricingFeature>
              <PricingFeature available={true}>Parental controls</PricingFeature>
              <PricingFeature available={true}>Family Mix playlist</PricingFeature>
              <PricingFeature available={true}>Block explicit music</PricingFeature>
              <PricingFeature available={true}>Separate listening history</PricingFeature>
              <PricingFeature available={true}>Family dashboard</PricingFeature>
            </ul>
          </div>
        </div>
        
        {/* Enterprise section */}
        <div className="mt-12">
          <div className="minecraft-card bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6">
                <div className="w-16 h-16 bg-blue-600 pixel-border flex items-center justify-center">
                  <span className="font-minecraft text-white text-2xl">E</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-minecraft text-2xl text-white mb-2">Enterprise Solutions</h2>
                <p className="font-minecraft text-gray-300 mb-4">
                  Custom plans for businesses and organizations. Get volume licensing, admin controls, and dedicated support.
                </p>
                <Button className="pixel-button bg-blue-600 hover:bg-blue-700 text-white border-craft-bedrock">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="font-minecraft text-2xl text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="minecraft-card bg-spotify-lightBlack p-6">
              <h3 className="font-minecraft text-white mb-2">Can I cancel my subscription anytime?</h3>
              <p className="font-minecraft text-sm text-gray-400">
                Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to Premium features until the end of your billing period.
              </p>
            </div>
            
            <div className="minecraft-card bg-spotify-lightBlack p-6">
              <h3 className="font-minecraft text-white mb-2">How do I change my plan?</h3>
              <p className="font-minecraft text-sm text-gray-400">
                You can change your plan at any time by going to your account settings. The new plan will take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="minecraft-card bg-spotify-lightBlack p-6">
              <h3 className="font-minecraft text-white mb-2">What payment methods do you accept?</h3>
              <p className="font-minecraft text-sm text-gray-400">
                We accept credit/debit cards, PayPal, and various local payment methods depending on your country.
              </p>
            </div>
            
            <div className="minecraft-card bg-spotify-lightBlack p-6">
              <h3 className="font-minecraft text-white mb-2">What's included in the Family plan?</h3>
              <p className="font-minecraft text-sm text-gray-400">
                The Family plan includes all Premium features for up to 6 family members living at the same address. Each family member gets their own separate account with personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature list item component
const PricingFeature = ({ available, children }: { available: boolean; children: React.ReactNode }) => (
  <li className="flex items-center gap-3">
    {available ? (
      <Check size={18} className="text-craft-grass" />
    ) : (
      <X size={18} className="text-gray-500" />
    )}
    <span className={available ? "text-gray-200" : "text-gray-500"}>{children}</span>
  </li>
);

export default PricingPage;
