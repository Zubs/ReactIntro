import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NewBlogButton,
  NewBlogDiv,
  NewBlogHeader,
  NewBlogInput,
  NewBlogLabel,
  NewBlogSelect,
  NewBlogTextarea,
} from "./styles/NewBlog.styles";

const NewBlog = () => {
  const {
    data: authors,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users/");
  const [postLoading, setPostLoading] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    body: "",
    userId: "1",
  });

  const handleFormChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const navigateFunction = useNavigate();

  const submitPost = (event) => {
    event.preventDefault();
    setPostLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then(() => {
        setPostLoading(false);
        navigateFunction("/");
      });
  };

  return (
    <NewBlogDiv>
      <NewBlogHeader>Add A New Blog</NewBlogHeader>
      <form onSubmit={submitPost}>
        <NewBlogLabel>Title</NewBlogLabel>
        <NewBlogInput
          type="text"
          name="title"
          required
          value={formState.title}
          onChange={handleFormChange}
        />

        <NewBlogLabel>Body</NewBlogLabel>
        <NewBlogTextarea
          required
          name="body"
          value={formState.body}
          onChange={handleFormChange}
        ></NewBlogTextarea>

        <NewBlogLabel>Author</NewBlogLabel>
        <NewBlogSelect
          disabled={!!error || loading}
          onChange={handleFormChange}
          value={formState.userId}
          name="userId"
          required
        >
          {authors.map((author) => (
            <option value={author.id} key={author.id}>
              {author.name}
            </option>
          ))}
        </NewBlogSelect>

        <NewBlogButton disabled={postLoading}>
          {postLoading ? "loading... " : "Add Blog"}
        </NewBlogButton>
      </form>
    </NewBlogDiv>
  );
};

export default NewBlog;
