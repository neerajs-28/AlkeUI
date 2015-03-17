Ext.define('TG.view.HomePanel',{

	 extend:'Ext.panel.Panel',
	 alias:'widget.hmePanel',
	 height:'100%',
	 width:'100%',
	 autoScroll:true,
	layout:  'border',
	 
	 items:[{
	 	
	 	 xtype :'panel',
	 	 region:'north',
	 	 height: '12%',
	     html:"<div class='header'><a href='http://www.alkefp.com'><img src='images/alke_logo_big.jpg' style='float:left; height:19%;margin-bottom:1%'> </a><div style='padding-top:1%;padding-left:2%'>ALKE FIRE PROTECTION</div></div>"
	 	
	 },{
	 
	 	//xtype: 'menuP',
		 xtype:'menuP',
		 region:'center',
	 	 overflowY:'scroll',
	 	 autoScroll:true

	 },{
		 	
		 	xtype :'panel',
		 	height:'5%',
		 	region:'south',
		 	bodyStyle:'background-color:#B6CECE;text-align:center;padding-top:0.5%;',
		 	
		    html:"Copyright &#169; 2015 ALKE Fire protection. For more info logon to <a href='http://www.alkefp.com'>www.alkefp.com</a>"
		    	
		 }]
       
});