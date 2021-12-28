import React from 'react';
import { Container, Row } from 'reactstrap';
import HomeHeader from '../header/HomeHeader';
import Footer from '../footer/Footer';
import HomeIntroduction from './intro';
import HomeSale from './sale';
import HomeProductNew from './product/New';
import HomeProductItem from './product/Item';
import Wine1987 from './wine-1987';
import HomeProductBestsellers from './product/Bestsellers';
import HomeBlog from './blog';
import HomeBlogItem from './blog/Items';
import Customer from './customer';

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeIntroduction />
      <HomeSale />
      <HomeProductNew>
        <HomeProductItem status="new" />
        <HomeProductItem status="hot" />
        <HomeProductItem status="sale" />
        <HomeProductItem />
      </HomeProductNew>
      <Wine1987 />
      <HomeProductBestsellers>
        <HomeProductItem status="hot" />
        <HomeProductItem status="hot" />
        <HomeProductItem status="hot" />
        <HomeProductItem status="hot" />
      </HomeProductBestsellers>
      <section className="mx-100">
        <Container>
          <Row>
            <HomeBlog>
              <HomeBlogItem />
              <HomeBlogItem />
            </HomeBlog>
            <Customer />
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Home;
