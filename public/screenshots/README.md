# Screenshots

Coloque aqui os prints do Presenter. A landing page os carrega automaticamente
pela URL `/screenshots/<arquivo>` (esta pasta é servida como `public/`).

Enquanto um arquivo não existir, a página **não quebra**: o Hero cai no mock
desenhado em CSS e a Galeria esconde o print ausente (ou mostra um aviso se
nenhum existir).

## Arquivos usados hoje

| Arquivo                                | Tela                                  | Onde aparece   |
| -------------------------------------- | ------------------------------------- | -------------- |
| `presenter-presentation-open-page.png` | Janela de controle (PDF aberto)       | Hero + Galeria |
| `presenter-initial-page.png`           | Tela inicial                          | Galeria        |
| `presentar-drag-and-drop-page.png`     | Arrastar e soltar o PDF               | Galeria        |
| `presenter-one-monitor-mode.png`       | Modo um monitor (tela cheia)          | Galeria        |

## Dicas

- Formatos: `.png` ou `.webp` (webp é mais leve).
- Proporção recomendada: **16:10** ou **16:9**.
- Tamanho: ~1600–2400 px de largura.
- Para trocar nomes, ordem, título ou legenda, edite o array `screenshots` e a
  constante `HERO_SHOT` em `src/data/content.ts`.
