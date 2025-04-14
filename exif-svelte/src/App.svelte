<script>
  import { onMount } from 'svelte';
  import UploadForm from './components/UploadForm.svelte';
  import ExifDisplay from './components/ExifDisplay.svelte';
  import ImagePreview from './components/ImagePreview.svelte';
  import Map from './components/Map.svelte';

  let exifData = null;
  let imageUrl = null;

  function handleUploaded(event) {
    console.log('Image uploaded:', event.detail);
    exifData = event.detail.exif;
    imageUrl = event.detail.imageUrl;
  }

  function parseDMS(dmsString) {
    const parts = dmsString.split(/[^\d.]+/).filter(Boolean).map(Number);
    if (parts.length !== 3) return null;
    return parts[0] + parts[1] / 60 + parts[2] / 3600;
  }

  function getGPSFromExif(exif) {
    const latStr = exif['GPS Latitude'];
    const lonStr = exif['GPS Longitude'];
    const latRef = exif['GPS Latitude Ref'];
    const lonRef = exif['GPS Longitude Ref'];

    if (!latStr || !lonStr || !latRef || !lonRef) return null;

    const lat = parseDMS(latStr) * (latRef === 'S' ? -1 : 1);
    const lon = parseDMS(lonStr) * (lonRef === 'W' ? -1 : 1);
    return { lat, lon };
  }
</script>

<UploadForm on:uploaded={handleUploaded} />

{#if imageUrl}
  <ImagePreview {imageUrl} />
{/if}

{#if exifData}
  <ExifDisplay {exifData} />
  {#if getGPSFromExif(exifData)}
    <Map lat={getGPSFromExif(exifData).lat} lon={getGPSFromExif(exifData).lon} />
  {/if}
{/if}

<style>
  :global(body) {
    font-family: sans-serif;
    margin: 2rem;
  }
</style>