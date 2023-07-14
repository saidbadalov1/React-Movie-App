import { Instagram, Linkedin } from '../icons';

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  pauseOnHover: true,
  pauseOnFocus: false,
  slidesToScroll: 1,
};

export const featuredSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  pauseOnHover: true,
  pauseOnFocus: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const socialLinks = [
  {
    id: 0,
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/said-badalov-a8b436219/',
    Icon: Linkedin,
  },
  {
    id: 1,
    name: 'instagram',
    url: 'https://instagram.com/saidbdlv',
    Icon: Instagram,
  },
];
