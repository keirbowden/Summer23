public with sharing class AccountController 
{
    @AuraEnabled(cacheable=true)
    public static Map<Id, Account> GetAccounts(){
        Map<Id, Account> accounts=new Map<Id, Account>();
        accounts.putAll([select id, Name from Account]);

        return accounts;
    }
}