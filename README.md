# 📚 Responsive Adjust
Desenvolvi o projeto utilizando JavaScript para atender uma necessidade pessoal de ajustar tamanhos nas propriedades CSS de acordo com o tamanho da viewport do usuário, de uma maneira mais responsiva e intuitiva do que as media queries do CSS.

## ✈️ Tecnologias
- HTML
- CSS
- JavaScript

## 💻 Resultado
<div align="center">
  <img src="https://i.imgur.com/5gonwVC.gif" width="650px" alt="Responsive Adjust" />
</div>

## 🤷‍♂️ Como utilizar?
No arquivo <a href="https://github.com/RuuuFF/responsive-adjust/blob/master/ResponsiveAdjust.js">ResponsiveAdjust.js</a> existe um objeto chamado `Options` e um array chamado `CSSDeclarations`.

Começando por `Options`:
```js
const Options = {
  minWidth: 480,
  maxWidth: 1365,
  measure: "rem",
};
```
O objeto `Options` recebe `minWidth`, `maxWidth` e `measure`.
- `minWidth` e `maxWidth` são inteiros, representam o valor minimo e máximo da viewport do usuário e serão utilizados para calcular a escala dos valores para o CSS.
- `measure` é a unidade de medida que será utilizada no CSS.

Agora, no array `CSSDeclarations`:
```js
const CSSDeclarations = [
  {
    selector: ":root",
    propAndValue: [
      { property: "--xlarge", min: 2.5, max: 5 },
      { property: "--large", min: 1.7, max: 3.4 },
    ],
  },

  {
    selector: "div",
    propAndValue: [
      { property: "width", min: 30, max: 60 },
      { property: "height", min: 12.5, max: 25 },
    ],
  },
];
```

O array `CSSDeclarations` recebe objetos, cada um contendo um atributo `selector` e um array chamado `propAndValue`.
- `selector` recebe o seletor CSS (classe, id, pseudo-elemento, etc...).
- `propAndValue` é um array que recebe objetos, cada um com os atributos  `property`, `min` e `max`.
  - `property` é uma string e recebe o nome da propriedade CSS, como font-size, width, etc... Também aceita variáveis CSS.
  - `min` e `max` são os valores mínimo e máximo que poderão ser aplicados na propriedade fornecida.

Desse modo, enquanto a tela estiver entre 480px e 1365px, utilizando o seletor `:root`, o tamanho da variável CSS `--xlarge` irá escalar de "2.5rem" a "5rem" e a variável `--large` de "1.7rem" a "3.4rem". O mesmo acontece com o seletor `div` e as propriedades `width` e `height`.

Sendo ainda mais descritivo, quando o viewport estiver maior ou igual a 1365px, o seletor `div` terá sua propriedade `width` em "60rem" e `height` em "25rem".

## ⚖ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
