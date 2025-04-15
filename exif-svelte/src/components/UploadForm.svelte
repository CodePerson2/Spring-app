<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let file = null;
  let warning = '';

  async function upload() {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/exif-reader', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();

    if (Object.keys(json).length === 0) {
      warning = 'No EXIF data found in this file. Please upload a valid photo with metadata.';
      return;
    }

    warning = '';
    const imageUrl = URL.createObjectURL(file);
    dispatch('uploaded', { exif: json, imageUrl });
  }
</script>

<input type="file" accept="image/jpeg" on:change={(e) => file = e.target.files[0]} />
<button on:click={upload}>Upload</button>
{#if warning}<p style="color: red;">{warning}</p>{/if}