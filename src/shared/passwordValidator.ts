import { AbstractControl } from "@angular/forms";

export function confirmPassword(control : AbstractControl): {[key:string] : boolean} | null {
    const varPassword = control.get('password');
    const varConfirmPassword = control.get('confirmPassword');    
    console.log("Not Matched :"+varPassword && varConfirmPassword && varPassword?.value != varConfirmPassword.value);
    return varPassword && varConfirmPassword && varPassword.value != varConfirmPassword.value ? {'unMatchedpass':true} : null;
}