import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Award } from "lucide-react";

export const InteractiveBadge = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-full h-full bg-background rounded-full border-2 border-yellow-500">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Top Performer of the Month</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
