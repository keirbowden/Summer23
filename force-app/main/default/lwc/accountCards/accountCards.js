import { LightningElement, wire } from 'lwc';
import LightningAlert from 'lightning/alert';
import { reduceErrors } from 'c/ldsUtils';
import GetAccounts from '@salesforce/apex/AccountController.GetAccounts'

export default class AccountCards extends LightningElement {
    accountsMap;

    @wire (GetAccounts)
    gotAccounts({error, data}) {
        if (data) {
            this.accountsMap=data;
        }
        else if (error) {
            let errors=reduceErrors(error).reduce((accumulator, currentValue) => accumulator.concat(', ', currentValue), '');
            this.showError('Unable to retrieve accounts', errors.substring(2));
        }
    }

    async showError(heading, message) {
        await LightningAlert.open({
            message: message,
            theme: 'error',
            label: heading,
            variant: 'header'
        });
    }
    
}