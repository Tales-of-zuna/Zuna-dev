"use client";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
  Textarea,
} from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

const CreateBlog = () => {
  type category = { name: string; _id: string };
  const [categories, setCategories] = useState<category[]>([]);
  const [values, setValues] = useState<Selection>(new Set());
  const [title, setTitle] = useState<string>();
  const [metadata, setMetadata] = useState<string>();
  const [summary, setSummary] = useState<string>();
  const [image, setImage] = useState<string>();
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [video, setVideo] = useState<string>();
  const editorRef = useRef<any>();
  const [data, setData] = useState<string>("");

  const submitBlog = async () => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        metadata: metadata,
        summary: summary,
        image: image,
        video: video,
        tags: tags,
        category: JSON.stringify(Array.from(values)),
        content: data.replace('"', `\"`),
        slug: "",
        comments: [],
        author: JSON.parse(Cookies.get("user") as string)._id,
      }),
    });
  };
  const getCategories = async () => {
    const res = await fetch("/api/categories");
    const categories = await res.json();
    setCategories(categories);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="grid text-slate-400 gap-4 font-bold grid-cols-4 pt-4">
      <div className="col-span-1 group">
        <Input
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          value={title}
          placeholder="Title"
          name="title"
          type="text"
          required={true}
          isClearable
          className="font-semibold"
          labelPlacement="outside"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          }
          label="Title"
          variant="bordered"
          color="success"
        />
      </div>
      <div className="col-span-1 group">
        <Input
          isClearable
          onChange={(e) => {
            setMetadata(e.currentTarget.value);
          }}
          className="font-semibold"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
          }
          labelPlacement="outside"
          placeholder=""
          label="Meta data"
          variant="bordered"
          color="success"
        />
      </div>
      <div className="col-span-1 group">
        <Input
          isClearable
          className="font-semibold"
          onChange={(e) => {
            setImage(e.currentTarget.value);
          }}
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          }
          labelPlacement="outside"
          placeholder=""
          label="Image URL"
          variant="bordered"
          color="success"
        />
      </div>
      <div className="col-span-1 group">
        <Input
          isClearable
          labelPlacement="outside"
          onChange={(e) => {
            setVideo(e.currentTarget.value);
          }}
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          }
          className="font-semibold"
          label="Video URL"
          variant="bordered"
          color="success"
        />
      </div>
      <div className="col-span-1 group">
        <Textarea
          onChange={(e) => {
            setSummary(e.currentTarget.value);
          }}
          label="Summary"
          variant="bordered"
          labelPlacement="outside"
          color="success"
          rows={5}
        />
      </div>
      <div className="col-span-1 group">
        <Select
          label="Categories"
          labelPlacement="outside"
          color="success"
          variant="bordered"
          selectionMode="multiple"
          placeholder="Select categories"
          selectedKeys={values}
          onSelectionChange={setValues}
        >
          {categories.map((category: category) => (
            <SelectItem key={category._id} value={category._id}>
              {category.name}
            </SelectItem>
          ))}
        </Select>
        <p className="text-small text-default-500"></p>
      </div>
      <div className="col-span-1 items-center flex gap-2 group">
        <div>
          <Input
            isClearable
            onChange={(e) => {
              setTag(e.currentTarget.value);
            }}
            labelPlacement="outside"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
            }
            className="font-semibold"
            label="Video URL"
            variant="bordered"
            color="success"
          />
          <p className="text-small text-default-500">
            Selected: {JSON.stringify(Array.from(tags))}
          </p>
        </div>
        <Button
          onClick={() => {
            let tempData = tags;
            tempData.push(tag);
            setTags(tempData);
            console.log(tags);
            setTag("");
          }}
        >
          add
        </Button>
      </div>
      <div className="col-span-4">
        <div>
          <p className="text-green-500">Content</p>
          <Editor
            apiKey="ubflr0wgpoppbg5z06a3ax83dqtz8fht105bjauj0ws8l9io"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              skin: "oxide-dark",
              content_css: "dark",
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
          />
        </div>
      </div>
      <div className="col-span-4 flex justify-center">
        <Button
          className="p-4 rounded-lg bg-green-700 text-white"
          onClick={() => {
            setData(editorRef.current.getContent());
            console.log(data);
          }}
        >
          show data
        </Button>
      </div>
      <Button
        onClick={() => {
          submitBlog();
        }}
      >
        Done
      </Button>
    </div>
  );
};

export default CreateBlog;
