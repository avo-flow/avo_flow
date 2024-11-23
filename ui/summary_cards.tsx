
import { getTokenInfo } from "@/server_actions/getTokenInfo"

  export default async function SummaryCards() {


    const tokenInfo = await getTokenInfo()
    console.log(tokenInfo)



    return (
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {tokenInfo.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/50 p-8">
                <dt className="text-sm/4 font-semibold text-avo-brown ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-avo-green">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }