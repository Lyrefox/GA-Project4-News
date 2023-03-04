import "./TopArticles.css";
import Button from "@mui/material/Button";

export default function TopArticles(props) {
  console.log(
    window.location.pathname,
    window.location.pathname.includes("/favourites")
  );
  return (
    <div id="mainContent">
      <h2 data-testid="title-test">{props.title}</h2>
      <img
        data-testid="img-test"
        id="img"
        src={props.img}
        alt={props.title}
      ></img>
      <br></br>
      <p id="description">{props.description}</p>
      <a data-testid="link-test" href={props.url}>
        Link to Article
      </a>
      {window.location.pathname.includes("/favourites") ? null : (
        <Button className="fav-button" id={props.index} onClick={props.onClick}>
          Favourite
        </Button>
      )}
    </div>
  );
}
