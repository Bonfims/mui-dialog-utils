import React from 'react';
import DialogContext from './DialogContext';

export default function useDialog() {
    return React.useContext(DialogContext);
};