import { ref } from 'vue'
import { SUBSCRIPTION_OPTIONS } from '@/constants/subscription'

export function useSubscription() {
  const options = ref(SUBSCRIPTION_OPTIONS)

  const selectOption = (optionId) => {
    options.value = options.value.map(option => ({
      ...option,
      selected: option.id === optionId
    }))
  }

  return {
    options,
    selectOption
  }
} 