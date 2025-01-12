<template>
  <button class="button-primary" role="button" @click="$emit('primary')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['primary'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-primary {
  appearance: none;
  background-color: #007bff; /* Primary background color */
  border: 1px solid rgba(0, 123, 255, 0.15); /* Light blue border */
  border-radius: 6px;
  box-shadow: rgba(0, 123, 255, 0.1) 0 1px 0; /* Light blue shadow */
  box-sizing: border-box;
  color: #fff; /* White text color */
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-primary:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-primary:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

.button-primary:focus {
  box-shadow: rgba(0, 123, 255, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-primary:disabled {
  background-color: #cce5ff; /* Light blue for disabled state */
  border-color: rgba(0, 123, 255, 0.1); /* Light blue border */
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent white text */
  cursor: default;
}

.button-primary:active {
  background-color: #004085; /* Darker blue when active */
  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
