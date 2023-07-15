import { Component } from '@angular/core';
import { PasswordManagerService } from '../password-manager.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent {
  constructor(private passwordManagerService: PasswordManagerService) {
    this.loadSite();
  }

  onSubmit(values: object) {
    console.log(values);

    this.passwordManagerService
      .addSite(values)
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  loadSite() {
    this.passwordManagerService.loadSite().subscribe((value) => {
      console.log(value);
    });
  }
}
