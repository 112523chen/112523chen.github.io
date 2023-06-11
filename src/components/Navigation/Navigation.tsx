import React, { useEffect, useState } from "react";
import { NavigationBase, NavigationLink } from "./Navigation.style";
import { LightState } from "../model";
import { navData } from "../../assets/data/navData.json";
import { isBottomOfPage } from "../../functions/helper";

interface NavigationProps {
  mode: LightState;
}

const Navigation: React.FC<NavigationProps> = ({ mode }) => {
  const [sidebarTop, setSidebarTop] = useState(window.screen.height * 0.2);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setSidebarTop(scrollTop);

      const sections = document.getElementsByClassName("section");
      let currentActiveSection = "";

      for (let i = 0; i < sections.length; i++) {
        const sectionTop = (sections[i] as HTMLElement).offsetTop - 200;
        const sectionHeight = (sections[i] as HTMLElement).offsetHeight + 100;

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          currentActiveSection = sections[i].id;
        }
      }

      setActiveSection(isBottomOfPage() ? "links" : currentActiveSection);
      setSidebarTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationBase mode={mode} hidden={sidebarTop < window.screen.height}>
      {navData.map((nav) => (
        <NavigationLink
          key={nav.id}
          active={activeSection === nav.section}
          mode={mode}
          href={"#" + nav.section}
        >
          {nav.text}
        </NavigationLink>
      ))}
    </NavigationBase>
  );
};

export default Navigation;
