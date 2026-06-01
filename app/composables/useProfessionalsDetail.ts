import { computed } from 'vue'
import professionalsData from '~/data/professionals.json'
import type { Professional } from '~/types/professional'

const professionals = professionalsData as Professional[]

export const useProfessionalsDetail = (
  id: MaybeRef<number | string | null>
) => {
  const professional = computed<Professional | null>(() => {
    const resolvedId = toValue(id)

    if (!resolvedId) {
      return null
    }

    return (
      professionals.find(
        professional => professional.id === Number(resolvedId)
      ) ?? null
    )
  })

  const related = computed<Professional[]>(() => {
    const current = professional.value

		if(!current) return []
    return professionals
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