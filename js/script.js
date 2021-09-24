var precoFinal = 0;

var total = 0;
var soma = 0;

// *ATENÇÃO*     


//  Agora você poderá cadastrar os produtos de forma pratica e o sistema ira 
//      inserir tudo em seu devido lugar nos cards.

const items = [
    {
        id : 0, //o id identificará seu produto. nunca deixe um id igual ao outro.
        nome : 'Camiseta', //nome que parecerá no card.
        img : 'camisa.jpg', //aqui vai o nome do arquivo e sua extensão.
        desc: 'Camiseta vermelha do Internacional&reg;.', // aqui vai uma descrição do produto, 
                                                        // sempre tente deixar os tamanhos relativamente iguais.
        quantidade:0,                                    // Sempre deixe esta parte igual. Valor 0.
        preco: 20.99, // Coloque sempre as casas decimais.
        tema: "Roupas", // Aqui os valores devem ser Bebê, Criança, Roupas, Acessórios ou Cosméticos. cada um se encaixara na sua vitrine.
                       // Copie qualquer um dos items e não se esqueça de fechá-los com as chaves e separá-los com *1" vírgula.
        tamanho: "xx",
       
        tamanhos: "P,M,G" 
      
                  
       
      },
    {
        id : 1,
        nome : 'Shorts',
        img : 'shorts.jpg',
        desc: 'Shorts Florido com cardaço de Ajuste.',
        quantidade : 0,
        preco: 35.00,
        tema: "Roupas",
        tamanho: "xx",
        classe: "Roupas",
        tamanhos: "P,M,G" ,
    },
    {
        id : 2,
        nome : 'Sapato',
        img : 'sapato.jpg',
        desc: 'Sapato de couro na cor marrom.',
        quantidade : 0,
        preco: 78.90,
        tema: "Roupas",
        tamanho: "xx",
        classe: "Calçado",
        tamanhos: "12,15,17,19,21.1" 
    },
    {
        id : 3,
        nome : 'Cinto',
        img : 'cinto.jpg',
        desc: 'Cinto na cor marrom com fivela de aço.',
        quantidade : 0,
        preco: 11.99,
        tema: "Acessórios",
        tamanho: "",
        classe: "Roupas",
        tamanhos: "" ,
    },
    {
        id : 4,
        nome : 'Vans',
        img : 'tenis.jpg',
        desc: 'Tênis Vans&reg; na cor Preta e branca.',
        quantidade : 0,
        preco: 89.99,
        tema: "Roupas",
        tamanho: "xx",
        classe: "Calçado",
        tamanhos: "12,15,17,19,21.1"
    },
    {
        id : 5,
        nome : 'Bolsa',
        img : 'bolsa.jpg',
        desc: 'Bolsa Gouveia&reg; rosê e fivela dourada.',
        quantidade : 0,
        preco: 110.00,
        tema: "Acessórios",
        tamanho: "",
        tamanhos: ""
        
    },
    {
        id : 6,
        nome : 'Mochila',
        img : 'mochila.png',
        desc: 'Mochila preta com detalhes em vermelho.',
        quantidade : 0,
        preco: 49.90,
        tema: "Acessórios",
        tamanho: "",
        tamanhos: ""
    },
    {
        id : 7,
        nome : 'Calça',
        img : 'calca.jpg',
        desc: 'Calça Jogger preta com bolso.',
        quantidade : 0,
        preco: 150.00,
        tema: "Roupas",
        tamanho: "xx",
        classe: "Roupas",
        tamanhos: "M,G,GG"
    },{
      id : 8,
      nome : 'Blusa Nike',
      img : 'blusa.jpg',
      desc: 'Blusa Nike&reg; na cor Branca com ziper.',
      quantidade : 0,
      preco: 190.00,
      tema: "Roupas",
      tamanho: "xx",
      tamanhos: "M,G"
  },{
    id : 9,
    nome : 'Jaqueta Lacoste',
    img : 'jaqueta.jpg',
    desc: 'este jaqueta vai te deixar na moda',
    quantidade : 0,
    preco: 170.00,
    tema: "Roupas",
    tamanho: "xx",
    classe: "Roupas",
    tamanhos: "M,G,GG"
},
{
  id : 10,
  nome : 'Relógio',
  img : 'relogio.jpg',
  desc: 'este relógio vai te deixar no Perigo.',
  quantidade : 0,
  preco: 329.99,
  tema: "Acessórios",
  tamanho: "",
  tamanhos: ""
},

{
  id : 11,
  nome : 'Camisa Xadrez Infantil',
  img : 'crianca.jpg',
  desc: 'Camiseta xadrez para Criança',
  quantidade : 0,
  preco: 14.99,
  tema: "Crianças",
  tamanho: "xx",
  classe: "Roupas",
  tamanhos: "P,M"
  
},


];





