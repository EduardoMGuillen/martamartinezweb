IMÁGENES DE LA TARJETA DE REGALO (animación de sobre + flip)
============================================================

La carta (sobre) se abre al tocarla y sale la tarjeta. Luego, si tocas la
tarjeta, gira y muestra el mensaje. Por eso hacen falta DOS fotos:

  tarjeta-frente.jpg    -> el frente de la tarjeta
  tarjeta-reverso.jpg   -> el reverso con el mensaje impreso

Déjalas en esta carpeta (/public/tarjetas/) con esos nombres exactos.
Después, en app/GiftCardPicker.js, pon  ready: true  en el objeto giftCard
para que se vean tus fotos reales en vez del diseño de respaldo.

CÓMO HACER LAS FOTOS (para que queden pro)
  - De frente (sin ángulo), bien iluminadas, sin sombras fuertes.
  - Fondo liso, mejor blanco.
  - Misma proporción en ambas, horizontal (recomendado ~1000x630 px).
  - El reverso debe leerse bien (el mensaje impreso nítido).

NOTA: ya no se elige diseño, solo el importe (25 / 50 / 100 €). Si en el
futuro quieres varios diseños, se puede volver a poner.
