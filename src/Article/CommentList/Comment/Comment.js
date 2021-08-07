export default function Comment (props){
    return <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.content}</p> - By {props.author}
    </div>;
}