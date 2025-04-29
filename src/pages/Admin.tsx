
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Search, 
  Plus, 
  Users, 
  Music, 
  User, 
  Settings, 
  BarChart, 
  Edit, 
  Trash, 
  Shield, 
  AlertTriangle,
  Copy
} from "lucide-react";
import { toast } from "sonner";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showSuperAdminDialog, setShowSuperAdminDialog] = useState(false);

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
          <h1 className="text-3xl font-minecraft text-white mb-2">Admin Dashboard</h1>
          <p className="font-minecraft text-gray-300">
            Manage your SpotiCraft platform, users, and content
          </p>
        </div>
      </div>
      
      <div className="p-6">
        {/* Admin Tabs */}
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab}>
          <div className="mb-6 overflow-x-auto minecraft-scrollbar">
            <TabsList className="bg-spotify-lightBlack border-b border-gray-800 w-full justify-start h-auto">
              <TabsTrigger 
                value="dashboard" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                <BarChart size={16} className="mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                <Users size={16} className="mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger 
                value="content" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                <Music size={16} className="mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                <Settings size={16} className="mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Dashboard Content */}
          <TabsContent value="dashboard" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                title="Total Users" 
                value="1,245" 
                change="+12.5%" 
                icon={<Users size={24} className="text-blue-400" />} 
              />
              <StatCard 
                title="Total Songs" 
                value="8,932" 
                change="+5.2%" 
                icon={<Music size={24} className="text-green-400" />} 
              />
              <StatCard 
                title="Active Users" 
                value="872" 
                change="+18.7%" 
                icon={<User size={24} className="text-purple-400" />} 
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="minecraft-card">
                  <CardHeader>
                    <CardTitle className="font-minecraft">Recent Activity</CardTitle>
                    <CardDescription className="font-minecraft text-sm">
                      Latest actions on your platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ActivityItem
                        title="New Song Added"
                        description="DiamondMiner added a new song 'Mining All Day'"
                        time="2 hours ago"
                      />
                      <ActivityItem
                        title="New User Registered"
                        description="EnderDragon joined SpotiCraft"
                        time="3 hours ago"
                      />
                      <ActivityItem
                        title="Playlist Created"
                        description="CreeperSlayer created a new playlist 'TNT Vibes'"
                        time="5 hours ago"
                      />
                      <ActivityItem
                        title="Album Uploaded"
                        description="Admin added a new album 'Redstone Circuits'"
                        time="1 day ago"
                      />
                      <ActivityItem
                        title="System Update"
                        description="System updated to version 2.0.1"
                        time="2 days ago"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Quick Actions */}
              <div>
                <Card className="minecraft-card">
                  <CardHeader>
                    <CardTitle className="font-minecraft">Quick Actions</CardTitle>
                    <CardDescription className="font-minecraft text-sm">
                      Common administrative tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full justify-start pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                        <Plus size={16} className="mr-2" />
                        Add New Content
                      </Button>
                      <Button className="w-full justify-start pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock">
                        <Users size={16} className="mr-2" />
                        Manage Users
                      </Button>
                      <Button className="w-full justify-start" onClick={() => setShowSuperAdminDialog(true)}>
                        <Shield size={16} className="mr-2" />
                        Create Super Admin
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <BarChart size={16} className="mr-2" />
                        View Analytics
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Settings size={16} className="mr-2" />
                        System Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* System Status */}
                <Card className="minecraft-card mt-6">
                  <CardHeader>
                    <CardTitle className="font-minecraft">System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-minecraft text-sm">Server Status</span>
                        <span className="flex items-center font-minecraft text-green-400 text-sm">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          Online
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-minecraft text-sm">CPU Usage</span>
                        <span className="font-minecraft text-sm">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-minecraft text-sm">Memory Usage</span>
                        <span className="font-minecraft text-sm">42%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-minecraft text-sm">Storage</span>
                        <span className="font-minecraft text-sm">512GB / 1TB</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Users Content */}
          <TabsContent value="users" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search users..." 
                  className="pl-10 w-[300px] pixel-input"
                />
              </div>
              
              <div className="flex gap-2">
                <Button onClick={() => setShowSuperAdminDialog(true)}>
                  <Shield className="mr-2 h-4 w-4" />
                  Create Super Admin
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
            </div>
            
            <Card className="minecraft-card">
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-minecraft">User</TableHead>
                      <TableHead className="font-minecraft">Email</TableHead>
                      <TableHead className="font-minecraft">Role</TableHead>
                      <TableHead className="font-minecraft">Status</TableHead>
                      <TableHead className="font-minecraft text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-minecraft">StevePlayer</TableCell>
                      <TableCell className="font-minecraft">steve@minecraft.net</TableCell>
                      <TableCell>
                        <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs font-minecraft">
                          Admin
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-minecraft">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-minecraft">DiamondMiner</TableCell>
                      <TableCell className="font-minecraft">diamond@minecraft.net</TableCell>
                      <TableCell>
                        <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-minecraft">
                          User
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-minecraft">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-minecraft">CreeperSlayer</TableCell>
                      <TableCell className="font-minecraft">creeper@minecraft.net</TableCell>
                      <TableCell>
                        <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-minecraft">
                          User
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs font-minecraft">
                          Inactive
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-minecraft">EnderDragon</TableCell>
                      <TableCell className="font-minecraft">ender@minecraft.net</TableCell>
                      <TableCell>
                        <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs font-minecraft">
                          Super Admin
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-minecraft">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Content Management */}
          <TabsContent value="content" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search content..." 
                  className="pl-10 w-[300px] pixel-input"
                />
              </div>
              
              <div className="flex gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Song
                </Button>
              </div>
            </div>
            
            <Card className="minecraft-card mb-8">
              <CardHeader>
                <CardTitle className="font-minecraft">Songs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-minecraft">Title</TableHead>
                      <TableHead className="font-minecraft">Artist</TableHead>
                      <TableHead className="font-minecraft">Album</TableHead>
                      <TableHead className="font-minecraft">Duration</TableHead>
                      <TableHead className="font-minecraft text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-minecraft">Sweden</TableCell>
                      <TableCell className="font-minecraft">C418</TableCell>
                      <TableCell className="font-minecraft">Minecraft Volume Alpha</TableCell>
                      <TableCell className="font-minecraft">3:35</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-minecraft">Wet Hands</TableCell>
                      <TableCell className="font-minecraft">C418</TableCell>
                      <TableCell className="font-minecraft">Minecraft Volume Alpha</TableCell>
                      <TableCell className="font-minecraft">1:32</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-minecraft">Pigstep</TableCell>
                      <TableCell className="font-minecraft">Lena Raine</TableCell>
                      <TableCell className="font-minecraft">Minecraft: Nether Update</TableCell>
                      <TableCell className="font-minecraft">2:28</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400">
                            <Trash size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="font-minecraft">Artists</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-craft-stone pixel-border" />
                        <span className="font-minecraft">C418</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-craft-stone pixel-border" />
                        <span className="font-minecraft">Lena Raine</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus size={16} className="mr-2" />
                    Add New Artist
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="font-minecraft">Albums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-craft-stone pixel-border" />
                        <div>
                          <span className="font-minecraft block">Minecraft Volume Alpha</span>
                          <span className="font-minecraft text-xs text-gray-400">C418</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-craft-stone pixel-border" />
                        <div>
                          <span className="font-minecraft block">Minecraft: Nether Update</span>
                          <span className="font-minecraft text-xs text-gray-400">Lena Raine</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus size={16} className="mr-2" />
                    Add New Album
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Settings Content */}
          <TabsContent value="settings" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card className="minecraft-card">
                  <CardHeader>
                    <CardTitle className="font-minecraft">General Settings</CardTitle>
                    <CardDescription className="font-minecraft text-sm">
                      Configure your SpotiCraft platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-minecraft text-sm mb-2">Site Name</h3>
                      <Input 
                        defaultValue="SpotiCraft" 
                        className="pixel-input"
                      />
                    </div>
                    <div>
                      <h3 className="font-minecraft text-sm mb-2">Site Description</h3>
                      <Textarea 
                        defaultValue="A Minecraft-themed music streaming platform"
                        className="pixel-input min-h-[100px]"
                      />
                    </div>
                    <div>
                      <h3 className="font-minecraft text-sm mb-2">Language</h3>
                      <Select defaultValue="en">
                        <SelectTrigger className="pixel-input">
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="pt">Portuguese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="font-minecraft text-sm mb-2">Content Moderation</h3>
                      <Select defaultValue="moderate">
                        <SelectTrigger className="pixel-input">
                          <SelectValue placeholder="Select moderation level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strict">Strict</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="relaxed">Relaxed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                      Save Settings
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div>
                <Card className="minecraft-card">
                  <CardHeader>
                    <CardTitle className="font-minecraft">API Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-minecraft text-sm mb-2">API Key</h3>
                        <div className="relative">
                          <Input 
                            type="password" 
                            value="sk_live_p4ka9sdf8a7sd6f5s" 
                            readOnly 
                            className="pixel-input"
                          />
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                            onClick={() => toast.success("API key copied to clipboard")}
                          >
                            <Copy size={14} />
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Regenerate API Key
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="minecraft-card mt-6">
                  <CardHeader>
                    <CardTitle className="font-minecraft">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-red-800/30 bg-red-900/10 rounded-md">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle size={16} className="text-red-400" />
                          <h3 className="font-minecraft text-sm text-red-400">Reset Platform Data</h3>
                        </div>
                        <p className="font-minecraft text-xs text-gray-400 mb-3">
                          This action permanently deletes all data and cannot be undone.
                        </p>
                        <Button variant="destructive" size="sm" className="w-full">
                          Reset Data
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Super Admin Dialog */}
      <Dialog open={showSuperAdminDialog} onOpenChange={setShowSuperAdminDialog}>
        <DialogContent className="bg-spotify-black border-gray-700 minecraft-card">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-white">Create Super Admin</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-400">
              Super admins have complete access to all platform features.
            </DialogDescription>
          </DialogHeader>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Super admin created successfully!");
              setShowSuperAdminDialog(false);
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="username" className="font-minecraft text-sm text-gray-300 block mb-1">
                Username
              </label>
              <Input 
                id="username" 
                placeholder="Enter username" 
                className="pixel-input"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="font-minecraft text-sm text-gray-300 block mb-1">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@example.com" 
                className="pixel-input"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="font-minecraft text-sm text-gray-300 block mb-1">
                Password
              </label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a strong password" 
                className="pixel-input"
              />
            </div>
            
            <div>
              <label htmlFor="permissions" className="font-minecraft text-sm text-gray-300 block mb-1">
                Permission Level
              </label>
              <Select defaultValue="super_admin">
                <SelectTrigger className="pixel-input">
                  <SelectValue placeholder="Select permission level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="super_admin">Super Admin (Full Access)</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="moderator">Moderator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4 flex justify-end gap-3">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setShowSuperAdminDialog(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              >
                Create Super Admin
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Stat card for dashboard
const StatCard = ({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) => (
  <Card className="minecraft-card hover:border-gray-700 transition-all hover-scale">
    <CardContent className="pt-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-minecraft text-sm text-gray-400 mb-1">{title}</h3>
          <p className="font-minecraft text-3xl text-white">{value}</p>
          <p className="font-minecraft text-xs text-green-400 mt-1">{change} this month</p>
        </div>
        <div className="bg-spotify-lightBlack p-3 rounded-md">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Activity item for dashboard
const ActivityItem = ({ title, description, time }: { title: string, description: string, time: string }) => (
  <div className="flex gap-4 items-start border-b border-gray-800 pb-3">
    <div className="w-2 h-2 rounded-full bg-craft-grass mt-2"></div>
    <div className="flex-1">
      <h4 className="font-minecraft text-sm text-white">{title}</h4>
      <p className="font-minecraft text-xs text-gray-400">{description}</p>
      <span className="font-minecraft text-xs text-gray-500">{time}</span>
    </div>
  </div>
);

export default AdminPage;
