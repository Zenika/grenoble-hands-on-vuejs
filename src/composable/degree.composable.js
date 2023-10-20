import { ref } from 'vue'

export const useDegree = () => {
  const degree = ref('C')
  const getTemperature = (temperature) => {
    return degree.value === 'C' ? temperature : Math.round(temperature * (9/5) + 32)
  }

  return { degree, getTemperature }
}
