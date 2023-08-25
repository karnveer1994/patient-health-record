import React from 'react';
import '../../App.css';
import Carousel from './Carousel';

const Slidder: React.FC = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2016/11/08/05/29/operation-1807543_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/02/09/04/15/doctor-79579_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/06/10/35/hospital-1802679_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/02/09/04/19/surgery-79584_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg'
  ];

  return (
    <div className="Slidder">
      <Carousel images={images} interval={3000} />
    </div>
  );
};

export default Slidder;
