import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective implements OnInit{
  private htmlElement?: ElementRef<HTMLElement>;
  private _color:string = 'red';
  private _errors? : ValidationErrors | null | undefined;

  @Input() set color( value: string ){
   this._color = value;
   this.setStyle();
  }
  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle():void{
    if( !this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(){
    if( !this.htmlElement ) return;
    if( !this._errors ){
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    if (errors.includes('required')) this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
    if (errors.includes('email')) this.htmlElement.nativeElement.innerText = 'Ingrese un email valido';
    if (errors.includes('minlength')) this.htmlElement.nativeElement.innerText = `Cantidad de caracteres minima es de ${this._errors['minlength']['requiredLength']}`;
    console.log(this._errors['minlength']['requiredLength']);
    return
  }

}
