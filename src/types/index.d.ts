import React from "react";

declare global {
  export type User = {
    id: string;
    username: string;
    email: string;
    token: string;
    isAdmin?: boolean;
  }

  export type CategoryCardProps = {
    icon: React.ReactNode;
    label: string;
    color: `#${string}`;
    type?: "primary" | "secondary";
    active?: boolean;
  }
  export type ServiceProps = {
    id: string;
    category: string;
    vendor: string;
    representative: string;
    address: string;
    imageUrl: string;
  }
}

export {};
