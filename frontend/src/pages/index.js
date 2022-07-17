import React from 'react';
import News from '../components/News/news';
import HeadNews from '../components/News/headNews';
import Services from '../components/Services';


const Home = () => {

    return (
      <>
        <HeadNews/>
        <News/>
        <Services/>
      </>
    );
}

export default Home
