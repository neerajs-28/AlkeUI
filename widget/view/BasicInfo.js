Ext.define('TG.view.BasicInfo',{

	alias:'widget.basicInfo',
	extend:'Ext.panel.Panel',
	border:true
	/*layout: {
        type: 'hbox',
        align: 'stretch',
        pack:'start'
    },
	 items:[
	
			{
	    
			xtype:'fieldset',
			title:'Basic Info',
			layout:'anchor',
			margin:'30 10 100 10',
			flex: 1,
			
			items:[ 
			          {
					xtype: 'textfield',
		        	fieldLabel: 'Name',
		        	name: 'clientName',
		        	labelWidth:50,
		        	margin:'10 0 10 10',
		        	anchor: '95%'
		        	},{
		        		xtype: 'textfield',
		        	    fieldLabel: 'Vat No',
			        	name: 'vatNo',
			        	labelWidth:50,
		        		margin:'10 0 10 10',
			        	anchor: '95%'
			        },
			        	{
		        		xtype: 'textfield',
		        	    fieldLabel: 'CST No',
		        	    name: 'cstNo',
		        	    labelWidth:50,
		        		margin:'10 0 10 10',
			        	anchor: '95%'
                   },
                   {
		        		xtype: 'button',
		        	    name: 'update',
		        	    width:60,
		        	    text    : 'Update',
   						scale   : 'medium',
		        		margin:'10 0 10 10'
			        
                   },
                   {
		        		xtype: 'textfield',
		        	    fieldLabel: 'CST No',
		        	    name: 'cstNo',
		        	    labelWidth:50,
		        		margin:'10 0 10 10',
			        	
			        	anchor: '95%'
                   }
		]
	
	},		{
	    
			xtype:'fieldset',
			title:'Contact Info',
			layout:'anchor',
			margin:'30 10 100 10',
			flex: 1,
			items:[ 
			          {
						xtype     : 'textareafield',
		        		grow      : true,
		        		name      : 'message',
		        		fieldLabel: 'Message',
		        		anchor: '95%',
			        	labelWidth:50,
		        		margin:'10 0 10 10'
		        	},{
		        		xtype: 'textfield',
		        	    fieldLabel: 'Phone',
			        	name: 'phone',
			        	anchor: '70%',
			        	labelWidth:50,
		        		margin:'10 0 10 10'
			        },
			        	{
		        		xtype: 'textfield',
		        	    fieldLabel: 'email',
			        	name: 'email',
			        	anchor: '80%',
			        	labelWidth:50,
		        		margin:'10 0 10 10'
			        	
                   }
		]
	
		},{
	            xtype:'grid',
	            height:'50%',
	            margin:'32 10 100 10',
	            title:'Order Summary',
	            flex:1,
	            store:'Summary',
	            columns:[
	             	{
		 		   header:'Item',
	               dataIndex:'item',
	               name:'item',
	               flex:1.5
	   			  },{
	   			  	header:'Total',
	   			  	dataIndex:'total',
	   			  	name:'total',
	   			  	flex:1
	   			  }        
	   			]
	}]*/
});