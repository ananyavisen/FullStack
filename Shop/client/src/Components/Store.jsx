import React from 'react'
import Items from './Items'
import './styles.css'
const Store = () => {
    const itemData = [
    {title:"Novel", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10DHgDRXzJhvNFPOL5oeSSfmHDfWF1s_i7tTDLaRRDQ&s=10"},
    {title:"Heels", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5P9pJNsGN6TPJCo4neqdf64pdGWBckn5LBV9hTkLLcQ&s=10"},
    {title:"Headphones", Price:"300", image:"https://www.gonoise.com/cdn/shop/files/red_result_grande.webp?v=1788175425"},
    {title:"Kettle", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibRZr4pC7NEI5j0TZArf-AuHzHATace5P64iNh13MsS-UvsOritrQYk0&s=10"},
    {title:"Clothes", Price:"300", image:"https://www.aniclothing.in/cdn/shop/files/ANILB13-03-2647374.jpg?v=1781850470&width=1080"},
    {title:"Perfume", Price:"459", image:"https://in.ajmal.com/cdn/shop/files/BLU_SKUArtboard_2.jpg?v=1777518620&width=1946"},
    {title:"Perfume", Price:"459", image:"https://www.reneecosmetics.in/cdn/shop/files/Maroon_Siren-min.jpg?v=1775106892&width=1946"},
    {title:"Perfume", Price:"459", image:"https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44655%2F44655_3.png&MediaId=18927729&Version=4"},
  ]
  return (
    <div className='items'>
         {itemData.map((book,i)=> {
            return <Items key={i} props={book} />;
        })}
    </div>
  )
}

export default Store