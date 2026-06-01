# Projeto Frontend - Nuxt 4 - Typescript
# Catálogo de Profissionais
<img width="1508" height="902" alt="image" src="https://github.com/user-attachments/assets/fcfbb4df-5a10-4223-a524-738c07973695" />
<hr>

<img width="1753" height="899" alt="image" src="https://github.com/user-attachments/assets/c2490144-95e2-4d87-b7f6-c754e7c63b74" />


Este projeto foi desenvolvido com Nuxt 4, focado em organização de código, escalabilidade e boas práticas de performance.

## ⚙️ Funcionalidades

- Listagem de profissionais
- Filtros por profissão e ordenação
- Busca por nome
- Paginação com carregamento incremental
- Visualização de detalhes via drawer

## 📁 Estrutura do projeto

```bash
.
├── components/        # Componentes reutilizáveis da UI
│   ├── ProfessionalCard.vue
│   ├── ProfessionalCatalog.vue
│   ├── ProfessionalDrawer.vue
│
├── composables/       # Lógica de negócio reutilizável
│   ├── useProfessionals.ts
│   ├── useProfessionalsDetails.ts
│
├── pages/             # Rotas da aplicação (Nuxt routing automático)
│   ├── index.vue
│   └── professionals/
│       └── index.vue
│
├── assets/            # Estilos globais e design tokens
│   ├── styles/
│   │   ├── base.scss
│   │   ├── main.scss
│   │   └── tokens.scss
│
├── types/             # Tipagens TypeScript
│   ├── professional.ts
│   └── sort.ts
│
├── public/            # Arquivos públicos estáticos
│
├── nuxt.config.ts     # Configuração principal do Nuxt
└── package.json       # Dependências e scripts do projeto
```

# 🤖 Uso de IA

A IA utilizada neste projeto foi o ChatGPT como ferramenta de apoio.

- melhorias na organização de código e estrutura de pastas
- otimização de performance
- auxílio na documentação do README e explicação de decisões técnicas

Todas as sugestões foram analisadas, adaptadas e validadas manualmente antes da implementação.

# 🚀 Como rodar o projeto
#clone the repository
```sh
git clone 
```
### Install dependencies

```sh
npm install
```
### Compilar e Hot-Reload para Desenvolvimento
#Start the development server on `http://localhost:3000`:

```sh
npm run dev
```
