import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({products}) => {
  return ( 
    <article className="container">
      <section className='products '>
        <div className="product">
          {products.map(prod => <Item className="item" key={prod.id} {...prod} />)}
        </div>
        
      </section>
    </article>
    
    
  )
}

export default ItemList