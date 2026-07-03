# QDA-Gibbs — Anàlisi qualitativa automàtica (MiniMoi-46)

App web (PWA) d'anàlisi qualitativa de dades: puges un fitxer (Excel, CSV o text), l'app neteja les dades, fa codificació oberta amb **cites literals verificades contra la font** (anti-invenció), agrupa en temes, genera la taula participant×codi i redacta l'informe en català. Metodologia de Graham Gibbs (*El análisis de datos cualitativos en investigación cualitativa*, SAGE) + panell de 18 anàlisis fonamentades a la literatura (Braun & Clarke, Framework/Gale, GRADE-CERQual, member checking, Lincoln & Guba, COREQ, saturació de Guest et al., anàlisi emocional amb doble agent…).

## Ús

1. Obre **https://moivila1980.github.io/qda-gibbs/**
2. ⚙ Configuració → enganxa **la teva clau API** (DeepSeek `sk-…`, OpenRouter `sk-or-…` o Gemini `AIza…`). Cada usuari fa servir la seva clau i paga només el seu consum; l'app no en porta cap d'incorporada.
3. Arrossega el fitxer, revisa l'avís de lectura i prem **▶ Fes l'anàlisi completa**.

## Privadesa

Tot el processament és al teu navegador: les dades i la clau es desen només en local (localStorage). L'únic que surt del teu ordinador són els fragments de text enviats al proveïdor del model que triïs.

## Instal·lació com a app

Botó **«⤓ Instal·la l'app»** a la capçalera (PWA): queda al menú d'inici i funciona offline (excepte les crides al model).
