import "../styles/style.css";
import React, { useEffect, useState } from "react";
import ProjectList from "../components/project_list";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  console.log(checkBOSS);

  return (
    <>
      <h1>Boss111KOKOKOHIHIHVOEWESF {tokenMessage2} KUB</h1>
      <h1>Project List</h1>
      <h2>hiiiii check</h2>
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
}
