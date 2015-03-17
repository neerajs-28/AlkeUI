Ext.define('TG.controller.GridCont', {
    extend: 'Ext.app.Controller',
    views:['HomePanel','InvoiceSummary','MenuPanel','BasicInfo'],
    stores:['InvoiceSummaryStore','ItemStore','Summary'],
    models:['InvoiceSummaryM','Invoice'],
    
	init: function() {
    this.control({
        '#hmePanel': {
            render: this.homePanelRender
        }
       });
	},
	
	homePanelRender:function() {
		
		var url ='/Alke_web/home/client/admin';
		Ext.Ajax.request({
				                 url : url,
				                 method:'GET' ,
				                 success : function(response) {
					
					var basicInfo = Ext.ComponentQuery.query('#basicInfo')[0];
					var contactInfo = Ext.ComponentQuery.query('#contactInfo')[0];
					var clientName = basicInfo.down('#clientName');
					var contactPerson = basicInfo.down('#contacttPerson');
					var vatNo = basicInfo.down('#vatNo');
					var cstNo = basicInfo.down('#cstNo');
					var message = contactInfo.down('#message');
					var phone = contactInfo.down('#phone');
					var email = contactInfo.down('#email');
					
					var resp = Ext.decode(response.responseText);

					clientName.setValue(resp['client']['name']);
					contactPerson.setValue(resp['client']['contactPerson']);
					message.setValue(resp['client']['address']);
					phone.setValue(resp['client']['telNos']);
					email.setValue(resp['client']['email']);
					vatNo.setValue(resp['client']['vatNo']);
					
				} }); 
		
	}

});