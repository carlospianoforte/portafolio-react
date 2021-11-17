import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

const Home = (props) => {
  const { myList, trends, originals, search } = props;
  return (
    <>
      <Header />
      <Search isHome />

      {search.length > 0 &&
          (
            <Categories title='Resultado de busqueda'>
              <Carousel>
                {search.map(item => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                  />
                ))}
              </Carousel>
            </Categories>
          )}

      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Obras de Chopin'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Disney y otros artistas'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
            />
          ))}
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
