///<reference path="handledisconnected.ts"/>
var cola;
(function (cola) {
    var adaptor = (function () {
        function adaptor(options) {
            this._canvasSize = [1, 1];
            this._linkDistance = 20;
            this._defaultNodeSize = 10;
            this._linkLengthCalculator = null;
            this._linkType = null;
            this._avoidOverlaps = false;
            this._handleDisconnected = true;
            this._running = false;
            this._nodes = [];
            this._groups = [];
            this._variables = [];
            this._rootGroup = null;
            this._links = [];
            this._constraints = [];
            this._distanceMatrix = null;
            this._descent = null;
            this._directedLinkConstraints = null;
            this._threshold = 0.01;
            this._visibilityGraph = null;
            this.linkAccessor = { getSourceIndex: adaptor.getSourceIndex, getTargetIndex: adaptor.getTargetIndex, setLength: adaptor.setLinkLength, getType: this.getLinkType };
            this.trigger = options.trigger;
            this.kick = options.kick;
            this.on = options.on;
            this.drag = options.drag;
        }
        adaptor.prototype.tick = function () {
            if (this._alpha < this._threshold) {
                this._running = false;
                this.trigger({ type: "end", alpha: this._alpha = 0, stress: this._lastStress });
                return true;
            }
            var n = this._nodes.length, m = this._links.length, o;
            this._descent.locks.clear();
            for (var i = 0; i < n; ++i) {
                o = this._nodes[i];
                if (o.fixed) {
                    if (typeof o.px === 'undefined' || typeof o.py === 'undefined') {
                        o.px = o.x;
                        o.py = o.y;
                    }
                    var p = [o.px, o.py];
                    this._descent.locks.add(i, p);
                }
            }
            var s1 = this._descent.rungeKutta();
            if (s1 === 0) {
                this._alpha = 0;
            }
            else if (typeof this._lastStress !== 'undefined') {
                this._alpha = s1;
            }
            this._lastStress = s1;
            for (var i = 0; i < n; ++i) {
                o = this._nodes[i];
                if (o.fixed) {
                    o.x = o.px;
                    o.y = o.py;
                }
                else {
                    o.x = this._descent.x[0][i];
                    o.y = this._descent.x[1][i];
                }
            }
            this.trigger({ type: "tick", alpha: this._alpha, stress: this._lastStress });
        };
        adaptor.prototype.nodes = function (v) {
            if (v === void 0) { v = null; }
            if (!v) {
                if (this._nodes.length === 0 && this._links.length > 0) {
                    var n = 0;
                    this._links.forEach(function (l) {
                        n = Math.max(n, l.source, l.target);
                    });
                    this._nodes = new Array(++n);
                    for (var i = 0; i < n; ++i) {
                        this._nodes[i] = {};
                    }
                }
                return this._nodes;
            }
            this._nodes = v;
            return this;
        };
        adaptor.prototype.groups = function (x) {
            var _this = this;
            if (x === void 0) { x = null; }
            if (!x)
                return this._groups;
            this._groups = x;
            this._rootGroup = {};
            this._groups.forEach(function (g) {
                if (typeof g.padding === "undefined")
                    g.padding = 1;
                if (typeof g.leaves !== "undefined")
                    g.leaves.forEach(function (v, i) { (g.leaves[i] = _this._nodes[v]).parent = g; });
                if (typeof g.groups !== "undefined")
                    g.groups.forEach(function (gi, i) { (g.groups[i] = _this._groups[gi]).parent = g; });
            });
            this._rootGroup.leaves = this._nodes.filter(function (v) { return typeof v.parent === 'undefined'; });
            this._rootGroup.groups = this._groups.filter(function (g) { return typeof g.parent === 'undefined'; });
            return this;
        };
        adaptor.prototype.powerGraphGroups = function (f) {
            var g = cola.powergraph.getGroups(this._nodes, this._links, this.linkAccessor, this._rootGroup);
            this.groups(g.groups);
            f(g);
            return this;
        };
        adaptor.prototype.avoidOverlaps = function (v) {
            if (!arguments.length)
                return this._avoidOverlaps;
            this._avoidOverlaps = v;
            return this;
        };
        adaptor.prototype.handleDisconnected = function (v) {
            if (!arguments.length)
                return this._handleDisconnected;
            this._handleDisconnected = v;
            return this;
        };
        adaptor.prototype.flowLayout = function (axis, minSeparation) {
            if (!arguments.length)
                axis = 'y';
            this._directedLinkConstraints = {
                axis: axis,
                getMinSeparation: typeof minSeparation === 'number' ? function () { return minSeparation; } : minSeparation
            };
            return this;
        };
        adaptor.prototype.links = function (x) {
            if (!arguments.length)
                return this._links;
            this._links = x;
            return this;
        };
        adaptor.prototype.constraints = function (c) {
            if (!arguments.length)
                return this._constraints;
            this._constraints = c;
            return this;
        };
        adaptor.prototype.distanceMatrix = function (d) {
            if (!arguments.length)
                return this._distanceMatrix;
            this._distanceMatrix = d;
            return this;
        };
        adaptor.prototype.size = function (x) {
            if (x === void 0) { x = null; }
            if (!x)
                return this._canvasSize;
            this._canvasSize = x;
            return this;
        };
        adaptor.prototype.defaultNodeSize = function (x) {
            if (x === void 0) { x = null; }
            if (!x)
                return this._defaultNodeSize;
            this._defaultNodeSize = x;
            return this;
        };
        adaptor.prototype.linkDistance = function (x) {
            if (x === void 0) { x = null; }
            if (!x) {
                return this._linkDistance;
            }
            this._linkDistance = typeof x === "function" ? x : +x;
            this._linkLengthCalculator = null;
            return this;
        };
        adaptor.prototype.linkType = function (f) {
            this._linkType = f;
            return this;
        };
        adaptor.prototype.convergenceThreshold = function (x) {
            if (x === void 0) { x = null; }
            if (!x)
                return this._threshold;
            this._threshold = typeof x === "function" ? x : +x;
            return this;
        };
        adaptor.prototype.alpha = function (x) {
            if (!arguments.length)
                return this._alpha;
            else {
                x = +x;
                if (this._alpha) {
                    if (x > 0)
                        this._alpha = x;
                    else
                        this._alpha = 0;
                }
                else if (x > 0) {
                    if (!this._running) {
                        this._running = true;
                        this.trigger({ type: "start", alpha: this._alpha = x });
                        this.kick(this.tick);
                    }
                }
                return this;
            }
        };
        adaptor.prototype.getLinkLength = function (link) {
            return typeof this._linkDistance === "function" ? +(this._linkDistance(link)) : this._linkDistance;
        };
        adaptor.setLinkLength = function (link, length) {
            link.length = length;
        };
        adaptor.prototype.getLinkType = function (link) {
            return typeof this._linkType === "function" ? this._linkType(link) : 0;
        };
        adaptor.prototype.symmetricDiffLinkLengths = function (idealLength, w) {
            var _this = this;
            this.linkDistance(function (l) { return idealLength * l.length; });
            this._linkLengthCalculator = function () { return cola.symmetricDiffLinkLengths(_this._links, _this.linkAccessor, w); };
            return this;
        };
        adaptor.prototype.jaccardLinkLengths = function (idealLength, w) {
            var _this = this;
            this.linkDistance(function (l) { return idealLength * l.length; });
            this._linkLengthCalculator = function () { return cola.jaccardLinkLengths(_this._links, _this.linkAccessor, w); };
            return this;
        };
        adaptor.prototype.start = function () {
            var _this = this;
            var i, j, n = this.nodes().length, N = n + 2 * this._groups.length, m = this._links.length, w = this._canvasSize[0], h = this._canvasSize[1];
            if (this._linkLengthCalculator)
                this._linkLengthCalculator();
            var x = new Array(N), y = new Array(N);
            this._variables = new Array(N);
            var makeVariable = function (i, w) { return _this._variables[i] = new cola.vpsc.IndexedVariable(i, w); };
            var G = null;
            var ao = this._avoidOverlaps;
            this._nodes.forEach(function (v, i) {
                v.index = i;
                if (typeof v.x === 'undefined') {
                    v.x = w / 2, v.y = h / 2;
                }
                x[i] = v.x, y[i] = v.y;
            });
            var distances;
            if (this._distanceMatrix) {
                distances = this._distanceMatrix;
            }
            else {
                distances = (new cola.shortestpaths.Calculator(N, this._links, adaptor.getSourceIndex, adaptor.getTargetIndex, function (l) { return _this.getLinkLength(l); })).DistanceMatrix();
                G = cola.Descent.createSquareMatrix(N, function () { return 2; });
                this._links.forEach(function (e) {
                    var u = adaptor.getSourceIndex(e), v = adaptor.getTargetIndex(e);
                    G[u][v] = G[v][u] = 1;
                });
            }
            var D = cola.Descent.createSquareMatrix(N, function (i, j) {
                return distances[i][j];
            });
            if (this._rootGroup && typeof this._rootGroup.groups !== 'undefined') {
                var i = n;
                this._groups.forEach(function (g) {
                    G[i][i + 1] = G[i + 1][i] = 1e-6;
                    D[i][i + 1] = D[i + 1][i] = 0.1;
                    x[i] = 0, y[i++] = 0;
                    x[i] = 0, y[i++] = 0;
                });
            }
            else
                this._rootGroup = { leaves: this._nodes, groups: [] };
            var curConstraints = this._constraints || [];
            if (this._directedLinkConstraints) {
                this.linkAccessor.getMinSeparation = this._directedLinkConstraints.getMinSeparation;
                curConstraints = curConstraints.concat(cola.generateDirectedEdgeConstraints(n, this._links, this._directedLinkConstraints.axis, (this.linkAccessor)));
            }
            var initialUnconstrainedIterations = arguments.length > 0 ? arguments[0] : 0;
            var initialUserConstraintIterations = arguments.length > 1 ? arguments[1] : 0;
            var initialAllConstraintsIterations = arguments.length > 2 ? arguments[2] : 0;
            this.avoidOverlaps(false);
            this._descent = new cola.Descent([x, y], D);
            this._descent.locks.clear();
            for (var i = 0; i < n; ++i) {
                var o = this._nodes[i];
                if (o.fixed) {
                    o.px = o.x;
                    o.py = o.y;
                    var p = [o.x, o.y];
                    this._descent.locks.add(i, p);
                }
            }
            this._descent.threshold = this._threshold;
            this._descent.run(initialUnconstrainedIterations);
            if (curConstraints.length > 0)
                this._descent.project = new cola.vpsc.Projection(this._nodes, this._groups, this._rootGroup, curConstraints).projectFunctions();
            this._descent.run(initialUserConstraintIterations);
            this.avoidOverlaps(ao);
            if (ao) {
                this._nodes.forEach(function (v, i) { v.x = x[i], v.y = y[i]; });
                this._descent.project = new cola.vpsc.Projection(this._nodes, this._groups, this._rootGroup, curConstraints, true).projectFunctions();
                this._nodes.forEach(function (v, i) { x[i] = v.x, y[i] = v.y; });
            }
            this._descent.G = G;
            this._descent.run(initialAllConstraintsIterations);
            this._links.forEach(function (l) {
                if (typeof l.source == "number")
                    l.source = _this._nodes[l.source];
                if (typeof l.target == "number")
                    l.target = _this._nodes[l.target];
            });
            this._nodes.forEach(function (v, i) {
                v.x = x[i], v.y = y[i];
            });
            if (!this._distanceMatrix && this._handleDisconnected) {
                var graphs = cola.separateGraphs(this._nodes, this._links);
                cola.applyPacking(graphs, w, h, this._defaultNodeSize);
                this._nodes.forEach(function (v, i) {
                    _this._descent.x[0][i] = v.x, _this._descent.x[1][i] = v.y;
                });
            }
            return this.resume();
        };
        adaptor.prototype.resume = function () {
            return (this.alpha(0.1));
        };
        adaptor.prototype.stop = function () {
            return (this.alpha(0));
        };
        adaptor.prototype.prepareEdgeRouting = function (nodeMargin) {
            this._visibilityGraph = new cola.geom.TangentVisibilityGraph(this._nodes.map(function (v) {
                return v.bounds.inflate(-nodeMargin).vertices();
            }));
        };
        adaptor.prototype.routeEdge = function (d, draw) {
            var lineData = [];
            var vg2 = new cola.geom.TangentVisibilityGraph(this._visibilityGraph.P, { V: this._visibilityGraph.V, E: this._visibilityGraph.E }), port1 = { x: d.source.x, y: d.source.y }, port2 = { x: d.target.x, y: d.target.y }, start = vg2.addPoint(port1, d.source.id), end = vg2.addPoint(port2, d.target.id);
            vg2.addEdgeIfVisible(port1, port2, d.source.id, d.target.id);
            if (typeof draw !== 'undefined') {
                draw(vg2);
            }
            var sourceInd = function (e) { return e.source.id; }, targetInd = function (e) { return e.target.id; }, length = function (e) { return e.length(); }, spCalc = new cola.shortestpaths.Calculator(vg2.V.length, vg2.E, sourceInd, targetInd, length), shortestPath = spCalc.PathFromNodeToNode(start.id, end.id);
            if (shortestPath.length === 1 || shortestPath.length === vg2.V.length) {
                cola.vpsc.makeEdgeBetween(d, d.source.innerBounds, d.target.innerBounds, 5);
                lineData = [{ x: d.sourceIntersection.x, y: d.sourceIntersection.y }, { x: d.arrowStart.x, y: d.arrowStart.y }];
            }
            else {
                var n = shortestPath.length - 2, p = vg2.V[shortestPath[n]].p, q = vg2.V[shortestPath[0]].p, lineData = [d.source.innerBounds.rayIntersection(p.x, p.y)];
                for (var i = n; i >= 0; --i)
                    lineData.push(vg2.V[shortestPath[i]].p);
                lineData.push(cola.vpsc.makeEdgeTo(q, d.target.innerBounds, 5));
            }
            return lineData;
        };
        adaptor.getSourceIndex = function (e) {
            return typeof e.source === 'number' ? e.source : e.source.index;
        };
        adaptor.getTargetIndex = function (e) {
            return typeof e.target === 'number' ? e.target : e.target.index;
        };
        adaptor.linkId = function (e) {
            return adaptor.getSourceIndex(e) + "-" + adaptor.getTargetIndex(e);
        };
        return adaptor;
    })();
    cola.adaptor = adaptor;
    function colaDragstart(d) {
        d.fixed |= 2;
        d.px = d.x, d.py = d.y;
    }
    cola.colaDragstart = colaDragstart;
    function colaDragend(d) {
        d.fixed &= ~6;
    }
    cola.colaDragend = colaDragend;
    function colaMouseover(d) {
        d.fixed |= 4;
        d.px = d.x, d.py = d.y;
    }
    cola.colaMouseover = colaMouseover;
    function colaMouseout(d) {
        d.fixed &= ~4;
    }
    cola.colaMouseout = colaMouseout;
})(cola || (cola = {}));
