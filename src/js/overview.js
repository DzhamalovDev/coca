import 'swiper/css';
import '/scss/overview.scss';

//components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useOverviewSlider } from './components/slider';
import { overviewTabs } from './components/overview/tabs';
import { useArticleSlider } from './components/slider';

useTheme();
useBurger();
useOverviewSlider();
overviewTabs();
useArticleSlider()