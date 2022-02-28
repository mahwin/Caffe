import type { NextPage } from "next";
import Header from "../components/Header";
import { useState } from "react";

const ContactUs: NextPage = () => {
  const [input, setInput] = useState({
    email: "",
    title: "",
    content: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(input);
  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className="container">
      <Header />
      <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            이메일
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="name@email.com"
            value={input.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            제목
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="제목을 입력하세요"
            value={input.title}
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            내용
          </label>
          <input
            type="textArea"
            className="form-control"
            id="formGroupExampleInput2"
            value={input.content}
            name="content"
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
          문의하기
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
