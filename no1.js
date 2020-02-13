const Faktorial=(angka)=>{
//      output=0
//      for(i=0;i<angka;i++){
//         //  for(j=angka-i;j<angka;j--){
//         //     //  var angka2=angka-1
            
//         //     if(j===0){
//         //         console.log(output)
//         //     }
//         //     //  console.log(angka2)
//         //     //  console.log(angka)
//         //      output+=angka*j
//              if(i==0){
//                  hasil=angka*(angka-1)
//                  console.log(hasil)
//                  angka--
//              }
         
       
//      }
//      for(j=0;j<angka;j++){
//          output+=hasil*(angka-1)
//          angka--
//      }
//      return output
// }
// output=0
// for (i=0;i<angka;i++){
//     if(i==0){
//         hasil=angka*(angka-1)
//         angka--
//     }
//     temp=hasil*(angka-1)
    
// } 

for(var i=0;i<1;i++){
    output=0
    var hasilpertama=angka*(angka-1)
    angka--
    
   for(j=angka;j-1<angka;j++){
           var hasil=hasilpertama*(angka-1)
           angka--
           var yangdiLooping=hasil*(angka-1)
           
       }
       
   }
   return yangdiLooping
}

console.log(Faktorial(5))
console.log(Faktorial(4))
