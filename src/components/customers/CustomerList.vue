<template>
    <div>
      <p>Clientes Registrados:</p> <!-- Alterado de "Veículos" para "Clientes" -->
      <AddCustomer v-if="isModalVisible" @customer-added="fetchCustomers" @close="isModalVisible = false" /> <!-- Alterado para AddCustomer -->
      <EditCustomerModal v-if="isEditModalVisible" :customer="selectedCustomer" @close="isEditModalVisible = false" @customer-updated="handleCustomerUpdated" /> <!-- Alterado para EditCustomerModal -->
      <table class="customers-table"> <!-- Alterado para customers-table -->
        <thead>
          <tr>
            <th>Nome</th> <!-- Alterado de "Modelo" para "Nome" -->
            <th>Nº do Cartão</th> <!-- Alterado de "Placa" para "ID do Cartão" -->
            <th>Ações</th> <!-- Mantido -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id"> <!-- Alterado de vehicles para customers -->
            <td>{{ customer.name }}</td> <!-- Alterado de vehicle.model para customer.name -->
            <td>{{ customer.card_id }}</td> <!-- Alterado de vehicle.plate para customer.card_id -->
            <td>
              <button @click="openEditModal(customer)">✏️</button> <!-- Mantido -->
              <button @click="deleteCustomer(customer.id)">🗑️</button> <!-- Alterado para deleteCustomer -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { deleteCustomer, getAllCustomers } from '../../services/api/customers'; // Alterado para customers
import AddCustomer from './AddCustomer.vue'; // Alterado para AddCustomer
import EditCustomerModal from './EditCustomerModal.vue'; // Alterado para EditCustomerModal

export default {
  components: {
    AddCustomer,
    EditCustomerModal // Mantido
  },
  data() {
    return {
      customers: [], // Alterado de vehicles para customers
      isModalVisible: false,
      isEditModalVisible: false, // Mantido
      selectedCustomer: null // Alterado de selectedVehicle para selectedCustomer
    };
  },
  mounted() {
    this.fetchCustomers(); // Alterado para fetchCustomers
  },
  methods: {
    fetchCustomers() { // Adicionado async
        console.log('Fetching customers'); // Alterado de vehicles para customers
        getAllCustomers() // Alterado de allVehicles para allCustomers
        .then(response => {
          console.log(response.data);
          this.customers = response.data; // Alterado de vehicles para customers
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    openEditModal(customer) { // Alterado de vehicle para customer
      this.selectedCustomer = customer; // Alterado de selectedVehicle para selectedCustomer
      this.isEditModalVisible = true; // Mantido
    },
    handleCustomerUpdated() { // Alterado de handleVehicleUpdated para handleCustomerUpdated
      this.fetchCustomers(); // Alterado de fetchVehicles para fetchCustomers
    },
    deleteCustomer(customerId) { // Alterado de deleteVehicle para deleteCustomer
      console.log(`Deleting customer with ID: ${customerId}`); // Alterado de vehicle para customer
      deleteCustomer(customerId).then(() => {
        this.fetchCustomers(); // Alterado de fetchVehicles para fetchCustomers
      }).catch(error => {
        console.error("Erro ao excluir o cliente!", error); // Alterado de veículo para cliente
      });
    }
  }
};
</script>

<style scoped>
.customers-table {
    width: 100%;
    border-collapse: collapse;
}

.customers-table th, .customers-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.customers-table th {
    background-color: #85D3C1;
    padding: 15px;
}

.customers-table td {
    background-color: white;
    padding: 15px;
}
</style>
