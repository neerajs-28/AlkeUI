Ext.define('TG.view.Result',{
	extend:'Ext.grid.Panel',
	alias:'widget.resultGrid',
	//width:'65%',
	store:'ResultSt',
	bodyCls:{
		'height':'auto'
	},
	features:[ {
		ftype:'summary'
	}
	],
	itemId:'invoicePnl',
	title:'Statistics',
	strips:true,
	 dockedItems: [{
	 	pageSize:'5',
        xtype: 'pagingtoolbar',
        store: 'ResultSt',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],
    columns:[{
               header:'Sr no',
               dataIndex:'no',
               name:'serialNo',
               dataIndex:'srNo',
               filterable:true,
               summaryRenderer: function(){
            	return '<b>Totals:</b>';
       		    }
   			  },{
   			  	header:'Invoice Id',
   			  	dataIndex:'invoiceId',
   			  	name:'invoiceId'
   			  },{
   			  	header: 'Company Name',
   			  	dataIndex:'compName',
   			  	name:'compName'
   			  	//width:150
   			  },{
   			  	header: 'Sales w/o tax',
   			  	dataIndex:'saleWoT',
   			  	name:'saleWoT',
   			  	summaryType:'sum'
   			  },{
   			  	header: 'Sales with Tax',
   			  	dataIndex :'saleWT',
   			  	name:'saleWT',
   			  	summaryType:'sum'
   			  },{
   			  	header:'Selling date',
   			  	dataIndex:'sellDate',
   			  	name:'sellDate'
   			  },{
   			  	header:'Tax',
   			  	dataIndex:'tax',
   			  	name:'tax'
    
   		    }],
	initComponent : function() {

        this.callParent(arguments);
	}
	
});