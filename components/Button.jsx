"use client"
import React from "react"
import { useState } from "react"
function Button({ label, onClick, disabled, variant, wScreen }) {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    onClick()
    setClick(true)
    setTimeout(() => {
      setClick(false)
    }, 1000)
  }
  return (
    <button
      onClick={() => handleClick()}
      className={`px-[40px] py-[10px] shadow-md rounded-lg m-[5px] hover:bg-neutral-200${
        variant === "nav" && " "
      } ${click ? "transform -scale-" : "animate-none"}`}
    >
      Hey
    </button>
  )
}

export default Button
