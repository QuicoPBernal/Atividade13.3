const cadastroLojaForm = document.getElementById('cadastroLoja');
cadastroLojaForm.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const nomeLoja = document.getElementById('nomeLoja').value;
    const cidade = document.getElementById('cidade').value;
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);

    if (nomeLoja.trim() === "" || cidade.trim() === "" || isNaN(valorVenda)) {
      throw "Preencha todos os campos corretamente.";
    }
    if (valorVenda < 0) {
      throw "O valor total de venda deve ser maior ou igual a zero.";
    }
    console.log("Dados da loja válidos:", nomeLoja, cidade, valorVenda); 
  } catch (error) {
    alert(error); 
  } finally {
    document.getElementById('nomeLoja').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('valorVenda').value = "";
  }
});
