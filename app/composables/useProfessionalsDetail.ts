import { computed, ref, onMounted, toValue } from 'vue'
import { professionalService } from '~/services/professional.service'
import type { Professional } from '~/types/professional'

export const useProfessionalsDetail = (
  id: MaybeRef<number | string | null>
) => {
  const professionals = ref<Professional[]>([])

  onMounted(async () => {
    professionals.value = await professionalService.getAll()
  })

  const professional = computed<Professional | null>(() => {
    const resolvedId = toValue(id)

    if (!resolvedId) {
      return null
    }

    return (
      professionals.value.find(
        professional => professional.id === Number(resolvedId)
      ) ?? null
    )
  })

  const related = computed<Professional[]>(() => {
    const current = professional.value

    if (!current) return []

    return professionals.value
      .filter(
        item =>
          item.profession === current.profession &&
          item.id !== current.id
      )
      .slice(0, 4)
  })

  return {
    professional,
    related
  }
}