import React from "react";
import { HeroBanner, FooterBanner, Product } from "../components";
import { client } from "../lib/client";

const Home = ({products,bannerdata}) => {
  console.log(bannerdata[0].smallText
    );
  return (
    <>
      <HeroBanner HeroBanner={bannerdata.length && bannerdata[0] } />
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <p key={product.id}>{product.name}</p> )}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async() => {
  const query ='*[_type == "product"]'
  const products = await client.fetch(query);

  const Bannerquery ='*[_type == "banner"]'
  const bannerdata = await client.fetch(Bannerquery);
  return {props:{products ,bannerdata}}
}
export default Home;
