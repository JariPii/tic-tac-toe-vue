<script setup lang="ts">
interface Props {
  isVisible: boolean;
  previousGames: string[];
}

const props = defineProps<Props>();
const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2>Previous Games:</h2>
      <div
        class="gamesHistory"
        v-for="(game, index) in previousGames"
        :key="index"
      >
        {{ game }}
      </div>
      <button class="button" @click="close">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 3rem;
}

.modal-content {
  background: url('../assets/brickwall.jpg');
  color: transparent;
  text-shadow: var(--redshadow);
  -webkit-text-stroke: 0.3px white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.gamesHistory {
  margin: 1rem;
  font-size: 3rem;
}

.button {
  margin-top: 10px;
}
</style>
