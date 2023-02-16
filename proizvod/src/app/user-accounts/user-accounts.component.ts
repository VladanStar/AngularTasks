import { Component } from '@angular/core';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent {
  accounts = [
    { name: 'John Smith', email: 'john.smith@example.com' },
    { name: 'Jane Doe', email: 'jane.doe@example.com' }
  ];
  selectedAccount: { name: string, email: string } | null = null;

  editAccount(account: { name: string, email: string }) {
    this.selectedAccount = { ...account };
  }

  deleteAccount(account: { name: string, email: string }) {
    const index = this.accounts.indexOf(account);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
  }

  saveChanges() {
    if (this.selectedAccount) {
      const index = this.accounts.indexOf(this.selectedAccount);
      if (index !== -1) {
        this.accounts[index] = { ...this.selectedAccount };
      }
      this.selectedAccount = null;
    }
  }

}
