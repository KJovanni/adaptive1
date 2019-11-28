let num = + prompt("Enter your number : ", "");

let res = num %10 

let res2 = Math.floor(num/10)

let res3 = res2 %10

let res4 = Math.floor(res2/10)



switch (true) {
  case res==res3:
      alert("Your num have same number")
      break;
  case res == res4:
      alert ("Your num have same number")
      break;
  case res3 == res :
      alert("Your num have same number")
      break;
  case res3 == res4 :
      alert("Your num have same number");
      break;
  

  default:
      alert("Not same num")
      break;
}
