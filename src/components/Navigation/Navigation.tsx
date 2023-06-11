import React, { useEffect, useState } from "react";
import { NavigationBase, NavigationLink } from "./Navigation.style";
import { LightState } from "../model";

interface NavigationProps {
  mode: LightState;
}

const Navigation: React.FC<NavigationProps> = ({ mode }) => {
  const [sidebarTop, setSidebarTop] = useState(window.screen.height * 0.2);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > window.screen.height * 0.2) {
        setSidebarTop(scrollTop);
      } else {
        setSidebarTop(window.screen.height * 0.2);
      }

      const sections = document.getElementsByClassName("section");
      let currentActiveSection = "";

      for (let i = 0; i < sections.length; i++) {
        const sectionTop = (sections[i] as HTMLElement).offsetTop - 100;
        const sectionHeight = (sections[i] as HTMLElement).offsetHeight + 100;

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          currentActiveSection = sections[i].id;
        }
      }
      console.log(currentActiveSection);
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationBase mode={mode} hidden={sidebarTop < window.screen.height}>
      <NavigationLink
        active={activeSection === "home-section"}
        mode={mode}
        href="#home-section"
      >
        Home
      </NavigationLink>
      <NavigationLink
        active={activeSection === "about-section"}
        mode={mode}
        href="#about-section"
      >
        About Me
      </NavigationLink>
      <NavigationLink
        active={activeSection === "what-im-doing-now-section"}
        mode={mode}
        href="#what-im-doing-now-section"
      >
        What I'm Doing Now
      </NavigationLink>
      <NavigationLink
        active={activeSection === "coursework"}
        mode={mode}
        href="#coursework"
      >
        Coursework
      </NavigationLink>
      <NavigationLink
        active={activeSection === "skills"}
        mode={mode}
        href="#skills"
      >
        Skills
      </NavigationLink>
      <NavigationLink
        active={activeSection === "experiences"}
        mode={mode}
        href="#experiences"
      >
        Experiences
      </NavigationLink>
      <NavigationLink
        active={activeSection === "projects"}
        mode={mode}
        href="#projects"
      >
        Projects
      </NavigationLink>
      <NavigationLink
        active={activeSection === "links"}
        mode={mode}
        href="#links"
      >
        Connect with Me
      </NavigationLink>
    </NavigationBase>
  );
};

export default Navigation;
