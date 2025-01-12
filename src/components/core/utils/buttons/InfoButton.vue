<template>
  <button class="button-info" role="button" @click="$emit('info')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['info'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-info {
  appearance: none;
  background-color: #17a2b8; /* Info background color (teal) */
  border: 1px solid rgba(23, 162, 184, 0.15); /* Light teal border */
  border-radius: 6px;
  box-shadow: rgba(23, 162, 184, 0.1) 0 1px 0; /* Light teal shadow */
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

.button-info:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-info:hover {
  background-color: #138496; /* Darker teal on hover */
}

.button-info:focus {
  box-shadow: rgba(23, 162, 184, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-info:disabled {
  background-color: #b2e0e6; /* Light teal for disabled state */
  border-color: rgba(23, 162, 184, 0.1); /* Light teal border */
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent white text */
  cursor: default;
}

.button-info:active {
  background-color: #117a8b; /* Darker teal when active */
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
