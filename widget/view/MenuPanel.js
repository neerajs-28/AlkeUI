Ext.define('TG.view.MenuPanel',{
	extend: 'Ext.tab.Panel',
	alias:'widget.menuP',
	activeTab: 0,
	border:false,
	items: [{
        title: 'Home',
       // height:'85%',
        itemId:'hmePanel',
       layout:'anchor',
	   items:[
	        {
	        	xtype:'panel',
	        	height:'30%',
	        	anchor:'100%',
	        	layout: {
	                type: 'hbox',
	                pack:'start'
	               },
	        items :[
			{
	    
			xtype:'fieldset',
			title:'Basic Info',
			itemId:'basicInfo',
			layout:'anchor',
			margin:'30 10 30 10',
			flex: 1,
			
			items:[ 
			          {
					xtype: 'textfield',
		        	fieldLabel: 'Name',
		        	itemId: 'clientName',
		        	labelWidth:50,
		        	//disabled:true,
		        	readOnly:true,
		        	value:'ALKE FIRE PROTECTION',
		        	margin:'10 0 10 10',
		        	anchor: '95%',
		        	disabledCls:'x-item-enabled',
		            allowBlank:false,
		            readOnlyCls:'readOnly'
		          
		        	},{
		        		xtype: 'textfield',
		        	    fieldLabel: 'Vat No',
			        	itemId: 'vatNo',
			        	labelWidth:50,
		        		margin:'10 0 10 10',
			        	anchor: '95%'
			        },
			        	{
		        		xtype: 'textfield',
		        	    fieldLabel: 'CST No',
		        	    itemId: 'cstNo',
		        	    labelWidth:50,
		        		margin:'10 0 10 10',
			        	anchor: '95%'
                   },
                   {
		        		xtype: 'textfield',
		        	    fieldLabel: 'Contact Person',
		        	    itemId: 'contacttPerson',
		        	    labelWidth:50,
		        		margin:'10 0 10 10',
			        	anchor: '95%'
                   },
                   {
		        		xtype: 'button',
		        	    name: 'update',
		        	    itemId:'updateBasicInfo',
		        	    width:60,
		        	    text    : 'Update',
   						scale   : 'medium',
		        		margin:'10 0 10 10',
		        		listeners :{
		        			
		        			'click':function(e, eOpts) {
		        				
		        				 var basicInfo = Ext.ComponentQuery.query('#basicInfo')[0];
		        				  items = basicInfo.down('#clientName');
	        					
		        				 
		        				if('Update'=== this.getText()) {
		        				
		        					items.setReadOnly(true);
		        					this.setText('Save');
		        				}
		        				else {
		        					items.setReadOnly(false);
		        					this.setText('Update');
		        				}
		        			}
 		        		}
			        
                   }/*,
                   {
		        		xtype: 'textfield',
		        	    fieldLabel: 'CST No',
		        	    name: 'cstNo',
		        	    labelWidth:50,
		        		margin:'10 0 10 10',
			        	
			        	anchor: '95%'
                   }*/
		]
	
	},{
			xtype:'fieldset',
			title:'Contact Info',
			itemId:'contactInfo',
			layout:'anchor',
			margin:'30 10 30 10',
			flex: 1,
			items:[ 
			          {
						xtype     : 'textareafield',
		        		grow      : true,
		        		itemId      : 'message',
		        		fieldLabel: 'Message',
		        		anchor: '95%',
			        	labelWidth:50,
		        		margin:'10 0 10 10'
		        	},{
		        		xtype: 'textfield',
		        	    fieldLabel: 'Phone',
		        	    itemId: 'phone',
			        	anchor: '70%',
			        	labelWidth:50,
		        		margin:'10 0 10 10'
			        },
			        	{
		        		xtype: 'textfield',
		        	    fieldLabel: 'email',
		        	    itemId: 'email',
			        	anchor: '80%',
			        	labelWidth:50,
		        		margin:'10 0 10 10'
			        	
                   },
                   {
		        		xtype: 'button',
		        	    name: 'update',
		        	    itemId:'updateContactInfo',
		        	    width:60,
		        	    text    : 'Update',
  						scale   : 'medium',
		        		margin:'10 0 10 10',
                   }
		]
	
		},{
	            xtype:'grid',
	            margin:'38 10 30 10',
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
	}]},{
		    xtype:'panel',
		    title:'Purchase Overview for Current Financial Year',
		    anchor:'100%',
		    layout:'fit',
		    items: [{
			xtype:'chart',
			style: 'background:#fff',
            animate: true,
            shadow: true,
            height:200,
		    flex:1,
		    store: Ext.create('Ext.data.Store',{
		    	fields:['purchase','Month'],
		    	data: [{ 'purchase': 58, 'Month':'Apr-2014' },
		        { 'purchase': 63, 'Month': 'May-2014' },
		        { 'purchase': 73, 'Month': 'June-2014' },
		        { 'purchase': 78, 'Month': 'July-2014' },
		        { 'purchase': 63, 'Month': 'Aug-2014' },
		        { 'purchase': 73, 'Month': 'Sep-2014' },
		        { 'purchase': 78, 'Month': 'Oct-2014' },
		        { 'purchase': 63, 'Month': 'Nov-2014' },
		        { 'purchase': 73, 'Month': 'Dec-2014' },
		        { 'purchase': 78, 'Month': 'Jan-2015' },
		        { 'purchase': 78, 'Month': 'Feb-2015' },
		        { 'purchase': 81, 'Month': 'Mar-2015' }]
		 
		    }),
			
		    axes: [
		           {
		               title: 'Purchase (Rs)',
		               type: 'Numeric',
		               position: 'left',
		               fields: ['purchase'],
		               minimum: 0,
		               label: {
		                    renderer: Ext.util.Format.numberRenderer('0,0')
		                },
		           },
		           {
		               title: 'Months',
		               type: 'Category',
		               position: 'bottom',
		               fields: ['Month']
		               
		           }
		       ],
		       series: [
		                {
		                    type: 'column',
		                    xField: 'Month',
		                    yField: 'purchase'
		                }
		            ]
			
			
		}] }]
   	 }, {
        title: 'Invoice Tracker',
        height:'70%',
        layout:'anchor',
         items:[
               {
                margin:'10 0 0 0',
         		xtype:'invSummary',
         		height:200,
         		anchor:'100%',
         		border:true
        
        	   },{
	            xtype:'grid',
	            anchor:'100%',
	            itemId:'invoice',
	            height:300,
	            margin:'40 0 0 0',
	            title:'Invoice Details',
	            store:'ItemStore',
	            stripeRows: false,
	            viewConfig: {
	    		    emptyText: 'There is no invoice uploaded yet.',
	    		    getRowClass: function(record, rowIndex){
	    		    	
	    		    	var grpName = record.data["groupName"];
	   			  		if(grpName ==='Total') {
	   			  	
	    	              return "total";
	   			  		}
	   			  		else if(grpName ==='Tax') {
	   			  			return  "tax";
	   			  		}
	   			  		else {
	   			  		  return  "item";
	   			  		}
	    	        }
	    		},
	            sortableColumns:false,
	            features: [{
			            
			            ftype: 'grouping',
			            groupHeaderTpl: '{name}'
			           
	             }],
	             columns:[
	             	{
		 		   header:'Sr No',
	               dataIndex:'srcNo',
	               name:'srNo',
	               flex:1,
	               renderer:function(value, metaData, record, row, col, store, gridView) {
	            	   if(value >0)
	            		   return value;
	            	   else 
	            	   return '';
	               }
	   			  },{
	   			  	header:'Item Details',
	   			  	dataIndex:'itemName',
	   			  	name:'item',
	   			  	flex:2,
	   			  	renderer: function(value, metaData, record, row, col, store, gridView) {
	   			  		var grpName = record.data["groupName"];
	   			  		if(grpName ==='Total') {
	   			  			return "<b>"+value;
	   			  		}
	   			  		else{
	   			  			return value;
	   			  		}
   			  		
	   			  	}
	   			  },{
	   			  	header: 'Rate',
	   			  	dataIndex :'rate',
	   			  	name:'rate',
	   			  	renderer: function(value, metaData, record, row, col, store, gridView) {
	   			  		
	   			  		var grpName = record.data["groupName"];
	   			  		if(grpName ==='Tax') {
	   			  			return value +"%";
	   			  			
	   			  		}
	   			  		else{
	   			  			return value;
	   			  		}
	   			  	},
	   			  	flex:1
	   			  },{
	   			  	header:'Quantity',
	   			  	dataIndex:'qty',
	   			  	name:'qty',
	   			  	xtype: 'numbercolumn', 
	   			  	format:'00,00,000',
	   			  	flex:1
	   			  },{
	   			   header:'Total',
	   			    dataIndex:'total',
	   			  	name:'total',
	   			     xtype: 'numbercolumn', 
	   			     format:'00,00,000.00',
	   			  	flex:1,
	   				renderer: function(value, metaData, record, row, col, store, gridView) {
	   			  		var grpName = record.data["groupName"];
	   			  		 value = Ext.util.Format.number(value, '0,00,00,000.00');
	   			  		if(grpName ==='Total') {
	   			  			return "<b>"+value;
	   			  		}
	   			  		else{
	   			  			return value;
	   			  		}
   			  		
	   			  	}  }
	         ],listeners: { 
	         
	         beforerender:function() {
 				// this.items.push( { xtype: 'button', ... }) ;
   				
   				var isummaryStore = Ext.data.StoreManager.get('ItemStore');
   				isummaryStore.load();
   				this.store = isummaryStore;
			 }
			}
        	   
	    }]}, {
        title: 'Place your Order',
        overflowX:'auto',
        overflowY:'auto',
        height:'100%',
        items:[{
        xtype:'panel',
        border: true,
        height:'100%',
        html:'buyyyyyy <br>hiii<br><br><br><br><br><br>jiii'
        }]
    }]
});