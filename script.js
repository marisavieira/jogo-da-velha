var vez= 'X';
var usados = [];
var posicoes = [9];
var interacao = 0;
var fim = 0;
var imgv = document.createElement("IMG");

function limpar(){
    location.reload();
}

function adiciona(id, posicao){
    if(fim === 0){      
        if(usados.indexOf(id) < 0){
            if(vez === 'X'){
                var img = document.createElement("IMG");
                img.src = "imagens/X.png";
                img.style.width = "100px";
                document.getElementById(id).appendChild(img); 
                usados.push(id);
                posicoes[posicao] = vez;   
                interacao++;  
                velha(interacao);
                vez = 'O';  
                document.getElementById("vezdo").innerHTML = "Vez de " + vez + " jogar";  
            }else{
                var img = document.createElement("IMG");
                img.src = "imagens/O.png";
                img.style.width = "110px";
                document.getElementById(id).appendChild(img);
                usados.push(id);  
                posicoes[posicao] = vez; 
                interacao++;  
                velha(interacao);
                vez = 'X';  
                document.getElementById("vezdo").innerHTML = "Vez de " + vez + " jogar";   
            }
        }
    }
         
}

function final(){
    document.getElementById("vencedor").innerHTML = vez + " GANHOU";
    document.getElementById("vencedor").style.color = "#44bd32";
    fim = 1;
    imgv.src = "imagens/campeao.png";
    imgv.style.width = "100px";
    document.getElementById("imagem").appendChild(imgv);
    return ganhou++;

}

function velha(interacao){
    var ganhou = 0;  

    if(posicoes[0] === vez && posicoes[1] === vez && posicoes[2] === vez ){
        ganhou = final();
    } 

    else if(posicoes[3] === vez && posicoes[4] === vez && posicoes[5] === vez ){
        ganhou = final();
    }  

    else if(posicoes[6] === vez && posicoes[7] === vez && posicoes[8] === vez ){
        ganhou = final();
    }  

    else if(posicoes[0] === vez && posicoes[3] === vez && posicoes[6] === vez ){
        ganhou = final();
    }  

    else if(posicoes[1] === vez && posicoes[4] === vez && posicoes[7] === vez ){
        ganhou = final();
    } 

    else if(posicoes[2] === vez && posicoes[5] === vez && posicoes[8] === vez ){
        ganhou = final();
    }   
    
    else if(posicoes[0] === vez && posicoes[4] === vez && posicoes[8] === vez ){
        ganhou = final();
    }

    else if(posicoes[2] === vez && posicoes[4] === vez && posicoes[6] === vez ){
        ganhou = final();
    } 

    if(interacao === 9 && ganhou === 0){
        document.getElementById("vencedor").innerHTML = "DEU VELHA";
        document.getElementById("vencedor").style.color = "#c23616";
        fim = 1;
        imgv.src = "imagens/velha.png";
        imgv.style.width = "50px";
        document.getElementById("imagem").appendChild(imgv);
    }
}