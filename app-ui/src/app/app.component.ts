import { Component, Renderer2 } from '@angular/core';
import { DataModal } from './common/DataModal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-ui';

  constructor(private render: Renderer2){
    this.render.listen('window', 'load', () => {
      DataModal.getInstance().window = document.getElementById('app-root');
    })
  }
}
