if(typeof(debug)==="undefined"){debug=console.debug}var tree={data:{root:{}},curLevel:0,isDone:false,leafs:[],findLeaf:function(c,e,d,a){this.curLevel++;for(var b in c){if(this.curLevel==e&&b==d){a(c[b]);this.isDone=true;return}else{this.findLeaf(c[b],e,d,a);if(this.isDone){this.curLevel--;return}}}this.curLevel--},insertLeaf:function(c,b,a){this.curLevel=0;this.isDone=false;this.findLeaf(this.data,c,b||"root",function(d){if(!d[a]){d[a]={}}})},reset:function(){this.data={root:{}}},list:"",traverse:function(c,a){this.curLevel++;for(var b in c){var e=Object.getOwnPropertyNames(c[b]);var d="level"+this.curLevel;if(e.length){this.list+='<li class="tree_dir '+d+'"><input type="checkbox">'+b+'</li><ul class="tree_dir">';this.traverse(c[b],a);this.list+="</ul>"}else{this.list+='<li class="tree_file '+d+'"><input type="checkbox">'+b+"</li>"}}this.curLevel--},toList:function(){this.list="";this.curLevel=0;this.traverse(this.data.root,function(a){});return this.list}};