/*
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
) {*/
window.onload = () => {
    submitOrderBtn.onclick = () => {
        const selectedContainerType = document.getElementById("input[name =`containerType`]:checked")
        submitOrder(
            scoops.value,
            selectedContainerType.value,
            sprinkles.checked,
            whip.checked,
            fudge.checked,
            cherry.checked,
        );
        basePriceSpan.innerText = basePrice.toFixed(2);
        taxSpan.innerText = taxAmount.toFixed(2);
        totalDueSpan.innerText = totalDue.toFixed(2);
    }
    cupRadio.onclick () => toppings.style.display = "block"
}