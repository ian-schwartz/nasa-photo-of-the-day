import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
// import styled from "styled-components";
// import { tsPropertySignature } from "@babel/types";

export default function PhotoDisplay() {
    const [photo, setPhoto] = useState({});

useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=RXld92ugxDU2A9di8wBuwcUuWnfEy5aFxmHj6W7e`)
    .then(response => {
        const image = response.data;
        console.log('This is the NASA POTD:', image)
        setPhoto(image);
    })
    .catch(error => {
        console.log('The image was not returned', error);
    });
}, []);

return (
    <PhotoCard url={photo.url} title={photo.title} date={photo.date} copyright={photo.copyright} explanation={photo.explanation}/>
  );
};