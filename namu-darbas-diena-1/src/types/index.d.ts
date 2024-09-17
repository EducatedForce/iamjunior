import React from "react";

declare global {
  export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
  }

  export type CategoryCardProps = {
    icon: React.ReactNode;
    label: string;
    color: `#${string}`
  }
}

export {};
