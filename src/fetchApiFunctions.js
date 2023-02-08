//TODO: what to do with errors - throw here or in contexts
export const getData = async (endpoint, errorMsg) => {
  const response = await fetch(endpoint);
  if (!response.ok) throw Error(errorMsg);
  const data = await response.json();
  return data;
};

export const postData = async (endpoint, itemToPost, errorMsg) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(itemToPost)
  });
  if (!response.ok) throw Error(errorMsg);
};

export const patchData = async (endpoint, itemToPatch, errorMsg) => {
  //Removes empty props
  const removeEmptyProps = (obj) => {
    const newObject = {};
    Object.keys(obj).forEach(key => obj[key] && (newObject[key] = obj[key]));
    return newObject;
  };
  const patchedData = removeEmptyProps(itemToPatch);

  const response = await fetch(`${endpoint}/${itemToPatch.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(patchedData)
  });
  if (!response.ok) throw Error(errorMsg);
};

export const deleteData = async (endpoint, itemId, errorMsg) => {
  const response = await fetch(`${endpoint}/${itemId}`, {
    method: "DELETE"
  });
  if (!response.ok) throw Error(errorMsg);
};