import * as React from "react";
import * as ReactDom from "react-dom";
import { HelloWorld } from "./hello-world/HelloWorld";

declare let module: any;

ReactDom.render(<HelloWorld greeting={'Hi folks! Use this base application to have fun! -DMGauthier'} />, document.getElementById("root"));

module?.hot?.accept();
