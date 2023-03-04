import TopArticles from "./TopArticles";
// import Button from "@mui/material/Button";
import "./Favourites.css"


export default function Favourites() {
  // console.log("Test")
//   console.log(localStrg)
  const localStrg = localStorage.getItem("persistantState")
  let items = JSON.parse(localStrg ?? {});
  // console.log(items)
  // console.log(items)
  if (items === null) {
    // console.log("Items Null")
    return (
      <div>
        <div id="fav-title">
          <h2 data-testid="fav-title-test">Favourites</h2>
        </div>
        <h1 data-testid="no-fav-test-id" id="fav-something">
          You have not favourited anything yet! Go favourite some articles and
          come back.
        </h1>
      </div>
    );
  } else {
    const fav = [];
    for (let item in items.List) {
      // console.log("for loop")
      // console.log(items.List[item][0])
      items.List[item].map((test) => fav.push(test));
      // console.log(item)
      // console.log(items.List.item)
      // items.List.item[0].map((test) => console.log(test))
    }
    console.log(window.location.pathname)
    return (
      <div id="fav-content">
        {console.log(window.location.pathname)}
        <div id="fav-title">
          <h2 data-testid="fav-title-test">Favourites</h2>
        </div>
        <div id="articles">
          {fav.map((item, index) => (
            <TopArticles
              key={index}
              index={index}
              title={item.title}
              img={item.urlToImage}
              url={item.url}
              // onClick={favouriteArticle}
            />
          ))}
        </div>
      </div>
    );
  }
  // console.log(fav)

  // return (
  //     <TopArticles
  //         key={index}
  //         index={index}
  //         title={item.title}
  //         img={item.urlToImage}
  //         url={item.url}
  //         onClick={favouriteArticle}
  //       />
  // )
}
