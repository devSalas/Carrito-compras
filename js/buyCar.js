const d=document
export default function buyCar(){

  const products=[]

  d.querySelectorAll(".item").forEach((el)=>{
    
     const a=el.addEventListener("click",(e)=>{
      const $id=el.dataset.id;
      const $name= el.querySelector("span[data-name]").textContent
      const $buy=el.querySelector("p[data-buy]").textContent
      
      const product={
        id:$id,
        name:$name,
        buy:$buy,
        total:$buy
      }
      
    })
    
  })
  

    function validar(products){
    products.map(el=> el.$id===product.id ?el.total+el.buy : products.push(product))
      
    }  


  function getIntoDate(cantidad,producto,precio,total){
    console.log(items[0])
    const $tbody=d.querySelector("table tbody")
    const $template=d.querySelector("template").content
    const $tds=$template.querySelectorAll("td")
    $tds[0].textContent=0
    $tds[1].textContent=0
    $tds[2].textContent=0
    $tds[3].textContent=0
  }
  
}