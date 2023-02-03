import React from "react"
import Header from "./components/Header"
import Article from "./components/Article"
import data from "./data"

export default function App() {
  const cards = data.map(card => {
    return (
    <Article
      {...card}
    />
    )
  })
  return (
    <div>
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}
