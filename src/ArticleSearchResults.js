export default function ArticleSearchResults(props) {
    // console.log(props)
    return (
        <div id="mainContent">
            <h2 data-testid="title-test">{props.title}</h2>
            <img data-testid="img-test" id="img" src={props.img} alt={props.title}></img><br></br>
            <a data-testid="link-test" href={props.url}>{props.url}</a>
        </div>
    )
}