
import UsdFormatter from "@/utils/usd_format";
import MarketCapFormatter from "@/utils/market_cap_format";

export async function getTokenInfo() {
    
    const response = await fetch('https://api.geckoterminal.com/api/v2/networks/flow-evm/tokens/0x995258cea49c25595cd94407fad9e99b81406a84', {
      method: 'GET',
    });

    const infoResponse = await response.json()

    const holderCountResponse = await fetch('https://evm.flowscan.io/api/v2/tokens/0x995258cea49c25595cd94407fad9e99b81406a84/counters', {
      method: 'GET',
    });

    const holderCount = holderCountResponse.status != 200 ? "???" : await holderCountResponse.json()
    
    const tokenInfo =  [
          {"id": 1, "name": "AVO Holders", "value": holderCount === "???" ? "???" : holderCount.token_holders_count},
          {"id": 2, "name": "Price", "value": UsdFormatter(infoResponse.data.attributes.price_usd)},
          {"id": 3, "name": "Market Cap", "value": MarketCapFormatter((infoResponse.data.attributes.price_usd * 1000000000)) },
          {"id": 4, "name": "Fully Diluted Value", "value": UsdFormatter(infoResponse.data.attributes.fdv_usd)}
        ]

    return tokenInfo;
  }

  