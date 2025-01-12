<template>
  <div id="map" style="height: 500px; width: 100%"></div>
</template>

<script>
export default {
  mounted() {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY' // Replace with your API key
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
    script.async = true
    document.head.appendChild(script)
    window.initMap = this.initMap
  },
  methods: {
    initMap() {
      const mapOptions = {
        center: { lat: -34.397, lng: 150.644 }, // Set initial map center
        zoom: 8,
      }
      // eslint-disable-next-line no-undef
      const map = new google.maps.Map(document.getElementById('map'), mapOptions)

      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Hello World!',
      })

      // eslint-disable-next-line no-undef
      google.maps.event.addListener(map, 'click', (event) => {
        // eslint-disable-next-line no-undef
        new google.maps.Marker({
          position: event.latLng,
          map: map,
          title: 'New Marker',
        })
      })
    },
  },
}
</script>
