"use client";

import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { FullscreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <ConvexProviderWithClerk
                useAuth={useAuth}
                client={convex}
            >
                <Authenticated>
                {children}
                </Authenticated>
                <Unauthenticated>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <SignIn routing="hash"/>
                    </div>
                    <p>Please login</p>
                </Unauthenticated>
                <AuthLoading>
                    <FullscreenLoader label="Auth Loading..."/>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )

};