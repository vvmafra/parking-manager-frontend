<template>
    <div>
        <button @click="showModal = true">Saída</button>
        
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <p>Horário saída: {{ currentTime }}</p>
                <p>Data saída: {{ currentDate }}</p> <!-- {{ edit_2 }} Exibe a data atual -->
                <button @click="confirmExit">Confirmar</button>
                <button @click="showModal = false">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            currentTime: new Date().toLocaleTimeString(),
            currentDate: new Date().toLocaleDateString(), // {{ edit_1 }} Adiciona a data atual
        };
    },
    methods: {
        confirmExit() {
            // Lógica para sair
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
}
</style>