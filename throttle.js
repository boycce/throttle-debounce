/*
 * Vanilla throttle / debounce.

 * Author: Ricky boyce
 * Original Author: Ben Alman (http://benalman.com) | 
 * Original license: Dual licensed under the MIT and GPL licenses
 */

(function(api, undefined) {


 /*
  *  Throttle function every #ms.
  *  @delay:    Milliseconds. 100 or 250 is recommended.
  *  @no_trailing: (Optional) don't force callback execution at the end.
  *  @callback: A function
  *  @Return:   A new, throttled, function.
  */
  api.throttle = function(delay, no_trailing, callback, debounce) {
    var timeout_id, at_begin,
      last_exec = 0,
      that = this, 
      args = arguments;
    
    if (typeof no_trailing !== 'boolean') {
      callback = no_trailing;
      no_trailing = at_begin = false;
    }
  
    function wrapperThrottle() {
      var elapsed = +new Date() - last_exec;
      
      // Clear any existing timeout.
      if (timeout_id) clearTimeout(timeout_id);
      
      if (elapsed > delay) exec();
      else if (no_trailing !== true) timeout_id = setTimeout(exec, delay - elapsed);
    }

    function wrapperDebounce() {
      // Execute 
      if (!timeout_id) exec();
      
      // Clear any existing timeout.
      if (timeout_id) clearTimeout(timeout_id);
        
      if (at_begin !== true) timeout_id = setTimeout(clear, delay);
    }
    

    function exec() {
      // Execute callback & update last_exec.
      last_exec = +new Date();
      callback.apply(that, args);
    }

    function clear() {
      // Stop future callback executions.
      timeout_id = undefined;
    }
    
    return debounce? wrapperDebounce : wrapperThrottle;
  };

 /*
  *  Debounce don't execute function again within #ms.
  *  @delay:    Milliseconds. 100 or 250 is recommended.
  *  @at_begin: (Optional) callback will be executed at the start not the end.
  *  @callback: A function
  *  @Return:   A new, debounced, function.
  */
  api.debounce = function(delay, at_begin, callback) {
    return api.throttle(delay, at_begin, callback, true);
  };

})(window);