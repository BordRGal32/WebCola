///<reference path="../extern/d3.d.ts"/>
///<reference path="adaptor.ts"/>
var cola;
(function (cola) {
    function d3adaptor() {
        var event = d3.dispatch("start", "tick", "end");
        var adaptor = new cola.adaptor({
            trigger: function (e) {
                event[e.type](e);
            },
            on: function (type, listener) {
                event.on(type, listener);
                return adaptor;
            },
            kick: function (tick) {
                d3.timer(function () { return adaptor.tick(); });
            },
            drag: function () {
                var drag = d3.behavior.drag()
                    .origin(function (d) { return d; })
                    .on("dragstart.d3adaptor", cola.colaDragstart)
                    .on("drag.d3adaptor", function (d) {
                    d.px = d3.event.x, d.py = d3.event.y;
                    adaptor.resume();
                })
                    .on("dragend.d3adaptor", cola.colaDragend);
                if (!arguments.length)
                    return drag;
                this
                    .call(drag);
            }
        });
        return adaptor;
    }
    cola.d3adaptor = d3adaptor;
    ;
})(cola || (cola = {}));
