import { cn } from "@/utils/cn";
import { Input } from "../ui/input";
import { SearchIcon, XIcon } from "../ui/icons";
import { useState, useEffect } from "react";

const iconClasses = "absolute size-5 right-3 top-1/2 -translate-y-1/2";

export function SearchInput({
  onChange,
  placeholder,
  className,
  debounce = 300, // debounce delay in ms
}: {
  onChange?: (val: string) => void;
  placeholder?: string;
  className?: string;
  debounce?: number;
}) {
  const [innerValue, setInnerValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange?.(innerValue);
    }, debounce);
    return () => clearTimeout(handler);
  }, [innerValue, debounce, onChange]);

  return (
    <div className={cn(className, "relative")}>
      <Input
        value={innerValue}
        placeholder={placeholder}
        className="w-full"
        onChange={(v) => setInnerValue(v.target.value)}
      />
      {innerValue.trim() ? (
        <button onClick={() => setInnerValue("")}>
          <XIcon className={iconClasses} />
        </button>
      ) : (
        <SearchIcon className={iconClasses} />
      )}
    </div>
  );
}
