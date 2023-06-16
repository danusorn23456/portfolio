import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";
export interface DarkModeToggleProps {
  rootId?: string;
  className?: string;
  defaultDark?: boolean;
}

const Toggle = {
  Root: styled.div`
    width: 4.5rem;
    border: 1px solid var(--black);
    border-radius: 80px;
    position: relative;
    display: flex;
    justify-content: space-between;
  `,
  Button: styled.div`
    transition: all 200ms;
    scale: 0.8;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background: var(--black);
  `,
  Icon: styled.div`
    scale: 0.8;
    position: absolute;
    z-index: 10;
    pointer-events: none;
    &:nth-child(1) {
      left: 0;
    }
    &:nth-child(2) {
      right: 0;
    }
    width: 2rem;
    height: 2rem;
    & > * {
      scale: 0.6;
      width: 100%;
      height: 100%;
    }
  `,
  ClickableArea: styled.button`
    cursor: pointer;
    position: absolute;
    opacity: 0;
    inset: 0;
  `,
};

function DarkModeToggle({
  className = "dark-mode",
  defaultDark,
}: DarkModeToggleProps) {
  const localKey = "dark-mode";
  const [isDark, setIsDark] = useState<boolean>(() => {
    const localIsDarkMode = localStorage.getItem("dark-mode");
    if (localIsDarkMode) {
      return Boolean(Number(localIsDarkMode));
    }
    return Boolean(defaultDark);
  });

  const containerRef = useRef<HTMLBodyElement>();

  function updateClass() {
    if (!containerRef.current) {
      containerRef.current = document.getElementsByTagName("body")[0];
    }
    containerRef.current.classList.toggle(className, isDark);
  }

  function toggleMode() {
    setIsDark(!isDark);
  }

  useEffect(() => {
    localStorage.setItem(localKey, isDark ? "1" : "0");
    updateClass();
  }, [isDark]);

  return (
    <Toggle.Root>
      <Toggle.Icon>
        <FiSun
          style={{
            color: !isDark ? "var(--white)" : "var(--black)",
          }}
        />
      </Toggle.Icon>
      <Toggle.Icon>
        <FiMoon
          style={{
            color: isDark ? "var(--white)" : "var(--black)",
          }}
        />
      </Toggle.Icon>
      <Toggle.Button
        style={{
          left: isDark ? "2.4rem" : 0,
        }}
      />
      <Toggle.ClickableArea onClick={toggleMode} />
    </Toggle.Root>
  );
}

export { DarkModeToggle };
