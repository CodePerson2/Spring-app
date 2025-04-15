<script>
  export let exifData = {};
</script>

<h2>EXIF Data</h2>
{#if Object.keys(exifData).length === 0}
  <p>No EXIF data found.</p>
{:else}
  <table class="exif-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.entries(exifData) as [key, value], i}
        <tr class={i % 2 === 0 ? 'even' : 'odd'}>
          <td><strong>{key}</strong></td>
          <td>{value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style>
  .exif-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  .exif-table th,
  .exif-table td {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    text-align: left;
  }
  .exif-table tr.even {
    background-color: #f9f9f9;
  }
  .exif-table tr.odd {
    background-color: #ffffff;
  }
</style>