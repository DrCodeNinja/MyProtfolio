import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuary = "(prefer-color-scheme: dark";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuary);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        console.log(userPref + "H1");
        let check = userPref === "dark" ? "dark" : "light";
        console.log("check log " + check);

        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        console.log("hello");
        console.log(mediaQuery.matches);
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        window.localStorage.setItem("theme", check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  console.log(mode);

  useEffect(() => {
    console.log("H2 log " + mode + " H2");

    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};
export default useThemeSwitcher;
