import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const UjPizza = () => {
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  const submit = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    apiClient
      .post("/pizzak", p)
      .then(() => toast.success("Sikeresen hozzáadva!"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
  };

  return (
    <>
      <form>
        <label>Név: </label>
        <input type="text" onChange={(e) => setNev(e.target.value)} />
        <label>Leíras: </label>
        <input type="text" onChange={(e) => setLeiras(e.target.value)} />
        <label>Ár: </label>
        <input type="number" onChange={(e) => setAr(Number(e.target.value))} />
        <label>ImageUrl: </label>
        <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
      </form>
      <button onClick={submit}>Hozzáadás</button>
    </>
  );
};
export default UjPizza;
