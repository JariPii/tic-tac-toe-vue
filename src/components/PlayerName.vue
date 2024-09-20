<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { Player } from '../models/Player.js';

const emit = defineEmits(['add-player']);

const handleInput = (e: any) => {
  playerName.value = e.target.value;
};

const addPlayer = () => {
  if (!playerName.value.trim()) {
    alert('Player name cannot be empty');
    return;
  }

  if (players.value.length < 2) {
    const symbol = players.value.length === 0 ? 'X' : 'O';
    const player = new Player(playerName.value, symbol);
    players.value.push(player);
    emit('add-player', player);
    playerName.value = '';
  } else {
    console.log('Maximum of 2 players reached');
  }
};

const players = ref<Player[]>([]);
const playerName = ref('');
</script>

<template>
  <div v-if="players.length < 2">
    <input type="text" :value="playerName" @input="handleInput" />
    <button @click="addPlayer">Save name</button>
  </div>

  <div class="playerName" v-for="player in players" :key="player.id">
    {{ player.name }} ({{ player.symbol }})
  </div>
</template>

<style scoped>
input {
  font-size: 2rem;
  color: transparent;
  text-shadow: var(--pinkshadow);
  -webkit-text-stroke: 0.3px white;
}
.playerName {
  font-size: 2rem;
  color: aliceblue;
}
</style>
