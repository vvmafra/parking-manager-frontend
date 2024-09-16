<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Editar Veículo</h2>
        <form @submit.prevent="updateVehicle">
          <div>
            <label for="plate">Placa:</label>
            <input type="text" id="plate" v-model="vehicle.plate" required />
          </div>
          <div>
            <label for="model">Modelo:</label>
            <input type="text" id="model" v-model="vehicle.model" required />
          </div>
          <div>
            <label for="description">Descrição:</label>
            <input type="text" id="description" v-model="vehicle.description" required />
          </div>
          <div>
            <label for="customer">Cliente:</label>
            <select id="customer" v-model="vehicle.customerId" class="select-customer">
              <option v-for="customer in customers" :key="customer.id" :value="customer.id">
                {{ customer.name }}
              </option>
            </select>
          </div>
          <div>

          
          <button type="submit" class="button-submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { getAllCustomers } from '@/services/api/customers'; // Função para buscar clientes
import { updateVehicle } from '../../services/api/vehicles';
  
  export default {
    props: {
      vehicle: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
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
        } catch (error) {
          console.error('Erro ao carregar clientes:', error);
        }
      },
      closeModal() {
        this.$emit('close');
      },
      async updateVehicle() {
        try {
            console.log(this.vehicle);
          await updateVehicle(this.vehicle.id, this.vehicle); // Chamada para atualizar o veículo no banco de dados
        //   this.$emit('vehicle-updated', this.vehicle); // Emite o evento apenas após a atualização
          this.closeModal();
        } catch (error) {
          console.error('Erro ao atualizar veículo:', error);
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
    width: 400px; /* Alterado para 400px */
  }
  
  .close {
    cursor: pointer;
    float: right;
    font-size: 20px; /* Alterado para 20px */
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
    margin-top: 10px;
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