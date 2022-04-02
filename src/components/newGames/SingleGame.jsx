import React, { useEffect, useState } from "react";
import "../../styles/Red.Games.css";
import "../../styles/GoldBar.Games.css";
import SimpleAccordion from "../Games/Accordian";
import BasicTable from "../Games/tables";
import MultipleItems from "../Games/slider";
import MultipleVideo from "../Games/sliderVideo";
import MultiActionAreaCard from "../Games/card";
import BasicTables from "../Games/data";
import { useParams } from "react-router-dom";
import { GamesHeader } from "./GamesHeader";
import axios from "axios";
import { GamesDetails } from "./GameDetails";
import { KeyFeatures } from "./KeyFeatures";
import {v4 as uuidv4} from 'uuid';
import { Videos } from "./videos";
import { Screenshots } from "./Screenshots";

const SingleGame = () => {

  const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(
          `https://obscure-citadel-15133.herokuapp.com/games/${id}`
        ).then((res)=>{
          console.log(res.data);
          setData(res.data)
        });
    }, [id])

  return (
    <div>
      <GamesHeader img={data.heroimg} logo={data.logo} name={data.name} />
      <GamesDetails
        desc={data.gamesDetails}
        logo={data.logo}
        name={data.name}
      />
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "30px",
          padding: "70px",
          paddingBottom: "10px",
          paddingBottom: "0px",
        }}
      >
        Key Features
      </h1>
      {data.keyfeaImg
        ? data.keyfeaImg.map((el, ind) => (
            <KeyFeatures
              key={uuidv4()}
              keyfeaImg={el}
              keyfeaDesc={data.keyfeaDesc[ind]}
              keyfeaTitle={data.keyfeaTitle[ind]}
              ind={ind}
            />
          ))
        : ""}
      {/* <Videos vid={data.videos ? data.videos : []} /> */}
      <Screenshots ss={data.ss ? data.ss : []} />
    </div>
  );
};

export default SingleGame;
