if (typeof require!= "undefined") {
    
    require.config({
        paths: {
            "jsyg-draggable": '../JSYG.Draggable',
            "jquery":"../bower_components/jquery/dist/jquery",
            "jsyg":"../bower_components/jsyg/JSYG"
        },
        urlArgs: "bust=" + (+new Date())
    });
}

(function(factory) {
    
    if (typeof define == 'function' && define.amd) define(["jsyg-draggable"],factory);
    else factory(JSYG.Draggable);
    
}(function(Draggable) {

    module("draggable");

    test("Constructeur", function() {
        
        var drag = new Draggable();

        expect(1);
        
        equal(drag.type,"attributes","abcisse");
    });
    
}));
