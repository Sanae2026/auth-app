# Contraseñas seguras: hashing y salts

## Por qué nunca guardar contraseñas en texto plano
Si la base de datos se filtra (un ataque muy común), todas las contraseñas
quedan expuestas inmediatamente. Los usuarios suelen reutilizar contraseñas,
así que un atacante puede acceder a sus cuentas de otros servicios.

## Hashing con bcrypt / argon2
En lugar de guardar la contraseña, se guarda un hash irreversible:
`contraseña → función hash → $2b$10$X9... (hash almacenado)`

Al hacer login, se hashea la contraseña introducida y se compara con
el hash almacenado. La contraseña original nunca se recupera.

## Salts
Un salt es un valor aleatorio que se añade a la contraseña antes de hashearla:
`hash(contraseña + salt_aleatorio)`

Esto garantiza que dos usuarios con la misma contraseña tengan hashes
completamente distintos, lo que inutiliza los ataques de tabla arcoíris
(diccionarios de hashes precalculados).

Firebase Auth gestiona todo esto internamente usando bcrypt, por lo que
nunca almacenamos contraseñas nosotros directamente.