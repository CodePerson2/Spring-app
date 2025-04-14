<script>
    export let exifData = {};
  </script>
  
  <h2>EXIF Data</h2>
  {#if Object.keys(exifData).length === 0}
    <p>No EXIF data found.</p>
  {:else}
    <ul>
      {#each Object.entries(exifData) as [key, value]}
        <li><strong>{key}</strong>: {value}</li>
      {/each}
    </ul>
  {/if}
  