ProdutoCerto = (el) => {

  var detalhes = document.getElementById('descricao-produto-detalhes');

  

  items.map((val)=>{
  
   if(val.id == el){




D = val.tamanhos.split(",");


      var amostra  = document.getElementById('carrousel-detalhes-produto');
      amostra.innerHTML = `
      
      <div id="carouselExampleDark" class="carousel carousel-dark slide h-100 " data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner-produtos">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="img/`+val.img+`" class="d-block w-100" alt="...">
          
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="img/branco.png" class="d-block w-100" alt="...">
          
        </div>
        <div class="carousel-item">
          <img src="img/branco.png" class="d-block w-100" alt="...">
          
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
      </div>
      `;

      detalhes.innerHTML = `
    
      <div class="card h-100 " >
                 
      <div class="card-body " >
        <h5 class="card-title">`+val.nome+`  </h5>
        <p class="card-text">`+val.desc+`</p> 
        <div id="aqui-vai-os-tamanhos" ></div>
   
        </div>
         
       
        
  
      
        <div class="card-footer" >
        
        
        <button class="btn"  key="`+val.id+`"  name="btn-adc" onclick="verificarTamanho('`+val.id+`');"  id="button"   alt="Adicionar ao Carrinho">
       <p>Adicionar ao Carrinho</p>
                            
        </button> 
        <p id="preco-txt">`+val.preco.toFixed(2)+` R$</p>
        
       
        
       


      </div>
      </div>
      
      
      `;

    
 
    var divdosTamanhos = document.getElementById('aqui-vai-os-tamanhos');

   

 for(var i = 0; i < D.length; i++){
     console.log(D[i]) 


     if(val.tamanhos == ""){return false
       } else {
        divdosTamanhos.innerHTML += `
        <button type="button" id="btn-tamanhos" onclick="selecionarTamanho('`+val.id+`','`+D[i]+`')" class="btn btn-warning">
              `+D[i]+`</button> `;
       }
     } }
    
    })

    }

verificarTamanho = (id) => {
items.map((val)=>{
  if(val.id == id){
if(val.tamanho == "xx"){
  alert('Selecione um tamanho.')
  return false
} else {
  compra()
}
  }

})
}


selecionarTamanho = (id,el) =>{

items.map((val)=>{

if(val.id == id){
  val.tamanho = el;
  alert('O tamanho selecionado foi '+el);
}

})

}


 



 function exibirDetalhes(el){
  
 

  ProdutoCerto(el);
  var container = document.getElementById('container-main');
  var display = document.getElementById('detalhes-do-produto').style.display;
  if(display == "none"){
    container.style.animation = ('desaparecer2 200ms linear');
    document.getElementById('container-main').style.filter = 'opacity(0.3)';
  
   
  
    document.getElementById('container-main').style.filter = 'opacity(0.3)';
    document.getElementById('container-main').style.pointerEvents = ('none');
    document.getElementById('container-main').style.pointerEvents = ('none');
    document.getElementById('detalhes-do-produto').style.display = 'block';
  } else {
    fechar('detalhes-do-produto');
  }



  

  }





