<template>
    <div>
      <p>Veículos Registrados:</p>
      <AddVehicle v-if="isModalVisible" @vehicle-added="fetchVehicles" @close="isModalVisible = false" />
      <EditVehicleModal v-if="isEditModalVisible" :vehicle="selectedVehicle" @close="isEditModalVisible = false" @vehicle-updated="handleVehicleUpdated" />
      <table class="vehicles-table">
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Descrição</th>
            <th>Mensalista?</th>
            <th>Ações</th> <!-- Nova coluna para ações -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehicle in vehicles" :key="vehicle.id">
            <td>{{ vehicle.model }}</td>
            <td>{{ vehicle.plate }}</td>
            <td>{{ vehicle.description }}</td>
            <td>{{ vehicle.customer_id ? 'Sim' : 'Não' }}</td>
            <td>
              <button @click="openEditModal(vehicle)">✏️</button> <!-- Botão de edição -->
              <button @click="deleteVehicle(vehicle.id)">🗑️</button> <!-- Botão de exclusão -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { allVehicles, deleteVehicle } from '../../services/api/vehicles'; // Importar a função de exclusão
import AddVehicle from './AddVehicle.vue';
import EditVehicleModal from './EditVehicleModal.vue'; // Importar o novo componente

export default {
  components: {
    AddVehicle,
    EditVehicleModal // Registrar o novo componente
  },
  data() {
    return {
      vehicles: [],
      isModalVisible: false,
      isEditModalVisible: false, // Estado para o modal de edição
      selectedVehicle: null // Veículo selecionado para edição
    };
  },
  mounted() {
    this.fetchVehicles();
  },
  methods: {
    fetchVehicles() {
        console.log('Fetching vehicles');
      allVehicles()
        .then(response => {
          console.log(response.data);
          this.vehicles = response.data;
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    openEditModal(vehicle) {
      this.selectedVehicle = vehicle; // Definir o veículo selecionado
      this.isEditModalVisible = true; // Abrir o modal de edição
    },
    handleVehicleUpdated() {
      // Atualizar a lista de veículos apenas se necessário
      this.fetchVehicles(); // Chame isso apenas se você quiser atualizar a lista
    },
    deleteVehicle(vehicleId) {
      // Lógica para excluir o veículo
      console.log(`Deleting vehicle with ID: ${vehicleId}`);
      deleteVehicle(vehicleId).then(() => {
        this.fetchVehicles(); // Atualiza a lista após a exclusão
      }).catch(error => {
        console.error("Erro ao excluir o veículo!", error);
      });
    }
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
