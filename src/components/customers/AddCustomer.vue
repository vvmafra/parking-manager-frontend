<template>
  <div v-if="isModalOpen" class="modal"> <!-- Condicional para mostrar o modal -->
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Adicionar Cliente</h2> <!-- Alterado de "Veículo" para "Cliente" -->
      <form @submit.prevent="submitCustomer"> <!-- Alterado de submitVehicle para submitCustomer -->
        <label for="name">Nome:</label>
        <input type="text" v-model="customerData.name" required />

        <label for="card_id">Nº do Cartão:</label>
        <input type="text" v-model="customerData.card_id" required />

        <button type="submit" class="button-submit">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { addCustomer } from '@/services/api/customers'; // Alterado de addVehicle para addCustomer
import { getAllCustomers } from '@/services/api/customers'; // Função para buscar clientes

export default {
  data() {
    return {
      isModalOpen: false, // Inicialmente definido como false para que o modal não abra automaticamente
      customerData: { // Alterado de vehicleData para customerData
        name: '', // Adicionado para capturar o nome do cliente
        card_id: '', // Adicionado para capturar o ID do cartão do cliente
      },
      customers: [] // Lista de clientes
    };
  },
  created() {
    this.loadCustomers(); // Carrega a lista de clientes ao criar o componente
  },
  methods: {
    async loadCustomers() {
      try {
        const response = await getAllCustomers();
        this.customers = response.data; // Extrai apenas os dados
        console.log(this.customers); // Busca os clientes
      } catch (error) {
        console.error('Erro ao carregar clientes:', error);
      }
    },
    async submitCustomer() { // Alterado de submitVehicle para submitCustomer
      try {
        console.log(this.customerData) // Alterado de vehicleData para customerData
        await addCustomer(this.customerData); // Alterado de addVehicle para addCustomer
        console.log('Cliente adicionado'); // Alterado de "Veículo" para "Cliente"
        this.$emit('close');
        console.log('Modal fechado'); // Fecha o modal após a adição
      } catch (error) {
        console.error('Erro ao adicionar cliente:', error); // Alterado de "Veículo" para "Cliente"
      }
    },
    closeModal() {
      this.isModalOpen = false; // Método para fechar o modal
    },
    openModal() {
      this.isModalOpen = true; // Método para abrir o modal
    }
  }
};
</script>
<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 20px;
}

.select-customer {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-submit {
  background-color: #85D3C1; /* Cor de fundo */
  color: white; /* Cor do texto */
  padding: 10px 20px; /* Espaçamento interno */
  border: none; /* Sem borda */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Cursor de ponteiro */
  font-size: 16px; /* Tamanho da fonte */
  transition: background-color 0.3s; /* Transição suave */
}

.button-submit:hover {
  background-color: #85d3c198; /* Cor ao passar o mouse */
}
</style>

