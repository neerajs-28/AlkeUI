Ext.application({
	requires: ['Ext.container.Viewport'],
    name: 'TG',
    appFolder:'widget',
    controllers:['GridCont'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout:'border',

            items:[{
                   xtype:'hmePanel',
                   region:'center',
                	   
                   }]
        });
    }
});