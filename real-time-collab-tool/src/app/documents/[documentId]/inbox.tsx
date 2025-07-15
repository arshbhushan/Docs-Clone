"use client";
import { BellIcon } from "lucide-react";
import { ClientSideSuspense } from "@liveblocks/react";
import { useInboxNotifications } from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";
import { Button  } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const Inbox= ()=>{
    return (
        <ClientSideSuspense fallback={null}>
            <InboxMenu/>
        </ClientSideSuspense>
    )
};

const InboxMenu = () => {
     const {inboxNotifications} = useInboxNotifications();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <BellIcon className="size-5" />
                    {inboxNotifications.length > 0 && (
                        <span className="absolute -top-1 -right-1 size-4 rounded-full bg-sky-500 text-sx
                        text-white flex items-center justify-center" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-auto">
                {inboxNotifications.length> 0 ?(
                    <InboxNotificationList>

                    </InboxNotificationList>
                ):(
                    <div className="p-2 w-[400px] text-center text-sm text-muted-foreground">
                        No notifications
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

