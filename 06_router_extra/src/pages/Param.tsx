import { useParams } from "react-router-dom";

const Param = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Param: {id}</h1>
    </>
  );
};

export default Param;
