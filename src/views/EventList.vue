<template>
    <div class="event-list">
      <!-- Your template content here -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/config/supabase'
  
  export default {
    name: 'EventList',
    setup() {
      const events = ref([])
  
      const fetchEvents = async () => {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('date')
          .order('time')
  
        if (error) {
          console.error('Error:', error)
        } else {
          events.value = data
        }
      }
  
      onMounted(() => {
        fetchEvents()
      })
  
      return {
        events
      }
    }
  }
  </script>
  
  <style scoped>
  .event-list {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>