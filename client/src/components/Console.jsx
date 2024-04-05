import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as CodeMirror } from "react-codemirror2";

export default function Console({ heading, language, value, onChange }) {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <>
      <div className="w-full border border-r-1">
        <div>{heading}</div>
        <div>
          <CodeMirror
            onBeforeChange={handleChange}
            value={value}
            options={{
              lineWrapping: true,
              lint: true,
              mode: language,
              lineNumbers: false,
            }}
          />
        </div>
      </div>
    </>
  );
}
