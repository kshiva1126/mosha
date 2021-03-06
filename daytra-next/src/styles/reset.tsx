import { css } from 'styled-components'

const reset = css`
*,
html,
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
label,
fieldset,
input,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

fieldset,
img {
  border: 0
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal
}

ol,
ul {
  list-style: none
}

caption,
th {
  text-align: left
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

q:before,
q:after {
  content: ''
}

/* Global reset-RESET */
/* The below restores some sensible defaults */
strong {
  font-weight: normal
}

em {
  font-style: normal
}

img {
  border: none
}

input[type="button"],
input[type="submit"],
button {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 0;
  width: auto;
  overflow: visible;
  padding: 0;
  font-size: 0;
  line-height: 0;
  -webkit-box-sizing: content-box;
  box-sizing: border-box;

  &::-webkit-search-decoration {
    display: none;
  }

  &::focus {
    outline-offset: -2px;
  }
}

input[type="text"],
input[type="number"],
input[type="tel"],
input[type="password"],
input[type="date"],
input[type="email"],
textarea,
select {
  outline: none;
}

select::-ms-expand {
  display: none;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="date"],
input[type="number"] {
  -moz-appearance: textfield;
}

select {
  background-color: #fff;
}

a {
  text-decoration: none;
  color: inherit;
}

i {
  font-style: normal;
}
`

export default reset;