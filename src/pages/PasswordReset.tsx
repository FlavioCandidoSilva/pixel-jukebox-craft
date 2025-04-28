
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, Key } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PasswordReset = () => {
  const [step, setStep] = useState<"request" | "verify" | "reset">("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the reset request to your API
    console.log("Requesting password reset for:", email);
    toast({
      title: "Reset Email Sent",
      description: `Check your inbox at ${email} for a verification code.`,
    });
    setStep("verify");
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would verify the code with your API
    console.log("Verifying code:", code);
    toast({
      title: "Code Verified",
      description: "You can now set a new password.",
    });
    setStep("reset");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would send the new password to your API
    console.log("Resetting password");
    toast({
      title: "Password Reset Successfully",
      description: "You can now log in with your new password.",
    });
    
    // Redirect to login after a short delay
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-spotify-darkGray flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-spotify-lightBlack p-8 minecraft-card animate-fade-in">
        <Link to="/login" className="flex items-center mb-6 text-sm font-minecraft text-gray-400 hover:text-white">
          <ArrowLeft size={16} className="mr-1" /> Back to login
        </Link>
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-craft-stone flex items-center justify-center rounded-none pixel-border">
            <Key size={24} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-minecraft text-center text-white mb-2">Reset Password</h1>
        
        {step === "request" && (
          <>
            <p className="text-center text-sm font-minecraft text-gray-400 mb-6">
              Enter your email address and we'll send you a code to reset your password.
            </p>
            <form onSubmit={handleRequestReset} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-minecraft text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="pixel-input pl-10"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full font-minecraft text-sm pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              >
                Send Reset Code
              </Button>
            </form>
          </>
        )}
        
        {step === "verify" && (
          <>
            <p className="text-center text-sm font-minecraft text-gray-400 mb-6">
              We've sent a code to {email}. Enter it below to verify your identity.
            </p>
            <form onSubmit={handleVerifyCode} className="space-y-4">
              <div>
                <label htmlFor="code" className="block text-sm font-minecraft text-gray-300 mb-1">
                  Verification Code
                </label>
                <Input
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  required
                  className="pixel-input"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full font-minecraft text-sm pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              >
                Verify Code
              </Button>
            </form>
            <button 
              onClick={() => setStep("request")} 
              className="w-full mt-3 text-center text-sm font-minecraft text-gray-400 hover:text-white"
            >
              Try a different email
            </button>
          </>
        )}
        
        {step === "reset" && (
          <>
            <p className="text-center text-sm font-minecraft text-gray-400 mb-6">
              Create a new password for your account.
            </p>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-minecraft text-gray-300 mb-1">
                  New Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New password"
                  required
                  className="pixel-input"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-minecraft text-gray-300 mb-1">
                  Confirm New Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  className="pixel-input"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full font-minecraft text-sm pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              >
                Reset Password
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
