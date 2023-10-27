let basePrice = 0;
let taxAmount = 0;
let totalDue = 0;
const TAX_RATE = 0.0825;

function submitOrder(


    scoopCount,
    containerType,
    hasSprinkles,
    hasFudge,
    hasWhip,
    HasCherry
) {
    basePrice = 0;
    taxAmount = 0;
    totalDue = 0;

    basePrice += 2.25; //ONE SCOOP
    basePrice += 1.25 * (scoopCount - 1);

    if (containerType === "cup") {
        if (hasSprinkles) {
            basePrice += 0.5
        }
        if (hasFudge) {
            basePrice += 1.25
        }
        if (hasWhip) {
            basePrice += 0.25
        }
        if (HasCherry) {
            basePrice += 0.25
        }
    }
    taxAmount = TAX_RATE * basePrice
    totalDue = basePrice + taxAmount
}
submitOrder(4, "cup", true, true, true, true)
console.log(basePrice, taxAmount, totalDue)
submitOrder(1, "cone", true, true, true, true)
console.log(basePrice, taxAmount, totalDue)