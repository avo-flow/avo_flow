

export default function DexScreenerChart() {

return (
        <div id="dexscreener-embed" className="mx-auto max-w-7xl px-6 lg:px-8">
            <iframe 
                className=" h-96 w-full mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center"
                src="https://dexscreener.com/flowevm/0x5656c4972827e93e921bcfe6d60148720fCE8b55?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=60"
            >
            </iframe>
        </div>
)

}