import "core-js/stable";
import "regenerator-runtime";

import React from "react";
import ReactDom from "react-dom";
import App from "@containers/App";
import "@styles/index.scss";

ReactDom.render(<App />, document.getElementById('app'));
