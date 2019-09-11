import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
// import { tsPropertySignature } from "@babel/types";

export default function PhotoDisplay() {
    const [photo, setPhoto] = useState({});

useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
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
