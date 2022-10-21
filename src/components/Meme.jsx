import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/hlmst.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImages(data.data.memes)
    }
    getMemes()
  }, []);

  const handleClick = () => {
    const arr = allMemeImages;
    const random = Math.floor(Math.random() * arr.length);
    const url = arr[random].url;
    setMeme((prevState) => ({ ...prevState, randomImage: url }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          value={meme.topText}
          placeholder="Top Text"
          className="form-input"
          onChange={handleChange}
          name="topText"
        />
        <input
          type="text"
          value={meme.bottomText}
          placeholder="Bottom Text"
          className="form-input"
          onChange={handleChange}
          name="bottomText"
        />
        <button className="form-button" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="form-img" alt="Image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
