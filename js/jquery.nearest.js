(function() {

  $.fn.nearest = function(selector) {
    var $found = $(),
        checkChildren = function(filter) {
          var $children = this.children()
              $collection = $();

          $children.each(function() {
            var $matches = $(this).filter(filter),
                $fails = $(this).not(filter);

            if($matches.length) { $found = $found.add($matches); }

            if($fails.length) { checkChildren.call($fails, filter); }
          });
        };

    checkChildren.call(this, selector);
    
    return $found;
  }

}());