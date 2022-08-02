function gooi(){
    console.log('er is gegooid')
    const count = {'1':0, '2':0, '3':0, '4':0, '5':0, '6':0}
    for(let i=0; i<8; i++){
        let worp = Math.floor(Math.random()*6) + 1;
        
        count[worp]++;

       
        for(let j=1; j<=6; j++){
        document.getElementById("getal" + (j)).innerHTML = count[j]
        }
    }
    console.log(count)
}