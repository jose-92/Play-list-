import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/CSS.css";
import "./styles/body.css";

const Header = () => {
  const [renderData, setRenderData] = useState([]);
  const [card, setCard] = useState([]);
  const [value, setValue] = useState("fiestas");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    const searchQuery = value;
    console.log(searchQuery);

    const KEY = "AIzaSyCRecMngvtKkNo-R0X_Y21P6hfitKsvGm4";
    // const CHANNEL_ID = "UCWKo4qLJ1sYd-rTQPihB7_Q";
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=${searchQuery}&safeSearch=none&key=${KEY}`
      )
      .then(({ data: { items } }) => {
        const initialArray = items;
        // console.log(firstResult);
        const firstResult = items.splice(0, 1);
        setRenderData(firstResult);
        const otherResults = initialArray;
        setCard(otherResults);

        //   setRenderData(results.data.items);
        //   setCard(results.data.items);

        //   console.log(results.data);
        //   // console.log(card);
      });
  };

  return (
    <BrowserRouter>
      <div className="container__pg">
        <div className="container__playlist">
          <h1 className="navbar navbar-dark bg-dark  playlist">PLAY LIST</h1>
          <input
            type="text"
            className="input__header form-control"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Buscar"
          />
          <button
            type="button"
            className="btn btn-primary button"
            onClick={(e) => {
              console.log(value);
              handleSearch();

              // searchQuery = setValue;
            }}
          >
            Buscar
          </button>
          <div className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Musica
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#">
                  Tendencia
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />

        <h4>Lista de canales de Youtube</h4>
        <br />
        <div>
          {renderData &&
            renderData.map((x, id) => (
              <div key={id}>
                <ReactPlayer
                  controls
                  width="100%"
                  height="400px"
                  className="container__video-header"
                  url={`https://www.youtube.com/watch?v=` + x.id.videoId}
                />
                <br />
                <a
                  target="blank"
                  href={`https://www.youtube.com/watch?v=` + x.id.videoId}
                >
                  {x.snippet.description} <br />
                  {/* {x.snippet.title} <br /> */}
                </a>
                <h4 className="siguienteContenido">Mas contedido para ver</h4>
              </div>
            ))}
        </div>
        <div className="container__cards">
          {card &&
            card.map((x, id) => (
              <div key={id} className="container__body">
                <div>
                  <ReactPlayer
                    controls
                    className="prf_img"
                    width="inherit"
                    height="300px"
                    url={`https://www.youtube.com/watch?v=` + x.id.videoId}
                  />
                  <a
                    target="blank"
                    href={`https://www.youtube.com/watch?v=` + x.id.videoId}
                  >
                    <p className="prf">{x.snippet.title}</p>
                  </a>
                  <a
                    target="blank"
                    href={`https://www.youtube.com/watch?v=` + x.id.videoId}
                  >
                    <p className="prf">{x.snippet.description}</p>
                  </a>
                </div>
                {/* <div>
                  <ReactPlayer
                    controls
                    className="prf_img"
                    width="400px"
                    height="300px"
                    url={`https://www.youtube.com/watch?v=` + x.id.videoId}
                  />
                  <a
                    target="blank"
                    href={`https://www.youtube.com/watch?v=` + x.id.videoId}
                  >
                    <p className="prf">{x.snippet.title}</p>
                  </a>
                  <a
                    target="blank"
                    href={`https://www.youtube.com/watch?v=` + x.id.videoId}
                  >
                    <p className="prf">{x.snippet.description}</p>
                  </a>
                </div> */}
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Header;
