"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarLink } from "../ui/sidebar";
import { PlusCircle } from "lucide-react";

interface BuildingSwitcherProps {
  open: boolean;
}

export default function BuildingSwitcher({ open }: BuildingSwitcherProps) {
  const [selectedProfile, setSelectedProfile] = useState("Torre 1");

  // Example profiles - replace with your actual data
  const profiles = [
    {
      id: "1",
      name: "Torre 1",
      image:
        "https://images.unsplash.com/photo-1489936724440-afaf5a115ede?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      initials: "T1",
    },
    {
      id: "2",
      name: "Attura",
      image:
        "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      initials: "AT",
    },
    {
      id: "3",
      name: "Fidel Anze",
      image:
        "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      initials: "FA",
    },
  ];

  const currentProfile =
    profiles.find((p) => p.name === selectedProfile) || profiles[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <SidebarLink
            link={{
              label: open ? selectedProfile : "",
              href: "#",
              icon: (
                <Avatar>
                  <AvatarImage
                    src={currentProfile.image}
                    alt={currentProfile.name}
                  />
                  <AvatarFallback>{currentProfile.initials}</AvatarFallback>
                </Avatar>
              ),
            }}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5">
            <p className="text-sm text-muted-foreground font-medium">
              Edificios
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />

        {profiles.map((profile) => (
          <DropdownMenuItem
            key={profile.id}
            onClick={() => setSelectedProfile(profile.name)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={profile.image} alt={profile.name} />
                <AvatarFallback>{profile.initials}</AvatarFallback>
              </Avatar>
              <span>{profile.name}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a
            href="/dashboard/profile"
            className="cursor-pointer flex items-center gap-2"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Agregar edificio</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
