import TopArticles from "./TopArticles"
import Button from "@mui/material/Button";

export default function Favourites() {
    // console.log("Test")
    let items = JSON.parse(localStorage.getItem("persistantState"))
    // console.log(items)
    console.log(items)
    if (items === null) {
        console.log("Items Null")
        return (
            <div>
                <Button id="home-button" variant="outlined" href="/">
                    Home
                </Button>
                <h1>You have not favourited anything yet! Go favourite some articles and come back.</h1>
            </div>
        )

    }else {
        const fav = []
        for (let item in items.List) {
            console.log("for loop")
            // console.log(items.List[item][0])
            items.List[item].map((test) => fav.push(test))
            // console.log(item)
            // console.log(items.List.item)
            // items.List.item[0].map((test) => console.log(test))

        }
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