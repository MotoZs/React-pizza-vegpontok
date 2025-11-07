import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

const Pizzak = () => {
  const [pizza, setPizza] = useState<Pizza>();
  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch(() => toast.error("A pizza betöltése sikertelen volt!"));
  }, [id]);

  return (
    <>
      {pizza ? (
        <>
          <h1>{pizza.nev}</h1>
          <h2>{pizza.leiras}</h2>
          <img src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} width={200} />
        </>
      ) : (
        <>A Pizza nem található!</>
      )}
    </>
  );
};
export default Pizzak;
