import { LightningElement, wire } from 'lwc';
import LightningAlert from 'lightning/alert';
import { reduceErrors } from 'c/ldsUtils';
import GetOpportunities from '@salesforce/apex/OpportunityController.GetOpportunities'

export default class AccountCards extends LightningElement {
    oppsMap;

    @wire (GetOpportunities)
    gotOpportunities({error, data}) {
        if (data) {
            this.oppsMap=data;
        }
        else if (error) {
            let errors=reduceErrors(error).reduce((accumulator, currentValue) => accumulator.concat(', ', currentValue), '');
            this.showError('Unable to retrieve opportunities', errors.substring(2));
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