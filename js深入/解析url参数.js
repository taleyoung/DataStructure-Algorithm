function parseQuery(query){
    var result={};
    if(typeof query != 'string') return;
    if(query.charAt(0)==='?'){
        query = query.substring(1);
    }
    var pairs = query.split('&');
    for(i = 0,len = pairs.length; i < len; i++){
        
    }

}