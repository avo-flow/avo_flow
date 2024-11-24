import Header from "@/ui/header";
import SummaryCards from "@/ui/summary_cards";
import AvocadoSprite from "@/ui/avocado";
import DexScreenerChart from "@/ui/dexscreener_chart";

export default function Home() {
  return (
    <div>
      <Header />
      <SummaryCards />
      <AvocadoSprite />
      <DexScreenerChart />
    </div>
  );
}
