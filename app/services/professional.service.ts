import professionals from '~/data/professionals.json'
import type { Professional } from '~/types/professional'

export const professionalService = {
  async getAll(): Promise<Professional[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(professionals)
      }, 300)
    })
  }
}