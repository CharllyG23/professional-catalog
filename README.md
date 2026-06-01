# Projeto Frontend - Nuxt 3

Este projeto foi desenvolvido com Nuxt 3, focado em organização de código, escalabilidade e boas práticas de performance.

# ⚙️ Funcionalidades

- Listagem de profissionais
- Filtros por profissão e ordenação
- Busca por nome
- Paginação com carregamento incremental
- Visualização de detalhes via drawer

# 📁 Estrutura do projeto

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

# 🤖 Uso de IA

A IA utilizada neste projeto foi o ChatGPT como ferramenta de apoio.

- melhorias na organização de código e estrutura de pastas
- otimização de performance
- auxílio na documentação do README e explicação de decisões técnicas

Todas as sugestões foram analisadas, adaptadas e validadas manualmente antes da implementação.

# 🚀 Como rodar o projeto

```sh
npm install
```

### Compilar e Hot-Reload para Desenvolvimento

```sh
npm run dev
```
Start the development server on `http://localhost:3000`:

### Checar Tipo, Compilar e Minificar para Produção

```sh
npm run build
```