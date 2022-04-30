function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood =  50;
    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood =  perBedWood * bedQuantity;
    const totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood; 
    return totalWoodNeeded;

}
const woodAmount = woodCalculator (5, 2, 10);
console.log(woodAmount);
