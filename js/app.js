// let age = 19;

// if(age >= 18) {
// 	console.log("Xaydovchilik guvohnomasini olsangiz bo'ladi!")
// } else {
// 	let yearsLeft = 18 - age;
// 	console.log(`Hali yosh ekansiz ${yearsLeft} yil kutib turing :)`)
// }


// let birthYear = 1998
// let century;

// if(birthYear >= 2000) {
// 	century = 20;
// } else {
// 	century = 21;

let count = 0;

        function updateCounter() {
            document.getElementById("counter").innerText = count;
        }

        function increment() {
            count++;
            updateCounter();
        }

        function decrement() {
            count--;
            updateCounter();
        }

