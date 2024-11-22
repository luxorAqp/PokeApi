import React, { useEffect, useState } from "react";
import css from "./card.module.scss";

import { URL_POKEMON } from "../../../api/apiRest";
import { URL_ESPECIES } from "../../../api/apiRest";
import axios from "axios";

export default function Card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  const [especiePokemon, setEspeciePokemon] = useState({});
  console.log(itemPokemon);

  //DATA POKEMON
  useEffect(() => {
    const dataPokemon = async () => {
      const api = await axios.get(`${URL_POKEMON}/${card.name}`);
      setItemPokemon(api.data);
    };
    dataPokemon();
  }, []);

  //ESPECIE POKEMON
  useEffect(() => {
    const dataEspecie = async () => {
      const URL = card.url.split("/");
      const api = await axios.get(`${URL_ESPECIES}/${URL[6]}`);
      setEspeciePokemon(api.data);
    };
    dataEspecie();
  }, []);
  console.log(itemPokemon);

  return (
    <div className={css.card}>
      <img
        className={css.img_poke}
        src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
        alt="pokemon"
      />
      <div className={`bg-${especiePokemon?.color?.name} ${css.sub_card}`}>
        <strong className={css.id_card}>011</strong>
        <strong className={css.name_card}>name</strong>
        <h4 className={css.altura_poke}>10cm</h4>
        <h4 className={css.peso_poke}>peso</h4>
        <h4 className={css.habitad_poke}>habitad</h4>
        <div className={css.div_stats}>
          {itemPokemon?.stats?.map((sta, index) => {
            return (
              <h6 key={index} className={css.item_stats}>
                <span className={css.name}>{sta.stat.name}</span>

                <progress value={sta.base_stat} max={110}></progress>
                <span className={css.numero}>{sta.base_stat}</span>
              </h6>
            );
          })}
        </div>
        <div className={css.div_type_color}>
          {itemPokemon?.types?.map((ti, index) => {
            return (
              <h6
                key={index}
                className={`color-${ti.type.name} ${css.color_type}`}
              >
                {" "}
                {ti.type.name}
              </h6>
            );
          })}
        </div>
      </div>
    </div>
  );
}
