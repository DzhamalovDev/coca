export const useMap = () =>{
    
    const center = [-25.906835789696075,131.94246653515623]
    
    function init(){
        let map = new ymaps.Map('map',{
         center: center,
         zoom: 2.2,
        })

        let placemark = new ymaps.Placemark(center, {
           
        },{
            iconLayout: 'default#image',
            iconImageHref: './assets/icons/map-icon.svg',
            iconImageSize: [40,40],
            iconImageOffset:[-20,-55],
        })
        map.controls.remove('geolocationControl'); 
        map.controls.remove('searchControl'); 
        map.controls.remove('trafficControl'); 
        map.controls.remove('typeSelector'); 
        map.controls.remove('fullscreenControl'); 
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl'); 
        map.behaviors.disable(['scrollZoom']); 
        map.geoObjects.add(placemark)
      }
      
      ymaps.ready(init)
}