<template>
  <button class="button-secondry" role="button" @click="$emit('secondry')">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  emits: ['secondry'],
  props: ['btnName'],
}
</script>

<style lang="scss" scoped>
/* CSS  button */
.button-secondary {
  appearance: none;
  background-color: #6c757d; /* Secondary background color (gray) */
  border: 1px solid rgba(108, 117, 125, 0.15); /* Light gray border */
  border-radius: 6px;
  box-shadow: rgba(108, 117, 125, 0.1) 0 1px 0; /* Light gray shadow */
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

.button-secondary:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-secondary:hover {
  background-color: #5a6268; /* Darker gray on hover */
}

.button-secondary:focus {
  box-shadow: rgba(108, 117, 125, 0.4) 0 0 0 3px; /* Focus shadow */
  outline: none;
}

.button-secondary:disabled {
  background-color: #e2e6ea; /* Light gray for disabled state */
  border-color: rgba(108, 117, 125, 0.1); /* Light gray border */
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent white text */
  cursor: default;
}

.button-secondary:active {
  background-color: #495057; /* Darker gray when active */
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 inset; /* Inset shadow */
}
</style>
