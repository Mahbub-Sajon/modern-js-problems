const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage:64},
    {name: 'huawei', price: 27000, camera: 18, storage:64},
    {name: 'htc', price: 18000, camera: 8, storage:32},
    {name: 'oppo', price: 40000, camera: 15, storage:128},
    {name: 'pixel', price: 65000, camera: 15, storage:16},
    {name: 'iphone', price: 90000, camera: 10, storage:256},
];
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price<cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);