import { ReactNode } from 'react';

// Tooltip Components
const TooltipProvider = ({ children }: { children: ReactNode }) => (
  <div className="tooltip-container">{children}</div>
);

const TooltipTrigger = ({ children }: { children: ReactNode }) => (
  <div className="tooltip-trigger">{children}</div>
);

const TooltipContent = ({ children }: { children: ReactNode }) => (
  <div className="tooltip-content">{children}</div>
);

// Tooltip main object
const Tooltip = {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};
export { Tooltip };
export { TooltipContent };
export { TooltipProvider };
export { TooltipTrigger };

