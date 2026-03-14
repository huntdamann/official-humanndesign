import React from "react";
import '../../css/Marquee.css'

interface StockItem {
    company: string
    price: string
    change: string
    direction: "plus" | "minus"
  }
  
  const stocks: StockItem[] = [
    { company: "AAPL", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    { company: "TSLA", price: "199.40", change: "+7.43 (+3.87%)", direction: "plus" },
    { company: "NFLX", price: "587.65", change: "+4.09 (+0.70%)", direction: "plus" },
    { company: "GOOG", price: "138.75", change: "-6.54 (-4.50%)", direction: "minus" },
    { company: "NVDA", price: "790.92", change: "+2.75 (+0.35%)", direction: "plus" },
    { company: "MSFT", price: "407.54", change: "-2.80 (-0.68%)", direction: "minus" },
    { company: "META", price: "487.05", change: "+5.31 (+1.10%)", direction: "plus" },
    { company: "KO",   price: "60.34",  change: "-0.37 (-0.61%)", direction: "minus" },
  ]
  
  const StockList = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden || undefined}>
      {stocks.map((stock) => (
        <li key={stock.company} className={stock.direction}>
          <span className="company">{stock.company}</span>
          <span className="price">{stock.price}</span>
          <span className="change">{stock.change}</span>
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