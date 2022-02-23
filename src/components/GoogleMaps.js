import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "keyAIzaSyAXWTvgiIv0FPs4LnmZP8bf0pfv-XHAz14",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};