inicializarLoja = () => { console.log('o valor de SOma é '+soma);
    console.log(' o valor de precoFinal é '+precoFinal);
    var containerProdutos = document.getElementById('tabela');
    var containerProdutosRoupas = document.getElementById('tabela-Roupas');
   
  


    var containerCarrinho = document.getElementById('produtos-carrinho');


if(soma == 0){
    containerCarrinho.innerHTML = `<br><h3 style="color: black; width 50%; margin-left: 25%; margin-right:25%">Seu Carrinho está Vazio</h3>`
}
    
var containerResumo = document.getElementById('resumo');
containerResumo.innerHTML = `  <div id="total-de-produtos-p">Total de Produtos</div> <div id="total-de-produtos"><span class="badge bg-secondary"> `+soma+` </span></div>
                           
                       <div id="preco-final-carrinho">  
                       
                       <button type="button" class="btn btn-success" id="badge-total-carrinho">  Total R$ `+precoFinal.toFixed(2)+`  </button>
                       <button onclick="finalizarCompra()" id="btn-finalizar-compra" class="btn btn-success" style=" " >Finalizar Pedido</button>  </div>
`;

 

      


    items.map((val)=>{
            containerProdutos.innerHTML+= `       
            <div class="col">
              
            <div class="card  " id="card-produtos" >
            <a onclick="exibirDetalhes(`+val.id+`)" >  <img src="img/`+val.img+`" class="card-img-top" style="cursor: pointer ;" alt="..."> </a>
              <div class="card-body" onclick="exibirDetalhes(`+val.id+`)"  style="cursor: pointer ;">
                <h5 class="card-title">`+val.nome+`  </h5>
                <p class="card-text">`+val.desc+`</p>
                  
                </div>
                <div class="card-footer">
                
                
                <a  key="`+val.id+`"  onclick="exibirDetalhes(`+val.id+`)"  id="btn-preco" class="btn first"   alt="Adicionar ao Carrinho"
                
                                    
                ><p id="btn-preco-txt">Clique para ver Detalhes</p></a>
                </div>
            </div>
          </div> 
                `;  
                
              })


              var containerProdutosRoupas = document.getElementById('tabela-Roupas');
              items.map((val)=>{
  
  
     
                if (val.tema== "Roupas"){
                  containerProdutosRoupas.innerHTML+= `       
                  
                  <div class="col">
              
                <div class="card  " id="card-produtos" ><a onclick="exibirDetalhes(`+val.id+`)" >  <img src="img/`+val.img+`" class="card-img-top" style="cursor: pointer ;" alt="..."> </a>
                <div class="card-body" onclick="exibirDetalhes(`+val.id+`)"  style="cursor: pointer ;">
                      <h5 class="card-title">`+val.nome+`  </h5>
                    <p class="card-text">`+val.desc+`</p>
                      
                    </div>
                    <div class="card-footer">
             
                    <a  key="`+val.id+`"  onclick="exibirDetalhes(`+val.id+`)"id="btn-preco" class="btn"   alt="Adicionar ao Carrinho"
                    
                                        
                    ><p id="btn-preco-txt">Ver Detalhes</p></a>
                    </div>
                </div>
              </div> 
                    `;  
                  }}) ;


                  var containerProdutosCrianca = document.getElementById('tabela-crianca');
              items.map((val)=>{

                if (val.tema== "Crianças"){
                  containerProdutosCrianca.innerHTML+= `  
                  
                  
                  
                  <div class="col">
              
                  <div class="card  " id="card-produtos" >
                  <a onclick="exibirDetalhes(`+val.id+`)" >  <img src="img/`+val.img+`" class="card-img-top" style="cursor: pointer ;" alt="..."> </a>
              <div class="card-body" onclick="exibirDetalhes(`+val.id+`)"  style="cursor: pointer ;">

                      <h5 class="card-title">`+val.nome+`  </h5>
                      <p class="card-text">`+val.desc+`</p>
                        
                      </div>
                      <div class="card-footer">
               
                      <a  key="`+val.id+`"  onclick="exibirDetalhes(`+val.id+`)" id="btn-preco" class="btn"   alt="Adicionar ao Carrinho"
                      
                                          
                      ><p id="btn-preco-txt">Ver Detalhes</p></a>
                      </div>
                  </div>
                </div> 
                    `;  
                  }}) ;
             

                  var containerProdutosAcessorios = document.getElementById('tabela-acessorios');
                  items.map((val)=>{
            
                    if (val.tema== "Acessórios"){
                      containerProdutosAcessorios.innerHTML+= `       
                      <div class="col">
                  
                      <div class="card  " id="card-produtos" ><a onclick="exibirDetalhes(`+val.id+`)" >  <img src="img/`+val.img+`" class="card-img-top" style="cursor: pointer ;" alt="..."> </a>
                      <div class="card-body" onclick="exibirDetalhes(`+val.id+`)"  style="cursor: pointer ;">
                                  <h5 class="card-title">`+val.nome+`  </h5>
                          <p class="card-text">`+val.desc+`</p>
                            
                          </div>
                          <div class="card-footer">
                   
                          <a  key="`+val.id+`"  onclick="exibirDetalhes(`+val.id+`)" id="btn-preco" class="btn"   alt="Adicionar ao Carrinho"
                          
                                              
                          ><p id="btn-preco-txt">Ver Detalhes</p></a>
                          </div>
                      </div>
                    </div> 
                        `;  

                      

                      }}) ;


                      var containerProdutosCosmeticos = document.getElementById('tabela-cosmeticos');
                      items.map((val)=>{
          
          
             
                        if (val.tema== "Cosméticos"){
                          containerProdutosCosmeticos.innerHTML+= `       
                          <div class="col">
                      
                          <div class="card  " id="card-produtos" ><a onclick="exibirDetalhes(`+val.id+`)" >  <img src="img/`+val.img+`" class="card-img-top" style="cursor: pointer ;" alt="..."> </a>
                          <div class="card-body" onclick="exibirDetalhes(`+val.id+`)"  style="cursor: pointer ;">
                                          <h5 class="card-title">`+val.nome+`  </h5>
                              <p class="card-text">`+val.desc+`</p>
                                
                              </div>
                              <div class="card-footer">
                       
                              <a  key="`+val.id+`"  onclick="exibirDetalhes(`+val.id+`)" id="btn-preco" class="btn"   alt="Adicionar ao Carrinho"
                              
                                                  
                              ><p id="btn-preco-txt">Ver Detalhes</p></a>
                              </div>
                          </div>
                        </div> 
                            `;  
                          }}) ;



                          var containerProdutosBebes = document.getElementById('tabela-bebe');
                          items.map((val)=>{
              
              
                 
                            if (val.tema== "Bebês"){
                              containerProdutosBebes.innerHTML+= `       
                              <div class="col">
                          
                              <div class="card  " id="card-produtos" ><a onclick="exibirDetalhes(`+val.id+`)" >  <img src="img/`+val.img+`" class="card-img-top" style="cursor: pointer ;" alt="..."> </a>
                              <div class="card-body" onclick="exibirDetalhes(`+val.id+`)"  style="cursor: pointer ;">
                                                  <h5 class="card-title">`+val.nome+`  </h5>
                                  <p class="card-text">`+val.desc+`</p>
                                    
                                  </div>
                                  <div class="card-footer">
                           
                                  <a  key="`+val.id+`"  onclick="exibirDetalhes(`+val.id+`)" id="btn-preco" class="btn"   alt="Adicionar ao Carrinho"
                                  
                                                      
                                  ><p id="btn-preco-txt">Ver Detalhes</p></a>
                                  </div>
                              </div>
                            </div> 
                                `;  
                              }}) ;
             
              var iconeCarrinho = document.getElementById('icone-carrinho-nav');

             

}




