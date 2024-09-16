<template>
    <div>
      <p>Veículos no estacionamento:</p>
      <table class="vehicles-table">
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Data de entrada</th>
            <th>Nº do Cartão</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehicle in vehicles" :key="vehicle.id">
            <td>{{ vehicle.model }}</td>
            <td>{{ vehicle.plate }}</td>
            <td>{{ vehicle.entry_date }}</td>
            <td>{{ vehicle.card_id !== null ? vehicle.card_id : "" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { parkedVehicles } from '@/services/api/vehicles';
export default {
  data() {
    return {
      vehicles: []
    };
  },
  mounted() {
    parkedVehicles()
      .then(response => {
        console.log(response.data)
        this.vehicles = response.data;
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }
};
</script>

<style scoped>
.vehicles-table {
    width: 100%;
    border-collapse: collapse;
}

.vehicles-table th, .vehicles-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.vehicles-table th {
    background-color: #85D3C1;
    padding: 15px;
}

.vehicles-table td {
    background-color: white;
    padding: 15px;
}
</style>
