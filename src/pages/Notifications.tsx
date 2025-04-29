
import { useState } from "react";
import { Bell, Music, User, Clock, Trash2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  id: string;
  type: 'new-release' | 'friend-activity' | 'system' | 'playlist';
  title: string;
  message: string;
  time: string;
  read: boolean;
  imageUrl: string;
  link?: string;
}

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'new-release',
      title: 'New Album Release',
      message: 'C418 just released a new album "Minecraft Volume Beta Remixes"',
      time: '2 hours ago',
      read: false,
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      link: '/album/c418-beta-remixes'
    },
    {
      id: '2',
      type: 'friend-activity',
      title: 'DiamondMiner started following you',
      message: 'You have a new follower!',
      time: '1 day ago',
      read: true,
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      link: '/profile/diamondminer'
    },
    {
      id: '3',
      type: 'system',
      title: 'System Update',
      message: 'SpotiCraft has been updated to version 2.0 with new features',
      time: '3 days ago',
      read: false,
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    },
    {
      id: '4',
      type: 'playlist',
      title: 'Playlist Update',
      message: 'CreeperSlayer added 5 new songs to "Redstone Beats"',
      time: '1 week ago',
      read: true,
      imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
      link: '/playlist/redstone-beats'
    },
    {
      id: '5',
      type: 'new-release',
      title: 'New Podcast Episode',
      message: 'A new episode of "Mining Adventures" is now available',
      time: '1 week ago',
      read: false,
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      link: '/podcast/mining-adventures'
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    return notification.type === activeTab;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-minecraft text-white mb-2 flex items-center">
                <Bell size={24} className="mr-2 text-craft-grass" />
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 bg-craft-grass text-xs text-white px-2 py-1 font-minecraft">
                    {unreadCount} new
                  </span>
                )}
              </h1>
              <p className="font-minecraft text-gray-300">
                Stay updated with the latest music and activities
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={markAllAsRead} 
                variant="outline" 
                className="font-minecraft text-xs"
                disabled={unreadCount === 0}
              >
                Mark all as read
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setActiveTab('all')}>
                    All notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab('new-release')}>
                    Only releases
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab('friend-activity')}>
                    Only friend activity
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab('system')}>
                    Only system updates
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="mb-6 overflow-x-auto minecraft-scrollbar">
            <TabsList className="bg-spotify-lightBlack border-b border-gray-800 w-full justify-start h-auto">
              <TabsTrigger 
                value="all" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="new-release" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                <Music size={16} className="mr-2" />
                New Releases
              </TabsTrigger>
              <TabsTrigger 
                value="friend-activity" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                <User size={16} className="mr-2" />
                Friends
              </TabsTrigger>
              <TabsTrigger 
                value="system" 
                className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
              >
                System
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="focus:outline-none">
            {filteredNotifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 minecraft-card bg-spotify-lightBlack">
                <Bell size={48} className="text-gray-500 mb-4" />
                <h3 className="text-xl font-minecraft text-white mb-2">No notifications</h3>
                <p className="text-sm font-minecraft text-gray-400">
                  {activeTab === 'all' 
                    ? "You're all caught up!" 
                    : `You have no ${activeTab.replace('-', ' ')} notifications.`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotifications.map(notification => (
                  <NotificationItem 
                    key={notification.id} 
                    notification={notification}
                    onMarkAsRead={() => markAsRead(notification.id)}
                    onDelete={() => deleteNotification(notification.id)}
                  />
                ))}
              </div>
            )}
            
            {filteredNotifications.length > 0 && (
              <div className="mt-6 text-center">
                <Button 
                  variant="ghost" 
                  onClick={clearAllNotifications}
                  className="font-minecraft text-xs text-gray-400 hover:text-white"
                >
                  <Trash2 size={14} className="mr-1" />
                  Clear all notifications
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: () => void;
  onDelete: () => void;
}

const NotificationItem = ({ notification, onMarkAsRead, onDelete }: NotificationItemProps) => {
  const { id, type, title, message, time, read, imageUrl, link } = notification;
  
  const getIcon = () => {
    switch(type) {
      case 'new-release':
        return <Music size={16} className="text-craft-grass" />;
      case 'friend-activity':
        return <User size={16} className="text-blue-400" />;
      case 'system':
        return <Bell size={16} className="text-yellow-400" />;
      case 'playlist':
        return <Music size={16} className="text-purple-400" />;
      default:
        return <Bell size={16} className="text-gray-400" />;
    }
  };
  
  const Content = () => (
    <div className={`flex gap-4 items-start p-4 transition-colors ${read ? 'bg-spotify-lightBlack' : 'bg-gradient-to-r from-spotify-lightBlack to-spotify-black/90 border-l-4 border-craft-grass'}`}>
      <div className="w-10 h-10 bg-craft-stone pixel-border flex-shrink-0 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {getIcon()}
          <h3 className="font-minecraft text-sm text-white truncate">{title}</h3>
        </div>
        <p className="text-xs font-minecraft text-gray-400 mb-2">{message}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-minecraft text-gray-500">
            <Clock size={12} className="inline mr-1" />
            {time}
          </span>
          
          <div className="flex gap-2">
            {!read && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onMarkAsRead();
                }}
                className="text-xs h-6 px-2 py-0 hover:bg-gray-800"
              >
                Mark as read
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDelete();
              }}
              className="text-xs h-6 px-2 py-0 text-gray-500 hover:text-red-400 hover:bg-gray-800"
            >
              <Trash2 size={12} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  
  if (link) {
    return (
      <a 
        href={link} 
        className="block minecraft-card hover:ring-1 hover:ring-gray-700 transition-all hover-scale"
        onClick={() => !read && onMarkAsRead()}
      >
        <Content />
      </a>
    );
  }
  
  return (
    <div className="minecraft-card">
      <Content />
    </div>
  );
};

export default Notifications;
