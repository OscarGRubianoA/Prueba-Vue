const{createApp}=Vue
createApp({
    data(){
     return{
      players:["Adrian Ramos","Victor Ibarbo","Edwin Cardona","Andres Sarmiento","Josep Escobar","Facundo Suarez","Cristian Barrios"],
      numbers:[9,18,10] 
        
     }},methods(){
        function histograma(array){
            let acum = 0
            for(let i = 0 ; i < array.length ; i++){
                
                if(array[i] === array[0]){
                 acum++
                }
                
                }console.log($([i]+1) + " : " + " " + $(acum))
                
            }
            histograma(myArray)
     }
}).mount("#App")
 