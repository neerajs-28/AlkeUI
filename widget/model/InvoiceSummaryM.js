Ext.define('TG.model.InvoiceSummaryM',{
	extend: 'Ext.data.Model', 
	fields: ['srNo','invoiceId', 'invoicedate','invoiceCost','invoicePayStatus','po','poDate','invoiceOrdrStatus','downloadLink']
});