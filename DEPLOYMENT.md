# Despliegue en Dokploy

## Variables de Entorno Requeridas

En Dokploy, configura las siguientes variables de entorno:

### 1. DATABASE_URL
Conexión a PostgreSQL. Dokploy te proporciona esto al crear una base de datos.

**Formato:**
```
DATABASE_URL=postgresql://username:password@host:5432/database_name
```

**Ejemplos:**
- Dokploy: `postgresql://agsuser:tu_password@postgres:5432/agsdb`
- Neon: `postgresql://user:pass@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb`
- Supabase: `postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres`

### 2. SESSION_SECRET
Clave secreta para sesiones de usuario.

**Generar una clave segura:**
```bash
openssl rand -base64 32
```

**Ejemplo:**
```
SESSION_SECRET=Xj9K2mN5pQ8rT1vY4wZ7aB0cD3eF6gH9i
```

### 3. PORT (opcional)
Puerto donde correrá la aplicación. Por defecto: `5000`
```
PORT=5000
```

### 4. NODE_ENV (automático)
Dokploy lo configura automáticamente.
```
NODE_ENV=production
```

## Pasos para Desplegar en Dokploy

### 1. Crear Base de Datos PostgreSQL
- En Dokploy, ve a **Databases** → **Create Database**
- Selecciona **PostgreSQL**
- Guarda la `DATABASE_URL` que te proporciona

### 2. Crear Nueva Aplicación
- Ve a **Applications** → **Create Application**
- Conecta este repositorio: `https://github.com/Mengi00/ags-landingpage.git`
- Dokploy detectará automáticamente el `docker-compose.yml`

### 3. Configurar Variables de Entorno
En la sección de **Environment Variables**, agrega:
```
DATABASE_URL=<la-url-de-tu-postgres>
SESSION_SECRET=<tu-clave-generada>
PORT=5000
NODE_ENV=production
```

### 4. Ejecutar Migraciones (si es necesario)
Si tu base de datos es nueva, ejecuta:
```bash
npm run db:push
```

### 5. Deploy
- Haz clic en **Deploy**
- Dokploy construirá la imagen Docker y la desplegará

## Verificar el Despliegue

La aplicación estará disponible en la URL que te proporcione Dokploy.

**Health Check:** Tu aplicación incluye un health check en `/api/health`

## Configuración de Dominio en Dokploy

Para acceder a tu aplicación:

### Opción 1: Usar el dominio de Dokploy
Dokploy te asignará automáticamente una URL.

### Opción 2: Configurar tu propio dominio
1. En Dokploy, ve a tu aplicación → **Settings** → **Domains**
2. Agrega tu dominio (ej: `landing.tuempresa.com`)
3. Dokploy te mostrará la configuración DNS necesaria
4. Actualiza los registros DNS de tu dominio:
   - **Tipo A**: Apunta a la IP del servidor Dokploy
   - O **CNAME**: Apunta al dominio de Dokploy

### Acceso Directo por Puerto
La aplicación también está disponible en:
```
http://tu-servidor:5000
```

## Notas Importantes

- ✅ Puerto 5000 expuesto para acceso directo
- ✅ La aplicación corre como usuario no-root por seguridad
- ✅ Incluye health checks automáticos
- ✅ Optimizado con build multi-stage para menor tamaño de imagen
