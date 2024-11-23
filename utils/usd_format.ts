

export default function UsdFormatter(stringAmount: string) {

    const numberAmount = parseFloat(stringAmount)

    return numberAmount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 9 
      }); 

}