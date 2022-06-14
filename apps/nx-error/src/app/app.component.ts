import { Component } from '@angular/core';
import '@nx-error/util/advanced/dialog';
import '@nx-error/util/advanced/dropdown';
import '@nx-error/util/advanced/dropdown-item';
import '@nx-error/util/advanced/inline-dialog';
import '@nx-error/util/advanced/search';
import '@nx-error/util/advanced/select';
import '@nx-error/util/advanced/sidebar';
import '@nx-error/util/advanced/toggle-group';
import '@nx-error/util/basic/button';
import '@nx-error/util/basic/buttons';
import '@nx-error/util/basic/checkbox';
import '@nx-error/util/basic/circle';
import '@nx-error/util/basic/colored-icon';
import '@nx-error/util/basic/icon';
import '@nx-error/util/basic/icon-picker';
import '@nx-error/util/basic/input';
import '@nx-error/util/basic/lozenge';
import '@nx-error/util/basic/radio';
import '@nx-error/util/basic/tag';
import '@nx-error/util/layout/card';
import '@nx-error/util/layout/card-list';

@Component({
  selector: 'nx-error-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nx-error';
}
