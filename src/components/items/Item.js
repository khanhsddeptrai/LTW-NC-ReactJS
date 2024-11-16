export default function Item(props) {
    return (
        <>
            <li>
                <a href={props.link}>{props.content} </a>
            </li>
        </>
    )
}