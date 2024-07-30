import React, { useState } from 'react';
import DialogContext from './DialogContext';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";

import { ErrorBoundary } from 'react-error-boundary';
import MuiAlert from '@mui/material/Alert';

function Title({ label }) {
    return <DialogTitle>{label || "Title's default label"}</DialogTitle>;
};

function Description({ message }) {
    return (
        <DialogContent sx={{ p: 3 }} >
            <DialogContentText sx={{ whiteSpace: "pre-line" }}>
                {message || "Description's default message"}
            </DialogContentText>
        </DialogContent>
    );
};

function Content({ children }) {
    return (
        <ErrorBoundary
            fallback={(err) =>
                <MuiAlert severity='error'>Erro ao apresentar conteúdo do dialogo: {err.message}</MuiAlert>
            }
        >
            {children}
        </ErrorBoundary>
    );
};

function Action({ children }) {
    return (
        <DialogActions sx={{ mr: 3, mb: 1 }}>
            {children || <MuiAlert severity='warning'>Nenhuma ação disponível.</MuiAlert>}
        </DialogActions>
    );
};

function NestedDialog({ title, content, actions, options, index, next }) {
    const { globalDialogProps } = React.useContext(DialogContext);

    return (
        <Dialog
            key={`${index || "last"}-${title || "custom"}`}
            {...options}
            {...({ ...globalDialogProps, ...options?.dialogProps })}
            open
            onClose={options?.onClose}
        >
            { next && <NestedDialog {...next} /> }
            {title}
            {content}
            {actions}
        </Dialog>
    )
};

export default function DialogProvider({ globalDialogProps, children }) {
    const { globalDialogProps: currentGlobalDialogProps } = React.useContext(DialogContext);
    const [dialogs, setDialogsStack] = useState([]);

    const handleClose = React.useCallback(() => setDialogsStack((prev) => { const n = [...prev]; n.pop(); return n; }), [setDialogsStack]);

    const setDialog = React.useCallback((title, content, actions, options = {}) =>
        setDialogsStack((prev) => { const n = [...prev, { title, content, actions, options }]; return n }), [setDialogsStack]);

    /**
     * Faz uma seleção genérica dos parâmetros necessários para os diferentes tipos de Dialogo e passa para o método `setDialog` que vai empilhar.
     * @param {string} title 
     * @param {string} message 
     * @param {array} actions 
     * @param {object} options 
     * @param {boolean} reject 
     * @returns 
     */
    const setGeneric = React.useCallback((title, message, actions, options, reject) => new Promise((res, rej) =>
        setDialog(
            title ? <Title label={title} /> : undefined,
            <Description message={message} />,
            <Action>
                {
                    [actions].flat().map((action, i) =>
                        <Button
                            key={i}
                            onClick={() =>
                                handleClose() |
                                res(action?.value === undefined ? action?.label : action?.value)
                            }
                            {...options?.buttonProps}
                        >
                            {action?.label}
                        </Button>
                    )
                }
            </Action>,
            { onClose: () => handleClose() | reject ? rej("dialog closed") : res(), ...options }
        )), [setDialog]);

    const setAlert = React.useCallback((message, options) =>
        setGeneric(
            options?.title,
            message,
            { label: options?.label || "Confirmar" },
            options
        ), [setGeneric]);

    const setConfirm = React.useCallback((message, title, options) =>
        setGeneric(
            title,
            message,
            [
                { label: options?.confirmLabel || "Confirmar", value: true },
                { label: options?.cancelLabel || "Cancelar", value: false }
            ],
            options,
            true
        ), [setGeneric]);

    const setCustom = React.useCallback((content, options) =>
        content ? setDialog(
            null,
            <Content>{content}</Content>,
            null,
            options
        ) : handleClose(), [handleClose, setDialog]);

    const shared = React.useMemo(() => ({
        globalDialogProps: { ...currentGlobalDialogProps, ...globalDialogProps },
        setDialog: setCustom, 
        setConfirm, 
        setAlert,
        handleClose
    }), [currentGlobalDialogProps, globalDialogProps, setCustom, setConfirm, setAlert, handleClose]);

    return (
        <DialogContext.Provider value={shared}>
            {
                children
            }
            {
                dialogs?.length > 0 && 
                    <NestedDialog { ...dialogs.reduceRight((a,b,c) => ({ ...b, next: { ...a, index: c } })) } />
            }
        </DialogContext.Provider>
    );
};