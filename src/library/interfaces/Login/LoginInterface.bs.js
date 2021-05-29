// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Constant from "../../Constant/Constant.bs.js";
import * as SaferLink from "../../SaferLink/SaferLink.bs.js";

function LoginInterface(Props) {
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Login Page"), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement(SaferLink.make, {
                          href: Constant.discord_login_uri,
                          children: "Login with Discord"
                        })), React.createElement("li", undefined, React.createElement(SaferLink.make, {
                          href: Constant.google_login_uri,
                          children: "Login with Google"
                        })), React.createElement("li", undefined, React.createElement(SaferLink.make, {
                          href: Constant.github_login_uri,
                          children: "Login with Github"
                        }))));
}

var make = LoginInterface;

export {
  make ,
  
}
/* react Not a pure module */
