<template>
  <button class="button-light" role="button" @click="$emit('light')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['light'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-light {
  appearance: none;
  background-color: #f8f9fa; /* Light background color (light gray) */
  border: 1px solid rgba(0, 0, 0, 0.1); /* Light border */
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0; /* Light shadow */
  box-sizing: border-box;
  color: #212529; /* Dark text color */
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

.button-light:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-light:hover {
  background-color: #e2e6ea; /* Slightly darker gray on hover */
}

.button-light:focus {
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-light:disabled {
  background-color: #f8f9fa; /* Same light background for disabled state */
  border-color: rgba(0, 0, 0, 0.1); /* Light border */
  color: rgba(0, 0, 0, 0.5); /* Gray text for disabled state */
  cursor: default;
}

.button-light:active {
  background-color: #dae0e5; /* Darker gray when active */
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
