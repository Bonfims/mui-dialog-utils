# Dialog Utils
Esse pacote oferece funções auxiliares para apresentar caixas de diálogos, usando o componente [Mui Dialog](https://mui.com/material-ui/react-dialog/)

## Instalação
Use o link do próprio repositório para instalar o modulo, no seu projeto, execute o seguinte comando:
```shell
npm install mui-dialog-utils 
```

## Importação
No seu projeto react, após a instalação, basta usar:
```jsx
import { DialogProvider, useDialog } from 'mui-dialog-utils';
```
ou
```jsx
import useDialog from 'mui-dialog-utils/useDialog';
```

## Demonstração
Inicie o projeto com e acesse a pagina inicial que contém [exemplos](./src/Preview.jsx).
```
npm run dev
```

## Funções
Abaixo a lista de funções disponíveis, exemplos completos voce pode encontrar no arquivo [`Preview.jsx`](./src/Preview.jsx).
> Durante os teste, basta clicar fora do dialogo para fecha-lo.

### setAlert
Apresenta um modal básico com uma mensagem e um botão de confirmação.
```jsx
function Test() {
	const { setAlert } = useDialog();

	const handleClick = () => {
		setAlert("Hello World Message", { 
			// ... Dialog Props
			fullWidth: true,
			maxWidth: "xs"
		})
		.finally(() => {
			console.log("Dialog close triggered!");
		})
	};

	return (
		<button onClick={handleClick}>Show Alert</button>
	);
}
```
> Observe que este retorna uma `Promise` que é resolvida a medida que o cliente fecha o dialogo.

### setConfirm
Apresenta um modal básico com um titulo, uma mensagem, botão de confirmação e outro para cancelamento.
```jsx
function Test() {
	const { setConfirm } = useDialog();

	const handleClick = () => {
		setConfirm("Title Are You Sure?", "Hello World Message Confirmation", { 
			// ... Dialog Props
			fullWidth: true,
			maxWidth: "xs"
		})
			.then((result) => {
				if(result)
					console.log("Confirmation triggered");
				else
					console.log("Cancellation or close triggered");
			});
	};

	return (
		<button onClick={handleClick}>Show Confirm</button>
	);
}
```
> Observe que este retorna uma `Promise` que é resolvida a medida que o cliente interage com as ações de confirmação ou cancelamento do dialogo.

### setDialog
Apresenta um modal básico de conteúdo aberto, onde voce pode passar seu próprio componente.
```jsx
function MyComponent({ param }){
	return <div>My Component Param {param}</div>
};

function Test() {
	const { setDialog } = useDialog();

	const handleClick = () => {
		setDialog(<MyComponent param={123} />, { 
			// ... Dialog Props
			fullWidth: true,
			maxWidth: "xs",

			// ... Triggered when modal is closing by outside click
			onClose: () => setDialog(false)
		});
	};

	return (
		<button onClick={handleClick}>Show Dialog</button>
	);
}
```
> Este não retorna uma `Promise` e é necessário que voce envie o callback de fechamento do dialogo, passando `setDialog(false)` para fechar o dialogo mais recente.*

## Nested Dialogs (Diálogos aninhados)
Essa é uma das formas de utilização do dialogo, sobrepor um novo dialogo acima de um já existente, como proposto [neste exemplo de `modal`](https://mui.com/material-ui/react-modal/#nested-modal), é possível aninhar os diálogos inserindo o proximo dialogo dentro da estrutura do primeiro.

### *Funcionamento
Este modulo foi encapsulado dentro da estrutura de [`Context Provider`](https://react.dev/learn/passing-data-deeply-with-context) do react, de forma que facilita a utilização das funções sem a necessidade de re-implementar a construção dos modais a cada pagina ou componente que precisa utiliza-lo. Além disso, pensando na estrutura de aninhamento de diálogos, cada contexto de dialogo faz o `empilhamento` de diálogos a medida que os métodos `setAlert`, `setConfirm` e `setDialog` são chamados, e a renderização deles é estruturada de uma forma que o proximo dialogo é declarado dentro do anterior, permitindo a renderização de diálogos sobrepostos respeitando a estrutura [proposta pela lib do `mui`](https://mui.com/material-ui/react-modal/#nested-modal).

> Acesse o arquivo [DialogProvider.jsx](./src/components/DialogProvider.jsx) para mais detalhes de como está sendo feito o `empilhamento`. 

## Estrutura de contextos
É importante ter em mente que para o conteúdo do seu componente que está sendo carregado em uma caixa de dialogo tenha acesso ao contexto de um provedor terceiro, é necessário que o contexto do dialogo esteja dentro da hierarquia, vide exemplos no arquivo [Preview.jsx](./src/Preview.jsx) a partir da linha 92.

## Contribuir
Esse modulo foi construído com base no artigo abaixo que mostra como distribuir seu projeto como modulo npm.
- Fonte: [Building and publishing a react component](https://dev.to/bieefilled/building-and-publishing-a-react-component-with-vite-and-npm-1npd)