inicializarLoja();

atualizarCarrinho = () => {







  var containerCarrinho = document.getElementById('produtos-carrinho');

 if(soma ==0) {
  



  containerCarrinho.innerHTML = `<br><h3 style="color: black; width 50%; margin-left: 25%; margin-right:25%">Seu Carrinho está Vazio</h3>`

 } else {
  // containerCarrinho.innerHTML = ``;
 }

  var botãoMovel = document.getElementById('botão-movel-carrinho');

  botãoMovel.innerHTML = `
  <a class="link" style="float: left; ">

  <span class="badge bg-secondary"  style="position:absolute; margin-left:25px; margih-bottom:10px; font-size: 0.8em"> `+soma+` </span>
  
    <svg xmlns="http://www.w3.org/2000/svg"   width="50" height="50" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
    </a>`;
  if (soma == 0){
    botãoMovel.style.animation = ('desaparecer 1500ms');
botãoMovel.style.display = ('none');

  } else {
    botãoMovel.style.animation = ('clarear 1500ms');
    botãoMovel.style.display = ('block');
  }





  var iconeCarrinho = document.getElementById('icone-carrinho-nav');

  iconeCarrinho.innerHTML = `                <span class="badge bg-warning text-dark" style="position: absolute">`+soma+`</span>
  <a class="nav-link active" onclick="Mudarestado('pop') ">
  <svg xmlns="http://www.w3.org/2000/svg"   width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
  </svg>
  </a>
   
   
   `
   
   ;

   


    var containerCarrinho = document.getElementById('produtos-carrinho');



var containerResumo = document.getElementById('resumo');
containerResumo.innerHTML = `  <div id="total-de-produtos-p">Total de Produtos</div> <div id="total-de-produtos"><span class="badge bg-secondary"> `+soma+` </span></div>
                           
                       <div id="preco-final-carrinho">  
                       
                       <button type="button" class="btn btn-success" id="badge-total-carrinho">  Total R$ `+precoFinal.toFixed(2)+`  </button>
                       <button onclick="finalizarCompra()" id="btn-finalizar-compra" class="btn btn-success" style=" " >Finalizar Pedido</button>  </div>
`;
containerCarrinho.innerHTML = ``;

    carrinho.map((val)=>{
   
       
if(val.quantidade > 0){
           

         if(val.tamanho == ""){ 
         

            
          containerCarrinho.innerHTML += `

          <div id="listagem-de-produtos" >
                    <p id="nome-produto-carrinho">`+val.nome+`   `+val.preco.toFixed(2)+`R$ 

                   
                             
                      <div id="sub-quant-adc">
                      <div  id="btn-sub">
                     <a  key="`+val.id+`" name="btn-sub" onclick="subtrairProduto(`+val.id+`,`+val.localização+`)"   class="btn ">
                     <div id="botao-regulagem" >
                     <img src="img/subtracao.svg" width="100%" height="100%">
                     </div>
                   </a> 
                   
                     </div>

                     <div id="quantidade-produto-carrinho"> 
                     <span class="badge bg-secondary">`+val.quantidade+` </span> 
                     </div>
                     
                     <div id="btn-adc2">
                     <a  key="`+val.id+`" name="btn-adc2" onclick="adicionarProduto(`+val.id+`,`+val.localização+`)"  class="btn">
                     <div id="botao-regulagem" >
                     <img src="img/adicao.svg" width="100%" height="100%">
                     </div>
                     </a>
                   </div>
                   
                   </div>
                   
                   </div>
                   
                   ` } else {
                    containerCarrinho.innerHTML += `

                    <div id="listagem-de-produtos" >
                              <p id="nome-produto-carrinho">`+val.nome+`   `+val.preco.toFixed(2)+`R$ 
        
                              <span class="badge bg-info text-dark">Tamanho `+val.tamanho+`</span> </p>
                                       
                                <div id="sub-quant-adc">
                                <div  id="btn-sub">
                               <a  key="`+val.id+`" name="btn-sub" onclick="subtrairProduto(`+val.id+`,`+val.localização+`)"   class="btn ">
                               <div id="botao-regulagem" >
                               <img src="img/subtracao.svg" width="100%" height="100%">
                               </div>
                             </a> 
                             
                               </div>
        
                               <div id="quantidade-produto-carrinho"> 
                               <span class="badge bg-secondary">`+val.quantidade+` </span> 
                               </div>
                               
                               <div id="btn-adc2">
                               <a  key="`+val.id+`" name="btn-adc2" onclick="adicionarProduto(`+val.id+`,`+val.localização+`)"  class="btn">
                               <div id="botao-regulagem" >
                               <img src="img/adicao.svg" width="100%" height="100%">
                               </div>
                               </a>
                             </div>
                             
                             </div>
                             
                             </div>
                             
                             ` 
                     }
                    
 ;

}
            
    }) 
  
   
  
  
  }

    

