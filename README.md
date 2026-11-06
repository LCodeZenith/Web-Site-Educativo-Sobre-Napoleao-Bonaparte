# 👑 A História de Napoleão

Página de estudo sobre **Napoleão Bonaparte**, da Revolução Francesa ao exílio em Santa Helena.
Feita com HTML, CSS e JavaScript puro (sem frameworks e sem etapa de build) como treino de **CSS Flexbox**.

## Funcionalidades

- Layout em três colunas com Flexbox: uma imagem lateral de cada lado e o texto no centro
- Retrato de Napoleão e título centralizados no topo do conteúdo
- Texto dividido em oito parágrafos, com linha de leitura confortável e alinhamento justificado
- Layout responsivo: abaixo de 800px as imagens laterais somem e o texto ocupa a largura toda
- Efeito no subtítulo: o texto fica vermelho quando o mouse passa por cima (feito com JavaScript)
- Tema escuro, com fundo `#171b24` e texto branco

## Estrutura do projeto

```
napoleao/
├── index.html        # Estrutura da página
├── css/
│   └── style.css     # Todos os estilos
├── js/
│   └── script.js     # Efeito de hover no subtítulo
├── .gitignore
├── .editorconfig
└── README.md
```

## Conceitos de CSS praticados

| Conceito | Onde aparece |
| --- | --- |
| `display: flex` e `flex-direction` | `body`, `.layout` e `.container` |
| `align-items` e `justify-content` | Centralização do conteúdo e das colunas |
| `gap` | Espaçamento entre colunas e entre elementos |
| `flex: 1` e `flex: 3` | Proporção entre imagens laterais e texto |
| `object-fit: cover` | Retrato de Napoleão sem distorção |
| `@media (max-width: 800px)` | Versão para celular |

## Como rodar

Basta abrir o `index.html` no navegador (duplo clique).

Se preferir um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

> As imagens são carregadas da internet, então é preciso estar online para vê-las.

## Publicar no GitHub Pages

1. Envie o projeto para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Aguarde alguns minutos: o site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

> O arquivo precisa se chamar `index.html` em **minúsculas**. O GitHub Pages diferencia maiúsculas de minúsculas, e um `index.HTML` não seria reconhecido como página inicial.

## Imagens

As três imagens são carregadas de links externos:

| Imagem | Origem |
| --- | --- |
| Retrato central | Wikimedia Commons |
| Imagem lateral direita | Pixabay |
| Imagem lateral esquerda | Página de produto de uma loja online |

Links externos podem sair do ar a qualquer momento. Para um projeto mais estável, baixe as imagens
para uma pasta `img/` e troque os `src` no `index.html`. Se for publicar, confira também a licença
de cada imagem.
