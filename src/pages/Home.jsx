import React from 'react';
import '../styles/Home.scss';
import mmlTitle from '../assets/MML_Title.png';
import Button from '../components/Button/Button'

const Home = ({ handleDownload }) => {
  return (
    <div className='home'>
        <img src={mmlTitle} className='home-logo' />
        <Button
          onClick={handleDownload}
          text={"DOWNLOAD"}
          styleOverrides={{
            width: "230px",
            height: "70px",
            background: "#181818",
            fontSize: "26px",
          }}
        />
    </div>
  )
};

export default Home;