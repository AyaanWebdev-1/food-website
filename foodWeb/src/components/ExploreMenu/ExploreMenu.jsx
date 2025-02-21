import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, possimus! Numquam non odit quod laboriosam distinctio asperiores? Sequi, eaque iusto!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item'>
                    <img src={item.menu_image}  className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                );
            })}
        </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
