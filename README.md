# Áurea — Moda & Perfumaria

Uma experiência de e-commerce premium criada para transformar produtos em desejo, navegação em descoberta e presença digital em oportunidade de negócio.

A **Áurea** é uma loja virtual demonstrativa de moda e perfumaria, desenvolvida para apresentar como uma marca pode vender melhor por meio de uma interface elegante, responsiva e pensada para conversão.

> Este projeto é uma demonstração visual e funcional. Não realiza vendas, pagamentos ou autenticações reais.

## Por que este projeto se destaca

Mais do que uma vitrine, a Áurea simula uma jornada completa de compra. O visitante pode descobrir coleções, pesquisar produtos, aplicar filtros, salvar favoritos, montar uma sacola e avançar por um checkout demonstrativo.

O projeto foi pensado para negócios que desejam:

- Apresentar seus produtos com mais valor percebido.
- Construir uma presença digital profissional.
- Oferecer uma experiência confortável no celular.
- Validar uma ideia de e-commerce antes de investir em backend e pagamentos.
- Demonstrar uma loja realista para clientes, parceiros ou investidores.

## O que a Áurea faz

### Experiência de compra

- Página inicial com banners rotativos e coleções em destaque.
- Catálogo de roupas femininas, masculinas, perfumes e acessórios.
- Cards com preços, descontos, avaliações, selos e compra rápida.
- Página completa de detalhes de cada produto.
- Seleção de tamanho, volume e quantidade.
- Produtos relacionados e sugestões de compra.

### Busca e descoberta

- Busca instantânea por nome, marca, categoria, gênero e família olfativa.
- Recomendações durante a digitação.
- Página dedicada de resultados.
- Filtros por categoria, marca, tamanho, cor, gênero e outras características.
- Ordenação por preço e relevância.

### Carrinho e favoritos

- Carrinho lateral e página completa da sacola.
- Alteração de quantidades e remoção de produtos.
- Cálculo demonstrativo de subtotal e total.
- Cupom promocional fictício `BEMVINDO10`.
- Lista de favoritos persistida no navegador.
- Dados armazenados localmente com `localStorage`.

### Conta e checkout demonstrativos

- Login e cadastro simulados.
- Proteção de ações que exigem autenticação.
- Área do cliente com pedidos fictícios.
- Checkout dividido em identificação, endereço, entrega e pagamento.
- Opções demonstrativas de Pix, cartão e boleto.
- Tela de confirmação do pedido.

### Comunicação comercial

- Popup informando que o projeto é demonstrativo.
- Chamada para desenvolvimento de projetos personalizados.
- Contato direto por WhatsApp e e-mail.
- Link para o portfólio no GitHub.

## Design e responsividade

A interface utiliza uma direção visual contemporânea, com cores quentes, contraste elegante e foco na apresentação dos produtos.

O layout foi desenvolvido com atenção especial ao público mobile:

- Navegação compacta para celulares.
- Menu e carrinho em formato de drawer.
- Filtros adaptados para toque.
- Cards responsivos em uma ou duas colunas.
- Áreas de toque confortáveis.
- Popup adaptado à altura real do navegador.
- Suporte a áreas seguras do dispositivo.
- Redução de animações conforme a preferência do usuário.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
| --- | --- |
| **Next.js 16** | Estrutura, rotas e renderização da aplicação |
| **React 19** | Componentes e estados interativos |
| **TypeScript** | Tipagem e segurança durante o desenvolvimento |
| **CSS responsivo** | Identidade visual, animações e breakpoints mobile-first |
| **Lucide React** | Ícones leves e consistentes |
| **LocalStorage** | Persistência de usuário, carrinho e favoritos |
| **Unsplash** | Fotografias demonstrativas do catálogo |

## Arquitetura do projeto

```text
src/
├── app/
│   ├── [...slug]/       # Atendimento das rotas internas
│   ├── globals.css      # Design system e responsividade
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Páginas, componentes e interações
├── data/
│   └── products.ts      # Catálogo local de produtos
└── types/
    └── index.ts         # Tipos compartilhados
```

Os dados estão centralizados localmente, facilitando a troca de produtos, preços, imagens, categorias e informações comerciais.

## Como executar

### Requisitos

- Node.js 20 ou superior.
- npm.

### Instalação

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000
```

### Acesso pela rede local

```bash
npm run dev:network -- --port 3001
```

Depois, acesse pelo endereço IPv4 do computador usando a porta `3001`.

### Build de produção

```bash
npm run build
npm run start
```

## Próximas possibilidades

Esta demonstração pode evoluir para uma operação real com:

- Backend e banco de dados.
- Painel administrativo.
- Controle real de estoque.
- Gateway de pagamento.
- Cálculo de frete por transportadora.
- Autenticação segura.
- Gestão de pedidos e clientes.
- Integração com ferramentas de marketing e atendimento.

## Projeto personalizado

Quer uma loja, landing page ou sistema com identidade própria para o seu negócio?

Entre em contato para conversar sobre sua ideia:

- **WhatsApp:** [+55 44 9139-5827](https://wa.me/554491395827)
- **E-mail:** [phtw999@gmail.com](mailto:phtw999@gmail.com)
- **GitHub:** [Pedro-Henrique-Pereira](https://github.com/Pedro-Henrique-Pereira)

---

Desenvolvido por **Pedro Henrique**.
