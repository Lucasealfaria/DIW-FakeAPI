// Obtém todos os elementos com a classe 'product-card'
const productCards = document.getElementsByClassName('product-card');

// Itera sobre cada elemento 'product-card'
for (let i = 0; i < productCards.length; i++) {   
  // Adiciona um evento de clique a cada elemento 'product-card'
  productCards[i].addEventListener('click', function() {
    // Obtém o link de compra do produto
    const link = this.querySelector('a').href;

    // Obtém o ID do produto a partir do link
    const productId = link.substring(link.lastIndexOf('/') + 1);

    // Faz a solicitação para a API para obter as informações do produto
    fetch('http://diwserver.vps.webdock.cloud:8765/product/' + productId)
      .then(response => response.json())
      .then(product => {
        // Exibe as informações do produto (nome, preço, data de liberação)
        const productName = product.name;
        const productPrice = product.price;
        const productReleaseDate = product.releaseDate;

        alert('Nome do produto: ' + productName + '\nPreço: R$ ' + productPrice + '\nData de liberação: ' + productReleaseDate);
        
        // Redireciona para a página de detalhes do produto com o ID como parâmetro
        window.open('detalhes.html?id=' + productId, '_blank');
      })
      .catch(error => {
        console.log('Ocorreu um erro ao obter as informações do produto:', error);
      });
  });
}






