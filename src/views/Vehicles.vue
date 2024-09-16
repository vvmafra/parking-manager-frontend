<!-- to change -->

<template>
    <button class="add-button" @click="openModal">Adicionar Veículo</button>
    <VehiclesList :vehicles="vehicles" /> <!-- Passar a lista de veículos -->
    
    <AddVehicle v-if="isModalOpen" @close="closeModal" @vehicle-added="addVehicle" /> <!-- Ouvir o evento -->
</template>

<script>
    import VehiclesList from '../components/vehicles/VehiclesList.vue';
    import AddVehicle from '../components/vehicles/AddVehicle.vue'; // Importando o componente AddVehicle
  
    export default {
        components: {
            VehiclesList,
            AddVehicle
        },
        data() {
            return {
                isModalOpen: false, // Estado para controlar a abertura do modal
                vehicles: [] // Lista de veículos
            };
        },
        methods: {
            openModal() {
                this.isModalOpen = true; // Abre o modal
            },
            closeModal() {
                this.isModalOpen = false; // Fecha o modal
            },
            addVehicle(newVehicle) {
                this.vehicles.push(newVehicle); // Adiciona o veículo à lista
                this.loadVehicles(); // Chama o método para recarregar a lista de veículos
            }
        }
    }
</script>

<style scoped>
  .add-button {
    margin-top: 20px;
    background-color: #85D3C1; /* Green */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .add-button:hover {
    background-color: #85d3c198; /* Darker green */
  }
</style>