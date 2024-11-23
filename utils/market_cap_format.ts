

export default function MarketCapFormatter(marketCap: number) {

    if (marketCap < 1000) {
        return marketCap.toString(); 
      } else if (marketCap < 1000000) {
        return "$" + (marketCap / 1000).toFixed(1) + "K"; 
      } else if  (marketCap < 1000000000) {
        return "$" + (marketCap / 1000000).toFixed(1) + "M"; 
      } else {
        return "$" + (marketCap / 1000000000).toFixed(1) + "B"; 
      }

}