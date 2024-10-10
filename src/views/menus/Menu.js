import Item from "../items/Item"

export default function Menu() {
    let list = [
        { link: "https://react.dev/", content: "link to react" }
    ]

    return (
        <>
            <ul>
                {
                    list.map((item) => <Item link={item.link} content={item.content} />)
                }
            </ul>

            <div></div>
        </>
    )
}