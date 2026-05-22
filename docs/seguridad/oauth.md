# Flujo OAuth 2.0

Cuando el usuario hace clic en "Iniciar sesión con GitHub":

1. NextAuth genera un parámetro `state` aleatorio para prevenir ataques CSRF
   y redirige al usuario a `github.com/login/oauth/authorize`.
2. GitHub muestra su pantalla de autorización con los permisos solicitados.
3. Si el usuario acepta, GitHub redirige de vuelta a nuestra app a
   `/api/auth/callback/github?code=XXX&state=YYY`.
4. NextAuth verifica que el `state` coincide (seguridad CSRF).
5. NextAuth hace una llamada servidor a servidor a GitHub para intercambiar
   el `code` por un `access_token`. Esto ocurre en el servidor para que el
   token nunca pase por el navegador del usuario.
6. Con el `access_token`, NextAuth llama a la API de GitHub para obtener el
   perfil del usuario (nombre, email, avatar).
7. NextAuth crea un JWT firmado con `NEXTAUTH_SECRET` que contiene esos datos.
8. El JWT se guarda en una cookie `HttpOnly`, inaccesible desde JavaScript,
   lo que protege contra ataques XSS.
9. El usuario queda autenticado y es redirigido al dashboard.