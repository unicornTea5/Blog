/**
 * Created by admin on 2017/8/15.
 */

var is_show_ul = true;

function toggle_ul(){
	this.is_show_ul = !this.is_show_ul;
}

function toggle_ul_msg(){
	return this.is_show_ul?'hide':'show'
}

var vm =new Vue({
	el:'#vue_content',
	data:{
		title:'Vue Title',
		workspaces:workspaces,
		is_show_ul:is_show_ul,
		name:'',
		sex:'man'
	},
	methods:{
		toggle_ul:toggle_ul
	},
	computed:{
		toggle_ul_msg:toggle_ul_msg
	}
});
