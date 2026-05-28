# ModuHub Site

Site institucional da ModuHub Tecnologia — construído com **Astro + Netlify + Decap CMS**.

## Stack

| Camada      | Tecnologia          | Por quê |
|-------------|---------------------|---------|
| Framework   | Astro 4             | HTML estático, SEO nativo, zero JS por padrão |
| Hospedagem  | Netlify (gratuito)  | Deploy automático via GitHub, CDN global, HTTPS |
| CMS visual  | Decap CMS           | Edição em `/admin` sem abrir o VSCode |
| Formulário  | Netlify Forms       | Sem backend, até 100 submissões/mês grátis |

---

## Setup inicial (primeira vez)

### 1. Pré-requisitos
- Node.js 18+ instalado (`node -v`)
- Conta GitHub
- Conta Netlify (gratuita — netlify.com)

### 2. Clonar e instalar

```bash
git clone https://github.com/SEU-USUARIO/moduhub-site.git
cd moduhub-site
npm install
```

### 3. Rodar localmente

```bash
npm run dev
```

Acesse `http://localhost:4321`

### 4. Configurar o repositório GitHub

```bash
git init                          # se ainda não for um repo
git add .
git commit -m "feat: site inicial ModuHub"
git remote add origin https://github.com/SEU-USUARIO/moduhub-site.git
git push -u origin main
```

### 5. Publicar no Netlify

1. Acesse [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
2. Conecte sua conta GitHub e selecione o repositório `moduhub-site`
3. Configurações de build (já preenchidas automaticamente via `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clique em **Deploy site**
5. Em ~1 minuto o site estará em `https://nome-aleatorio.netlify.app`

### 6. Conectar o domínio moduhub.com

1. No painel Netlify → "Domain settings" → "Add custom domain"
2. Digite `moduhub.com`
3. Siga as instruções para apontar os nameservers do seu registrador para o Netlify
   (ou adicione um registro CNAME/A conforme indicado)
4. HTTPS é configurado automaticamente pelo Netlify via Let's Encrypt

### 7. Ativar o Decap CMS (edição visual)

1. No painel Netlify → "Site configuration" → "Identity" → **Enable Identity**
2. Em Identity → "Registration" → selecione **Invite only**
3. Em Identity → "Services" → "Git Gateway" → **Enable Git Gateway**
4. Convide você mesmo: Identity → "Invite users" → insira seu e-mail
5. Acesse `https://moduhub.com/admin` e faça login com o link recebido por e-mail

> Após o primeiro login, você poderá editar Produtos e Cases diretamente no navegador.

### 8. Editar o config.yml do CMS

Abra `public/admin/config.yml` e substitua:
```yaml
backend:
  repo: SEU-USUARIO/moduhub-site  # ← coloque seu usuário GitHub aqui
```

---

## Estrutura do projeto

```
moduhub-site/
├── src/
│   ├── pages/            ← cada arquivo = uma URL
│   │   ├── index.astro   → /
│   │   ├── sobre.astro   → /sobre
│   │   ├── produtos.astro
│   │   ├── servicos.astro
│   │   ├── semicondutores.astro
│   │   ├── infraestrutura.astro
│   │   ├── contato.astro
│   │   └── 404.astro
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Base.astro    ← SEO, meta tags, schema.org
│   ├── styles/
│   │   └── global.css    ← design system completo
│   └── content/          ← arquivos editáveis pelo CMS
│       ├── produtos/
│       └── projetos/
├── public/
│   ├── admin/
│   │   ├── config.yml    ← configuração do Decap CMS
│   │   └── index.html
│   ├── images/           ← imagens do site
│   └── favicon.svg
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## Como adicionar imagens

Substitua os placeholders com comentários `{/* FOTO: ... */}` por tags `<img>`:

```astro
<!-- Antes (placeholder) -->
<div class="infra__foto-placeholder">
  {/* FOTO: Osciloscópio Rigol MSO5354 */}
  <span>OSC</span>
</div>

<!-- Depois -->
<img
  src="/images/laboratorio/osciloscopio-rigol.jpg"
  alt="Osciloscópio Rigol MSO5354 no laboratório ModuHub"
  loading="lazy"
/>
```

Coloque as imagens na pasta `public/images/` organizada em subpastas:
- `public/images/produtos/`
- `public/images/laboratorio/`
- `public/images/equipe/`

---

## SEO checklist

- [x] Meta title e description em cada página
- [x] Open Graph (Facebook/LinkedIn preview)
- [x] Schema.org Organization
- [x] Sitemap.xml gerado automaticamente (`/sitemap-index.xml`)
- [x] Canonical URLs
- [x] Favicon SVG
- [ ] Adicionar imagem OG padrão em `public/images/og-default.jpg` (1200×630px)
- [ ] Verificar Google Search Console após publicar

---

## Deploy

Qualquer `git push` para a branch `main` dispara um novo deploy automático no Netlify.

```bash
git add .
git commit -m "feat: atualiza conteúdo da página de produtos"
git push
```

O site atualizado fica online em ~30–60 segundos.
