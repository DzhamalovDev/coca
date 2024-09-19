export const usePriceSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const starterPrice = document.querySelector('[data-price="starter"]');
    const popularPrice = document.querySelector('[data-price="popular"]');
    const enterprisePrice = document.querySelector('[data-price="enterprise"]');
   
    const priceList = {
        starter: {
            default: 120,
            witchSale: 1152,
        },
        popular: {
            default: 1680,
            witchSale: 16128,
        },
        enterprise: {
            default: 2520,
            witchSale: 24192,
        },
    };

    const setPricesWitchSale = () => {
        starterPrice.textContent = priceList.starter.witchSale;
        popularPrice.textContent = priceList.popular.witchSale;
        enterprisePrice.textContent = priceList.enterprise.witchSale;
    };

    const setDefaultPrices = () => {
        starterPrice.textContent = priceList.starter.default;
        popularPrice.textContent = priceList.popular.default;
        enterprisePrice.textContent = priceList.enterprise.default;
    };

    switcher.checked = true;
    setPricesWitchSale();

    const timeInterval = document.querySelectorAll('[data-price="mo"]');

    switcher.addEventListener('click', () => {
        if (switcher.checked) {
            setPricesWitchSale();
            timeInterval.forEach((e) => {
                e.textContent = '/yr';
            });
        } else {
            setDefaultPrices();
            timeInterval.forEach((e) => {
                e.textContent = '/mo';
            });
        }
    });
};
