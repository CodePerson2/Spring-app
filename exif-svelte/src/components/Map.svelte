<script>
    export let lat;
    export let lon;
  </script>
  
  <h2>Photo Location</h2>
  <iframe
    title="Google Map"
    width="100%"
    height="300"
    frameborder="0"
    style="border:0"
    src={`https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed`}
    allowfullscreen>
  </iframe>