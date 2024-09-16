<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2>Adicionar Veículo</h2>
      <form @submit.prevent="submitVehicle">
        <label for="plate">Placa:</label>
        <input type="text" v-model="vehicleData.plate" required />

        <label for="model">Modelo:</label>
        <input type="text" v-model="vehicleData.model" required />

        <label for="description">Descrição:</label>
        <input type="text" v-model="vehicleData.description" required />

        <label for="customer_id">Cliente:</label>
         <!-- Informação antes da lista -->
        <select v-model="vehicleData.customer_id" class="select-customer">
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">
            {{ customer.name }}
          </option>
        </select>

        <button type="submit" class="button-submit">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { addVehicle } from '@/services/api/vehicles';
import { getAllCustomers } from '@/services/api/customers'; // Função para buscar clientes

export default {
  data() {
    return {
      vehicleData: {
        plate: '',
        model: '',
        description: '',
        customer_id: null,
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
    async submitVehicle() {
      try {
        console.log(this.vehicleData)
        await addVehicle(this.vehicleData); // Envia os dados do veículo
        console.log('Veículo adicionado');
        this.$emit('close');
        console.log('Modal fechado'); // Fecha o modal após a adição
      } catch (error) {
        console.error('Erro ao adicionar veículo:', error);
      }
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

