<template>
  <button class="button-dark" role="button" @click="$emit('dark')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['dark'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-dark {
  appearance: none;
  background-color: #343a40; /* Dark background color */
  border: 1px solid rgba(52, 58, 64, 0.15); /* Light dark border */
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0; /* Light shadow */
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

.button-dark:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-dark:hover {
  background-color: #23272b; /* Darker shade on hover */
}

.button-dark:focus {
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-dark:disabled {
  background-color: #6c757d; /* Light gray for disabled state */
  border-color: rgba(52, 58, 64, 0.1); /* Light dark border */
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent white text */
  cursor: default;
}

.button-dark:active {
  background-color: #1d2124; /* Darker shade when active */
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
