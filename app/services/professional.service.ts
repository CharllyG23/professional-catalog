import professionals from '~/data/professionals.json'

export const professionalService = {
  async getAll() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(professionals)
      }, 500)
    })
  }
}