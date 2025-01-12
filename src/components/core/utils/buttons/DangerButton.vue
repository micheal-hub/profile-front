<template>
  <button class="button-danger" role="button" @click="$emit('danger')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['danger'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-danger {
  appearance: none;
  background-color: #dc3545; /* Danger background color */
  border: 1px solid rgba(220, 53, 69, 0.15); /* Light red border */
  border-radius: 6px;
  box-shadow: rgba(220, 53, 69, 0.1) 0 1px 0; /* Light red shadow */
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

.button-danger:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-danger:hover {
  background-color: #c82333; /* Darker red on hover */
}

.button-danger:focus {
  box-shadow: rgba(220, 53, 69, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-danger:disabled {
  background-color: #f5c6cb; /* Light red for disabled state */
  border-color: rgba(220, 53, 69, 0.1); /* Light red border */
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent white text */
  cursor: default;
}

.button-danger:active {
  background-color: #bd2130; /* Darker red when active */
  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
