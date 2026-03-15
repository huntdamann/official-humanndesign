import React from "react";
import '../../css/Marquee.css'

interface StockItem {
    company: string
    price: string
    change: string
    direction: "plus" | "minus"
  }
  
  const stocks: StockItem[] = [
    { company: "Web Development", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    { company: "Web Design", price: "199.40", change: "+7.43 (+3.87%)", direction: "plus" },
    { company: "App Development", price: "587.65", change: "+4.09 (+0.70%)", direction: "plus" },
    { company: "Graphic Deisgn", price: "138.75", change: "-6.54 (-4.50%)", direction: "minus" },
    { company: "3D Experiences", price: "790.92", change: "+2.75 (+0.35%)", direction: "plus" },
    { company: "Vision Creation", price: "407.54", change: "-2.80 (-0.68%)", direction: "minus" },

  ]
  
  const StockList = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden || undefined}>
      {stocks.map((stock) => (
        <li key={stock.company}>
          <span className="company">{stock.company}</span>
          
        </li>
      ))}
    </ul>
  )
  
  export const StockTicker = () => {
    return (
      <div className="stock-ticker">
        <StockList />
        <StockList hidden />
      </div>
    )
  }