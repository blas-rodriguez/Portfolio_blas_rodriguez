# Portfolio profesional — Blas Rodriguez

Portfolio bilingüe, estático y responsive construido con Astro y TypeScript. Está preparado para publicarse gratuitamente en GitHub Pages y para migrar más adelante a un dominio propio.

## Tecnologías

- Astro
- TypeScript estricto
- CSS moderno sin frameworks de interfaz
- Sitemap, `robots.txt`, canonical, `hreflang`, Open Graph y JSON-LD
- GitHub Actions para validación y despliegue automático

## Requisitos

- Node.js 22.19 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:4321`.

## Validaciones

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

También se pueden ejecutar todas juntas con `npm run check`. El resultado estático se genera en `dist/`.

## Publicar en GitHub Pages

1. Crear un repositorio público en GitHub.
2. Subir este proyecto y usar `main` como rama principal.
3. Abrir **Settings → Pages** en GitHub.
4. En **Source**, seleccionar **GitHub Actions**.
5. Hacer un `push` a `main` o ejecutar manualmente el workflow **Deploy to GitHub Pages**.

El workflow [deploy.yml](.github/workflows/deploy.yml) ejecuta lint, typecheck, formato y build antes de publicar. La configuración calcula automáticamente la URL `https://usuario.github.io/repositorio/`, incluida la subcarpeta del repositorio.

Para evitar una subcarpeta en la URL, el repositorio puede llamarse exactamente `usuario.github.io`. Esto no es obligatorio y deja de importar al conectar un dominio.

## Conectar un dominio propio

Cuando el dominio esté comprado:

1. Verificar el dominio en GitHub para evitar que otra cuenta pueda reclamarlo.
2. Configurar sus registros DNS siguiendo las instrucciones de GitHub Pages.
3. Abrir **Settings → Pages → Custom domain** y guardar el dominio.
4. Crear en **Settings → Secrets and variables → Actions → Variables** una variable llamada `PUBLIC_SITE_URL` con el valor completo, por ejemplo `https://blasrodriguez.dev`, sin `/` final.
5. Ejecutar nuevamente el workflow de despliegue.

Con GitHub Actions no es necesario agregar manualmente un archivo `CNAME`; GitHub administra el dominio desde la configuración de Pages.

## Dónde actualizar el contenido

| Contenido                                  | Archivo                    |
| ------------------------------------------ | -------------------------- |
| Perfil, enlaces, SEO y textos de secciones | `src/data/profile.ts`      |
| Experiencia profesional                    | `src/data/experience.ts`   |
| Proyectos y demos                          | `src/data/projects.ts`     |
| Skills                                     | `src/data/skills.ts`       |
| APIs, integraciones y flujo de IA          | `src/data/integrations.ts` |
| Videos                                     | `src/data/videos.ts`       |

Todos los textos públicos importantes tienen versiones `en` y `es`.

## Reemplazar la foto

La foto del hero está en `src/assets/blas-rodriguez.png`. La copia usada para Open Graph y compartir la página está en `public/images/blas-rodriguez.png`. Conviene reemplazar ambas. Astro optimiza automáticamente la imagen del hero durante el build.

## Reemplazar los CV

El CV provisional en español está en:

```text
public/cv/blas-rodriguez-cv-es.pdf
```

Cuando esté disponible la versión inglesa:

1. Copiarla como `public/cv/blas-rodriguez-cv-en.pdf`.
2. En `src/data/profile.ts`, cambiar `cv.en` a `/cv/blas-rodriguez-cv-en.pdf`.
3. Cambiar `cvIsSpanishOnly` a `false`.

## Agregar videos

Editar `src/data/videos.ts`. El componente admite YouTube, Vimeo, MP4 o placeholder.

YouTube — usar solamente el ID:

```ts
{
  title: { en: 'English introduction', es: 'Presentación en inglés' },
  language: 'EN',
  type: 'youtube',
  source: 'ID_DEL_VIDEO'
}
```

Vimeo:

```ts
type: 'vimeo',
source: 'ID_DEL_VIDEO'
```

MP4 — copiar el video dentro de `public/videos/`:

```ts
type: 'mp4',
source: '/videos/introduction-en.mp4'
```

YouTube y Vimeo usan carga diferida. Para MP4 conviene comprimir los archivos antes de subirlos al repositorio.

## Screenshots de proyectos

La carpeta preparada es `public/images/projects/`. Actualmente las cards utilizan previews gráficos generados con CSS para evitar imágenes externas o con copyright. Se pueden sustituir por screenshots reales más adelante.

## Variables de entorno

Ver [.env.example](.env.example). No hay claves privadas ni secretos. `PUBLIC_SITE_URL` es opcional mientras se usa la URL automática de GitHub Pages.

## Estructura principal

```text
portfolio/
├── .github/workflows/deploy.yml
├── public/
│   ├── cv/
│   └── images/projects/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   └── es/
│   └── styles/
├── astro.config.ts
├── package.json
└── tsconfig.json
```

## Privacidad

Al publicar el repositorio, el CV, el correo y todo lo que se encuentre en `public/` será accesible públicamente. Nunca agregar contraseñas, tokens o información privada al repositorio.
