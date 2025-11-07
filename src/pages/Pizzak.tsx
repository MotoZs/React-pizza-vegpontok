import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Pizzak = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt!"));
  }, []);

  return (
    <>
      <h1>Pizzák</h1>
      <Link to="/ujpizza">Új pizza hozzáadása</Link>
      {pizzak.map((p) => (
        <div>
            <Link to={`/pizza/${p.id}`}><p>{p.nev}</p></Link>
            <p>{p.leiras}</p>
            <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={200} />
            <p>{p.ar}</p>
        </div>
        
      ))}
    </>
  );
};
export default Pizzak;
