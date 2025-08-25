import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css',
})
export class CardPricing {
  @Input()
  gameType: string = 'Digital PS4';
  @Input()
  gamePrice: string = 'R$ 149,90';
}
