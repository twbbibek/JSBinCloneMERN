import { useState, useEffect, useContext } from "react";

import { DataContext } from "../context/DataProvider";

import { Box, styled } from "@mui/material";
import { ClassNames } from "@emotion/react";

const Output = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="w-full">
      <div>Output</div>
      <iframe
        className="bg-white"
        srcDoc={src}
        heading="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="95.5%"
      />
    </div>
  );
};

export default Output;
