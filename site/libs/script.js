$function() {
     
    if($("#hmt").attr("checked") == 'checked') { 
        $('#hft').attr('checked', false);
    }
    if($("#hft").attr("checked") == 'checked') { 
        $('#hmt').attr('checked', false);
    }
};
