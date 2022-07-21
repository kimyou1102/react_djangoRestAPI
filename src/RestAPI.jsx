import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RestAPI = () => {
  const [texts, setTexts] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  useEffect(() => {
    axios
      .get("https://glacial-temple-96682.herokuapp.com/test/")
      .then((res) => {
        setTexts([...res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>REAT API 연습</h1>
      <input type="text" name="title" onChange={onChange} />
      <br />
      <input type="text" name="content" onChange={onChange} />
      <br />
      <button
        onClick={() => {
          axios
            .post(`https://glacial-temple-96682.herokuapp.com/test/`, {
              title: inputs.title,
              content: inputs.content,
            })
            .then((res) => {
              console.log(res);
              setTexts([...texts, res.data]);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        완료
      </button>
      <br />
      <div>
        {texts.map((text) => (
          <div key={text.id}>
            <h2 style={{ display: "inline" }}>{text.title}</h2>
            <Link to={`/update/` + text.id}>
              <button>수정</button>
            </Link>
            <button
              onClick={() => {
                axios
                  .delete(
                    `https://glacial-temple-96682.herokuapp.com/test/${text.id}/`
                  )
                  .then((res) => {
                    console.log(res);
                    console.log("삭제 완");
                    setTexts(texts.filter((e) => text.id !== e.id));
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              삭제
            </button>
            <p>{text.content}</p>
            <p>{text.updated_at}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestAPI;