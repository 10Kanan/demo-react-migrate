import "../styles/style.css";
import React, { useEffect, useState } from "react";
import ProjectList from "../components/project_list";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
var boss='awasdawdawdaw'

console.log(tokenMessage2)

  return (
    <>
    <h1 >Boss {tokenMessage2} KUBAAA</h1>
      <h1>Project List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <ProjectList projects={projects} />
        </tbody>
      </table>
    </>
  );
};

export default Home;
