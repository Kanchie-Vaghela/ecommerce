import React from 'react'
import Hero from '../components/Hero'
import Productcard from '../components/Productcard'
import Card from '../components/Card'
import productsInfo from '../Hooks/ProductsInfo'
import Categories from '../Pages/Categories'

const Home = () => {
  
  const info = productsInfo()
  const options = Object.keys(info)
  .map((key) => {
    return {
      id: key,
      title: info[key].title,
      price: info[key].price,
      category: info[key].category,
      description: info[key].description,
      image: info[key].image}});

  return (
    <>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-5 justify-center">
    {options.map((option) =>{
      return (
        <Card
          key={option.id}
          title={option.title}
          price={option.price}
          category={option.category}
          description={option.description}
          image={option.image}
        />
      )
    })}
    </div>
    <Hero />
    <Categories />
    
    </>
  )
}

export default Home