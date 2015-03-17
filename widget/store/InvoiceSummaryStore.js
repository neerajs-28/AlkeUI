Ext.define('TG.store.InvoiceSummaryStore',{
	extend:'Ext.data.Store',
	model:'TG.model.InvoiceSummaryM',
	autoLoad: false,
    pageSize: 5,
    proxy: {
        type: 'ajax',
        url:'/Alke_web/home/invoice/summary',
        reader: {
            type: 'json',
            root: 'invoice'
        }
    },
    listeners: {
        load: function(){
            console.log('loaded');
        }
    }   
	
});