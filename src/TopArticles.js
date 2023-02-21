import "./TopArticles.css"

export default function TopArticles(props) {
    console.log(props)
    return (
        <div id="mainContent">
            <h2>{props.title}</h2>
            <img id="img" src={props.img} alt={props.title}></img><br></br>
            <a href={props.url}>{props.url}</a>
        </div>
    )
}