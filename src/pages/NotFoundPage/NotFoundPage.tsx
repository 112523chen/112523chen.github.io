import React from "react";
import { NotFoundPageBase, NotFoundPageButton } from "./NotFoundPage.style";
import { LightState } from "../../components/model";
import { Link } from "react-router-dom";

interface Props {
  mode: LightState;
}

const NotFoundPage: React.FC<Props> = ({ mode }) => {
  return (
    <NotFoundPageBase mode={mode}>
      <h1>404: Page Not Found</h1>

      <p>
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>

      <NotFoundPageButton>
        <Link to="/">
          <span>Go Home</span>
        </Link>
      </NotFoundPageButton>
    </NotFoundPageBase>
  );
};

export default NotFoundPage;
