mapboxgl.accessToken = 'pk.eyJ1IjoidHVzaGFyMDAxIiwiYSI6ImNsNXRmdjhsYjBsOWkza214ejJ4Yzdia2IifQ.BMzjGE2TLyTniZPV9mgHkA';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy: true
})
function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){

}
function setupMap(center){
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  zoom: 15
})
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    });
    map.addControl(directions,'top-left');

const locate= new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
        });
        map.addControl(locate); 
}