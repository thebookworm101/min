var PaymentList = Backbone.Model.extend({
    constructor: function() {
       this.urlRoot =  '/ads' ;
       Backbone.Model.apply(this, arguments);
       },

    validate: function(attrs, options) {
       },
    url: function(){
       return this.urlRoot    ;
      },

    });
BP.Model.PaymentList = PaymentList ;


var MinCollection = Backbone.Collection.extend({
  model: BP.Model.PaymentList,
  url: '/ads'
  });
BP.Collection.MinCollection = MinCollection ; 

var MinView = Backbone.View.extend({
  el: '#min',

  template: function(data) {
    var templ= _.template( $('#min_template').html() );
    var tdata =  {  min_value: "10" };
    return  templ(tdata);
  },

  initialize: function() {
    _.bindAll(this,'render');
    this.collection = new BP.Collection.MinCollection();
    this.collection.on('reset', this.render);
    this.collection.fetch({reset: true});
    this.$('#min').focus();
  },

  render: function(){
    _(this.collection.models).each(function(data) {
             this.$el.html( this.template( data) ) ;
         },this);
    return this;
  },

  events: {
    'click .min': 'chooseOption',
  },

  chooseOption: function(e) {
    console.log("i get here");
  },

});
BP.View.MinView= MinView;

BP.Router.MinRouter = Backbone.Router.extend({
   routes: {
       "": 'landing' ,
       },
   landing : function (id){
       var a = new BP.View.MinView({});
       a.initialize();
       },
   });
