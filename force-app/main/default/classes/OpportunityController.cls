public with sharing class OpportunityController 
{
    @AuraEnabled(cacheable=true)
    public static Map<Id, Opportunity> GetOpportunities(){
        Map<Id, Opportunity> opportunities=new Map<Id, Opportunity>();
        opportunities.putAll([select id, Name, StageName, Amount from Opportunity]);

        return opportunities;
    }
}