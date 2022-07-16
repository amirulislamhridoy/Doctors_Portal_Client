import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      //   style={{ textDecoration : match ? "underline" : "none" }}
      style={{ color: match ? "white" : "black" }}
      className={match && "btn bg-accent"}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
