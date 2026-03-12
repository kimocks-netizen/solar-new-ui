"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  trigger?: ReactNode;
  size?: "sm" | "md";
};

export default function Dropdown({
  options,
  value,
  onChange,
  trigger,
  size = "md",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sizeClasses = {
    sm: {
      trigger: "px-2 py-0.5 text-xs gap-1",
      icon: "h-3 w-3",
      menu: "w-32",
      item: "px-3 py-2 text-xs",
    },
    md: {
      trigger: "px-3 py-2 text-sm gap-2",
      icon: "h-4 w-4",
      menu: "w-48",
      item: "px-4 py-2 text-sm",
    },
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={[
          "flex items-center rounded-lg border border-[var(--border)] bg-[var(--sidebar-bg)] transition",
          "opacity-80 hover:bg-[var(--ems-cyan-soft)] hover:opacity-100",
          sizeClasses[size].trigger,
        ].join(" ")}
      >
        {trigger || <span>{selectedOption?.label}</span>}
        <ChevronDown className={sizeClasses[size].icon} />
      </button>

      {isOpen && (
        <div
          className={[
            "absolute right-0 top-full z-10 mt-1 rounded-lg border border-[var(--border)] bg-[var(--sidebar-bg)] shadow-lg",
            sizeClasses[size].menu,
          ].join(" ")}
        >
          {options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={[
                "flex w-full items-center transition",
                "opacity-80 hover:bg-[var(--ems-cyan-soft)] hover:opacity-100",
                index === 0 && "rounded-t-lg",
                index === options.length - 1 && "rounded-b-lg",
                sizeClasses[size].item,
              ].join(" ")}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
