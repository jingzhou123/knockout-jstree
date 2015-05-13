define(["jquery", 'ko', 'tree'], function($, ko) {
    ko.applyBindings({
        clickFn: function() {
            console.log(123);
        },
        data : [{
          "text" : "Root node",
          "children" : [{
            "text" : "Child node 1" 
          }, {
            "text" : "Child node 2" 
          }]
        }],
        selected: ko.observable(),
    })
});
