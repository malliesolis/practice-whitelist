(function($){

	var Node = (function() {
		var level = 0,
			urlString = '',
			children = []
	
		return {
			getLevel: function() {
				return level;
			},
			getUrl: function() {
				return urlString;
			},
			getChildren: function() {
				return children;
			},
			
			setLevel: function(newLevel) {
				level = newLevel;
				return this;
			},
			setUrl: function(newUrl) {
				urlString = newUrl;
				return this;
			}, 
			
			addChild: function(childNode) {
				children.push(childNode);
				return this;
			}
		};
	});

	var rootNode = new Node();
	rootNode.setUrl("http://www.google.com");
	rootNode.setLevel(1);
	
	var whitelist = {
		root: rootNode
	};
	
})();