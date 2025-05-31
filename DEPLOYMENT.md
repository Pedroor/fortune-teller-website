# 🚀 Guia de Deploy - Mãe Amanda Cartomante

Este guia te ajudará a fazer o deploy do site da Mãe Amanda Cartomante no Vercel.

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Vercel (gratuita)
- Git configurado no seu computador

## 🔧 Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome sugerido: `mae-amanda-cartomante`
4. Deixe como **público** ou **privado** (sua escolha)
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"
7. **Copie a URL do repositório** (algo como: `https://github.com/seuusuario/mae-amanda-cartomante.git`)

### 2. Conectar Repositório Local ao GitHub

No terminal, dentro da pasta `fortune-teller-website`, execute:

```bash
# Adicionar o repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/SEUUSUARIO/mae-amanda-cartomante.git

# Fazer push do código
git push -u origin main
```

### 3. Deploy no Vercel

#### Opção A: Via Dashboard (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e conecte com GitHub
3. Após login, clique em "New Project"
4. Selecione o repositório `mae-amanda-cartomante`
5. Vercel detectará automaticamente que é um projeto Next.js
6. Clique em "Deploy"
7. Aguarde alguns minutos
8. Seu site estará online! 🎉

#### Opção B: Via CLI

```bash
# Instalar Vercel CLI (se ainda não instalou)
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Seguir as instruções na tela
```

## ⚙️ Configurações Importantes

### Variáveis de Ambiente (se necessário)

Se você quiser configurar o número do WhatsApp via variável de ambiente:

1. No dashboard do Vercel, vá em "Settings" > "Environment Variables"
2. Adicione:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: `5511999999999`

### Domínio Personalizado (Opcional)

1. No dashboard do Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

## 🔄 Atualizações Automáticas

Após o primeiro deploy:
- Qualquer push para a branch `main` no GitHub
- Automaticamente fará redeploy no Vercel
- Sem necessidade de ação manual

## 📱 URLs Importantes

Após o deploy, você receberá:
- **URL de produção**: `https://mae-amanda-cartomante.vercel.app`
- **URLs de preview**: Para cada branch/PR

## 🛠 Comandos Úteis

```bash
# Ver status do projeto
vercel ls

# Ver logs
vercel logs

# Fazer redeploy
vercel --prod

# Remover projeto
vercel remove
```

## 🎯 Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub
- [ ] Conta criada no Vercel
- [ ] Deploy realizado
- [ ] Site funcionando
- [ ] WhatsApp testado
- [ ] Responsividade verificada

## 🆘 Problemas Comuns

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Execute `npm run build` localmente para testar

### WhatsApp não funciona
- Verifique o número no arquivo `WhatsAppButton.tsx`
- Teste em dispositivo móvel

### Erro 404
- Verifique se o arquivo `page.tsx` está na pasta correta
- Confirme a estrutura de pastas do Next.js

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no dashboard do Vercel
2. Consulte a [documentação do Vercel](https://vercel.com/docs)
3. Verifique a [documentação do Next.js](https://nextjs.org/docs)

---

**Boa sorte com o deploy! 🚀**

*O site da Mãe Amanda estará online em poucos minutos!* 