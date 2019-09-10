export const postContractor = async newContractor => {
  const url = "https://fixup-backend.herokuapp.com/api/v1/contractors/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newContractor)
  };
  try {
    const response = await fetch(url, options);
    const newContractor = response.json();
    return newContractor;
  } catch (error) {
    return new Error(error);
  }
};

export const getContractorProjects = async id => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}/projects`;
  try {
    const response = await fetch(url);
    const contractorProjects = response.json();
    return contractorProjects;
  } catch (error) {
    return new Error(error);
  }
};

export const getProjectBatch = async id => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/projects?contractor_id=${id}`;
  try {
    const response = await fetch(url);
    const swiperProjects = response.json();
    return swiperProjects;
  } catch (error) {
    return new Error(error);
  }
};

export const patchContractor = async (updatedContractor, id) => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedContractor)
  };
  try {
    const response = await fetch(url, options);
    const patchedContractor = response.json();
    return patchedContractor;
  } catch (error) {
    return new Error(error);
  }
};

export const patchContractorProject = async (
  contractorId,
  projectId,
  choice
) => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${contractorId}/projects/${projectId}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ contractor_choice: choice })
  };
  try {
    const response = await fetch(url, options);
    const patchedContractor = response.json();
    return patchedContractor;
  } catch (error) {
    return new Error(error);
  }
};

export const getContractor = async (id) => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}`;
  try {
    const response = await fetch(url);
    const contractor = await response.json();
    return contractor;
  } catch (error) {
    return new Error(error);
  }
}

export const patchContractorProjectSeen = async (
  contractorId,
  projectId
) => {
  const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${contractorId}/projects/${projectId}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ seen: true })
  };
  try {
    const response = await fetch(url, options);
    const patchedContractor = response.json();
    return patchedContractor;
  } catch (error) {
    return new Error(error);
  }
};