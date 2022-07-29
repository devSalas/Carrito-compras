const d=document
export default function buyCar(){
  const $table=d.querySelector("table")
  const $tbody=d.querySelector("table tbody")
  let $total=d.querySelector("tfoot span[data-total]");
  let products=[]
  const $enlaces=d.querySelectorAll(".item a");

  $enlaces.forEach(el=>{
    el.addEventListener("click",e=>{
      e.preventDefault();
    })
  })

  d.querySelectorAll(".item").forEach((el)=>{

     el.addEventListener("click",(e)=>{
      
      const $id=Number(el.dataset.id);
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
    $tbody.textContent="";


    function plantilla({id,name,buy,total,cantidad}){
      const $template=d.querySelector("template").content
      const $tds=$template.querySelectorAll("td")
      $tds[0].querySelector("span").textContent=cantidad
      $tds[0].querySelector(".btn-mas").dataset.id=id
      $tds[0].querySelector(".btn-menos").dataset.id=id
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
   $tbody.addEventListener("click",(e)=>{
      let temp=[...products]
      //console.log(temp)
      const $id=Number(e.target.dataset.id)
      //console.log($id)
      if(e.target.matches(".btn-mas")){
        const item=temp.find(el=>el.id ===$id)
        //if(item.cantidad<7){
          item.cantidad+=1
          item.total=item.cantidad*item.buy
          products=temp
          getIntoDate(products)
          let aumento=0
          console.log(products)
          products.map(el=>aumento+=el.total)
          $total.textContent=aumento
          
        //}
      }
      if(e.target.matches(".btn-menos")){
        const item=temp.find(el=>el.id ===$id)
        //if(item.cantidad>1){
          item.cantidad-=1
          item.total-=item.buy
          products=temp
          getIntoDate(products)
          let aumento=0
          products.map(el=>aumento+=el.total)
          $total.textContent=aumento
         
        //}
        
       
      }
      
      
    })
    
}
//