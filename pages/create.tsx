import React, { useState } from "react";
import styled from "styled-components";
import { StorageImpl } from "../core/storage/StorageImpl";

const Create = () => {
  const [name, setName] = useState("");

  const storage = new StorageImpl();

  const setHabit = () => {
    console.log(name);
    storage.setHabit(name);
  }

  return (
    <InputGroup>
      <InputGroup>
        <input onChange={(e) => setName(e.target.value)} />
        <label>Habit Name</label>
      </InputGroup>
      <button onClick={setHabit}>Submit</button>
    </InputGroup>
  );
};

export default Create;

const Input = styled.input``;

const InputGroup = styled.div`
  position: relative;
  padding-top: 20px;
  margin-top: 20px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  input {
    border: none;
    border-bottom: solid 1px #ccc;
    width: 100%;
    padding: 10px 0;
    transition: border-color 0.2s ease, bow-shadow 0.2s ease;
    &:focus {
      outline: none;
      border-color: #20cfb8;
      box-shadow: 0 1px 0 0 #20cfb8;
    }
  }
  input:focus + label {
    color: #20cfb8;
  }
  label {
    position: absolute;
    top: 30px;
    left: 0;
    color: #aaa;
    font-weight: 300;
    transition: transform 0.2s ease, color 0.2s ease;
    transform: translateY(-30px);
    &:hover {
      cursor: text;
    }
  }
`;
