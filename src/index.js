angular.module('dp', [])
.directive('dpActivation', [function() {
	return {
		restrict: 'E',
		template: '<div class="activation" dp-positional><div class="role">{{role}}</div><div class="hr"></div><div class="name">{{service}}</div></div>',
		scope: {
		},
		link: function($scope, $element, $attrs) {
			$scope.role = 'Some Role';
			$scope.service = 'Some Service';
		}
	};
}])
.directive('dpValuation', [function() {
	return {
		restrict: 'E',
		template: '<div class="valuation" dp-positional><div class="role">{{role}}</div><div class="hr"></div><div class="name">{{connection}}</div></div>',
		scope: {
		},
		link: function($scope, $element, $attrs) {
			$scope.role = 'Some Role';
			$scope.connection = 'Some Connection';
		}
	};
}])
.directive('dpPositional', [function() {
	return {
		restrict: 'A',
		scope: {
		},
		link: function($scope, $element, $attrs) {
			$element.attr('draggable', true);
			$element.css({
				position: 'absolute',
			});
			window.$element = $element;
			$element.on('dragstart', function(event) {
				$element.addClass('dragging');
			})
			$element.on('dragend', function(event) {
				$element.css({
					top: (event.clientY - event.target.offsetHeight) + 'px',
					left: event.clientX + 'px',
				});
				$element.removeClass('dragging');
			});
		}
	};
}])
