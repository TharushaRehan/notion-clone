"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={changeTheme}
      className=" focus-visible:outline-none focus:outline-none"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
