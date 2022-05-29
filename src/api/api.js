import axios from "axios";

const Url = "http://192.168.1.10/api_react";

function getUsers() {
  const response = axios.get(Url+"/getUser.php");

  return response;
}

function deleteUsers(id) {
  const response = axios.get(Url+"/deleteUser.php?id="+id);

  return response;
}

function getDataId(id) {
  const response = axios.get(Url+"/getIdUser.php?id="+id);

  return response;
}

function updateData(id,dataUser) {
  const response = axios.post("http://192.168.1.10/api_react/updateData.php?id=" + id, dataUser)

  return response;
}

export { getUsers,deleteUsers,getDataId,updateData };