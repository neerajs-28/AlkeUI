Ext.define('TG.store.Summary',{
	extend:'Ext.data.Store',
	 fields: ['item', 'total'],
	 data:[
						            {
						            	item:'Total Orders Placed',
						            	 total:'30'
						            },{
						            	item:'Pending Orders',
						            	 total:'1'
						            },{
						            	item:'Billing Amount',
						            	 total:'Rs 5679'
						            }
						          ]
});