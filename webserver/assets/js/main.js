
function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

function search() {
	var query = document.getElementById('query').value
	if(query === '') {
		alert('Error')
		return
	}
	httpGet('request.php?query=' + query)

	var frameWrapper = document.getElementById('frameWrapper')
	frameWrapper.innerHTML = `<iframe src="http://localhost:5601/app/kibana#/dashboard/0d1cd4d0-e8b5-11eb-9742-db035b566c9a?embed=true&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'983aea40-e8b3-11eb-9742-db035b566c9a',key:Name,negate:!f,params:(query:${query}),type:phrase),query:(match_phrase:(Name:${query})))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(title:''),gridData:(h:7,i:e37dae1b-dea8-40aa-aaf0-8dd679c6fe8c,w:48,x:0,y:0),id:'5aca6e80-e8b6-11eb-9742-db035b566c9a',panelIndex:e37dae1b-dea8-40aa-aaf0-8dd679c6fe8c,type:visualization,version:'7.7.0'),(embeddableConfig:(title:''),gridData:(h:9,i:'25025e3f-5680-40d4-b7a5-c8b730ce2984',w:12,x:0,y:7),id:b5eb0dd0-e8b4-11eb-9742-db035b566c9a,panelIndex:'25025e3f-5680-40d4-b7a5-c8b730ce2984',type:visualization,version:'7.7.0'),(embeddableConfig:(),gridData:(h:18,i:b2ae96ee-dfec-4b35-9958-bdcea0a669ad,w:36,x:12,y:7),id:f11ece10-e8b3-11eb-9742-db035b566c9a,panelIndex:b2ae96ee-dfec-4b35-9958-bdcea0a669ad,type:visualization,version:'7.7.0'),(embeddableConfig:(title:''),gridData:(h:9,i:df69a902-2c37-40a2-a840-b4284dc74bc5,w:12,x:0,y:16),id:'20fa95f0-e8b5-11eb-9742-db035b566c9a',panelIndex:df69a902-2c37-40a2-a840-b4284dc74bc5,type:visualization,version:'7.7.0'),(embeddableConfig:(title:''),gridData:(h:17,i:b5bbe5ec-63fe-4684-896c-7065bc277fbe,w:12,x:0,y:25),id:'5bf062d0-e8b4-11eb-9742-db035b566c9a',panelIndex:b5bbe5ec-63fe-4684-896c-7065bc277fbe,type:visualization,version:'7.7.0'),(embeddableConfig:(title:''),gridData:(h:17,i:d9131e16-9d32-45b5-b2b3-5222c42c880f,w:24,x:12,y:25),id:cb8f1330-e8b8-11eb-9742-db035b566c9a,panelIndex:d9131e16-9d32-45b5-b2b3-5222c42c880f,type:visualization,version:'7.7.0'),(embeddableConfig:(title:''),gridData:(h:17,i:df9c2e9d-2fb1-44be-9dfb-9997f7c8e982,w:12,x:36,y:25),id:'1a471f60-e8b7-11eb-9742-db035b566c9a',panelIndex:df9c2e9d-2fb1-44be-9dfb-9997f7c8e982,type:visualization,version:'7.7.0'),(embeddableConfig:(title:''),gridData:(h:7,i:d4510c10-7a33-4eaf-b852-ba7e1cefe113,w:48,x:0,y:42),id:ce9475e0-e8b6-11eb-9742-db035b566c9a,panelIndex:d4510c10-7a33-4eaf-b852-ba7e1cefe113,type:visualization,version:'7.7.0')),query:(language:kuery,query:''),timeRestore:!f,title:Dashboard,viewMode:view)&_g=(filters:!(),refreshInterval:(pause:!f,value:5000),time:(from:now-15m,to:now))" height="100%" width="100%"></iframe>`
}

var query = document.getElementById("query");

query.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search").click();
  }
});

