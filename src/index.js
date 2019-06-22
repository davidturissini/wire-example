import { createElement, register } from 'lwc';
import { registerWireService } from '@lwc/wire-service';
import App from './lwc/app/app';

registerWireService(register);

const elm = createElement('wire-example', { is: App });
document.body.appendChild(elm);