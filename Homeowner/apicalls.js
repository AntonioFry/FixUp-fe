export const postUser = async (newHomeowner) => {
  const url = "https://fixup-backend.herokuapp.com/api/v1/users/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newHomeowner)
  }
  try {
    const response = await fetch(url, options);
    const newHomeowner = await response.json();
    return newHomeowner;
  } catch (error) {
    return new Error(error)
  }
}

export const postProject = async (newProject) => {
  const url = "https://fixup-backend.herokuapp.com/api/v1/users/1/projects";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProject)
  }
  try {
    const response = await fetch(url, options);
    const newProject = await response.json();
    return newProject;
  } catch (error) {
    return new Error(error)
  }
}

export const getHomeownerProjects = async (id) => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/users/${id}/projects`;
  try {
    const response = await fetch(url);
    const userProjects = await response.json();
    return userProjects
  } catch (error) {
    return new Error(error)
  }
}

export const patchHomeowner = async (updatedHomeowner, id) => {
  //body should look like:
  // "name":
  // "email":
  // "phone_number":
  // "zip":
  // "category":
  // "logo":
  const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedHomeowner)
  };
  try {
    const response = await fetch(url, options);
    const patchedHomeowner = await response.json();
    return patchedHomeowner;
  } catch (error) {
    return new Error(error)
  }
};