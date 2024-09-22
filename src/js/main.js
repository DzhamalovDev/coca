import '/scss/main.scss';

//components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useInsightSlider} from './components/slider.js';
import { useTestimonialsSlider } from './components/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();