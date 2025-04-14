<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let file = null;
  
    async function upload() {
      const formData = new FormData();
      formData.append('image', file);
  
      const res = await fetch('/api/exif-reader', {
        method: 'POST',
        body: formData,
      });
  
      const json = await res.json();
      const imageUrl = URL.createObjectURL(file);
  
      // Proper event dispatch from Svelte component
      dispatch('uploaded', { exif: json, imageUrl });
    }
  </script>
  
  <input type="file" accept="image/jpeg" on:change={(e) => file = e.target.files[0]} />
  <button on:click={upload}>Upload</button>
  