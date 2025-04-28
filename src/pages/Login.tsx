
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginValues) => {
    console.log("Login data:", data);
    toast.success("Login successful!");
    navigate("/");
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-craft-bedrock py-12 px-4 sm:px-6 lg:px-8">
      <div className="minecraft-card w-full max-w-md bg-craft-stone space-y-8 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]" style={{imageRendering: 'pixelated'}}>
        <div>
          <div className="w-16 h-16 mx-auto bg-spotify-green pixel-border">
            <div className="h-full flex items-center justify-center">
              <span className="text-3xl font-minecraft text-black">S</span>
            </div>
          </div>
          <h2 className="mt-6 text-center font-minecraft text-2xl font-bold text-white">
            Login to SpotiCraft
          </h2>
          <p className="mt-2 text-center font-minecraft text-sm text-gray-300">
            Or{" "}
            <Link to="/register" className="text-spotify-green hover:text-spotify-green/80 transition-colors">
              create a new account
            </Link>
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-minecraft text-craft-diamond">Email</FormLabel>
                  <FormControl>
                    <Input 
                      className="pixel-input bg-craft-bedrock text-white" 
                      placeholder="steve@minecraft.net" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-craft-redstone font-minecraft text-xs" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-minecraft text-craft-diamond">Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        className="pixel-input bg-craft-bedrock text-white pr-10"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <FormMessage className="text-craft-redstone font-minecraft text-xs" />
                </FormItem>
              )}
            />
            
            <div>
              <Button 
                type="submit" 
                className="w-full font-minecraft pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock transition-all"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-gray-400 hover:text-white font-minecraft">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
