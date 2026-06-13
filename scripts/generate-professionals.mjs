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
  'Fotógrafo',
  'Desenvolvedor Full Stack',
  'QA Tester',
  'Gestor de Tráfego',
  'Marketing Digital',
  'Product Manager',
  'Pintor'
]

const locations = [
  { city: 'Curitiba', state: 'PR' },
  { city: 'Londrina', state: 'PR' },
  { city: 'Maringá', state: 'PR' },

  { city: 'São Paulo', state: 'SP' },
  { city: 'Campinas', state: 'SP' },
  { city: 'Santos', state: 'SP' },
  { city: 'São José dos Campos', state: 'SP' },
  { city: 'Ribeirão Preto', state: 'SP' },

  { city: 'Rio de Janeiro', state: 'RJ' },
  { city: 'Niterói', state: 'RJ' },

  { city: 'Belo Horizonte', state: 'MG' },
  { city: 'Uberlândia', state: 'MG' },

  { city: 'Florianópolis', state: 'SC' },
  { city: 'Joinville', state: 'SC' },
  { city: 'Blumenau', state: 'SC' },

  { city: 'Porto Alegre', state: 'RS' },
  { city: 'Caxias do Sul', state: 'RS' },

  { city: 'Brasília', state: 'DF' },

  { city: 'Salvador', state: 'BA' },
  { city: 'Recife', state: 'PE' },
  { city: 'Fortaleza', state: 'CE' },

  { city: 'Manaus', state: 'AM' },
  { city: 'Belém', state: 'PA' },

  { city: 'Goiânia', state: 'GO' },

  { city: 'Vitória', state: 'ES' },

  { city: 'Natal', state: 'RN' },
  { city: 'João Pessoa', state: 'PB' },
  { city: 'Aracaju', state: 'SE' },

  { city: 'Campo Grande', state: 'MS' },
  { city: 'Cuiabá', state: 'MT' },
  { city: 'Palmas', state: 'TO' }
]

const professionals = Array.from({ length: 500 }, (_, index) => {
  const location = faker.helpers.arrayElement(locations)

  return {
    id: index + 1,
    name: faker.person.fullName(),
    profession: faker.helpers.arrayElement(professions),
    photo: faker.image.avatar(),
    description: faker.person.bio(),
    price: faker.number.int({
      min: 50,
      max: 1000
    }),
    rating: faker.number.float({
      min: 3,
      max: 5,
      fractionDigits: 1
    }),
    city: location.city,
    state: location.state,
    distance: faker.number.float({
      min: 1,
      max: 50,
      fractionDigits: 1
    })
  }
})

fs.mkdirSync('data', { recursive: true })

fs.writeFileSync(
  'data/professionals.json',
  JSON.stringify(professionals, null, 2)
)

console.log('500 profissionais gerados com sucesso!')