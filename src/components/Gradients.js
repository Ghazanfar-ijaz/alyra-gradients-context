//import { useState } from "react"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  //const [filter, setFilter] = useState("all")

  return (
    <>
      <GradientsSelect />
      <GradientsList />
    </>
  )
}

export default Gradients
