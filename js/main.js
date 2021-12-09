 $(document).ready(function(){
   $('#main_nav').click(function(){
       this.collapse('toggle');
   });
   $(document).click(function(){
       $('.collapse.in').removeClass('in');
   });
});