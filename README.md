# Mãe Amanda Cartomante - Site de Consultas Espirituais

Um site místico para cartomante construído com Next.js, React e shadcn/ui, apresentando um esquema de cores elegante em branco, dourado e preto. Este projeto foi inspirado na estrutura de sites de coaching matrimonial, mas adaptado para os serviços de uma cartomante brasileira.

## 🔮 Funcionalidades

- **Tema Elegante Branco & Dourado**: Fundos brancos limpos com acentos dourados elegantes e texto preto
- **Animações Místicas**: Efeitos de brilho, elementos cintilantes e transições suaves
- **Design Responsivo**: Totalmente responsivo em todos os dispositivos
- **Stack Tecnológica Moderna**: Construído com Next.js 15, React 19, TypeScript e Tailwind CSS
- **Componentes shadcn/ui**: Componentes de UI bonitos e acessíveis
- **Integração WhatsApp**: Botões funcionais para agendamento via WhatsApp
- **SEO Otimizado**: Meta tags adequadas e suporte OpenGraph

## 🎨 Elementos de Design

- **Paleta de Cores**: 
  - Primária: Dourado rico (`oklch(0.65 0.22 80)`)
  - Fundo: Branco elegante (`oklch(0.98 0.01 80)`)
  - Texto: Preto suave (`oklch(0.15 0.02 80)`)
  - Acentos: Várias tonalidades de dourado
- **Tipografia**: Fontes limpas e modernas com toque místico
- **Animações**: Animações CSS personalizadas para efeitos místicos
- **Ícones**: Ícones Lucide React para iconografia consistente

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd fortune-teller-website
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
fortune-teller-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais com tema branco & dourado elegante
│   │   ├── layout.tsx           # Layout raiz com tema claro (branco & dourado)
│   │   └── page.tsx             # Homepage com todas as seções
│   ├── components/
│   │   ├── ui/                  # Componentes shadcn/ui
│   │   ├── Navigation.tsx       # Componente de navegação principal
│   │   └── WhatsAppButton.tsx   # Componente de botão WhatsApp
│   └── lib/
│       └── utils.ts             # Funções utilitárias
├── public/                      # Assets estáticos
└── README.md
```

## 🎭 Seções do Site

### Banner de Alerta
- Frase de impacto sobre descobrir o que impede a felicidade

### Seção Hero
- Título dramático com efeitos de brilho místico
- Elementos místicos flutuantes
- Botões de call-to-action para WhatsApp

### Seção de Vídeo
- Espaço para vídeo de apresentação da Mãe Amanda
- Explicação sobre como funcionam as consultas

### Seção de Revelações
- Texto motivacional sobre descobrir verdades ocultas
- Convite para transformação pessoal

### Explicação do Baralho Cigano
- Descrição detalhada do funcionamento das consultas
- Lista de problemas que podem ser abordados
- Explicação sobre rituais e tratamentos espirituais

### Métodos de Consulta
- **Baralho Cigano**: Entendimento do passado, presente e futuro
- **Tarot**: Mensagens do inconsciente e orientações
- **Oráculo de Ossos**: Mensagens dos guias espirituais
- **Jogo de Exu**: Comunicação direta com Exu

### Como Funciona
- Informações sobre consultas online e presenciais
- Duração e formato do atendimento

### Depoimentos
- Avaliações de clientes com estrelas
- Cards temáticos escuros

### Seção de Valores
- Preços para consulta online (R$ 150)
- Preços para consulta presencial (R$ 200)
- Detalhes do que está incluído

### Sobre Mãe Amanda
- Biografia e credenciais espirituais
- Especialidades em amarração amorosa e abertura de caminhos

### Seção de Contato
- Informações de agendamento
- Horários de funcionamento
- Botões funcionais para WhatsApp

### Rodapé
- Links de serviços
- Informações de contato
- Copyright e slogan místico

## 🛠 Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **React 19**: Versão mais recente do React
- **TypeScript**: Desenvolvimento type-safe
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Componentes React de alta qualidade
- **Lucide React**: Biblioteca de ícones bonitos
- **Animações CSS**: Efeitos místicos personalizados

## 📱 Funcionalidade WhatsApp

O site inclui integração completa com WhatsApp:
- Botões funcionais que abrem o WhatsApp
- Mensagem pré-preenchida para agendamento
- Número configurável no componente WhatsAppButton
- Funciona em desktop e mobile

## 🎨 Personalização

### Esquema de Cores
O tema infernal é definido em `src/app/globals.css` usando propriedades CSS customizadas. Você pode modificar as cores atualizando as variáveis CSS nos seletores `:root` e `.dark`.

### Animações
Animações personalizadas são definidas no final do `globals.css`:
- `mystical-glow`: Efeito de brilho pulsante
- `flicker`: Efeito de luz cintilante

### Conteúdo
Todo o conteúdo pode ser modificado em `src/app/page.tsx`. O site está estruturado com seções claras que podem ser facilmente personalizadas.

### Configuração do WhatsApp
Para alterar o número do WhatsApp, edite a variável `phoneNumber` em `src/components/WhatsAppButton.tsx`.

## 📱 Design Responsivo

O site é totalmente responsivo com:
- Abordagem mobile-first
- Menu de navegação recolhível
- Layouts de grid responsivos
- Escalonamento de tipografia otimizado

## 🔧 Desenvolvimento

### Scripts Disponíveis

- `npm run dev`: Iniciar servidor de desenvolvimento
- `npm run build`: Construir para produção
- `npm run start`: Iniciar servidor de produção
- `npm run lint`: Executar ESLint

### Adicionando Novos Componentes

1. Use a CLI do shadcn/ui para adicionar componentes:
```bash
npx shadcn@latest add [nome-do-componente]
```

2. Crie componentes personalizados em `src/components/`

## 🌙 Filosofia do Tema

O tema infernal representa:
- **Mistério e Poder**: Fundos escuros sugerem conhecimento oculto
- **Paixão e Energia**: Acentos vermelhos representam força vital e poder
- **Elegância**: Design limpo mantém profissionalismo
- **Misticismo**: Animações e efeitos sutis criam atmosfera

## 📄 Licença

Este projeto é para fins educacionais e de demonstração. Certifique-se de ter o licenciamento adequado para qualquer uso comercial.

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature
3. Faça suas alterações
4. Envie um pull request

## 📞 Suporte

Para dúvidas ou suporte, abra uma issue no repositório.

---

*"Transformando vidas através da magia"* - Mãe Amanda Cartomante
