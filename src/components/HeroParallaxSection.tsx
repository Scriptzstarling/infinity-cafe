
import { HeroParallax } from "./ui/hero-parallax";
import images1 from '../images/images1.jpeg';
import images2 from '../images/images2.jpeg';
import images3 from '../images/images3.jpeg';
import images4 from '../images/images4.jpeg';
import images5 from '../images/images5.jpeg';
import images6 from '../images/images6.jpeg';
import images7 from '../images/images7.jpeg';
import images8 from '../images/images8.jpeg';
import images9 from '../images/images9.jpeg';
import images10 from '../images/images10.jpeg';
import images11 from '../images/images11.jpeg';
import images12 from '../images/images12.jpeg';
import images13 from '../images/images13.jpeg';
import images14 from '../images/images14.jpeg';


const cafeProducts = [
  { title: "", thumbnail: images1 },
  { title: "", thumbnail: images2 },
  { title: "", thumbnail: images3 },
  { title: "", thumbnail: images4 },
  { title: "", thumbnail: images5 },
  { title: "", thumbnail: images6 },
  { title: "", thumbnail: images7 },
  { title: "", thumbnail: images8 },
  { title: "", thumbnail: images9 },
  { title: "", thumbnail: images10 },
  { title: "", thumbnail: images11 },
  { title: "", thumbnail: images12 },
  { title: "", thumbnail: images13 },
  { title: "", thumbnail: images14 },
];

export default function HeroParallaxSection() {
  return <HeroParallax products={cafeProducts} />;
}
