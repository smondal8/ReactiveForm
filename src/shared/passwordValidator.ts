import { AbstractControl } from "@angular/forms";

export function confirmPassword(control : AbstractControl): {[key:string] : boolean}|null{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value != confirmPassword.value ? {'unMatchedpass':true} : null;
}