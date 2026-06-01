import { faker } from '@faker-js/faker'
import fs from 'node:fs'

const professions = [
  'Personal Trainer',
  'Nutricionista',
  'Psicólogo',
  'Advogado',
  'Arquiteto',
  'Designer UX/UI',
  'Desenvolvedor Frontend',
  'Eletricista',
  'Fotógrafo'
]

const professionals = Array.from({ length: 500 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  profession:
    professions[Math.floor(Math.random() * professions.length)],
  photo: faker.image.avatar(),
  description: faker.person.bio(),
  price: faker.number.int({ min: 50, max: 1000 }),
  rating: faker.number.float({
    min: 3,
    max: 5,
    fractionDigits: 1
  }),
  city: faker.location.city(),
  distance: faker.number.float({
    min: 1,
    max: 50,
    fractionDigits: 1
  })
}))

fs.mkdirSync('data', { recursive: true })

fs.writeFileSync(
  'data/professionals.json',
  JSON.stringify(professionals, null, 2)
)

console.log('500 profissionais gerados com sucesso!')