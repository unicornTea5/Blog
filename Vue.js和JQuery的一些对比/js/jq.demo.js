/**
 * Created by admin on 2017/8/15.
 */

var is_show_ul = true;
var $ul = $('#jq_content .ws_list ul');
var $from = $('#form_demo');

$('#jq_content h1').text('JQ Title');

_.each(workspaces,function(ws){
	var $li = $('<li>title:'+ws.title+',content:'+ws.content+'</li>');
	if(ws.status === '1'){
		$li.addClass('success');
	}
	if(ws.status === '2'){
		$li.addClass('error');
	}
	$ul.append($li);
});

$('.toggle_ul').on('click',function(){
	if(is_show_ul){
		$(this).text('show');
		$ul.hide();
	}else{
		$(this).text('hide');
		$ul.show();
	}
	is_show_ul = !is_show_ul;
});

$from.find('#username').on('keyup',function(){
	var name = $(this).val();
	$('#show_input_name').html(name);
});

$from.find('#sex').on('change',function(){
	var sex = $(this).val();
	$('#show_input_sex').html(sex);
});

$('#show_input_sex').html($from.find('#sex').val());

