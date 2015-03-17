Ext.define('TG.view.InvoiceSummary',{

	 extend:'Ext.grid.Panel',
	 alias:'widget.invSummary',
	 title: 'tracking Panel',
	 itemId:'invSummary',
	 viewConfig: {
		    emptyText: 'There are no invoices to display'        
		},
		strip:true,
	 columns:[{
	 		   header:'Sr No',
	 		   xtype: 'rownumberer',
               name:'srNo',
               flex:0.5
   			  },{
   			  	header:'Invoice Id',
   			  	dataIndex:'invoiceId',
   			  	name:'invoiceId',
   			  	flex:1
   			  },{
   			  	header: 'Invoice Date',
   			  	dataIndex :'invoicedate',
   			  	name:'inDate',
   			  	xtype:'datecolumn',
   			  	format: 'd-M-Y',
   			  	flex:1
   			  },{
   			  	header:'Invoice(Rs)',
   			  	dataIndex:'invoiceCost',
   			  	name:'invCost',
   			    xtype: 'numbercolumn', format:'00,00,000.00',
   			  	flex:1
   			  },{
   			  	header:'Invoice Payment Status',
   			  	dataIndex:'invoicePayStatus',
   			  	name:'invPayStatus',
   			  	flex:1,
   			  	renderer: function(value, metaData, record, row, col, store, gridView){
   				 
   			  		var orderStatus = record.data['orderStatus'];
   			  	     var color ='RED';
   			  		if(orderStatus=== 'COMPLETED') {
   			  			
   			  			if(value===' COMPLETED') {
   			  			color ='GREEN';
   			  			return "<font color= "+color+">DONE</font>";
   			  			}else{
   			  				color ='RED';
   			  			return "<font color= "+color+">DONE</font>";
   			  			}
   			  		}
   			  		else  {
   			  			return "<center>--</center>";
   			  		}
   			  	}
   		      },{
   			  	header: 'Purchase Order Id',
   			  	dataIndex:'po',
   			  	name:'poId',
   			  	flex:1
   			  },{
   			  	header: 'Purchase Order Date',
   			  	dataIndex:'poDate',
   			  	name:'poDate',
   			  	xtype:'datecolumn',
			  	format: 'd-M-Y',
   			  	flex:1
   			  },{
   			  	header: 'Order Status',
   			  	dataIndex:'invoiceOrdrStatus',
   			  	name:'orderStatus',
   			  	renderer: function(value, metaData, record, row, col, store, gridView){
   			  		
   			  		var color ="GREEN"
   			  			if(value ==="NOT STARTED") {
   			  				color ="RED";
   			  			}
   			  			else if(value === "IN PROGRESS") {
   			  				color = "BLUE";
   			  			}
   			  		 
   			  		return "<font color= "+color+">"+ value +"</font>";
   			  	},
   			  	flex:1
   			  },{
   			     header:'Download',
   			     dataIndex:'downloadLink',
   			     name:'download',
   			     
   			  renderer: function(value, metaData, record, row, col, store, gridView){
   				    
   				     /* if(value!==null)  {
   					  return "<img src='images/icn_pdf.png' />";
   				      }
   				      else{
   				    	  return "<img src='images/icon-disable.png' />";
   				      }*/
   				  
   				    if(value==='Y')  {
	   				var invoiceId = record.data['invoiceId'];
	   				invoiceId =invoiceId.replace(/\//g,"-");
				    var combo = Ext.ComponentQuery.query('#yearCombo')[0];
				    
				    var url = '/Alke_web/home/invoice/download/admin'
				    var year = combo.getValue();
				    url =url.concat('/'+year);
				    url =url.concat('/'+invoiceId);
				    
   				  
   				     return "<a href='"+url+"' target='_blank'><img src='images/icn_pdf.png' /></a>";
   				    }
   				    else {
   				    	return "";
   				    }
   				    
   				  
   			  }
   			  }],
   			  
   			dockedItems: [{
        			xtype: 'pagingtoolbar',
        			store: 'InvoiceSummaryStore',   // same store GridPanel is using
       				dock: 'bottom',
        			displayInfo: true,
        			emptyMsg: 'No data to display'/*,
        			moveNext : function(){
        				
        				var me = this,
			            total = me.getPageData().pageCount;
			            alert(total);
			            next = me.store.currentPage + 1;
			
			        if (next <= total) {
			            if (me.fireEvent('beforechange', me, next) !== false) {
			                me.store.nextPage();
			            }
			        }
			    }*/
   			},{xtype: 'toolbar',
   		    dock: 'top',
   		    'items': [
   		           '->',{
   		        xtype: 'combo',
   		        itemId:'yearCombo',
   		        fieldLabel: 'Financial Years',
   		        	store: Ext.create('Ext.data.Store',{
   		        		
   		        		fields:['text','val'],
   		        		data:[ {'text':'Apr 2013 - Mar 2014', 'val':2013},
   		        		       {'text':'Apr 2014 - Mar 2015', 'val':2014},
   		        		       {'text':'Apr 2015 - Mar 2016', 'val':2015}
   		        		      ],
   		        	/*listeners: {
   		        		            load: function () {
   		        		                //this sets the default value to USA after the store loads
   		        		           var combo = Ext.ComponentQuery.query('#yearCombo')[0];
   		        		
   		        		                console.log(combo);
   		        		
   		        		            }
   		        		         }*/
   		        	}),
   		        	queryMode: 'local',
   		        	displayField: 'text',
   		        	valueField: 'val', 
   		        	width:250,
   		        	listeners :{
   		        		
   		        		afterrender :function(eOtps) {
   		        			
   		        			var sysdate = new Date();
   		            		var year = sysdate.getFullYear();
   		            		var month =sysdate.getMonth();
   		            		if( month <=3) {
   		            			year = year -1;
   		            		}
   		            		console.log("jjj");
   		            		var store = this.store;
   		            		var index = store.find('val',year);
   		            		console.log(index);
   		            		this.setValue(this.store.getAt(index).data['val']);
   		            		
   		        		},
   		        		select:function(combo,records,eOtps) {
                             
   		        			var url='/Alke_web/home/invoice/summary';
   		        			var admin ="/admin";
   		        			var year = records[0].data['val'];
   		        			
   		        			url = url.concat("/"+year);
   		        			url = url.concat(admin);
   		        			Ext.Ajax.request({
   		        				                 url : url,
   		        				                 method:'GET' ,
   		        				                 success : this.reloadSummary
   		        				                }); 
   		        			/*var grid = Ext.ComponentQuery.query('#invSummary')[0];
   		        			var rec = grid.store.getAt(0);
   		        		    console.log("hiiiiiii"+rec.data['invoiceId']);
   		        		    
   		        		    grid.loadInvoice(rec.data['invoiceId']);*/
   		        		}
   		        	},
   		        	reloadSummary:function(response) {
   		   				
   		        		var resp = Ext.decode(response.responseText);
   		        		var grid = Ext.ComponentQuery.query('#invSummary')[0];
   		   				
   		        		if(resp['invoice'].length === 0) {
   		        			
   		        			grid.store.removeAll();
   		        		}else {
   		        		grid.store.loadData(resp['invoice']);
   		        		}
   		        		grid.getView().refresh();
   		        		
   		        		var rec = grid.store.getAt(0);
		   
   		        		console.log(rec);
		        		if(typeof rec !== "undefined")  {
		        		invoiceId = rec.data['invoiceId'];
		        		grid.loadInvoice(invoiceId);
		        		}
		        		else{
		        			var grid = Ext.ComponentQuery.query('#invoice')[0];
		   					grid.store.removeAll();
		        			
		        		}
   		   			}
   		           
   		       } 
   		    ]}
],
   			listeners:{
   				
   				
   				 itemclick: function(dv, record, item, index, e) {
   					 
   					 invoiceId = record.data['invoiceId'];
   					 this.loadInvoice(invoiceId);
   					}
   				
   			},
   			
   			loadInvoice:function(i) {
   			
   				invoiceId= i;
   				if(i!==null)  {
   				var url = '/Alke_web/home/invoice';
					url= url.concat('/admin');
				 	//invoiceId = record.data['invoiceId'];
				 	invoiceId = invoiceId.replace(/\//g,"-");
				    var combo = Ext.ComponentQuery.query('#yearCombo')[0];
				    
				    year = combo.getValue();
				    url =url.concat('/'+year);
				    url =url.concat('/'+invoiceId);
				    
				 	Ext.Ajax.request({
                        url : url,
                        method:'GET' ,
                        success : this.reloadInvoice
                	}); 
   				}
   				else {
   					
   					var grid = Ext.ComponentQuery.query('#invoice')[0];
   					grid.store.removeAll();
   				}
   				
   			},
   			reloadInvoice :function(response) {
   				
   				    var resp = Ext.decode(response.responseText);
	        		var grid = Ext.ComponentQuery.query('#invoice')[0];
	        		if(resp['invoice'].length ===0) {
	        			
	        			grid.store.removeAll();
	        		}else {
	        			grid.store.loadData(resp['invoice']);
	        			grid.setTitle("Invoice details of "+ invoiceId+" of year :"+ year);
	        		}
	        		grid.getView().refresh();
	   			},
   			
   			
   			
   			
   			initComponent: function() {
   				
   				me = this;
   				var isummaryStore = Ext.data.StoreManager.get('InvoiceSummaryStore');
   				this.store = isummaryStore;
   				
   				var url='/Alke_web/home/invoice/summary';
       			var admin ="/admin";
       			var sysdate = new Date();
           		var year = sysdate.getFullYear();
           		var month =sysdate.getMonth();
           		if( month <=3) {
           			year = year -1;
           		}
       			
       			url = url.concat("/"+year);
       			url = url.concat(admin);
       			Ext.Ajax.request({
       				                 url : url,
       				                 method:'GET' ,
       				                 success : function (response) {
       					var resp = Ext.decode(response.responseText);
   		        		console.log(resp['invoice']);
   		        		
   		        		if(resp['invoice'].length ===0) {
   		        			
   		        			me.store.removeAll();
   		        		}else {
   		        		me.store.loadData(resp['invoice']);
   		        		}
   		        		me.getView().refresh();
   		        		
   		        		var rec = me.store.getAt(0);

		        		if(typeof rec !== "undefined")  {
		        			invoiceId = rec.data['invoiceId'];
		        			me.loadInvoice(invoiceId);
		        		}
       				}
       				}); 
       			
       			
             	    /*var url = '/Alke_web/home/invoice';
					url= url.concat('/admin');
					console.log(this.store.getTotalCount());
				 	//invoiceId = this.store.getAt(0).data['invoiceId'];
				 	invoiceId = invoiceId.replace(/\//g,"-");
				    var combo = Ext.ComponentQuery.query('#yearCombo')[0];

				   // var index = combo.store.find('val',combo.getValue());
				   
				    console.log(invoiceId);
				    year = combo.getValue();
				    url =url.concat('/'+year);
				    url =url.concat('/'+invoiceId);
				    console.log(url);
				    
				 	Ext.Ajax.request({
                        url : url,
                        method:'GET' ,
                        success : function(response) {
		
							    var resp = Ext.decode(response.responseText);
							var grid = Ext.ComponentQuery.query('#invoice')[0];
							if(resp['invoice'].length ===0) {
								
								grid.store.removeAll();
							}else {
								grid.store.loadData(resp['invoice']);
								grid.setTitle("Invoice details of "+ invoiceId+" of year :"+ year);
							}
							grid.getView().refresh();
							}
                }); 
*/	
   				
   				
   				this.callParent(arguments);
			}
});
