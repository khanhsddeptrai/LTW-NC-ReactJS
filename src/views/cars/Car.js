import { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        })
    }

    return (
        <>
            <h1>My brand: {car.brand}</h1>
            <p>Color: {car.color}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <button type="button" onClick={() => updateColor()}>updateColor</button>
        </>
    )
}

export default Car;