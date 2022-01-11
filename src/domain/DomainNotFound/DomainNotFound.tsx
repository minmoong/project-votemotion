import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  React.useEffect(() => {
    navigation("/");
  });
  return (<></>);
}

export default NotFound;