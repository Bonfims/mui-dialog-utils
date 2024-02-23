import React from 'react';

const DialogContext = React.createContext({
    /**
     * Envia um dialogo de alerta na tela do usuário.  
     * Você pode enviar `options.title` para adicionar um titulo ao modal e também `options.label` para trocar o label do botão
     * @param {string} message Mensagem
     * @param {object} options Dados adicionais
     * @returns {Promise}
     */
    setAlert: (message, options) => new Promise((res) => alert(message) | res()),
    /**
     * Envia um dialogo de confirmação na tela do usuário.  
     * Você pode enviar `options.confirmLabel` ou `options.cancelLabel` para trocar o label dos botões
     * @param {string} message Mensagem do dialogo
     * @param {string} title Titulo do modal
     * @param {options} options Dados adicionais
     * @returns {Promise}
     */
    setConfirm: (message, title, options) => new Promise((res) => confirm(message) ? res(true) : res(false)),
    /**
     * Envia um dialogo com o conteúdo livre determinado por parâmetro.
     * > Use `setDialog(false)` para fechar o dialogo mais recente.
     * @param {object} content Conteúdo
     * @param {options} title Dados adicionais
     * @returns {null}
     */
    setDialog: (content, options) => console.error("Dialog context not initialized", content, options),
    initialized: false
});

export default DialogContext;