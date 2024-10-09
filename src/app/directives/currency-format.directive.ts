import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true,
})
export class CurrencyFormatDirective {
  priceElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.priceElement = el.nativeElement;
  }

  ngAfterContentInit() {
    if (this.priceElement) {
      const valueAndCurrency = this.priceElement.innerText.split('');
      const firstNumberIndex = valueAndCurrency.findIndex((character) =>
        Number(character)
      );

      const value = valueAndCurrency.slice(firstNumberIndex, valueAndCurrency.length).join('');
      const currency = valueAndCurrency.slice(0, firstNumberIndex).join('');

      const span = this.renderer.createElement('span');
      const currencyTextNode = this.renderer.createText(currency);
      const valueTextNode = this.renderer.createText(value);

      this.renderer.appendChild(span, currencyTextNode);

      this.priceElement.innerHTML = '';
      this.renderer.appendChild(this.priceElement, span);
      this.renderer.appendChild(this.priceElement, valueTextNode);
    }
  }
}
