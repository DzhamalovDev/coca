import '../assets/scss/main.scss';

//components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useInsightSlider} from './components/home/slider.js';
import { useTestimonialsSlider } from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();