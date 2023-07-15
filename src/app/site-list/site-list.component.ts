import { Component } from '@angular/core';
import { PasswordManagerService } from '../password-manager.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent {
  constructor(private passwordManager: PasswordManagerService) {
    this.loadSite();
  }

  onSubmit(values: object) {
    console.log(values);

    this.passwordManager
      .addSite(values)
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  loadSite() {
    this.passwordManager.loadSite().subscribe((value) => {
      console.log(value);
    });
  }
}
