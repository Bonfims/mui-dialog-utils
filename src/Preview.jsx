import React from 'react';

import { DialogProvider, useDialog } from './Dialog';

/**
 * Estrutura de contexto
 */
const TestContext = React.createContext("Null Context");
const TestProvider = ({ children, value }) => <TestContext.Provider value={value}>{children}</TestContext.Provider>;
const useTest = () => React.useContext(TestContext);

/**
 * Dialogo livre com exemplo de aninhamento de dialogo
 */
function Custom({ modal = 0 }) {
    const { setDialog } = useDialog();

    const handleClick = () => {
        // ...
        setDialog(<Custom modal={++modal} />, { maxWidth: "sm", fullWidth: true, onClose: () => setDialog(false) });
    };

    return (
        <div style={{ padding: "30px" }}>
            <h2>My Custom title {modal}</h2>
            <div>
                <p>My custom content</p>
                <input type="text" />
            </div>
            <br />
            <br />
            <div>
                <button onClick={handleClick}>Nested</button>
            </div>
        </div>
    )
};

/**
 * Esse componente carrega o contexto de teste junto com o dialogo, para mostrar a estrutura de carregamento de contexto e como o dialogo afeta ela.
 */
function ContextExample() {
    const { setDialog } = useDialog();
    const testContextValue = useTest();

    return (
        <div style={{ padding: "100px" }}>
            <h3>Context Test</h3>
            <br />
            <button onClick={() => { setDialog(<div style={{ padding: "100px" }}>{testContextValue}</div>, { fullWidth: true, maxWidth: "xs", onClose: () => setDialog(false) }) }}>
                Show Context Value
            </button>
        </div>
    );
}

/**
 * Esse componente carrega o Dialogo e apresenta um botão para abrir o componente `ContextExample` no dialogo.
 */
function ButtonThatLoadsDialogWithContextExample({ children }){
    const { setDialog } = useDialog();

    return (
        <button onClick={() => { setDialog(<ContextExample />, { fullWidth: true, maxWidth: "sm", onClose: () => setDialog(false) }) }}>
            {children}
        </button>
    )
};

function Preview() {
    const { setAlert, setConfirm, setDialog } = useDialog();

    return (
        <div style={{ padding: "100px" }}>
            <h1>Dialog Utils</h1>
            <button onClick={() => { setAlert("Hello World!", { fullWidth: true, maxWidth: "xs" }).finally(() => console.log("close triggered")) }}>
                Alert
            </button>
            <br />
            <hr />
            <button onClick={() => { setConfirm("Hello World!", "Confirm Dialog", { fullWidth: true, maxWidth: "xs" }).then(result => console.log("Triggered " + result)) }}>
                Confirm
            </button>
            <br />
            <hr />
            <button onClick={() => { setDialog(<Custom />, { fullWidth: true, maxWidth: "md", onClose: () => setDialog(false) }) }}>
                Dialog
            </button>
            <br />
            <hr />
            {
            /**
             * Tenha em mente que se o conteúdo dentro do seu dialogo for carregar um contexto, o seu provedor de dialogo tem que estar inserido dentro do contexto.
             */
            }
            <TestProvider value="Filled Context!">
                <ButtonThatLoadsDialogWithContextExample>
                    Context without provider
                </ButtonThatLoadsDialogWithContextExample>
                <br />
                <hr />
                <DialogProvider>
                    <ButtonThatLoadsDialogWithContextExample>
                        Context with provider
                    </ButtonThatLoadsDialogWithContextExample>
                </DialogProvider>
            </TestProvider>
        </div>
    )
}

export default function PreviewProvider() {
    return (
        <DialogProvider>
            <Preview />
        </DialogProvider>
    );
}

