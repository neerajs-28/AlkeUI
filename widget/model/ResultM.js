Ext.define('TG.model.ResultM', {
    extend: 'Ext.data.Model',
    fields: ['srNo','invoiceId','compName',
    {name:'saleWoT',type:'int'},{name:'saleWT',type:'int'},'sellDate','tax']
});