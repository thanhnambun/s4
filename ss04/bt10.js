document.addEventListener("DOMContentLoaded", function () {
  var projectTable = document.getElementById("projectTable");
  // let projects = localStorage.getItem("storage")
  //   ? JSON.parse(localStorage.getItem("storage"))
  //   : [];
  let projects = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];

  function displayProjects() {
    projectTable.innerHTML = `<tr>
        <th>Project Name</th>
        <th>Image URL</th>
        <th>Link</th>
        <th>Tags</th>
        <th>Action</th>
      </tr>`;

    projects.forEach(function (projects) {
      let row = projectTable.insertRow(-1);
      row.insertCell(0).innerText = projects.projectName;
      row.insertCell(1).innerText = projects.imgUrl;
      row.insertCell(2).innerText = projects.link;
      row.insertCell(3).innerText = projects.tags.join(", ");
      let actionCell = row.insertCell(4);

      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function () {
        deleteProject(projects.id);
      });
      let updateButton = document.createElement("button");
      updateButton.innerText = "Update";
      updateButton.addEventListener("click", function () {
        updateProject(projects.id);
      });
      actionCell.appendChild(deleteButton);
      actionCell.appendChild(updateButton);
    });
  }

  function deleteProject(id) {
    projects = projects.filter((projects) => projects.id !== id);
    localStorage.setItem("storage", JSON.stringify(projects));
    displayProjects();
  }

  function updateProject(id) {
    let projectToUpdate = projects.find((project) => project.id === id);

    if (projectToUpdate) {
      projectToUpdate.projectName = prompt("tạo tên mới ");
      projectToUpdate.imgUrl = prompt("linh ảnh mới ");
      projectToUpdate.link = prompt("link mới ");
      projectToUpdate.tags = prompt("tags mới ").split(",");

      localStorage.setItem("storage", JSON.stringify(projects));
      displayProjects();
    } else {
      console.error("không tìm thấy id: " + id);
    }
  }

  document
    .getElementById("newProject")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let projectName = document.getElementById("project_name").value;
      let imgUrl = document.getElementById("img_url").value;
      let link = document.getElementById("link").value;
      let tags = document.getElementById("tag").value.split(",");

      var newProject = {
        id: projects.length + 1,
        projectName: projectName,
        imgUrl: imgUrl,
        link: link,
        tags: tags,
      };

      projects.push(newProject);

      localStorage.setItem("storage", JSON.stringify(projects));

      displayProjects();
    });

  displayProjects();
});
