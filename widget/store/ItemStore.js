Ext.define('TG.store.ItemStore',{
	
	extend:'Ext.data.Store',
	model:'TG.model.Invoice',
	autoLoad: false,
    pageSize: 1,
    groupField:'groupName',
    proxy: {
        type: 'ajax',
        url:'/Alke_web/home/invoice/admin/2014/AFP-INV-001',
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