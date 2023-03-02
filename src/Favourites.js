import TopArticles from "./TopArticles"
import Button from "@mui/material/Button";

export default function Favourites() {
    // console.log("Test")
    let items = JSON.parse(localStorage.getItem("persistantState"))
    // console.log(items)
    const fav = []
    for (let item in items.List) {

        // console.log(items.List[item][0])
        items.List[item].map((test) => fav.push(test))
        // console.log(item)
        // console.log(items.List.item)
        // items.List.item[0].map((test) => console.log(test))

    }
    // console.log(fav)
return (
    <div>
        <Button id="home-button" variant="outlined" href="/">
            Home
        </Button>
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
)

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