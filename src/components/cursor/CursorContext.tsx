"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type CursorState = "default" | "hover" | "view" | "drag" | "text";

interface CursorContextType {
  cursorState: CursorState;
  setCursorState: (s: CursorState) => void;
  cursorText: string | null;
  setCursorText: (t: string | null) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorState: "default",
  setCursorState: () => {},
  cursorText: null,
  setCursorText: () => {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorText, setCursorText] = useState<string | null>(null);

  const handleSetCursorState = useCallback((s: CursorState) => setCursorState(s), []);
  const handleSetCursorText = useCallback((t: string | null) => setCursorText(t), []);

  return (
    <CursorContext.Provider
      value={{ cursorState, setCursorState: handleSetCursorState, cursorText, setCursorText: handleSetCursorText }}
    >
      {children}
    </CursorContext.Provider>
  );
};
