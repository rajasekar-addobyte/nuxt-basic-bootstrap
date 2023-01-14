<template>
  <div class="container">
    <h1>Hello</h1>
    <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="program in programs">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script setup>
const {data} = useFetch("http://localhost:3001/programs");

const programs = data.value;
</script>