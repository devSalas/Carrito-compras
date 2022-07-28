const d=document
export default function buyCar(){
  console.log("hola")
  const $table=d.querySelector("table")
  const $tbody=d.querySelector("table tbody")
  const $total=d.querySelector("tfoot td[data-total]");
  const products=[]
  const $enlaces=d.querySelectorAll(".item a");
  $enlaces.forEach(el=>{
    el.addEventListener("click",e=>{
      e.preventDefault();
    })
  })

  d.querySelectorAll(".item").forEach((el)=>{

     el.addEventListener("click",(e)=>{
      
      const $id=el.dataset.id;
      const $name= el.querySelector("span[data-name]").textContent
      const $buy=Number(el.querySelector("span[data-buy]").textContent)
      
      const product={
        id:$id,
        name:$name,
        buy:$buy,
        total:$buy,
        cantidad:1
      }
      
      const isProduct=products.find(el=> el.id===product.id);

      if(!isProduct){
        products.push(product)
        console.log(product)
      }else{
        isProduct.total+=isProduct.buy
        isProduct.cantidad+=1;
        
      }
      getIntoDate(products)
      let total=0;
      products.forEach(el=>total+=el.total)
      $total.textContent=total


    })  

    
    
    
  })


  function getIntoDate(el){
    const $fragment=d.createDocumentFragment();
    
    $table.classList.remove("hidden")
    console.log($tbody)
    $tbody.textContent="";
    function plantilla({name,buy,total,cantidad}){
      const $template=d.querySelector("template").content
      const $tds=$template.querySelectorAll("td")
      $tds[0].textContent=cantidad;
      $tds[1].textContent=name
      $tds[2].textContent=buy
      $tds[3].textContent=total
      const $node= $template.cloneNode(true);
      $fragment.appendChild($node)
    }
   
    el.forEach(el=>{
      plantilla(el)

    })
    $tbody.appendChild($fragment)
 
  }
  
}