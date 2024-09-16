<template>
  <Plate />
  <VehiclesGrid />
  <div class="buttons-container">
    <EntryButton />
    <ExitButton />
  </div>
</template>

<script>
import Plate from '../components/operationRegister/plate.vue'
import VehiclesGrid from '../components/operationRegister/vehiclesGrid.vue'
import ExitButton from '../components/operationRegister/exitButton.vue'
import EntryButton from '../components/operationRegister/entryButton.vue'

export default {
  components: {
    Plate,
    VehiclesGrid,
    ExitButton,
    EntryButton
  }
}
</script>

<style scoped>
.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}
</style>