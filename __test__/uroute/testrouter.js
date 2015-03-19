var  clientenv = require("../helpers/clientenv");

describe('Route', function() {
    var trigger = {trigger: true}; 
    var landingStub ;
    beforeEach(function(done) {
        clientenv.setup(function() {
            require('../../min');
            Backbone.history.stop();

            landingStub = sinon.stub(BP.Router.MinRouter.prototype,'landing');

            approute = new BP.Router.MinRouter({});
            Backbone.history.start({pushState: true});

            done();
            });
        });

    afterEach(function(){
        landingStub.restore();
        });

    /*describe('MinRouter', function() {
        it('Should  call the index page view ', function() {
           Backbone.history.navigate('', trigger); 
           landingStub.called.should.be.true ; 
           });
        });*/

    describe('MinRouter', function() {
        it('Should  call the index page view ', function() {
           approute.navigate('/', trigger);
           landingStub.called.should.be.true ; 
           });
        });
    });
