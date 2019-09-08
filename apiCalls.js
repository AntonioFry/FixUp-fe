export const postContractor = async newContractor => {
  const url = "https://fixup-backend.herokuapp.com/api/v1/contractors/";
  const options = { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newContractor)
  }
  try {
    const response = await fetch(url, options);
    const newContractor = response.json();
    return newContractor;
  } catch (error) {
    return new Error(error)
  }
}