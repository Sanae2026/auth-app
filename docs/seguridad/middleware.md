# Middleware vs protección en el cliente

## Middleware (Edge Runtime)
El middleware intercepta la petición HTTP **antes** de que Next.js renderice
cualquier componente. Si no hay sesión válida, devuelve un HTTP 302 al instante.
El servidor nunca llega a ejecutar el código del dashboard.

## Protección solo en el cliente (useEffect)
Si proteges una ruta solo con `useEffect(() => { if (!session) router.push('/login') })`,
Next.js renderiza el componente completo, lo envía al navegador y **luego**
el hook comprueba la sesión. Esto significa:

- El HTML del dashboard llega al navegador aunque no estés autenticado.
- Un atacante puede leer ese HTML con las DevTools antes de ser redirigido.
- Con SSR, los datos privados ya habrán sido renderizados en el servidor.

**Conclusión:** La protección en el cliente es insuficiente para datos sensibles.
Siempre usa middleware o `redirect()` en Server Components como primera línea.