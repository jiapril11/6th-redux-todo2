import React from "react";
import Header from "../components/Header";
import Form from "../components/todos/Form";
import List from "../components/todos/List";

export default function Home() {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
}
