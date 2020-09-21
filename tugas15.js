function sisiMiring(A,B){
	A2 = Math.pow(A,2)
	B2 = Math.pow(B,2)
	C2 = A2 + B2
	AC = Math.sqrt(C2)
	return AC
}

var AB = 8
var BC = 6

console.log("Nilai AB : ",AB)
console.log("Nilai BC : ",BC)
console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah : ",sisiMiring(AB,BC)," cm")