"use client";
import { useState } from 'react';
import CldImage from '@/components/CldImage';
import Editor from '@monaco-editor/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

interface PlaygroundProps {
  code: string;
}

const Playground = ({ code: defaultCode }: PlaygroundProps ) => {
  const [code, setCode] = useState(defaultCode);
  function handleOnChange(value?: string) {
    console.log('value', value)
    setCode(value || '');
  }
  return (
    <div className="bg-white h-screen grid grid-cols-2">
      <div className="bg-[#1e1e1e] py-6">
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: {
              enabled: false
            },
            contextmenu: false
          }}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <div className="flex max-w-3xl m-auto align-center items-center justify-center p-6">
        <LiveProvider code={code} scope={{ CldImage }}>
          <LivePreview />
        </LiveProvider>
        </div>
      </div>
    </div>
  )
}

export default Playground;