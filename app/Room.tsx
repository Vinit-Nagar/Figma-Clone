"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import Cursor from "@/components/cursor/Cursor";
import { LiveMap } from "@liveblocks/client";

export function Room({ children }: { children: ReactNode }) {
    return (
        <RoomProvider id="my-room"
            initialPresence={{
                cursor: null, cursorColr: null, editingtext: null
            }}
            initialStorage={{
                canvasObjects: new LiveMap()
            }}
        >
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
}