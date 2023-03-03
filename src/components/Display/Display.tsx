import React from "react";
import { phrases } from "../../assets/data/phrases.json";
import { Typewriter } from "react-simple-typewriter";
import { LightState } from "../model";
import {
  DisplayBase,
  Name,
  DisplayHeadline,
  DisplayMobileHeadline,
  DisplayMobileWord,
  TypeWriterContainer,
  DisplayStory,
  Story,
  Keywords,
} from "./Display.style";

interface Props {
  mode: LightState;
  isMobileDevice: boolean;
}

const Display: React.FC<Props> = ({ mode, isMobileDevice }) => {
  return (
    <DisplayBase>
      <Name>Alex Chen</Name>
      <DisplayHeadline>
        <DisplayMobileHeadline>
          {isMobileDevice ? (
            <DisplayMobileWord>
              Aspiring Data Scientist | Data Science Fellow @ CUNY Tech Prep
            </DisplayMobileWord>
          ) : (
            <TypeWriterContainer mode={mode}>
              <Typewriter words={phrases} loop={0} cursor={true} />
            </TypeWriterContainer>
          )}
        </DisplayMobileHeadline>
      </DisplayHeadline>
      <DisplayStory>
        <Story>
          I am a<Keywords mode={mode}>data science</Keywords>
          student studying at
          <Keywords mode={mode}>New York City College of Technology</Keywords>
          while also studying
          <Keywords mode={mode}>full stack development</Keywords>
          in my free time who is eager to tell stories from data.
        </Story>
      </DisplayStory>
    </DisplayBase>
  );
};

export default Display;
