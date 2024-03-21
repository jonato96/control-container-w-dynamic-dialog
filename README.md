# DynamicDialog

Hola amigos, como están, espero me puedan guiar en este caso.

## Reproducción del problema

He creado dos componentes padres, uno donde uso dialog y otro donde uso dynamic dialog.
En el html principal pueden comentar y descomentar los componentes para reproducir el error.

## Que sucede?

Estaba estudiando el uso del control container, acorde a lo que entiendo cuando uso el dialog normal, no hay problemas porque dicho componente lo ubico dentro del form.
En cambio cuando uso dynamic dialog no funciona porque tengo entendido que se renderiza de forma dinamica fuera del app-root.

## Necesidad?

Estoy trabajando con formularios anidados y necesito gestionar forms groups hijos que forman parte de un form group principal.
Estos form group hijos se cargan con informacion que debe ser ingresada con antelacion, si hago esto con el dialog me saltan errores, puesto que el dialos se carga desde un inicio.
En cambio con un dynamic dialog no tendria problema porque se carga dinamicamente restringido a que primero de llene la información principal.

## Dynamic Dialog y Control Container?

Es posible es uso de dynamic dialog y control container?
Es correcto tratar de hacerlo de esa forma?
Hay alguna alternativa?

## Gracias

De antemano agradezco su ayuda amigos.
(Disculparán si ha codigo espaguetti, solo es un ejemplito xD)
