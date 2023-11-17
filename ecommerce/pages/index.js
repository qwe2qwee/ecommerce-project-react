import React from "react";
import { HeroBanner, FooterBanner, Product } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerdata }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerdata.length && bannerdata[0]} />
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner FooterBanner={bannerdata && bannerdata[0]} />
    </>
  );};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const Bannerquery = '*[_type == "banner"]';
  const bannerdata = await client.fetch(Bannerquery);
  return { props: { products, bannerdata } };
};
export default Home;
