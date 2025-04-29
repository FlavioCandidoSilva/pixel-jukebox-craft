
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Globe, Bell, Shield, Laptop, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Settings = () => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [notifications, setNotifications] = useState({
    newReleases: true,
    playlist: true,
    artists: false,
    offers: true,
  });
  const [privacy, setPrivacy] = useState({
    shareListening: true,
    showActivity: true,
    privateMode: false,
  });
  const [audio, setAudio] = useState({
    autoplay: true,
    crossfade: true,
    normalization: true,
  });
  const [connectDevice, setConnectDevice] = useState(false);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    toast.success(`Language changed to ${value === 'en' ? 'English' : value === 'es' ? 'Spanish' : value === 'pt' ? 'Portuguese' : 'French'}`);
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
    toast.success(`Theme changed to ${value}`);
  };

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePrivacyChange = (key: keyof typeof privacy) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleAudioChange = (key: keyof typeof audio) => {
    setAudio(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleDeviceToggle = () => {
    setConnectDevice(!connectDevice);
    if (!connectDevice) {
      toast.success("Scanning for nearby devices...");
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    // In a real app, this would call your authentication logout method
    toast.success("Logging out...");
    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="container py-6">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          to="/" 
          className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <h1 className="text-3xl font-minecraft text-white">Settings</h1>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <div className="flex overflow-x-auto pb-2">
          <TabsList className="bg-gray-800 h-auto p-1">
            <TabsTrigger 
              value="account"
              className="py-2 px-4 data-[state=active]:bg-gray-700 rounded text-sm"
            >
              Account
            </TabsTrigger>
            <TabsTrigger 
              value="language"
              className="py-2 px-4 data-[state=active]:bg-gray-700 rounded flex items-center gap-2 text-sm"
            >
              <Globe size={16} />
              Language
            </TabsTrigger>
            <TabsTrigger 
              value="notifications"
              className="py-2 px-4 data-[state=active]:bg-gray-700 rounded flex items-center gap-2 text-sm"
            >
              <Bell size={16} />
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="privacy"
              className="py-2 px-4 data-[state=active]:bg-gray-700 rounded flex items-center gap-2 text-sm"
            >
              <Shield size={16} />
              Privacy
            </TabsTrigger>
            <TabsTrigger 
              value="audio"
              className="py-2 px-4 data-[state=active]:bg-gray-700 rounded flex items-center gap-2 text-sm"
            >
              <Volume2 size={16} />
              Audio
            </TabsTrigger>
            <TabsTrigger 
              value="devices"
              className="py-2 px-4 data-[state=active]:bg-gray-700 rounded flex items-center gap-2 text-sm"
            >
              <Laptop size={16} />
              Devices
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="account" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="font-minecraft">Profile Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your account details and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white">Username</Label>
                  <Input 
                    id="username" 
                    defaultValue="Minecraft_Player"
                    className="bg-gray-700 border-gray-600 text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="player@minecraft.net"
                    className="bg-gray-700 border-gray-600 text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="theme" className="text-white">Theme</Label>
                  <Select value={theme} onValueChange={handleThemeChange}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between pt-2">
                  <Button 
                    type="submit" 
                    className="bg-spotify-green hover:bg-spotify-green/90 text-black"
                  >
                    Save Changes
                  </Button>
                  <Button 
                    type="button" 
                    variant="destructive"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="font-minecraft">Language Preferences</CardTitle>
              <CardDescription className="text-gray-400">
                Choose your preferred language for the interface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language" className="text-white">Interface Language</Label>
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="pt">Português</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="region" className="text-white">Content Region</Label>
                <Select defaultValue="us">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="br">Brazil</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="font-minecraft">Notification Preferences</CardTitle>
              <CardDescription className="text-gray-400">
                Control which notifications you receive.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  { id: "newReleases", label: "New Releases", description: "Get notified about new music from artists you follow" },
                  { id: "playlist", label: "Playlist Updates", description: "Get notified when playlists you follow are updated" },
                  { id: "artists", label: "Artist Announcements", description: "Get notified about artist announcements" },
                  { id: "offers", label: "Offers & Promotions", description: "Get notified about special offers and promotions" },
                ].map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <Label htmlFor={item.id} className="text-white">{item.label}</Label>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                    <Switch 
                      id={item.id} 
                      checked={notifications[item.id as keyof typeof notifications]} 
                      onCheckedChange={() => handleNotificationChange(item.id as keyof typeof notifications)}
                      className="data-[state=checked]:bg-spotify-green"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="font-minecraft">Privacy Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Control your privacy preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  { id: "shareListening", label: "Share Listening Activity", description: "Let friends see what you're listening to" },
                  { id: "showActivity", label: "Show Activity Status", description: "Show when you're active on Spoticraft" },
                  { id: "privateMode", label: "Private Session", description: "Listen in private mode" },
                ].map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <Label htmlFor={item.id} className="text-white">{item.label}</Label>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                    <Switch 
                      id={item.id} 
                      checked={privacy[item.id as keyof typeof privacy]} 
                      onCheckedChange={() => handlePrivacyChange(item.id as keyof typeof privacy)}
                      className="data-[state=checked]:bg-spotify-green"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audio" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="font-minecraft">Audio Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Customize your audio preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  { id: "autoplay", label: "Autoplay", description: "Automatically play similar songs when your music ends" },
                  { id: "crossfade", label: "Crossfade", description: "Create smooth transitions between songs" },
                  { id: "normalization", label: "Volume Normalization", description: "Set the same volume level for all tracks" },
                ].map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <Label htmlFor={item.id} className="text-white">{item.label}</Label>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                    <Switch 
                      id={item.id} 
                      checked={audio[item.id as keyof typeof audio]} 
                      onCheckedChange={() => handleAudioChange(item.id as keyof typeof audio)}
                      className="data-[state=checked]:bg-spotify-green"
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-4">
                <Label className="text-white">Audio Quality</Label>
                <Select defaultValue="auto">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="auto">Automatic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="font-minecraft">Connected Devices</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your connected devices.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="connect-device" className="text-white">Connect Device</Label>
                  <p className="text-xs text-gray-400">Scan for nearby devices</p>
                </div>
                <Switch 
                  id="connect-device" 
                  checked={connectDevice} 
                  onCheckedChange={handleDeviceToggle}
                  className="data-[state=checked]:bg-spotify-green"
                />
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-minecraft mb-2">Recently Connected</h3>
                <div className="space-y-2">
                  {[
                    { name: "Desktop - Chrome", lastConnected: "Now" },
                    { name: "iPhone 13", lastConnected: "2 days ago" },
                    { name: "iPad Pro", lastConnected: "1 week ago" },
                  ].map((device, i) => (
                    <div 
                      key={i} 
                      className={`p-3 rounded-md flex justify-between items-center ${i === 0 ? 'bg-gray-700 border-l-4 border-spotify-green' : 'bg-gray-700/50'}`}
                    >
                      <div>
                        <p className="font-minecraft text-sm">{device.name}</p>
                        <p className="text-xs text-gray-400">Last connected: {device.lastConnected}</p>
                      </div>
                      {i === 0 && (
                        <div className="text-xs bg-spotify-green/30 text-spotify-green px-2 py-1 rounded">
                          Current
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
