<!-- to change -->

<template>
    <button class="add-button" @click="openModal">Adicionar Cliente</button>
    <AddCustomer :customers="customers" /> <!-- Passar a lista de veículos -->
    <CustomerList v-if="isModalOpen" @close="closeModal" @customer-added="addCustomer" /> <!-- Ouvir o evento -->
</template>

<script>
import AddCustomer from '../components/customers/AddCustomer.vue';
import CustomerList from '../components/customers/CustomerList.vue';
  
    export default {
        components: {
            AddCustomer,
            CustomerList
        },
        data() {
            return {
                isModalOpen: false, // Estado para controlar a abertura do modal
                customers: [] // Lista de veículos
            };
        },
        methods: {
            openModal() {
                this.isModalOpen = true; // Abre o modal
            },
            closeModal() {
                this.isModalOpen = false; // Fecha o modal
            },
            addCustomer(newCustomer) {
                this.customers.push(newCustomer); // Adiciona o veículo à lista
                this.loadCustomers(); // Chama o método para recarregar a lista de veículos
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