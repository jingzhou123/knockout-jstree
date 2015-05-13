define(["ko", 'jquery', 'jstree'], function (ko, $) {
  ko.bindingHandlers.tree = {
    init: function(ele, valueAccessor, allBindingAccessor, viewModel, bindingContext) {
      var $ele = $(ele);
      var treeBindingObserables = valueAccessor();
      var treeBindingValues = ko.utils.unwrapObservable(treeBindingObserables);
      var clickFn = treeBindingValues.clickFn || false;
      var data = treeBindingValues.data || false;
      if (data) {
        $ele.jstree({
          core: {
            data: data
          }
        });
      }

      $ele.on('changed.jstree', function(e, data) {
        treeBindingObserables.selected && treeBindingObserables.selected(data.node.text);
      });
    }
  }
});