carrinho =[]
var soma;
var links = document.getElementsByName('btn-adc');

compra = () => {
  for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        
        var key = this.getAttribute('key');
       
        // items[key].quantidade++;
        
        var indice = carrinho.length;
        
            
        let produto = {
          'id': items[key].id,
          'localização': indice,
          'classe': items[key].classe,
          'desc': items[key].desc,
          'img': items[key].img,
          'nome': items[key].nome,
          'preco': items[key].preco,
          'quantidade': items[key].quantidade,
          'tamanho': items[key].tamanho,
          'tamanhos': items[key].tamanhos,
          'tema': items[key].tema,
          'abobrinha': items[key].beterraba,
        }
       

        // let teste = items[key]
        carrinho.push(produto)



    
    
        exibirDetalhes(key);

        
    soma++
        console.log(' o valor de precoFinal é '+precoFinal);
    
        
                
        precoFinal = precoFinal + carrinho[indice].preco;
        precoFinal.toFixed(2);
        console.log('O Valor de preço final é '+precoFinal);
    
        carrinho[indice].quantidade++;
        console.log("__________QUANTIDADE"+carrinho[indice].quantidade);

        alert('Item adicionado com Sucesso!')
    
    
        atualizarCarrinho();
       
    })
    
    } 
  
}
  














 var adc = document.getElementsByName('btn-adc2');

 
 adicionarProduto  = (id,local) => {

  console.log("foi iniciado");

 carrinho.map((val)=>{
   if((val.id == id) & (val.localização == local) ){
     val.quantidade++
     precoFinal = precoFinal + val.preco;
 precoFinal.toFixed(2);
 console.log('O Valor de preço final é '+precoFinal);

   }
 })


 soma++;


 atualizarCarrinho();
 console.log("ja acabou jessica")
 

 }
 



 var sub = document.getElementsByName('btn-sub');

 
