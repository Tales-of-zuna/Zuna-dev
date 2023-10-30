"use client";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
const RichEditor = () => {
  const editorRef = useRef<any>();
  const [data, setData] = useState();
  return (
    <div>
      {/* <button
        className="absolute z-10"
        onClick={() => {
          setData(editorRef.current.getContent());
          console.log(data);
        }}
      >
        HOLA
      </button> */}
      <div>
        <Editor
          apiKey="ubflr0wgpoppbg5z06a3ax83dqtz8fht105bjauj0ws8l9io"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
          }}
        />
      </div>
    </div>
  );
};

export default RichEditor;
