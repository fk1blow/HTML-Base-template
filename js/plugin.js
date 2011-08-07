;(function($) {

   $.pluginName = function(el, options) {

      var defaults = {
         propertyName: 'value',
         onSomeEvent: function() {}
      }

      var plugin = this;

      plugin.settings = {}

      var init = function() {
         plugin.settings = $.extend({}, defaults, options);
         plugin.el = el;
         // code goes here
      }

      plugin.foo_public_method = function() {
         // code goes here
      }

      var foo_private_method = function() {
         // code goes here
      }

      init();

   }

})(jQuery);