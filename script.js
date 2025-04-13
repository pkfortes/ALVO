document.getElementById('OFormulario').addEventListener('submit', function(event){//quando clicarem no botao
    event.preventDefault()//Impede o envio padrao do formulario

    // deve ser retirado quando habilitar o envio do dos dados para o email

    //por padrao quando um fomrulario e enviado a pagina recarrega
    //o comando acima evita isso possibilitando capturar os dados com js


    //Captura os valores
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    const mensagem = document.getElementById('mensagem').value;

    //Mostra os dados no console(poderiria ser enviado par aum servidor)
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Numero:", numero);
    console.log("Mensagem:", mensagem);


    //Exemplo alerta para o user
    alert("Obridado pelo envio, "+ nome + "!"); //pop-up

    //limpa os campos
    document.getElementById('OFormulario').reset();

});