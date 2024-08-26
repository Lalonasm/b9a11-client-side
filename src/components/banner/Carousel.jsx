
// import { Swiper, SwiperSlide } from 'swiper/react';
import bgimg1 from '../../assets/image/banner5.jpg';
import bgimg2 from '../../assets/image/banner6.jpg';
import bgimg3 from '../../assets/image/banner7.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <Slide  image={bgimg1} text='All Types of academic & International books collection available'> </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg2} text='All Types of academic & International books collection available'> </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg3} text='All Types of academic & International books collection available'> </Slide>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}