subtrairProduto  = (id, local) => {

  console.log("foi iniciado");

 carrinho.map((val)=>{
   if((val.id == id) & (val.localização == local)){
     val.quantidade--
     precoFinal = precoFinal - val.preco;
 precoFinal.toFixed(2);
 console.log('O Valor de preço final é '+precoFinal);

   }
 })

 soma--;

 atualizarCarrinho();
 console.log("ja acabou jessica")
 

 }



 finalizarCompra = () => { if (soma > 0){
   var pedidoFinalizado = "*AJ - The Brodis* %20%0A%20%0A%20%0ACarrinho:  %20%0A%20%0A---------------------------------------%20%0A";
   carrinho.map((val) => {

  if(val.quantidade > 0){

    if(val.tamanho == ""){ 
      pedidoFinalizado = pedidoFinalizado+"%20%0A *"+ val.quantidade +"* X  *"+val.nome+"*"; } 
      else {  
        pedidoFinalizado = pedidoFinalizado+"%20%0A *"+ val.quantidade +"* X  *"+val.nome+"* Tam *"+val.tamanho+"* " ;
      }
  }


})
pedidoFinalizado = pedidoFinalizado + "%20%0A%20%0A--------------------------------------- %20%0AProdutos no total: *"+soma+"*.  %20%0AO valor total dos produtos é *R$ "+precoFinal.toFixed(2)+"*." ;
//19783283163 tio andré
whats = "https://api.whatsapp.com/send?phone=5511974315565&text="+pedidoFinalizado;

console.log(pedidoFinalizado);
alert('Você será redirecionado para nosso Whatsapp para escolher a forma de pagamento e concluir seu pedido! ;-)');
window.location.href = whats;
 } else {
   alert('Adicione Items ao carrinho para finalizar sua Compra!');
   fechar('pop');
   return false;
 }
 }


 MudarCategoria = (el) => {

  


  var containerProdutos = document.getElementById('tabela-'+el);
   items.map((val)=>{


   
    if (val.tema== el){
      containerProdutos.innerHTML+= `       
      <div class="col">
        <div class="card  " id="card-produtos" >
          <img src="img/`+val.img+`" class="card-img-top" alt="...">
          <div class="card-body" >
            <h5 class="card-title">`+val.nome+`  </h5>
            <p class="card-text">`+val.desc+`</p>
              
            </div>
            <div class="card-footer">
     
            <a  key="`+val.id+`" name="btn-adc" id="btn-preco" class="btn"   alt="Adicionar ao Carrinho"
            
                                
            ><p id="btn-preco-txt">`+val.preco.toFixed(2)+` R$</p></a>
            </div>
        </div>
      </div> 
        `;  
      }}) ;
;




 }

 

 function mudarSelecao(el) {

for(let i = 1; i<7;i++){

  document.getElementById(i).setAttribute("class", "nav-link"); 
}

document.getElementById(el).setAttribute("class", "nav-link active selecionado"); 
   
   console.log(el);
 }
 
 
 

 function trocarDiv(el) {

  var containerCTDpagina = document.getElementById('conteudos-da-pagina');

  containerCTDpagina.style.display = ('none');

  document.getElementById('vitrine-geral-cosmeticos').style.display = ('none');
  document.getElementById('vitrine-geral-crianca').style.display = ('none');


  document.getElementById('vitrine-geral-bebe').style.display = ('none');


  document.getElementById('vitrine-geral-acessorios').style.display = ('none');


  document.getElementById('vitrine-geral-roupas').style.display = ('none');


  document.getElementById('vitrine-geral').style.display = ('none');



  var display = document.getElementById(el).style.display;
  var divAtual = document.getElementById(el);
  
  if (display == "none") {
    document.getElementById(el).style.display = 'block';

      if(el == "vitrine-geral-acessorios" ){
        containerCTDpagina.style.display = ('block');
        containerCTDpagina.innerHTML = `
          <div id="ctd">

<img
src="https://instagram.fcgh24-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/106030851_117163946451100_2678442168720688909_n.jpg?_nc_ht=instagram.fcgh24-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=NAWUOzTmsiMAX_II5Nu&tp=1&oh=46764360f84639a8c62fa0d7b1ac156f&oe=602C7463">

<div id="div-ctd"></div>

<p>
<b>Importação</b> é nosso forte!
<br><br>Temos Representantes e Parceiros nos EUA a pronto atendimento. <br>Você escolhe seu produto, nós
pegamos ele para <b>você!</b>
</p>


</div>


<div id="novidade-do-mês">


<video id="custom_video_play" width="400" controls="controls">>
<source src="videos/thebrodis.mp4" type="video/mp4"> Browser Not Supporting
</video>

</div>
`;
      }

      if (display == "vitrine-geral") {
        containerCTDpagina.style.display = ('block');
        containerCTDpagina.innerHTML = `
          <div id="ctd">

<img
src="https://instagram.fcgh24-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/106030851_117163946451100_2678442168720688909_n.jpg?_nc_ht=instagram.fcgh24-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=NAWUOzTmsiMAX_II5Nu&tp=1&oh=46764360f84639a8c62fa0d7b1ac156f&oe=602C7463">

<div id="div-ctd"></div>

<p>
<b>Importação</b> é nosso forte!
<br><br>Temos Representantes e Parceiros nos EUA a pronto atendimento. <br>Você escolhe seu produto, nós
pegamos ele para <b>você!</b>
</p>


</div>


<div id="novidade-do-mês">

</div>
`;
      }



  } else {
    document.getElementById(el).style.display = 'block';
  
  }
}



