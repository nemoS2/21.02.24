const sortear = () => { 
    let nomes = ["KIM NAMJOON", "KIM SEOKJIN", "MIN YOONGI", "JUNG HOSEOK", "PARK JIMIN", "KIM TAEHYUNG", "JEON JUNGKOOK"];

    let h1Nome = document.getElementById("nome");

    let achouNumero = false;
    let numeroSorteado; 

    while (achouNumero == false) {    //while=enquanto     eh uma extrutura de repetição
        numeroSorteado = Math.floor(Math.random() * 100);   // parenteses tbm eh parametro
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }

    switch (numeroSorteado) {
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 6:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        default:
            h1Nome.innerText = "Ops! Nome não consta na lista.";
            break;
    }
    h1Nome.innerText += " o número sorteado foi: " + numeroSorteado;
}