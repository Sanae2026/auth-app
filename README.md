# Auth App

Aplicación web de autenticación completa con login social y credenciales.

Plataforma de autenticación moderna construida con Next.js que permite a los usuarios registrarse e iniciar sesión mediante email/contraseña o con su cuenta de GitHub, con acceso a un dashboard privado protegido.

## Despliegue

| | URL |
|---|---|
| Frontend | Vercel |

## Características

1. Autenticación con email y contraseña usando Firebase Auth
2. Login social con GitHub mediante OAuth 2.0
3. Dashboard privado protegido por Middleware de Next.js

## Tecnologías

### Frontend

| Tecnología | Uso |
|---|---|
| Next.js 15 | Framework principal con App Router |
| TypeScript | Tipado estático del código |
| Tailwind CSS | Estilos y diseño de la interfaz |

### Backend

| Tecnología | Uso |
|---|---|
| NextAuth.js | Gestión de sesiones y OAuth |
| Firebase Auth | Validación de credenciales email/contraseña |
| Next.js API Routes | Endpoints de autenticación |

### Auxiliares

| Tecnología | Uso |
|---|---|
| Vercel | Despliegue en producción |
| JWT | Tokens de sesión firmados |
| Middleware Edge | Protección de rutas privadas |

## Estructura del proyecto

auth-app/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts        # Handler de NextAuth
│   ├── dashboard/
│   │   └── page.tsx                # Área privada protegida
│   ├── login/
│   │   └── page.tsx                # Página de inicio de sesión
│   ├── register/
│   │   └── page.tsx                # Página de registro
│   ├── layout.tsx                  # Layout principal con SessionProvider
│   └── page.tsx                    # Landing pública
├── components/
│   ├── navbar.tsx                  # Navbar con logout
│   └── providers.tsx               # SessionProvider wrapper
├── docs/
│   └── seguridad/
│       ├── oauth.md                # Análisis del flujo OAuth 2.0
│       ├── middleware.md           # Middleware vs protección cliente
│       └── credenciales.md        # Hashing y seguridad de contraseñas
├── middleware.ts                   # Protección de rutas privadas
├── .env.local                      # Variables de entorno
└── README.md

## Descargar y ejecutar

```bash
git clone https://github.com/TU_USUARIO/auth-app.git
cd auth-app
```

Crea un archivo `.env.local` con tus claves:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secret
GITHUB_ID=tu_github_client_id
GITHUB_SECRET=tu_github_client_secret
NEXT_PUBLIC_FIREBASE_API_KEY=tu_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_firebase_project_id
```

```bash
npm install
npm run dev
```

## Desplegar en Vercel

### Frontend

1. Importa el repositorio en [vercel.com](https://vercel.com)
2. Añade las variables de entorno del `.env.local` en el panel de Vercel
3. Cambia `NEXTAUTH_URL` al dominio de producción que Vercel asigne

---

Desarrollado durante las prácticas en Corner Estudios — Sanae — 2026
