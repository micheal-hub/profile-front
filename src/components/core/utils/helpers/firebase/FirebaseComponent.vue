<template>
  <div>
    <h2>Item Manager</h2>
    <input v-model="newItem" placeholder="Enter an item" />
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/firebase' // Import the initialized Firebase instance
import { collection, addDoc, onSnapshot } from 'firebase/firestore'

export default {
  data() {
    return {
      newItem: '',
      items: [],
    }
  },
  methods: {
    async addItem() {
      if (this.newItem) {
        await addDoc(collection(db, 'items'), {
          name: this.newItem,
        })
        this.newItem = '' // Clear the input after adding
      }
    },
  },
  mounted() {
    const itemsCollection = collection(db, 'items')
    onSnapshot(itemsCollection, (snapshot) => {
      this.items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    })
  },
}
</script>

<style scoped>
input {
  margin-right: 10px;
}
</style>
