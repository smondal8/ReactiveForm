import { AbstractControl } from "@angular/forms";

export function customNameValidator(control : AbstractControl) : {[key: string]: any}|null{
    const forbidden = /admin/.test(control.value);
    return forbidden?{'forbidden': {value : control.value}}:null;
}

