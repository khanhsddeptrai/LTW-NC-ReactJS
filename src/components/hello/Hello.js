function Hello() {

    const hiAll = () => {
        alert("Hello everyone")
    }

    const hiYou = (name) => {
        alert("Hello ", name)
    }


    return (
        <>
            <button onClick={hiAll}>Hi all</button>
            <button onClick={() => { hiYou("Peter") }}>Hi you</button>
        </>
    )
}

export default Hello;