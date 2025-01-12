<template>
  <button class="button-warning" role="button" @click="$emit('warning')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['warning'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-warning {
  appearance: none;
  background-color: #ffc107; /* Warning background color (yellow) */
  border: 1px solid rgba(255, 193, 7, 0.15); /* Light yellow border */
  border-radius: 6px;
  box-shadow: rgba(255, 193, 7, 0.1) 0 1px 0; /* Light yellow shadow */
  box-sizing: border-box;
  color: rgba(255, 255, 255); /* Dark text color for contrast */
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

.button-warning:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-warning:hover {
  background-color: #e0a800; /* Darker yellow on hover */
}

.button-warning:focus {
  box-shadow: rgba(255, 193, 7, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-warning:disabled {
  background-color: #ffeeba; /* Light yellow for disabled state */
  border-color: rgba(255, 193, 7, 0.1); /* Light yellow border */
  color: rgba(255, 255, 255, 0.5); /* Slightly transparent dark text */
  cursor: default;
}

.button-warning:active {
  background-color: #d39e00; /* Darker yellow when active */
  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
