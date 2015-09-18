// Type definitions for d3JS
// Project: http://d3js.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module D3 {
    export interface Selectors {
        /**
        * Select an element from the current document
        */
        select: {
            /**
            * Selects the first element that matches the specified selector string
            *
            * @param selector Selection String to match
            */
            (selector: string): Selection;
            /**
            * Selects the specified node
            *
            * @param element Node element to select
            */
            (element: EventTarget): Selection;
        };

        /**
        * Select multiple elements from the current document
        */
        selectAll: {
            /**
            * Selects all elements that match the specified selector
            *
            * @param selector Selection String to match
            */
            (selector: string): Selection;
            /**
            * Selects the specified array of elements
            *
            * @param elements Array of node elements to select
            */
            (elements: EventTarget[]): Selection;
        };
    }

    export interface Event {
        dx: number;
        dy: number;
        clientX: number;
        clientY: number;
        translate: number[];
        scale: number;
        sourceEvent: Event;
        x: number;
        y: number;
        keyCode: number;
        altKey: any;
        type: string;
    }

    export interface Base extends Selectors {
        /**
        * Create a behavior
        */
        behavior: Behavior.Behavior;
        /**
        * Access the current user event for interaction
        */
        event: Event;

        /**
        * Compare two values for sorting.
        * Returns -1 if a is less than b, or 1 if a is greater than b, or 0
        *
        * @param a First value
        * @param b Second value
        */
        ascending<T>(a: T, b: T): number;
        /**
        * Compare two values for sorting.
        * Returns -1 if a is greater than b, or 1 if a is less than b, or 0
        *
        * @param a First value
        * @param b Second value
        */
        descending<T>(a: T, b: T): number;
        /**
        * Find the minimum value in an array
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        min<T, U>(arr: T[], map: (v: T) => U): U;
        /**
        * Find the minimum value in an array
        *
        * @param arr Array to search
        */
        min<T>(arr: T[]): T;
        /**
        * Find the maximum value in an array
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        max<T, U>(arr: T[], map: (v: T) => U): U;
        /**
        * Find the maximum value in an array
        *
        * @param arr Array to search
        */
        max<T>(arr: T[]): T;
        /**
        * Find the minimum and maximum value in an array
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        extent<T, U>(arr: T[], map: (v: T) => U): U[];
        /**
        * Find the minimum and maximum value in an array
        *
        * @param arr Array to search
        */
        extent<T>(arr: T[]): T[];
        /**
        * Compute the sum of an array of numbers
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        sum<T>(arr: T[], map: (v: T) => number): number;
        /**
        * Compute the sum of an array of numbers
        *
        * @param arr Array to search
        */
        sum(arr: number[]): number;
        /**
        * Compute the arithmetic mean of an array of numbers
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        mean<T>(arr: T[], map: (v: T) => number): number;
        /**
        * Compute the arithmetic mean of an array of numbers
        *
        * @param arr Array to search
        */
        mean(arr: number[]): number;
        /**
        * Compute the median of an array of numbers (the 0.5-quantile).
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        median<T>(arr: T[], map: (v: T) => number): number;
        /**
        * Compute the median of an array of numbers (the 0.5-quantile).
        *
        * @param arr Array to search
        */
        median(arr: number[]): number;
        /**
        * Compute a quantile for a sorted array of numbers.
        *
        * @param arr Array to search
        * @param p The quantile to return
        */
        quantile: (arr: number[], p: number) => number;
        /**
        * Locate the insertion point for x in array to maintain sorted order
        *
        * @param arr Array to search
        * @param x Value to search for insertion point
        * @param low Minimum value of array subset
        * @param hihg Maximum value of array subset
        */
        bisect<T>(arr: T[], x: T, low?: number, high?: number): number;
        /**
        * Locate the insertion point for x in array to maintain sorted order
        *
        * @param arr Array to search
        * @param x Value to serch for insertion point
        * @param low Minimum value of array subset
        * @param high Maximum value of array subset
        */
        bisectLeft<T>(arr: T[], x: T, low?: number, high?: number): number;
        /**
        * Locate the insertion point for x in array to maintain sorted order
        *
        * @param arr Array to search
        * @param x Value to serch for insertion point
        * @param low Minimum value of array subset
        * @param high Maximum value of array subset
        */
        bisectRight<T>(arr: T[], x: T, low?: number, high?: number): number;
        /**
        * Bisect using an accessor.
        *
        * @param accessor Accessor function
        */
        bisector(accessor: (data: any, index: number) => any): any;
        /**
        * Randomize the order of an array.
        *
        * @param arr Array to randomize
        */
        shuffle<T>(arr: T[]): T[];
        /**
        * Reorder an array of elements according to an array of indexes
        *
        * @param arr Array to reorder
        * @param indexes Array containing the order the elements should be returned in
        */
        permute(arr: any[], indexes: any[]): any[];
        /**
        * Transpose a variable number of arrays.
        *
        * @param arrs Arrays to transpose
        */
        zip(...arrs: any[]): any[];
        /**
        * Parse the given 2D affine transform string, as defined by SVG's transform attribute.
        *
        * @param definition 2D affine transform string
        */
        transform(definition: string): any;
        /**
        * Transpose an array of arrays.
        *
        * @param matrix Two dimensional array to transpose
        */
        transpose(matrix: any[]): any[];
        /**
        * List the keys of an associative array.
        *
        * @param map Array of objects to get the key values from
        */
        keys(map: any): string[];
        /**
        * List the values of an associative array.
        *
        * @param map Array of objects to get the values from
        */
        values(map: any[]): any[];
        /**
        * List the key-value entries of an associative array.
        *
        * @param map Array of objects to get the key-value pairs from
        */
        entries(map: any): any[];
        /**
        * merge multiple arrays into one array
        *
        * @param map Arrays to merge
        */
        merge(...map: any[]): any[];
        /**
        * Generate a range of numeric values.
        */
        range: {
            /**
            * Generate a range of numeric values from 0.
            *
            * @param stop Value to generate the range to
            * @param step Step between each value
            */
            (stop: number, step?: number): number[];
            /**
            * Generate a range of numeric values.
            *
            * @param start Value to start
            * @param stop Value to generate the range to
            * @param step Step between each value
            */
            (start: number, stop?: number, step?: number): number[];
        };
        /**
        * Create new nest operator
        */
        nest(): Nest;
        /**
        * Request a resource using XMLHttpRequest.
        */
        xhr: {
            /**
            * Creates an asynchronous request for specified url
            *
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
            /**
            * Creates an asynchronous request for specified url
            *
            * @param url Url to request
            * @param mime MIME type to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, mime: string, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        };
        /**
        * Request a text file
        */
        text: {
            /**
            * Request a text file
            *
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (response: string) => void ): Xhr;
            /**
            * Request a text file
            *
            * @param url Url to request
            * @param mime MIME type to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, mime: string, callback?: (response: string) => void ): Xhr;
        };
        /**
        * Request a JSON blob
        *
        * @param url Url to request
        * @param callback Function to invoke when resource is loaded or the request fails
        */
        json: (url: string, callback?: (error: any, data: any) => void ) => Xhr;
        /**
        * Request an HTML document fragment.
        */
        xml: {
            /**
            * Request an HTML document fragment.
            *
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (response: Document) => void ): Xhr;
            /**
            * Request an HTML document fragment.
            *
            * @param url Url to request
            * @param mime MIME type to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, mime: string, callback?: (response: Document) => void ): Xhr;
        };
        /**
        * Request an XML document fragment.
        *
        * @param url Url to request
        * @param callback Function to invoke when resource is loaded or the request fails
        */
        html: (url: string, callback?: (response: DocumentFragment) => void ) => Xhr;
        /**
        * Request a comma-separated values (CSV) file.
        */
        csv: Dsv;
        /**
        * Request a tab-separated values (TSV) file
        */
        tsv: Dsv;
        /**
        * Time Functions
        */
        time: Time.Time;
        /**
        * Scales
        */
        scale: Scale.ScaleBase;
        /*
        * Interpolate two values
        */
        interpolate: Transition.BaseInterpolate;
        /*
        * Interpolate two numbers
        */
        interpolateNumber: Transition.BaseInterpolate;
        /*
        * Interpolate two integers
        */
        interpolateRound: Transition.BaseInterpolate;
        /*
        * Interpolate two strings
        */
        interpolateString: Transition.BaseInterpolate;
        /*
        * Interpolate two RGB colors
        */
        interpolateRgb: Transition.BaseInterpolate;
        /*
        * Interpolate two HSL colors
        */
        interpolateHsl: Transition.BaseInterpolate;
        /*
        * Interpolate two HCL colors
        */
        interpolateHcl: Transition.BaseInterpolate;
        /*
        * Interpolate two L*a*b* colors
        */
        interpolateLab: Transition.BaseInterpolate;
        /*
        * Interpolate two arrays of values
        */
        interpolateArray: Transition.BaseInterpolate;
        /*
        * Interpolate two arbitary objects
        */
        interpolateObject: Transition.BaseInterpolate;
        /*
        * Interpolate two 2D matrix transforms
        */
        interpolateTransform: Transition.BaseInterpolate;
        /*
        * The array of built-in interpolator factories
        */
        interpolators: Array<Transition.InterpolateFactory>;
        /**
        * Layouts
        */
        layout: Layout.Layout;
        /**
        * Svg's
        */
        svg: Svg.Svg;
        /**
        * Random number generators
        */
        random: Random;
        /**
        * Create a function to format a number as a string
        *
        * @param specifier The format specifier to use
        */
        format(specifier: string): (value: number) => string;
        /**
        * Returns the SI prefix for the specified value at the specified precision
        */
        formatPrefix(value: number, precision?: number): MetricPrefix;
        /**
        * The version of the d3 library
        */
        version: string;
        /**
        * Returns the root selection
        */
        selection(): Selection;
        ns: {
            /**
            * The map of registered namespace prefixes
            */
            prefix: {
                svg: string;
                xhtml: string;
                xlink: string;
                xml: string;
                xmlns: string;
            };
            /**
            * Qualifies the specified name
            */
            qualify(name: string): { space: string; local: string; };
        };
        /**
        * Returns a built-in easing function of the specified type
        */
        ease: (type: string, ...arrs: any[]) => D3.Transition.Transition;
        /**
        * Constructs a new RGB color.
        */
        rgb: {
            /**
            * Constructs a new RGB color with the specified r, g and b channel values
            */
            (r: number, g: number, b: number): D3.Color.RGBColor;
            /**
            * Constructs a new RGB color by parsing the specified color string
            */
            (color: string): D3.Color.RGBColor;
        };
        /**
        * Constructs a new HCL color.
        */
        hcl: {
            /**
            * Constructs a new HCL color.
            */
            (h: number, c: number, l: number): Color.HCLColor;
            /**
            * Constructs a new HCL color by parsing the specified color string
            */
            (color: string): Color.HCLColor;
        };
        /**
        * Constructs a new HSL color.
        */
        hsl: {
            /**
            * Constructs a new HSL color with the specified hue h, saturation s and lightness l
            */
            (h: number, s: number, l: number): Color.HSLColor;
            /**
            * Constructs a new HSL color by parsing the specified color string
            */
            (color: string): Color.HSLColor;
        };
        /**
        * Constructs a new RGB color.
        */
        lab: {
            /**
            * Constructs a new LAB color.
            */
            (l: number, a: number, b: number): Color.LABColor;
            /**
            * Constructs a new LAB color by parsing the specified color string
            */
            (color: string): Color.LABColor;
        };
        geo: Geo.Geo;
        geom: Geom.Geom;
        /**
        * gets the mouse position relative to a specified container.
        */
        mouse(container: any): Array<number>;
        /**
        * gets the touch positions relative to a specified container.
        */
        touches(container: any): Array<Array<number>>;

        /**
        * If the specified value is a function, returns the specified value.
        * Otherwise, returns a function that returns the specified value.
        */
        functor<R,T>(value: (p : R) => T): (p : R) => T;
        functor<T>(value: T): (p : any) => T;

        map(object?: any): Map;
        set(array?: Array<any>): Set;
        dispatch(...types: Array<string>): Dispatch;
        rebind(target: any, source: any, ...names: Array<any>): any;
        requote(str: string): string;
        timer: {
            (funct: () => boolean, delay?: number, mark?: number): void;
            flush(): void;
        }
        transition(): Transition.Transition;

        round(x: number, n: number): number;
    }

    export interface Dispatch {
        [event: string]: any;
        on: {
            (type: string): any;
            (type: string, listener: any): any;
        }
    }

    export interface MetricPrefix {
        /**
        * the scale function, for converting numbers to the appropriate prefixed scale.
        */
        scale: (d: number) => number;
        /**
        * the prefix symbol
        */
        symbol: string;
    }

    export interface Xhr {
        /**
        * Get or set request header
        */
        header: {
            /**
            * Get the value of specified request header
            *
            * @param name Name of header to get the value for
            */
            (name: string): string;
            /**
            * Set the value of specified request header
            *
            * @param name Name of header to set the value for
            * @param value Value to set the header to
            */
            (name: string, value: string): Xhr;
        };
        /**
        * Get or set MIME Type
        */
        mimeType: {
            /**
            * Get the current MIME Type
            */
            (): string;
            /**
            * Set the MIME Type for the request
            *
            * @param type The MIME type for the request
            */
            (type: string): Xhr;
        };
        /*
        * Get or Set the function used to map the response to the associated data value
        */
        response: {
            /**
            * Get function used to map the response to the associated data value
            */
            (): (xhr: XMLHttpRequest) => any;
            /**
            * Set function used to map the response to the associated data value
            *
            * @param value The function used to map the response to a data value
            */
            (value: (xhr: XMLHttpRequest) => any): Xhr;
        };
        /**
        * Issue the request using the GET method
        *
        * @param callback Function to invoke on completion of request
        */
        get(callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        /**
        * Issue the request using the POST method
        */
        post: {
            /**
            * Issue the request using the POST method
            *
            * @param callback Function to invoke on completion of request
            */
            (callback?: (xhr: XMLHttpRequest) => void ): Xhr;
            /**
            * Issue the request using the POST method
            *
            * @param data Data to post back in the request
            * @param callback Function to invoke on completion of request
            */
            (data: any, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        };
        /**
        * Issues this request using the specified method
        */
        send: {
            /**
            * Issues this request using the specified method
            *
            * @param method Method to use to make the request
            * @param callback Function to invoke on completion of request
            */
            (method: string, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
            /**
            * Issues this request using the specified method
            *
            * @param method Method to use to make the request
            * @param data Data to post back in the request
            * @param callback Function to invoke on completion of request
            */
            (method: string, data: any, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        };
        /**
        * Aborts this request, if it is currently in-flight
        */
        abort(): Xhr;
        /**
        * Registers a listener to receive events
        *
        * @param type Enent name to attach the listener to
        * @param listener Function to attach to event
        */
        on: (type: string, listener: (data: any, index?: number) => any) => Xhr;
    }

    export interface Dsv {
        /**
        * Request a delimited values file
        *
        * @param url Url to request
        * @param callback Function to invoke when resource is loaded or the request fails
        */
        (url: string, callback?: (error: any, response: any[]) => void ): Xhr;
        /**
        * Parse a delimited string into objects using the header row.
        *
        * @param string delimited formatted string to parse
        */
        parse(string: string): any[];
        /**
        * Parse a delimited string into tuples, ignoring the header row.
        *
        * @param string delimited formatted string to parse
        */
        parseRows(string: string, accessor: (row: any[], index: number) => any): any;
        /**
        * Format an array of tuples into a delimited string.
        *
        * @param rows Array to convert to a delimited string
        */
        format(rows: any[]): string;
    }

    export interface Selection extends Selectors, Array<any> {
        attr: {
            (name: string): string;
            (name: string, value: any): Selection;
            (name: string, valueFunction: (data: any, index: number) => any): Selection;
            (attrValueMap : Object): Selection;
        };

        classed: {
            (name: string): string;
            (name: string, value: any): Selection;
            (name: string, valueFunction: (data: any, index: number) => any): Selection;
        };

        style: {
            (name: string): string;
            (name: string, value: any, priority?: string): Selection;
            (name: string, valueFunction: (data: any, index: number) => any, priority?: string): Selection;
            (styleValueMap : Object): Selection;
        };

        property: {
            (name: string): void;
            (name: string, value: any): Selection;
            (name: string, valueFunction: (data: any, index: number) => any): Selection;
            (propertyValueMap : Object): Selection;
        };

        text: {
            (): string;
            (value: any): Selection;
            (valueFunction: (data: any, index: number) => any): Selection;
        };

        html: {
            (): string;
            (value: any): Selection;
            (valueFunction: (data: any, index: number) => any): Selection;
        };

        append: (name: string) => Selection;
        insert: (name: string, before: string) => Selection;
        remove: () => Selection;
        empty: () => boolean;
            
        data: {
            (values: (data: any, index?: number) => any[], key?: (data: any, index?: number) => string): UpdateSelection;
            (values: any[], key?: (data: any, index?: number) => string): UpdateSelection;
            (): any[];
        };

        datum: {
            (values: (data: any, index: number) => any): UpdateSelection;
            (values: any): UpdateSelection;
            () : any;
        };

        filter: {
            (filter: (data: any, index: number) => boolean, thisArg?: any): UpdateSelection;
            //(filter: string): UpdateSelection;
        };

        call(callback: (selection: Selection) => void ): Selection;
        each(eachFunction: (data: any, index: number) => any): Selection;
        on: {
            (type: string): (data: any, index: number) => any;
            (type: string, listener: (data: any, index: number) => any, capture?: boolean): Selection;
        };

        /**
        * Returns the total number of elements in the current selection.
        */
        size(): number;

        /**
        * Starts a transition for the current selection. Transitions behave much like selections,
        * except operators animate smoothly over time rather than applying instantaneously.
        */
        transition(): Transition.Transition;

        /**
        * Sorts the elements in the current selection according to the specified comparator
        * function.
        *
        * @param comparator a comparison function, which will be passed two data elements a and b
        * to compare, and should return either a negative, positive, or zero value to indicate
        * their relative order.
        */
        sort<T>(comparator?: (a: T, b: T) => number): Selection;

        /**
        * Re-inserts elements into the document such that the document order matches the selection
        * order. This is equivalent to calling sort() if the data is already sorted, but much
        * faster.
        */
        order: () => Selection;

        /**
        * Returns the first non-null element in the current selection. If the selection is empty,
        * returns null.
        */
        node: () => Element;
    }

    export interface EnterSelection {
        append: (name: string) => Selection;
        insert: (name: string, before?: string) => Selection;
        select: (selector: string) => Selection;
        empty: () => boolean;
        node: () => Element;
        call: (callback: (selection: EnterSelection) => void) => EnterSelection;
        size: () => number;
    }

    export interface UpdateSelection extends Selection {
        enter: () => EnterSelection;
        update: () => Selection;
        exit: () => Selection;
    }

    export interface NestKeyValue {
        key: string;
        values: any;
    }

    export interface Nest {
        key(keyFunction: (data: any, index: number) => string): Nest;
        sortKeys(comparator: (d1: any, d2: any) => number): Nest;
        sortValues(comparator: (d1: any, d2: any) => number): Nest;
        rollup(rollupFunction: (data: any, index: number) => any): Nest;
        map(values: any[]): any;
        entries(values: any[]): NestKeyValue[];
    }

    export interface Map {
        has(key: string): boolean;
        get(key: string): any;
        set<T>(key: string, value: T): T;
        remove(key: string): boolean;
        keys(): Array<string>;
        values(): Array<any>;
        entries(): Array<any>;
        forEach(func: (key: string, value: any) => void ): void;
    }

    export interface Set{
        has(value: any): boolean;
        add(value: any): any;
        remove(value: any): boolean;
        values(): Array<any>;
        forEach(func: (value: any) => void ): void;
    }

    export interface Random {
        /**
        * Returns a function for generating random numbers with a normal distribution
        *
        * @param mean The expected value of the generated pseudorandom numbers
        * @param deviation The given standard deviation
        */
        normal(mean?: number, deviation?: number): () => number;
        /**
        * Returns a function for generating random numbers with a log-normal distribution
        *
        * @param mean The expected value of the generated pseudorandom numbers
        * @param deviation The given standard deviation
        */
        logNormal(mean?: number, deviation?: number): () => number;
        /**
        * Returns a function for generating random numbers with an Irwin-Hall distribution
        *
        * @param count The number of independent variables
        */
        irwinHall(count: number): () => number;
    }

    // Transitions
    export module Transition {
        export interface Transition {
            duration: {
                (duration: number): Transition;
                (duration: (data: any, index: number) => any): Transition;
            };
            delay: {
                (delay: number): Transition;
                (delay: (data: any, index: number) => any): Transition;
            };
            attr: {
                (name: string): string;
                (name: string, value: any): Transition;
                (name: string, valueFunction: (data: any, index: number) => any): Transition;
                (attrValueMap : any): Transition;
            };
            style: {
                (name: string): string;
                (name: string, value: any, priority?: string): Transition;
                (name: string, valueFunction: (data: any, index: number) => any, priority?: string): Transition;
            };
            call(callback: (selection: Selection) => void ): Transition;
            /**
            * Select an element from the current document
            */
            select: {
                /**
                * Selects the first element that matches the specified selector string
                *
                * @param selector Selection String to match
                */
                (selector: string): Transition;
                /**
                * Selects the specified node
                *
                * @param element Node element to select
                */
                (element: EventTarget): Transition;
            };

            /**
            * Select multiple elements from the current document
            */
            selectAll: {
                /**
                * Selects all elements that match the specified selector
                *
                * @param selector Selection String to match
                */
                (selector: string): Transition;
                /**
                * Selects the specified array of elements
                *
                * @param elements Array of node elements to select
                */
                (elements: EventTarget[]): Transition;
            }
            each: (type?: string, eachFunction?: (data: any, index: number) => any) => Transition;
            transition: () => Transition;
            ease: (value: string, ...arrs: any[]) => Transition;
            attrTween(name: string, tween: (d: any, i: number, a: any) => BaseInterpolate): Transition;
            styleTween(name: string, tween: (d: any, i: number, a: any) => BaseInterpolate, priority?: string): Transition;
            text: {
                (text: string): Transition;
                (text: (d: any, i: number) => string): Transition;
            }
            tween(name: string, factory: InterpolateFactory): Transition;
            filter: {
                (selector: string): Transition;
                (selector: (data: any, index: number) => boolean): Transition;
            };
            remove(): Transition;
        }

        export interface InterpolateFactory {
            (a?: any, b?: any): BaseInterpolate;
        }

        export interface BaseInterpolate {
            (a: any, b?: any): any;
        }

        export interface Interpolate {
            (t: any): any;
        }
    }

    //Time
    export module Time {
        export interface Time {
            second: Interval;
            minute: Interval;
            hour: Interval;
            day: Interval;
            week: Interval;
            sunday: Interval;
            monday: Interval;
            tuesday: Interval;
            wednesday: Interval;
            thursday: Interval;
            friday: Interval;
            saturday: Interval;
            month: Interval;
            year: Interval;

            seconds: Range;
            minutes: Range;
            hours: Range;
            days: Range;
            weeks: Range;
            months: Range;
            years: Range;

            sundays: Range;
            mondays: Range;
            tuesdays: Range;
            wednesdays: Range;
            thursdays: Range;
            fridays: Range;
            saturdays: Range;
            format: {

                (specifier: string): TimeFormat;
                utc: (specifier: string) => TimeFormat;
                iso: TimeFormat;
            };

            scale: {
                /**
                * Constructs a new time scale with the default domain and range;
                * the ticks and tick format are configured for local time.
                */
                (): Scale.TimeScale;
                /**
                * Constructs a new time scale with the default domain and range;
                * the ticks and tick format are configured for UTC time.
                */
                utc(): Scale.TimeScale;
            };
        }

        export interface Range {
            (start: Date, end: Date, step?: number): Date[];
        }

        export interface Interval {
            (date: Date): Date;
            floor: (date: Date) => Date;
            round: (date: Date) => Date;
            ceil: (date: Date) => Date;
            range: Range;
            offset: (date: Date, step: number) => Date;
            utc?: Interval;
        }

        export interface TimeFormat {
            (date: Date): string;
            parse: (string: string) => Date;
        }
    }

    // Layout
    export module Layout {
        export interface Layout {
            /**
            * Creates a new Stack layout
            */
            stack(): StackLayout;
            /**
            * Creates a new pie layout
            */
            pie(): PieLayout;
            /**
            * Creates a new force layout
            */
            force(): ForceLayout;
            /**
            * Creates a new tree layout
            */
            tree(): TreeLayout;
            bundle(): BundleLayout;
            chord(): ChordLayout;
            cluster(): ClusterLayout;
            hierarchy(): HierarchyLayout;
            histogram(): HistogramLayout;
            pack(): PackLayout;
            partition(): PartitionLayout;
            treemap(): TreeMapLayout;
        }

        export interface StackLayout {
            <T>(layers: T[], index?: number): T[];
            values(accessor?: (d: any) => any): StackLayout;
            offset(offset: string): StackLayout;
        }

        export interface TreeLayout {
            /**
            * Gets or sets the sort order of sibling nodes for the layout using the specified comparator function
            */
            sort: {
                /**
                * Gets the sort order function of sibling nodes for the layout
                */
                (): (d1: any, d2: any) => number;
                /**
                * Sets the sort order of sibling nodes for the layout using the specified comparator function
                */
                (comparator: (d1: any, d2: any) => number): TreeLayout;
            };
            /**
            * Gets or sets the specified children accessor function
            */
            children: {
                /**
                * Gets the children accessor function
                */
                (): (d: any) => any;
                /**
                * Sets the specified children accessor function
                */
                (children: (d: any) => any): TreeLayout;
            };
            /**
            * Runs the tree layout
            */
            nodes(root: GraphNode): TreeLayout;
            /**
            * Given the specified array of nodes, such as those returned by nodes, returns an array of objects representing the links from parent to child for each node
            */
            links(nodes: Array<GraphNode>): Array<GraphLink>;
            /**
            * If separation is specified, uses the specified function to compute separation between neighboring nodes. If separation is not specified, returns the current separation function
            */
            seperation: {
                /**
                * Gets the current separation function
                */
                (): (a: GraphNode, b: GraphNode) => number;
                /**
                * Sets the specified function to compute separation between neighboring nodes
                */
                (seperation: (a: GraphNode, b: GraphNode) => number): TreeLayout;
            };
            /**
            * Gets or sets the available layout size
            */
            size: {
                /**
                * Gets the available layout size
                */
                (): Array<number>;
                /**
                * Sets the available layout size
                */
                (size: Array<number>): TreeLayout;
            };
        }

        export interface PieLayout {
            (values: any[], index?: number): ArcDescriptor[];
            value: {
                (): (d: any, index: number) => number;
                (accessor: (d: any, index: number) => number): PieLayout;
            };
            sort: {
                (): (d1: any, d2: any) => number;
                (comparator: (d1: any, d2: any) => number): PieLayout;
            };
            startAngle: {
                (): number;
                (angle: number): PieLayout;
                (angle: () => number): PieLayout;
                (angle: (d : any) => number): PieLayout;
                (angle: (d : any, i: number) => number): PieLayout;
            };
            endAngle: {
                (): number;
                (angle: number): PieLayout;
                (angle: () => number): PieLayout;
                (angle: (d : any) => number): PieLayout
                (angle: (d : any, i: number) => number): PieLayout;
            };
        }

        export interface ArcDescriptor {
            value: any;
            data: any;
            startAngle: number;
            endAngle: number;
            index: number;
        }

        export interface GraphNode  {
            id: number;
            index: number;
            name: string;
            px: number;
            py: number;
            size: number;
            weight: number;
            x: number;
            y: number;
            subindex: number;
            startAngle: number;
            endAngle: number;
            value: number;
            fixed: boolean;
            children: GraphNode[];
            _children: GraphNode[];
            parent: GraphNode;
            depth: number;
        }

        export interface GraphLink {
            source: GraphNode;
            target: GraphNode;
        }

        export interface ForceLayout {
            (): ForceLayout;
            size: {
                (): number;
                (mysize: number[]): ForceLayout;
                (accessor: (d: any, index: number) => {}): ForceLayout;

            };
            linkDistance: {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };
            linkStrength:
            {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };
            friction:
            {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };
            alpha: {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };
            charge: {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };

            theta: {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };

            gravity: {
                (): number;
                (number:number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };

            links: {
                (): GraphLink[];
                (arLinks: GraphLink[]): ForceLayout;

            };
            nodes:
            {
                (): GraphNode[];
                (arNodes: GraphNode[]): ForceLayout;

            };
            start(): ForceLayout;
            resume(): ForceLayout;
            stop(): ForceLayout;
            tick(): ForceLayout;
            on(type: string, listener: () => void ): ForceLayout;
            drag(): ForceLayout;
        }

        export interface BundleLayout{
            (links: Array<GraphLink>): Array<Array<GraphNode>>;
        }

        export interface ChordLayout {
            matrix: {
                (): Array<Array<number>>;
                (matrix: Array<Array<number>>): ChordLayout;
            }
            padding: {
                (): number;
                (padding: number): ChordLayout;
            }
            sortGroups: {
                (): (a: number, b: number) => number;
                (comparator: (a: number, b: number) => number): ChordLayout;
            }
            sortSubgroups: {
                (): (a: number, b: number) => number;
                (comparator: (a: number, b: number) => number): ChordLayout;
            }
            sortChords: {
                (): (a: number, b: number) => number;
                (comparator: (a: number, b: number) => number): ChordLayout;
            }
            chords(): Array<GraphLink>;
            groups(): Array<ArcDescriptor>;
        }

        export interface ClusterLayout{
            sort: {
                (): (a: GraphNode, b: GraphNode) => number;
                (comparator: (a: GraphNode, b: GraphNode) => number): ClusterLayout;
            }
            children: {
                (): (d: any, i?: number) => Array<GraphNode>;
                (children: (d: any, i?: number) => Array<GraphNode>): ClusterLayout;
            }
            nodes(root: GraphNode): Array<GraphNode>;
            links(nodes: Array<GraphNode>): Array<GraphLink>;
            seperation: {
                (): (a: GraphNode, b: GraphNode) => number;
                (seperation: (a: GraphNode, b: GraphNode) => number): ClusterLayout;
            }
            size: {
                (): Array<number>;
                (size: Array<number>): ClusterLayout;
            }
            value: {
                (): (node: GraphNode) => number;
                (value: (node: GraphNode) => number): ClusterLayout;
            }
        }

        export interface HierarchyLayout {
            sort: {
                (): (a: GraphNode, b: GraphNode) => number;
                (comparator: (a: GraphNode, b: GraphNode) => number): HierarchyLayout;
            }
            children: {
                (): (d: any, i?: number) => Array<GraphNode>;
                (children: (d: any, i?: number) => Array<GraphNode>): HierarchyLayout;
            }
            nodes(root: GraphNode): Array<GraphNode>;
            links(nodes: Array<GraphNode>): Array<GraphLink>;
            value: {
                (): (node: GraphNode) => number;
                (value: (node: GraphNode) => number): HierarchyLayout;
            }
            reValue(root: GraphNode): HierarchyLayout;
        }

        export interface Bin extends Array<any> {
            x: number;
            dx: number;
            y: number;
        }

        export interface HistogramLayout {
            (values: Array<any>, index?: number): Array<Bin>;
            value: {
                (): (value: any) => any;
                (accessor: (value: any) => any): HistogramLayout
            }
            range: {
                (): (value: any, index: number) => Array<number>;
                (range: (value: any, index: number) => Array<number>): HistogramLayout;
                (range: Array<number>): HistogramLayout;
            }
            bins: {
                (): (range: Array<any>, index: number) => Array<number>;
                (bins: (range: Array<any>, index: number) => Array<number>): HistogramLayout;
                (bins: number): HistogramLayout;
                (bins: Array<number>): HistogramLayout;
            }
            frequency: {
                (): boolean;
                (frequency: boolean): HistogramLayout;
            }
        }

        export interface PackLayout {
            sort: {
                (): (a: GraphNode, b: GraphNode) => number;
                (comparator: (a: GraphNode, b: GraphNode) => number): PackLayout;
            }
            children: {
                (): (d: any, i?: number) => Array<GraphNode>;
                (children: (d: any, i?: number) => Array<GraphNode>): PackLayout;
            }
            nodes(root: GraphNode): Array<GraphNode>;
            links(nodes: Array<GraphNode>): Array<GraphLink>;
            value: {
                (): (node: GraphNode) => number;
                (value: (node: GraphNode) => number): PackLayout;
            }
            size: {
                (): Array<number>;
                (size: Array<number>): PackLayout;
            }
            padding: {
                (): number;
                (padding: number): PackLayout;
            }
        }

        export interface PartitionLayout {
            sort: {
                (): (a: GraphNode, b: GraphNode) => number;
                (comparator: (a: GraphNode, b: GraphNode) => number): PackLayout;
            }
            children: {
                (): (d: any, i?: number) => Array<GraphNode>;
                (children: (d: any, i?: number) => Array<GraphNode>): PackLayout;
            }
            nodes(root: GraphNode): Array<GraphNode>;
            links(nodes: Array<GraphNode>): Array<GraphLink>;
            value: {
                (): (node: GraphNode) => number;
                (value: (node: GraphNode) => number): PackLayout;
            }
            size: {
                (): Array<number>;
                (size: Array<number>): PackLayout;
            }
        }

        export interface TreeMapLayout {
            sort: {
                (): (a: GraphNode, b: GraphNode) => number;
                (comparator: (a: GraphNode, b: GraphNode) => number): TreeMapLayout;
            }
            children: {
                (): (d: any, i?: number) => Array<GraphNode>;
                (children: (d: any, i?: number) => Array<GraphNode>): TreeMapLayout;
            }
            nodes(root: GraphNode): Array<GraphNode>;
            links(nodes: Array<GraphNode>): Array<GraphLink>;
            value: {
                (): (node: GraphNode) => number;
                (value: (node: GraphNode) => number): TreeMapLayout;
            }
            size: {
                (): Array<number>;
                (size: Array<number>): TreeMapLayout;
            }
            padding: {
                (): number;
                (padding: number): TreeMapLayout;
            }
            round: {
                (): boolean;
                (round: boolean): TreeMapLayout;
            }
            sticky: {
                (): boolean;
                (sticky: boolean): TreeMapLayout;
            }
            mode: {
                (): string;
                (mode: string): TreeMapLayout;
            }
        }
    }

    // Color
    export module Color {
        export interface Color {
            /**
            * increase lightness by some exponential factor (gamma)
            */
            brighter(k: number): Color;
            /**
            * decrease lightness by some exponential factor (gamma)
            */
            darker(k: number): Color;
            /**
            * convert the color to a string.
            */
            toString(): string;
        }

        export interface RGBColor extends Color{
            /**
            * the red color channel.
            */
            r: number;
            /**
            * the green color channel.
            */
            g: number;
            /**
            * the blue color channel.
            */
            b: number;
            /**
            * convert from RGB to HSL.
            */
            hsl(): HSLColor;
        }

        export interface HSLColor extends Color{
            /**
            * hue
            */
            h: number;
            /**
            * saturation
            */
            s: number;
            /**
            * lightness
            */
            l: number;
            /**
            * convert from HSL to RGB.
            */
            rgb(): RGBColor;
        }

        export interface LABColor extends Color{
            /**
            * lightness
            */
            l: number;
            /**
            * a-dimension
            */
            a: number;
            /**
            * b-dimension
            */
            b: number;
            /**
            * convert from LAB to RGB.
            */
            rgb(): RGBColor;
        }

        export interface HCLColor extends Color{
            /**
            * hue
            */
            h: number;
            /**
            * chroma
            */
            c: number;
            /**
            * luminance
            */
            l: number;
            /**
            * convert from HCL to RGB.
            */
            rgb(): RGBColor;
        }
    }

    // SVG
    export module Svg {
        export interface Svg {
            /**
            * Create a new symbol generator
            */
            symbol(): Symbol;
            /**
            * Create a new axis generator
            */
            axis(): Axis;
            /**
            * Create a new arc generator
            */
            arc(): Arc;
            /**
            * Create a new line generator
            */
            line: {
                (): Line;
                radial(): LineRadial;
            }
            /**
            * Create a new area generator
            */
            area: {
                (): Area;
                radial(): AreaRadial;
            }
            /**
            * Create a new brush generator
            */
            brush(): Brush;
            /**
            * Create a new chord generator
            */
            chord(): Chord;
            /**
            * Create a new diagonal generator
            */
            diagonal: {
                (): Diagonal;
                radial(): Diagonal;
            }
            /**
            * The array of supported symbol types.
            */
            symbolTypes: Array<string>;
        }

        export interface Symbol {
            type: (string:string) => Symbol;
            size: (number:number) => Symbol;
        }

        export interface Brush {
            /**
            * Draws or redraws this brush into the specified selection of elements
            */
            (selection: Selection): void;
            /**
            * Gets or sets the x-scale associated with the brush
            */
            x: {
                /**
                * Gets  the x-scale associated with the brush
                */
                (): D3.Scale.Scale;
                /**
                * Sets the x-scale associated with the brush
                *
                * @param accessor The new Scale
                */
                (scale: D3.Scale.Scale): Brush;
            };
            /**
            * Gets or sets the x-scale associated with the brush
            */
            y: {
                /**
                * Gets  the x-scale associated with the brush
                */
                (): D3.Scale.Scale;
                /**
                * Sets the x-scale associated with the brush
                *
                * @param accessor The new Scale
                */
                (scale: D3.Scale.Scale): Brush;
            };
            /**
            * Gets or sets the current brush extent
            */
            extent: {
                /**
                * Gets the current brush extent
                */
                (): any[];
                /**
                * Sets the current brush extent
                */
                (values: any[]): Brush;
            };
            /**
            * Clears the extent, making the brush extent empty.
            */
            clear(): Brush;
            /**
            * Returns true if and only if the brush extent is empty
            */
            empty(): boolean;
            /**
            * Gets or sets the listener for the specified event type
            */
            on: {
                /**
                * Gets the listener for the specified event type
                */
                (type: string): (data: any, index: number) => any;
                /**
                * Sets the listener for the specified event type
                */
                (type: string, listener: (data: any, index: number) => any, capture?: boolean): Brush;
            };
        }

        export interface Axis {
            (selection: Selection): void;
            scale: {
                (): any;
                (scale: any): Axis;
            };

            orient: {
                (): string;
                (orientation: string): Axis;
            };

            ticks: {
                (): any[];
                (...arguments: any[]): Axis;
            };

            tickPadding: {
                (): number;
                (padding: number): Axis;
            };

            tickValues: {
                (): any[];
                (values: any[]): Axis;
            };

            tickSubdivide(count: number): Axis;
            tickSize(major?: number, minor?: number, end?: number): Axis;
            tickFormat(formatter: (value: any) => string): Axis;
        }

        export interface Arc {
           /**
           * Returns the path data string
           *
           * @param data Array of data elements
           * @param index Optional index
           */
           (data: any, index?: number): string;
           innerRadius: {
                (): (data: any, index?: number) => number;
                (radius: number): Arc;
                (radius: () => number): Arc;
                (radius: (data: any) => number): Arc;
                (radius: (data: any, index: number) => number): Arc;
            };
            outerRadius: {
                (): (data: any, index?: number) => number;
                (radius: number): Arc;
                (radius: () => number): Arc;
                (radius: (data: any) => number): Arc;
                (radius: (data: any, index: number) => number): Arc;
            };
            startAngle: {
                (): (data: any, index?: number) => number;
                (angle: number): Arc;
                (angle: () => number): Arc;
                (angle: (data: any) => number): Arc;
                (angle: (data: any, index: number) => number): Arc;
            };
            endAngle: {
                (): (data: any, index?: number) => number;
                (angle: number): Arc;
                (angle: () => number): Arc;
                (angle: (data: any) => number): Arc;
                (angle: (data: any, index: number) => number): Arc;
            };
            centroid(data: any, index?: number): number[];
        }

        export interface Line {
            /**
            * Returns the path data string
            *
            * @param data Array of data elements
            * @param index Optional index
            */
            (data: any[], index?: number): string;
            /**
            * Get or set the x-coordinate accessor.
            */
            x: {
                /**
                * Get the x-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the x-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Line;
                (accessor: (data: any, index: number) => number): Line;
                /**
                * Set the  x-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): Line;
            };
            /**
            * Get or set the y-coordinate accessor.
            */
            y: {
                /**
                * Get the y-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Line;
                (accessor: (data: any, index: number) => number): Line;
                /**
                * Set the  y-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): Line;
            };
            /**
            * Get or set the interpolation mode.
            */
            interpolate: {
                /**
                * Get the interpolation accessor.
                */
                (): string;
                /**
                * Set the interpolation accessor.
                *
                * @param interpolate The interpolation mode
                */
                (interpolate: string): Line;
            };
            /**
            * Get or set the cardinal spline tension.
            */
            tension: {
                /**
                * Get the cardinal spline accessor.
                */
                (): number;
                /**
                * Set the cardinal spline accessor.
                *
                * @param tension The Cardinal spline interpolation tension
                */
                (tension: number): Line;
            };
            /**
            * Control whether the line is defined at a given point.
            */
            defined: {
                /**
                * Get the accessor function that controls where the line is defined.
                */
                (): (data: any, index ?: number) => boolean;
                /**
                * Set the accessor function that controls where the area is defined.
                *
                * @param defined The new accessor function
                */
                (defined: (data: any) => boolean): Line;
            };
        }

        export interface LineRadial {
            /**
            * Returns the path data string
            *
            * @param data Array of data elements
            * @param index Optional index
            */
            (data: any[], index?: number): string;
            /**
            * Get or set the x-coordinate accessor.
            */
            x: {
                /**
                * Get the x-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the x-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): LineRadial;
                (accessor: (data: any, index: number) => number): LineRadial;

                /**
                * Set the  x-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): LineRadial;
            };
            /**
            * Get or set the y-coordinate accessor.
            */
            y: {
                /**
                * Get the y-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): LineRadial;
                (accessor: (data: any, index: number) => number): LineRadial;
                /**
                * Set the  y-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): LineRadial;
            };
            /**
            * Get or set the interpolation mode.
            */
            interpolate: {
                /**
                * Get the interpolation accessor.
                */
                (): string;
                /**
                * Set the interpolation accessor.
                *
                * @param interpolate The interpolation mode
                */
                (interpolate: string): LineRadial;
            };
            /**
            * Get or set the cardinal spline tension.
            */
            tension: {
                /**
                * Get the cardinal spline accessor.
                */
                (): number;
                /**
                * Set the cardinal spline accessor.
                *
                * @param tension The Cardinal spline interpolation tension
                */
                (tension: number): LineRadial;
            };
            /**
            * Control whether the line is defined at a given point.
            */
            defined: {
                /**
                * Get the accessor function that controls where the line is defined.
                */
                (): (data: any) => any;
                /**
                * Set the accessor function that controls where the area is defined.
                *
                * @param defined The new accessor function
                */
                (defined: (data: any) => any): LineRadial;
            };
            radius: {
                (): (d: any, i?: number) => number;
                (radius: number): LineRadial;
                (radius: (d: any) => number): LineRadial;
                (radius: (d: any, i: number) => number): LineRadial;
            }
            angle: {
                (): (d: any, i?: any) => number;
                (angle: number): LineRadial;
                (angle: (d: any) => number): LineRadial;
                (angle: (d: any, i: any) => number): LineRadial;
            }
        }

        export interface Area {
            /**
            * Generate a piecewise linear area, as in an area chart.
            */
            (data: any[], index?: number): string;
            /**
            * Get or set the x-coordinate accessor.
            */
            x: {
                /**
                * Get the x-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the x-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Area;
                (accessor: (data: any, index: number) => number): Area;
                /**
                * Set the  x-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): Area;
            };
            /**
            * Get or set the x0-coordinate (baseline) accessor.
            */
            x0: {
                /**
                * Get the  x0-coordinate (baseline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the  x0-coordinate (baseline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Area;
                (accessor: (data: any, index: number) => number): Area;
                /**
                * Set the  x0-coordinate (baseline) to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): Area;
            };
            /**
            * Get or set the x1-coordinate (topline) accessor.
            */
            x1: {
                /**
                * Get the  x1-coordinate (topline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the  x1-coordinate (topline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Area;
                (accessor: (data: any, index: number) => number): Area;
                /**
                * Set the  x1-coordinate (topline) to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): Area;
            };
            /**
            * Get or set the y-coordinate accessor.
            */
            y: {
                /**
                * Get the y-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Area;
                (accessor: (data: any, index: number) => number): Area;
                /**
                * Set the y-coordinate to a constant.
                *
                * @param cnst The constant value
                */
                (cnst: number): Area;
            };
            /**
            * Get or set the y0-coordinate (baseline) accessor.
            */
            y0: {
                /**
                * Get the y0-coordinate (baseline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y0-coordinate (baseline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Area;
                (accessor: (data: any, index: number) => number): Area;
                /**
                * Set the y0-coordinate (baseline) to a constant.
                *
                * @param cnst The constant value
                */
                (cnst: number): Area;
            };
            /**
            * Get or set the y1-coordinate (topline) accessor.
            */
            y1: {
                /**
                * Get the y1-coordinate (topline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y1-coordinate (topline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): Area;
                (accessor: (data: any, index: number) => number): Area;
                /**
                * Set the y1-coordinate (baseline) to a constant.
                *
                * @param cnst The constant value
                */
                (cnst: number): Area;
            };
            /**
            * Get or set the interpolation mode.
            */
            interpolate: {
                /**
                * Get the interpolation accessor.
                */
                (): string;
                /**
                * Set the interpolation accessor.
                *
                * @param interpolate The interpolation mode
                */
                (interpolate: string): Area;
            };
            /**
            * Get or set the cardinal spline tension.
            */
            tension: {
                /**
                * Get the cardinal spline accessor.
                */
                (): number;
                /**
                * Set the cardinal spline accessor.
                *
                * @param tension The Cardinal spline interpolation tension
                */
                (tension: number): Area;
            };
            /**
            * Control whether the area is defined at a given point.
            */
            defined: {
                /**
                * Get the accessor function that controls where the area is defined.
                */
                (): (data: any) => any;
                /**
                * Set the accessor function that controls where the area is defined.
                *
                * @param defined The new accessor function
                */
                (defined: (data: any) => any): Area;
            };
        }

        export interface AreaRadial {
            /**
            * Generate a piecewise linear area, as in an area chart.
            */
            (data: any[], index?: number): string;
            /**
            * Get or set the x-coordinate accessor.
            */
            x: {
                /**
                * Get the x-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the x-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): AreaRadial;
                (accessor: (data: any, index: number) => number): AreaRadial;
                /**
                * Set the  x-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): AreaRadial;
            };
            /**
            * Get or set the x0-coordinate (baseline) accessor.
            */
            x0: {
                /**
                * Get the  x0-coordinate (baseline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the  x0-coordinate (baseline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): AreaRadial;
                (accessor: (data: any, index: number) => number): AreaRadial;
                /**
                * Set the  x0-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): AreaRadial;
            };
            /**
            * Get or set the x1-coordinate (topline) accessor.
            */
            x1: {
                /**
                * Get the  x1-coordinate (topline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the  x1-coordinate (topline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): AreaRadial;
                (accessor: (data: any, index: number) => number): AreaRadial;
                /**
                * Set the  x1-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): AreaRadial;
            };
            /**
            * Get or set the y-coordinate accessor.
            */
            y: {
                /**
                * Get the y-coordinate accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): AreaRadial;
                (accessor: (data: any, index: number) => number): AreaRadial;
                /**
                * Set the y-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): AreaRadial;
            };
            /**
            * Get or set the y0-coordinate (baseline) accessor.
            */
            y0: {
                /**
                * Get the y0-coordinate (baseline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y0-coordinate (baseline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): AreaRadial;
                (accessor: (data: any, index: number) => number): AreaRadial;
                /**
                * Set the  y0-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): AreaRadial;
            };
            /**
            * Get or set the y1-coordinate (topline) accessor.
            */
            y1: {
                /**
                * Get the y1-coordinate (topline) accessor.
                */
                (): (data: any, index ?: number) => number;
                /**
                * Set the y1-coordinate (topline) accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: any) => number): AreaRadial;
                (accessor: (data: any, index: number) => number): AreaRadial;
                /**
                * Set the  y1-coordinate to a constant.
                *
                * @param cnst The new constant value.
                */
                (cnst: number): AreaRadial;
            };
            /**
            * Get or set the interpolation mode.
            */
            interpolate: {
                /**
                * Get the interpolation accessor.
                */
                (): string;
                /**
                * Set the interpolation accessor.
                *
                * @param interpolate The interpolation mode
                */
                (interpolate: string): AreaRadial;
            };
            /**
            * Get or set the cardinal spline tension.
            */
            tension: {
                /**
                * Get the cardinal spline accessor.
                */
                (): number;
                /**
                * Set the cardinal spline accessor.
                *
                * @param tension The Cardinal spline interpolation tension
                */
                (tension: number): AreaRadial;
            };
            /**
            * Control whether the area is defined at a given point.
            */
            defined: {
                /**
                * Get the accessor function that controls where the area is defined.
                */
                (): (data: any) => any;
                /**
                * Set the accessor function that controls where the area is defined.
                *
                * @param defined The new accessor function
                */
                (defined: (data: any) => any): AreaRadial;
            };
            radius: {
                (): number;
                (radius: number): AreaRadial;
                (radius: () => number): AreaRadial;
                (radius: (data: any) => number): AreaRadial;
                (radius: (data: any, index: number) => number): AreaRadial;
            };
            innerRadius: {
                (): number;
                (radius: number): AreaRadial;
                (radius: () => number): AreaRadial;
                (radius: (data: any) => number): AreaRadial;
                (radius: (data: any, index: number) => number): AreaRadial;
            };
            outerRadius: {
                (): number;
                (radius: number): AreaRadial;
                (radius: () => number): AreaRadial;
                (radius: (data: any) => number): AreaRadial;
                (radius: (data: any, index: number) => number): AreaRadial;
            };
            angle: {
                (): number;
                (angle: number): AreaRadial;
                (angle: () => number): AreaRadial;
                (angle: (data: any) => number): AreaRadial;
                (angle: (data: any, index: number) => number): AreaRadial;
            };
            startAngle: {
                (): number;
                (angle: number): AreaRadial;
                (angle: () => number): AreaRadial;
                (angle: (data: any) => number): AreaRadial;
                (angle: (data: any, index: number) => number): AreaRadial;
            };
            endAngle: {
                (): number;
                (angle: number): AreaRadial;
                (angle: () => number): AreaRadial;
                (angle: (data: any) => number): AreaRadial;
                (angle: (data: any, index: number) => number): AreaRadial;
            };
        }

        export interface Chord {
            (datum: any, index?: number): string;
            radius: {
                (): number;
                (radius: number): Chord;
                (radius: () => number): Chord;
            };
            startAngle: {
                (): number;
                (angle: number): Chord;
                (angle: () => number): Chord;
            };
            endAngle: {
                (): number;
                (angle: number): Chord;
                (angle: () => number): Chord;
            };
            source: {
                (): any;
                (angle: any): Chord;
                (angle: (d: any, i?: number) => any): Chord;
            };
            target: {
                (): any;
                (angle: any): Chord;
                (angle: (d: any, i?: number) => any): Chord;
            };
        }

        export interface Diagonal {
            (datum: any, index?: number): string;
            projection: {
                (): (datum: any, index?: number) => Array<number>;
                (proj: (datum: any) => Array<number>): Diagonal;
                (proj: (datum: any, index: number) => Array<number>): Diagonal;
            };
            source: {
                (): (datum: any, index?: number) => any;
                (src: (datum: any) => any): Diagonal;
                (src: (datum: any, index: number) => any): Diagonal;
                (src: any): Diagonal;
            };
            target: {
                (): (datum: any, index?: number) => any;
                (target: (d: any) => any): Diagonal;
                (target: (d: any, i: number) => any): Diagonal;
                (target: any): Diagonal;
            };
        }
    }

    // Scales
    export module Scale {
        export interface ScaleBase {
            /**
            * Construct a linear quantitative scale.
            */
            linear(): LinearScale;
            /*
            * Construct an ordinal scale.
            */
            ordinal(): OrdinalScale;
            /**
            * Construct a linear quantitative scale with a discrete output range.
            */
            quantize(): QuantizeScale;
            /*
            * Construct an ordinal scale with ten categorical colors.
            */
            category10(): OrdinalScale;
            /*
            * Construct an ordinal scale with twenty categorical colors
            */
            category20(): OrdinalScale;
            /*
            * Construct an ordinal scale with twenty categorical colors
            */
            category20b(): OrdinalScale;
            /*
            * Construct an ordinal scale with twenty categorical colors
            */
            category20c(): OrdinalScale;
            /*
            * Construct a linear identity scale.
            */
            identity(): IdentityScale;
            /*
            * Construct a quantitative scale with an logarithmic transform.
            */
            log(): LogScale;
            /*
            * Construct a quantitative scale with an exponential transform.
            */
            pow(): PowScale;
            /*
            * Construct a quantitative scale mapping to quantiles.
            */
            quantile(): QuantileScale;
            /*
            * Construct a quantitative scale with a square root transform.
            */
            sqrt(): SqrtScale;
            /*
            * Construct a threshold scale with a discrete output range.
            */
            threshold(): ThresholdScale;
        }

        export interface Scale {
            (value: any): any;
            domain: {
                (values: any[]): Scale;
                (): any[];
            };
            range: {
                (values: any[]): Scale;
                (): any[];
            };
            invertExtent?(y: any): any[];
            copy(): Scale;
        }

        export interface QuantitiveScale extends Scale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: number): number;
            /**
            * Get the domain value corresponding to a given range value.
            *
            * @param value Range Value
            */
            invert(value: number): number;
            /**
            * Get or set the scale's input domain.
            */
            domain: {
                /**
                * Set the scale's input domain.
                *
                * @param value The input domain
                */
                (values: any[]): QuantitiveScale;
                /**
                * Get the scale's input domain.
                */
                (): any[];
            };
            /**
            * get or set the scale's output range.
            */
            range: {
                /**
                * Set the scale's output range.
                *
                * @param value The output range.
                */
                (values: any[]): QuantitiveScale;
                /**
                * Get the scale's output range.
                */
                (): any[];
            };
            /**
            * Set the scale's output range, and enable rounding.
            *
            * @param value The output range.
            */
            rangeRound: (values: any[]) => QuantitiveScale;
            /**
            * get or set the scale's output interpolator.
            */
            interpolate: {
                (): D3.Transition.Interpolate;
                (factory: D3.Transition.Interpolate): QuantitiveScale;
            };
            /**
            * enable or disable clamping of the output range.
            *
            * @param clamp Enable or disable
            */
            clamp(clamp: boolean): QuantitiveScale;
            /**
            * extend the scale domain to nice round numbers.
            * 
            * @param count Optional number of ticks to exactly fit the domain
            */
            nice(count?: number): QuantitiveScale;
            /**
            * get representative values from the input domain.
            *
            * @param count Aproximate representative values to return.
            */
            ticks(count: number): any[];
            /**
            * get a formatter for displaying tick values
            *
            * @param count Aproximate representative values to return
            */
            tickFormat(count: number): (n: number) => string;
            /**
            * create a new scale from an existing scale..
            */
            copy(): QuantitiveScale;
        }

        export interface LinearScale extends QuantitiveScale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: number): number;
        }

        export interface IdentityScale extends Scale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: number): number;
            /**
            * Get the domain value corresponding to a given range value.
            *
            * @param value Range Value
            */
            invert(value: number): number;
            /**
            * get representative values from the input domain.
            *
            * @param count Aproximate representative values to return.
            */
            ticks(count: number): any[];
            /**
            * get a formatter for displaying tick values
            *
            * @param count Aproximate representative values to return
            */
            tickFormat(count: number): (n: number) => string;
        }

        export interface SqrtScale extends QuantitiveScale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: number): number;
        }

        export interface PowScale extends QuantitiveScale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: number): number;
        }

        export interface LogScale extends QuantitiveScale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: number): number;
        }

        export interface OrdinalScale extends Scale {
            /**
            * Get the range value corresponding to a given domain value.
            *
            * @param value Domain Value
            */
            (value: any): any;
            /**
            * Get or set the scale's input domain.
            */
            domain: {
                /**
                * Set the scale's input domain.
                *
                * @param value The input domain
                */
                (values: any[]): OrdinalScale;
                /**
                * Get the scale's input domain.
                */
                (): any[];
            };
            /**
            * get or set the scale's output range.
            */
            range: {
                /**
                * Set the scale's output range.
                *
                * @param value The output range.
                */
                (values: any[]): OrdinalScale;
                /**
                * Get the scale's output range.
                */
                (): any[];
            };
            rangePoints(interval: any[], padding?: number): OrdinalScale;
            rangeBands(interval: any[], padding?: number, outerPadding?: number): OrdinalScale;
            rangeRoundBands(interval: any[], padding?: number, outerPadding?: number): OrdinalScale;
            rangeBand(): number;
            rangeExtent(): any[];
            /**
            * create a new scale from an existing scale..
            */
            copy(): OrdinalScale;
        }

        export interface QuantizeScale extends Scale {
            (value: any): any;
            domain: {
                (values: number[]): QuantizeScale;
                (): any[];
            };
            range: {
                (values: any[]): QuantizeScale;
                (): any[];
            };
            copy(): QuantizeScale;
        }

        export interface ThresholdScale extends Scale {
            (value: any): any;
            domain: {
                (values: number[]): ThresholdScale;
                (): any[];
            };
            range: {
                (values: any[]): ThresholdScale;
                (): any[];
            };
            copy(): ThresholdScale;
        }

        export interface QuantileScale extends Scale {
            (value: any): any;
            domain: {
                (values: number[]): QuantileScale;
                (): any[];
            };
            range: {
                (values: any[]): QuantileScale;
                (): any[];
            };
            quantiles(): any[];
            copy(): QuantileScale;
        }

        export interface TimeScale extends Scale {
            (value: Date): number;
            invert(value: number): Date;
            domain: {
                (values: any[]): TimeScale;
                (): any[];
            };
            range: {
                (values: any[]): TimeScale;
                (): any[];
            };
            rangeRound: (values: any[]) => TimeScale;
            interpolate: {
                (): D3.Transition.Interpolate;
                (factory: D3.Transition.InterpolateFactory): TimeScale;
            };
            clamp(clamp: boolean): TimeScale;
            ticks: {
                (count: number): any[];
                (range: Range, count: number): any[];
            };
            tickFormat(count: number): (n: number) => string;
            copy(): TimeScale;
        }
    }

    // Behaviour
    export module Behavior {
        export interface Behavior{
            /**
            * Constructs a new drag behaviour
            */
            drag(): Drag;
            /**
            * Constructs a new zoom behaviour
            */
            zoom(): Zoom;
        }

        export interface Zoom {
            /**
            * Applies the zoom behavior to the specified selection,
            * registering the necessary event listeners to support
            * panning and zooming.
            */
            (selection: Selection): void;

            /**
            * Registers a listener to receive events
            *
            * @param type Enent name to attach the listener to
            * @param listener Function to attach to event
            */
            on: (type: string, listener: (data: any, index?: number) => any) => Zoom;

            /**
            * Gets or set the current zoom scale
            */
            scale: {
                /**
                * Get the current current zoom scale
                */
                (): number;
                /**
                * Set the current current zoom scale
                *
                * @param origin Zoom scale
                */
                (scale: number): Zoom;
            };

            /**
            * Gets or set the current zoom translation vector
            */
            translate: {
                /**
                * Get the current zoom translation vector
                */
                (): number[];
                /**
                * Set the current zoom translation vector
                *
                * @param translate Tranlation vector
                */
                (translate: number[]): Zoom;
            };

            /**
            * Gets or set the allowed scale range
            */
            scaleExtent: {
                /**
                * Get the current allowed zoom range
                */
                (): number[];
                /**
                * Set the allowable zoom range
                *
                * @param extent Allowed zoom range
                */
                (extent: number[]): Zoom;
            };

            /**
            * Gets or set the X-Scale that should be adjusted when zooming
            */
            x: {
                /**
                * Get the X-Scale
                */
                (): D3.Scale.Scale;
                /**
                * Set the X-Scale to be adjusted
                *
                * @param x The X Scale
                */
                (x: D3.Scale.Scale): Zoom;

            };

            /**
            * Gets or set the Y-Scale that should be adjusted when zooming
            */
            y: {
                /**
                * Get the Y-Scale
                */
                (): D3.Scale.Scale;
                /**
                * Set the Y-Scale to be adjusted
                *
                * @param y The Y Scale
                */
                (y: D3.Scale.Scale): Zoom;
            };
        }

        export interface Drag {
            /**
            * Execute drag method
            */
            (): any;

            /**
            * Registers a listener to receive events
            *
            * @param type Enent name to attach the listener to
            * @param listener Function to attach to event
            */
            on: (type: string, listener: (data: any, index?: number) => any) => Drag;

            /**
            * Gets or set the current origin accessor function
            */
            origin: {
                /**
                * Get the current origin accessor function
                */
                (): any;
                /**
                * Set the origin accessor function
                *
                * @param origin Accessor function
                */
                (origin?: any): Drag;
            };
        }
    }

    // Geography
    export module Geo {
        export interface Geo {
            /**
            * create a new geographic path generator
            */
            path(): Path;
            /**
            * create a circle generator.
            */
            circle(): Circle;
            /**
            * compute the spherical area of a given feature.
            */
            area(feature: any): number;
            /**
            * compute the latitude-longitude bounding box for a given feature.
            */
            bounds(feature: any): Array<Array<number>>;
            /**
            * compute the spherical centroid of a given feature.
            */
            centroid(feature: any): Array<number>;
            /**
            * compute the great-arc distance between two points.
            */
            distance(a: Array<number>, b: Array<number>): number;
            /**
            * interpolate between two points along a great arc.
            */
            interpolate(a: Array<number>, b: Array<number>): (t: number) => Array<number>;
            /**
            * compute the length of a line string or the circumference of a polygon.
            */
            length(feature: any): number;
            /**
            * create a standard projection from a raw projection.
            */
            projection(raw: RawProjection): Projection;
            /**
            * create a standard projection from a mutable raw projection.
            */
            projectionMutator(rawFactory: RawProjection): ProjectionMutator;
            /**
            * the Albers equal-area conic projection.
            */
            albers(): Projection;
            /**
            * a composite Albers projection for the United States.
            */
            albersUsa(): Projection;
            /**
            * the azimuthal equal-area projection.
            */
            azimuthalEqualArea: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the azimuthal equidistant projection.
            */
            azimuthalEquidistant: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the conic conformal projection.
            */
            conicConformal: {
                (): Projection;
                raw(phi1:number, phi2:number): RawProjection;
            }
            /**
            * the conic equidistant projection.
            */
            conicEquidistant: {
                (): Projection;
                raw(phi1:number, phi2:number): RawProjection;
            }
            /**
            * the conic equal-area (a.k.a. Albers) projection.
            */
            conicEqualArea: {
                (): Projection;
                raw(phi1:number, phi2:number): RawProjection;
            }
            /**
            * the equirectangular (plate carreé) projection.
            */
            equirectangular: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the gnomonic projection.
            */
            gnomonic: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the spherical Mercator projection.
            */
            mercator: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the azimuthal orthographic projection.
            */
            orthographic: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the azimuthal stereographic projection.
            */
            stereographic: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * the transverse Mercator projection.
            */
            transverseMercator: {
                (): Projection;
                raw: RawProjection;
            }
            /**
            * convert a GeoJSON object to a geometry stream.
            */
            stream(object: GeoJSON, listener: Stream): void;
            /**
            *
            */
            graticule(): Graticule;
            /**
            *
            */
            greatArc(): GreatArc;
            /**
            *
            */
            rotation(rotation: Array<number>): Rotation;
        }

        export interface Path {
            /**
            * Returns the path data string for the given feature
            */
            (feature: any, index?: any): string;
            /**
            * get or set the geographic projection.
            */
            projection: {
                /**
                * get the geographic projection.
                */
                (): Projection;
                /**
                * set the geographic projection.
                */
                (projection: Projection): Path;
            }
            /**
            * get or set the render context.
            */
            context: {
                /**
                * return an SVG path string invoked on the given feature.
                */
                (): string;
                /**
                * sets the render context and returns the path generator
                */
                (context: Context): Path;
            }
            /**
            * Computes the projected area
            */
            area(feature: any): any;
            /**
            * Computes the projected centroid
            */
            centroid(feature: any): any;
            /**
            * Computes the projected bounding box
            */
            bounds(feature: any): any;
            /**
            * get or set the radius to display point features.
            */
            pointRadius: {
                /**
                * returns the current radius
                */
                (): number;
                /**
                * sets the radius used to display Point and MultiPoint features to the specified number
                */
                (radius: number): Path;
                /**
                * sets the radius used to display Point and MultiPoint features to the specified number
                */
                (radius: (feature: any, index: number) => number): Path;
            }
        }

        export interface Context {
            beginPath(): any;
            moveTo(x: number, y: number): any;
            lineTo(x: number, y: number): any;
            arc(x: number, y: number, radius: number, startAngle: number, endAngle: number): any;
            closePath(): any;
        }

        export interface Circle {
            (...args: Array<any>): GeoJSON;
            origin: {
                (): Array<number>;
                (origin: Array<number>): Circle;
                (origin: (...args: Array<any>) => Array<number>): Circle;
            }
            angle: {
                (): number;
                (angle: number): Circle;
            }
            precision: {
                (): number;
                (precision: number): Circle;
            }
        }

        export interface Graticule{
            (): GeoJSON;
            lines(): Array<GeoJSON>;
            outline(): GeoJSON;
            extent: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Graticule;
            }
            minorExtent: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Graticule;
            }
            majorExtent: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Graticule;
            }
            step: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Graticule;
            }
            minorStep: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Graticule;
            }
            majorStep: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Graticule;
            }
            precision: {
                (): number;
                (precision: number): Graticule;
            }
        }

        export interface GreatArc {
            (): GeoJSON;
            distance(): number;
            source: {
                (): any;
                (source: any): GreatArc;
            }
            target: {
                (): any;
                (target: any): GreatArc;
            }
            precision: {
                (): number;
                (precision: number): GreatArc;
            }
        }

        export interface GeoJSON {
            coordinates: Array<Array<number>>;
            type: string;
        }

        export interface RawProjection {
            (lambda: number, phi: number): Array<number>;
            invert?(x: number, y: number): Array<number>;
        }

        export interface Projection {
            (coordinates: Array<number>): Array<number>;
            invert?(point: Array<number>): Array<number>;
            rotate: {
                (): Array<number>;
                (rotation: Array<number>): Projection;
            };
            center: {
                (): Array<number>;
                (location: Array<number>): Projection;
            };
            parallels: {
                (): Array<number>;
                (location: Array<number>): Projection;
            };
            translate: {
                (): Array<number>;
                (point: Array<number>): Projection;
            };
            scale: {
                (): number;
                (scale: number): Projection;
            };
            clipAngle: {
                (): number;
                (angle: number): Projection;
            };
            clipExtent: {
                (): Array<Array<number>>;
                (extent: Array<Array<number>>): Projection;
            };
            precision: {
                (): number;
                (precision: number): Projection;
            };
            stream(listener?: Stream): Stream;
        }

        export interface Stream {
            point(x: number, y: number, z?: number): void;
            lineStart(): void;
            lineEnd(): void;
            polygonStart(): void;
            polygonEnd(): void;
            sphere(): void;
        }

        export interface Rotation extends Array<any> {
            (location: Array<number>): Rotation;
            invert(location: Array<number>): Rotation;
        }

        export interface ProjectionMutator {
            (lambda: number, phi: number): Projection;
        }
    }

    // Geometry
    export module Geom {
        export interface Geom {
            voronoi<T>(): Voronoi<T>;
            /**
            * compute the Voronoi diagram for the specified points.
            */
            voronoi(vertices: Array<Vertice>): Array<Polygon>;
            /**
            * compute the Delaunay triangulation for the specified points.
            */
            delaunay(vertices?: Array<Vertice>): Array<Polygon>;
            /**
            * constructs a quadtree for an array of points.
            */
            quadtree(): QuadtreeFactory;
            /**
            * Constructs a new quadtree for the specified array of points.
            */
            quadtree(points: Array<Point>, x1: number, y1: number, x2: number, y2: number): Quadtree;
            /**
            * Constructs a new quadtree for the specified array of points.
            */
            quadtree(points: Array<Point>, width: number, height: number): Quadtree;
            /**
            * Returns the input array of vertices with additional methods attached
            */
            polygon(vertices:Array<Vertice>): Polygon;
            /**
            * creates a new hull layout with the default settings.
            */
            hull(): Hull;

            hull(vertices:Array<Vertice>): Array<Vertice>;
        }

        export interface Vertice extends Array<number> {
            /**
            * Returns the angle of the vertice
            */
            angle?: number;
        }

        export interface Polygon extends Array<Vertice> {
            /**
            * Returns the signed area of this polygon
            */
            area(): number;
            /**
            * Returns a two-element array representing the centroid of this polygon.
            */
            centroid(): Array<number>;
            /**
            * Clips the subject polygon against this polygon
            */
            clip(subject: Polygon): Polygon;
        }

        export interface QuadtreeFactory {
            /**
            * Constructs a new quadtree for the specified array of points.
            */
            (): Quadtree;
            /**
            * Constructs a new quadtree for the specified array of points.
            */
            (points: Array<Point>, x1: number, y1: number, x2: number, y2: number): Quadtree;
            /**
            * Constructs a new quadtree for the specified array of points.
            */
            (points: Array<Point>, width: number, height: number): Quadtree;

            x: {
                (): (d: any) => any;
                (accesor: (d: any) => any): QuadtreeFactory;

            }
            y: {
                (): (d: any) => any;
                (accesor: (d: any) => any): QuadtreeFactory;

            }
            size(): Array<number>;
            size(size: Array<number>): QuadtreeFactory;
            extent(): Array<Array<number>>;
            extent(points: Array<Array<number>>): QuadtreeFactory;
        }

        export interface Quadtree {
            /**
            * Adds a new point to the quadtree.
            */
            add(point: Point): void;
            visit(callback: any): void;
        }

        export interface Point {
            x: number;
            y: number;
        }

        export interface Voronoi<T> {
            /**
            * Compute the Voronoi diagram for the specified data.
            */
            (data: Array<T>): Array<Polygon>;
            /**
            * Compute the graph links for the Voronoi diagram for the specified data.
            */
            links(data: Array<T>): Array<Layout.GraphLink>;
            /**
            * Compute the triangles for the Voronoi diagram for the specified data.
            */
            triangles(data: Array<T>): Array<Array<number>>;
            x: {
                /**
                * Get the x-coordinate accessor.
                */
                (): (data: T, index ?: number) => number;

                /**
                * Set the x-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: T, index: number) => number): Voronoi<T>;

                /**
                * Set the x-coordinate to a constant.
                *
                * @param constant The new constant value.
                */
                (constant: number): Voronoi<T>;
            }
            y: {
                /**
                * Get the y-coordinate accessor.
                */
                (): (data: T, index ?: number) => number;

                /**
                * Set the y-coordinate accessor.
                *
                * @param accessor The new accessor function
                */
                (accessor: (data: T, index: number) => number): Voronoi<T>;

                /**
                * Set the y-coordinate to a constant.
                *
                * @param constant The new constant value.
                */
                (constant: number): Voronoi<T>;   
            }
            clipExtent: {
                /**
                * Get the clip extent.
                */
                (): Array<Array<number>>;
                /**
                * Set the clip extent.
                *
                * @param extent The new clip extent.
                */
                (extent: Array<Array<number>>): Voronoi<T>;
            }
            size: {
                /**
                * Get the size.
                */
                (): Array<number>;
                /**
                * Set the size, equivalent to a clip extent starting from (0,0).
                *
                * @param size The new size.
                */
                (size: Array<number>): Voronoi<T>;
            }
        }

        export interface Hull {
            (vertices: Array<Vertice>): Array<Vertice>;
            x: {
                (): (d: any) => any;
                (accesor: (d: any) => any): any;
            }
            y: {
                (): (d: any) => any;
                (accesor: (d: any) => any): any;
            }
        }
    }
}

declare var d3: D3.Base;
declare module cola {
    function applyPacking(graphs: Array<any>, w: any, h: any, node_size: any, desired_ratio?: number): void;
    function separateGraphs(nodes: any, links: any): any[];
}
declare module cola.vpsc {
    class PositionStats {
        scale: number;
        AB: number;
        AD: number;
        A2: number;
        constructor(scale: number);
        addVariable(v: Variable): void;
        getPosn(): number;
    }
    class Constraint {
        left: Variable;
        right: Variable;
        gap: number;
        equality: boolean;
        lm: number;
        active: boolean;
        unsatisfiable: boolean;
        constructor(left: Variable, right: Variable, gap: number, equality?: boolean);
        slack(): number;
    }
    class Variable {
        desiredPosition: number;
        weight: number;
        scale: number;
        offset: number;
        block: Block;
        cIn: Constraint[];
        cOut: Constraint[];
        constructor(desiredPosition: number, weight?: number, scale?: number);
        dfdv(): number;
        position(): number;
        visitNeighbours(prev: Variable, f: (c: Constraint, next: Variable) => void): void;
    }
    class Block {
        vars: Variable[];
        posn: number;
        ps: PositionStats;
        blockInd: number;
        constructor(v: Variable);
        private addVariable(v);
        updateWeightedPosition(): void;
        private compute_lm(v, u, postAction);
        private populateSplitBlock(v, prev);
        traverse(visit: (c: Constraint) => any, acc: any[], v?: Variable, prev?: Variable): void;
        findMinLM(): Constraint;
        private findMinLMBetween(lv, rv);
        private findPath(v, prev, to, visit);
        isActiveDirectedPathBetween(u: Variable, v: Variable): boolean;
        static split(c: Constraint): Block[];
        private static createSplitBlock(startVar);
        splitBetween(vl: Variable, vr: Variable): {
            constraint: Constraint;
            lb: Block;
            rb: Block;
        };
        mergeAcross(b: Block, c: Constraint, dist: number): void;
        cost(): number;
    }
    class Blocks {
        vs: Variable[];
        private list;
        constructor(vs: Variable[]);
        cost(): number;
        insert(b: Block): void;
        remove(b: Block): void;
        merge(c: Constraint): void;
        forEach(f: (b: Block, i: number) => void): void;
        updateBlockPositions(): void;
        split(inactive: Constraint[]): void;
    }
    class Solver {
        vs: Variable[];
        cs: Constraint[];
        bs: Blocks;
        inactive: Constraint[];
        static LAGRANGIAN_TOLERANCE: number;
        static ZERO_UPPERBOUND: number;
        constructor(vs: Variable[], cs: Constraint[]);
        cost(): number;
        setStartingPositions(ps: number[]): void;
        setDesiredPositions(ps: number[]): void;
        private mostViolated();
        satisfy(): void;
        solve(): number;
    }
}
declare class Iterator<T> {
    next(): T;
    prev(): T;
}
declare class RBTree<T> {
    constructor(comparator: (a: T, b: T) => number);
    insert(data: T): boolean;
    remove(data: T): boolean;
    findIter(data: T): Iterator<T>;
    iterator(): Iterator<T>;
    size: number;
}/// <reference path="vpsc.d.ts" />
/// <reference path="rbtree.d.ts" />
declare module cola.vpsc {
    interface Leaf {
        bounds: Rectangle;
        variable: Variable;
    }
    interface Group {
        bounds: Rectangle;
        padding: number;
        stiffness: number;
        leaves: Leaf[];
        groups: Group[];
        minVar: Variable;
        maxVar: Variable;
    }
    function computeGroupBounds(g: Group): Rectangle;
    class Rectangle {
        x: number;
        X: number;
        y: number;
        Y: number;
        constructor(x: number, X: number, y: number, Y: number);
        static empty(): Rectangle;
        cx(): number;
        cy(): number;
        overlapX(r: Rectangle): number;
        overlapY(r: Rectangle): number;
        setXCentre(cx: number): void;
        setYCentre(cy: number): void;
        width(): number;
        height(): number;
        union(r: Rectangle): Rectangle;
        /**
         * return any intersection points between the given line and the sides of this rectangle
         * @method lineIntersection
         * @param x1 number first x coord of line
         * @param y1 number first y coord of line
         * @param x2 number second x coord of line
         * @param y2 number second y coord of line
         * @return any intersection points found
         */
        lineIntersections(x1: number, y1: number, x2: number, y2: number): Array<{
            x: number;
            y: number;
        }>;
        /**
         * return any intersection points between a line extending from the centre of this rectangle to the given point,
         *  and the sides of this rectangle
         * @method lineIntersection
         * @param x2 number second x coord of line
         * @param y2 number second y coord of line
         * @return any intersection points found
         */
        rayIntersection(x2: number, y2: number): {
            x: number;
            y: number;
        };
        vertices(): {
            x: number;
            y: number;
        }[];
        static lineIntersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): {
            x: number;
            y: number;
        };
        inflate(pad: number): Rectangle;
    }
    function makeEdgeBetween(link: any, source: Rectangle, target: Rectangle, ah: number): void;
    function makeEdgeTo(s: {
        x: number;
        y: number;
    }, target: Rectangle, ah: number): {
        x: number;
        y: number;
    };
    function generateXConstraints(rs: Rectangle[], vars: Variable[]): Constraint[];
    function generateYConstraints(rs: Rectangle[], vars: Variable[]): Constraint[];
    function generateXGroupConstraints(root: Group): Constraint[];
    function generateYGroupConstraints(root: Group): Constraint[];
    function removeOverlaps(rs: Rectangle[]): void;
    interface GraphNode extends Leaf {
        fixed: boolean;
        width: number;
        height: number;
        x: number;
        y: number;
        px: number;
        py: number;
    }
    class IndexedVariable extends Variable {
        index: number;
        constructor(index: number, w: number);
    }
    class Projection {
        private nodes;
        private groups;
        private rootGroup;
        private avoidOverlaps;
        private xConstraints;
        private yConstraints;
        private variables;
        constructor(nodes: GraphNode[], groups: Group[], rootGroup?: Group, constraints?: any[], avoidOverlaps?: boolean);
        private createSeparation(c);
        private makeFeasible(c);
        private createAlignment(c);
        private createConstraints(constraints);
        private setupVariablesAndBounds(x0, y0, desired, getDesired);
        xProject(x0: number[], y0: number[], x: number[]): void;
        yProject(x0: number[], y0: number[], y: number[]): void;
        projectFunctions(): {
            (x0: number[], y0: number[], r: number[]): void;
        }[];
        private project(x0, y0, start, desired, getDesired, cs, generateConstraints, updateNodeBounds, updateGroupBounds);
        private solve(vs, cs, starting, desired);
    }
}
/// <reference path="vpsc.d.ts" />
/// <reference path="rectangle.d.ts" />
declare module cola.geom {
    class Point {
        x: number;
        y: number;
    }
    class LineSegment {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        constructor(x1: number, y1: number, x2: number, y2: number);
    }
    class PolyPoint extends Point {
        polyIndex: number;
    }
    /** tests if a point is Left|On|Right of an infinite line.
     * @param points P0, P1, and P2
     * @return >0 for P2 left of the line through P0 and P1
     *            =0 for P2 on the line
     *            <0 for P2 right of the line
     */
    function isLeft(P0: Point, P1: Point, P2: Point): number;
    /**
     * returns the convex hull of a set of points using Andrew's monotone chain algorithm
     * see: http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain
     * @param S array of points
     * @return the convex hull as an array of points
     */
    function ConvexHull(S: Point[]): Point[];
    function clockwiseRadialSweep(p: Point, P: Point[], f: (Point) => void): void;
    function tangent_PolyPolyC(V: Point[], W: Point[], t1: (a, b) => number, t2: (a, b) => number, cmp1: (a, b, c) => boolean, cmp2: (a, b, c) => boolean): {
        t1: number;
        t2: number;
    };
    function LRtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    function RLtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    function LLtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    function RRtangent_PolyPolyC(V: Point[], W: Point[]): {
        t1: number;
        t2: number;
    };
    class BiTangent {
        t1: number;
        t2: number;
        constructor(t1: number, t2: number);
    }
    class BiTangents {
        rl: BiTangent;
        lr: BiTangent;
        ll: BiTangent;
        rr: BiTangent;
    }
    class TVGPoint extends Point {
        vv: VisibilityVertex;
    }
    class VisibilityVertex {
        id: number;
        polyid: number;
        polyvertid: number;
        p: TVGPoint;
        constructor(id: number, polyid: number, polyvertid: number, p: TVGPoint);
    }
    class VisibilityEdge {
        source: VisibilityVertex;
        target: VisibilityVertex;
        constructor(source: VisibilityVertex, target: VisibilityVertex);
        length(): number;
    }
    class TangentVisibilityGraph {
        P: TVGPoint[][];
        V: VisibilityVertex[];
        E: VisibilityEdge[];
        constructor(P: TVGPoint[][], g0?: {
            V: VisibilityVertex[];
            E: VisibilityEdge[];
        });
        addEdgeIfVisible(u: TVGPoint, v: TVGPoint, i1: number, i2: number): void;
        addPoint(p: TVGPoint, i1: number): VisibilityVertex;
        private intersectsPolys(l, i1, i2);
    }
    function tangents(V: Point[], W: Point[]): BiTangents;
    function polysOverlap(p: Point[], q: Point[]): boolean;
}
/**
 * @module cola
 */
declare module cola {
    /**
     * Descent respects a collection of locks over nodes that should not move
     * @class Locks
     */
    class Locks {
        locks: any;
        /**
         * add a lock on the node at index id
         * @method add
         * @param id index of node to be locked
         * @param x required position for node
         */
        add(id: number, x: number[]): void;
        /**
         * @method clear clear all locks
         */
        clear(): void;
        /**
         * @isEmpty
         * @returns false if no locks exist
         */
        isEmpty(): boolean;
        /**
         * perform an operation on each lock
         * @apply
         */
        apply(f: (id: number, x: number[]) => void): void;
    }
    /**
     * Uses a gradient descent approach to reduce a stress or p-stress goal function over a graph with specified ideal edge lengths or a square matrix of dissimilarities.
     *
     * @class Descent
     */
    class Descent {
        D: number[][];
        G: number[][];
        threshold: number;
        /** Hessian Matrix
         * @property H {number[][][]}
         */
        H: number[][][];
        /** gradient vector
         * @property G {number[][]}
         */
        g: number[][];
        /** positions vector
         * @property x {number[][]}
         */
        x: number[][];
        /**
         * @property k {number} dimensionality
         */
        k: number;
        /**
         * number of data-points / nodes / size of vectors/matrices
         * @property n {number}
         */
        n: number;
        locks: Locks;
        private static zeroDistance;
        private minD;
        private Hd;
        private a;
        private b;
        private c;
        private d;
        private e;
        private ia;
        private ib;
        private xtmp;
        numGridSnapNodes: number;
        snapGridSize: number;
        snapStrength: number;
        scaleSnapByMaxH: boolean;
        private random;
        project: {
            (x0: number[], y0: number[], r: number[]): void;
        }[];
        /**
         * @method constructor
         * @param x {number[][]} initial coordinates for nodes
         * @param D {number[][]} matrix of desired distances between pairs of nodes
         * @param G {number[][]} [default=null] if specified, G is a matrix of weights for goal terms between pairs of nodes.
         * If G[i][j] > 1 and the separation between nodes i and j is greater than their ideal distance, then there is no contribution for this pair to the goal
         * If G[i][j] <= 1 then it is used as a weighting on the contribution of the variance between ideal and actual separation between i and j to the goal function
         */
        constructor(x: number[][], D: number[][], G?: number[][]);
        static createSquareMatrix(n: number, f: (i: number, j: number) => number): number[][];
        private offsetDir();
        computeDerivatives(x: number[][]): void;
        private static dotProd(a, b);
        private static rightMultiply(m, v, r);
        computeStepSize(d: number[][]): number;
        reduceStress(): number;
        private static copy(a, b);
        private stepAndProject(x0, r, d, stepSize);
        private static mApply(m, n, f);
        private matrixApply(f);
        private computeNextPosition(x0, r);
        run(iterations: number): number;
        rungeKutta(): number;
        private static mid(a, b, m);
        takeDescentStep(x: number[], d: number[], stepSize: number): void;
        computeStress(): number;
    }
    class PseudoRandom {
        seed: number;
        private a;
        private c;
        private m;
        private range;
        constructor(seed?: number);
        getNext(): number;
        getNextBetween(min: number, max: number): number;
    }
}
declare module cola.powergraph {
    interface LinkAccessor<Link> {
        getSourceIndex(l: Link): number;
        getTargetIndex(l: Link): number;
        getType(l: Link): number;
    }
    class PowerEdge {
        source: any;
        target: any;
        type: number;
        constructor(source: any, target: any, type: number);
    }
    class Configuration<Link> {
        private linkAccessor;
        modules: Module[];
        roots: ModuleSet[];
        R: number;
        constructor(n: number, edges: Link[], linkAccessor: LinkAccessor<Link>, rootGroup?: any[]);
        private initModulesFromGroup(group);
        merge(a: Module, b: Module, k?: number): Module;
        private rootMerges(k?);
        greedyMerge(): boolean;
        private nEdges(a, b);
        getGroupHierarchy(retargetedEdges: PowerEdge[]): any[];
        allEdges(): PowerEdge[];
        static getEdges(modules: ModuleSet, es: PowerEdge[]): void;
    }
    class Module {
        id: number;
        outgoing: LinkSets;
        incoming: LinkSets;
        children: ModuleSet;
        definition: any;
        gid: number;
        constructor(id: number, outgoing?: LinkSets, incoming?: LinkSets, children?: ModuleSet, definition?: any);
        getEdges(es: PowerEdge[]): void;
        isLeaf(): boolean;
        isIsland(): boolean;
        isPredefined(): boolean;
    }
    class ModuleSet {
        table: any;
        count(): number;
        intersection(other: ModuleSet): ModuleSet;
        intersectionCount(other: ModuleSet): number;
        contains(id: number): boolean;
        add(m: Module): void;
        remove(m: Module): void;
        forAll(f: (m: Module) => void): void;
        modules(): Module[];
    }
    class LinkSets {
        sets: any;
        n: number;
        count(): number;
        contains(id: number): boolean;
        add(linktype: number, m: Module): void;
        remove(linktype: number, m: Module): void;
        forAll(f: (ms: ModuleSet, linktype: number) => void): void;
        forAllModules(f: (m: Module) => void): void;
        intersection(other: LinkSets): LinkSets;
    }
    function getGroups<Link>(nodes: any[], links: Link[], la: LinkAccessor<Link>, rootGroup?: any[]): {
        groups: any[];
        powerEdges: PowerEdge[];
    };
}
/**
 * @module cola
 */
declare module cola {
    interface LinkAccessor<Link> {
        getSourceIndex(l: Link): number;
        getTargetIndex(l: Link): number;
    }
    interface LinkLengthAccessor<Link> extends LinkAccessor<Link> {
        setLength(l: Link, value: number): void;
    }
    /** modify the specified link lengths based on the symmetric difference of their neighbours
     * @class symmetricDiffLinkLengths
     */
    function symmetricDiffLinkLengths<Link>(links: Link[], la: LinkLengthAccessor<Link>, w?: number): void;
    /** modify the specified links lengths based on the jaccard difference between their neighbours
     * @class jaccardLinkLengths
     */
    function jaccardLinkLengths<Link>(links: Link[], la: LinkLengthAccessor<Link>, w?: number): void;
    interface IConstraint {
        left: number;
        right: number;
        gap: number;
    }
    interface DirectedEdgeConstraints {
        axis: string;
        gap: number;
    }
    interface LinkSepAccessor<Link> extends LinkAccessor<Link> {
        getMinSeparation(l: Link): number;
    }
    /** generate separation constraints for all edges unless both their source and sink are in the same strongly connected component
     * @class generateDirectedEdgeConstraints
     */
    function generateDirectedEdgeConstraints<Link>(n: number, links: Link[], axis: string, la: LinkSepAccessor<Link>): IConstraint[];
}
declare class PairingHeap<T> {
    elem: T;
    private subheaps;
    constructor(elem: T);
    toString(selector: any): string;
    forEach(f: any): void;
    count(): number;
    min(): T;
    empty(): boolean;
    contains(h: PairingHeap<T>): boolean;
    isHeap(lessThan: (a: T, b: T) => boolean): boolean;
    insert(obj: T, lessThan: any): PairingHeap<T>;
    merge(heap2: PairingHeap<T>, lessThan: any): PairingHeap<T>;
    removeMin(lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
    mergePairs(lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
    decreaseKey(subheap: PairingHeap<T>, newValue: T, setHeapNode: (e: T, h: PairingHeap<T>) => void, lessThan: (a: T, b: T) => boolean): PairingHeap<T>;
}
/**
 * @class PriorityQueue a min priority queue backed by a pairing heap
 */
declare class PriorityQueue<T> {
    private lessThan;
    private root;
    constructor(lessThan: (a: T, b: T) => boolean);
    /**
     * @method top
     * @return the top element (the min element as defined by lessThan)
     */
    top(): T;
    /**
     * @method push
     * put things on the heap
     */
    push(...args: T[]): PairingHeap<T>;
    /**
     * @method empty
     * @return true if no more elements in queue
     */
    empty(): boolean;
    /**
     * @method isHeap check heap condition (for testing)
     * @return true if queue is in valid state
     */
    isHeap(): boolean;
    /**
     * @method forEach apply f to each element of the queue
     * @param f function to apply
     */
    forEach(f: any): void;
    /**
     * @method pop remove and return the min element from the queue
     */
    pop(): T;
    /**
     * @method reduceKey reduce the key value of the specified heap node
     */
    reduceKey(heapNode: PairingHeap<T>, newKey: T, setHeapNode?: (e: T, h: PairingHeap<T>) => void): void;
    toString(selector: any): string;
    /**
     * @method count
     * @return number of elements in queue
     */
    count(): number;
}
/// <reference path="pqueue.d.ts" />
/**
 * @module shortestpaths
 */
declare module cola.shortestpaths {
    /**
     * calculates all-pairs shortest paths or shortest paths from a single node
     * @class Calculator
     * @constructor
     * @param n {number} number of nodes
     * @param es {Edge[]} array of edges
     */
    class Calculator<Link> {
        n: number;
        es: Link[];
        private neighbours;
        constructor(n: number, es: Link[], getSourceIndex: (Link) => number, getTargetIndex: (Link) => number, getLength: (Link) => number);
        /**
         * compute shortest paths for graph over n nodes with edges an array of source/target pairs
         * edges may optionally have a length attribute.  1 is the default.
         * Uses Johnson's algorithm.
         *
         * @method DistanceMatrix
         * @return the distance matrix
         */
        DistanceMatrix(): number[][];
        /**
         * get shortest paths from a specified start node
         * @method DistancesFromNode
         * @param start node index
         * @return array of path lengths
         */
        DistancesFromNode(start: number): number[];
        PathFromNodeToNode(start: number, end: number): number[];
        PathFromNodeToNodeWithPrevCost(start: number, end: number, prevCost: (u: number, v: number, w: number) => number): number[];
        private dijkstraNeighbours(start, dest?);
    }
}
/// <reference path="handledisconnected.d.ts" />
/// <reference path="geom.d.ts" />
/// <reference path="descent.d.ts" />
/// <reference path="powergraph.d.ts" />
/// <reference path="linklengths.d.ts" />
/// <reference path="shortestpaths.d.ts" />
/**
 * @module cola
 */
declare module cola {
    /**
     * The layout process fires three events:
     *  - start: layout iterations started
     *  - tick: fired once per iteration, listen to this to animate
     *  - end: layout converged, you might like to zoom-to-fit or something at notification of this event
     */
    enum EventType {
        start = 0,
        tick = 1,
        end = 2,
    }
    interface Event {
        type: EventType;
        alpha: number;
        stress?: number;
        listener?: () => void;
    }
    interface Node {
        x: number;
        y: number;
    }
    interface Link<NodeType> {
        source: NodeType;
        target: NodeType;
        length?: number;
    }
    /**
     * Main interface to cola layout.
     * @class Layout
     */
    class Layout {
        private _canvasSize;
        private _linkDistance;
        private _defaultNodeSize;
        private _linkLengthCalculator;
        private _linkType;
        private _avoidOverlaps;
        private _handleDisconnected;
        private _alpha;
        private _lastStress;
        private _running;
        private _nodes;
        private _groups;
        private _variables;
        private _rootGroup;
        private _links;
        private _constraints;
        private _distanceMatrix;
        private _descent;
        private _directedLinkConstraints;
        private _threshold;
        private _visibilityGraph;
        private _groupCompactness;
        private _fake;
        protected event: any;
        on(e: EventType | string, listener: (Event) => void): Layout;
        protected trigger(e: Event): void;
        protected kick(): void;
        /**
         * iterate the layout.  Returns true when layout converged.
         */
        protected tick(): boolean;
        /**
         * the list of nodes.
         * If nodes has not been set, but links has, then we instantiate a nodes list here, of the correct size,
         * before returning it.
         * @property nodes {Array}
         * @default empty list
         */
        nodes(): Array<Node>;
        nodes(v: Array<Node>): Layout;
        /**
         * a list of hierarchical groups defined over nodes
         * @property groups {Array}
         * @default empty list
         */
        groups(): Array<any>;
        groups(x: Array<any>): Layout;
        powerGraphGroups(f: Function): Layout;
        /**
         * if true, the layout will not permit overlaps of the node bounding boxes (defined by the width and height properties on nodes)
         * @property avoidOverlaps
         * @type bool
         * @default false
         */
        avoidOverlaps(): boolean;
        avoidOverlaps(v: boolean): Layout;
        /**
         * if true, the layout will not permit overlaps of the node bounding boxes (defined by the width and height properties on nodes)
         * @property avoidOverlaps
         * @type bool
         * @default false
         */
        handleDisconnected(): boolean;
        handleDisconnected(v: boolean): Layout;
        /**
         * causes constraints to be generated such that directed graphs are laid out either from left-to-right or top-to-bottom.
         * a separation constraint is generated in the selected axis for each edge that is not involved in a cycle (part of a strongly connected component)
         * @param axis {string} 'x' for left-to-right, 'y' for top-to-bottom
         * @param minSeparation {number|link=>number} either a number specifying a minimum spacing required across all links or a function to return the minimum spacing for each link
         */
        flowLayout(axis: string, minSeparation: number | ((any) => number)): Layout;
        /**
         * links defined as source, target pairs over nodes
         * @property links {array}
         * @default empty list
         */
        links(): Array<Link<Node | number>>;
        links(x: Array<Link<Node | number>>): Layout;
        /**
         * list of constraints of various types
         * @property constraints
         * @type {array}
         * @default empty list
         */
        constraints(): Array<any>;
        constraints(c: Array<any>): Layout;
        /**
         * Matrix of ideal distances between all pairs of nodes.
         * If unspecified, the ideal distances for pairs of nodes will be based on the shortest path distance between them.
         * @property distanceMatrix
         * @type {Array of Array of Number}
         * @default null
         */
        distanceMatrix(): Array<Array<number>>;
        distanceMatrix(d: Array<Array<number>>): Layout;
        /**
         * Size of the layout canvas dimensions [x,y]. Currently only used to determine the midpoint which is taken as the starting position
         * for nodes with no preassigned x and y.
         * @property size
         * @type {Array of Number}
         */
        size(): Array<number>;
        size(x: Array<number>): Layout;
        /**
         * Default size (assume nodes are square so both width and height) to use in packing if node width/height are not specified.
         * @property defaultNodeSize
         * @type {Number}
         */
        defaultNodeSize(): number;
        defaultNodeSize(x: number): Layout;
        /**
         * The strength of attraction between the group boundaries to each other.
         * @property defaultNodeSize
         * @type {Number}
         */
        groupCompactness(): number;
        groupCompactness(x: number): Layout;
        /**
         * links have an ideal distance, The automatic layout will compute layout that tries to keep links (AKA edges) as close as possible to this length.
         */
        linkDistance(): number;
        linkDistance(): (any) => number;
        linkDistance(x: number): Layout;
        linkDistance(x: (any) => number): Layout;
        linkType(f: Function | number): Layout;
        convergenceThreshold(): number;
        convergenceThreshold(x: number): Layout;
        alpha(): number;
        alpha(x: number): Layout;
        getLinkLength(link: any): number;
        static setLinkLength(link: any, length: number): void;
        getLinkType(link: any): number;
        linkAccessor: {
            getSourceIndex: (e: any) => any;
            getTargetIndex: (e: any) => any;
            setLength: (link: any, length: number) => void;
            getType: (l: any) => any;
        };
        /**
         * compute an ideal length for each link based on the graph structure around that link.
         * you can use this (for example) to create extra space around hub-nodes in dense graphs.
         * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
         * i.e. if neighbours of source is a and neighbours of target are b then calculation is: sqrt(|a union b| - |a intersection b|)
         * Actual computation based on inspection of link structure occurs in start(), so links themselves
         * don't have to have been assigned before invoking this function.
         * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
         * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
         */
        symmetricDiffLinkLengths(idealLength: number, w?: number): Layout;
        /**
         * compute an ideal length for each link based on the graph structure around that link.
         * you can use this (for example) to create extra space around hub-nodes in dense graphs.
         * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
         * i.e. if neighbours of source is a and neighbours of target are b then calculation is: |a intersection b|/|a union b|
         * Actual computation based on inspection of link structure occurs in start(), so links themselves
         * don't have to have been assigned before invoking this function.
         * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
         * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
         */
        jaccardLinkLengths(idealLength: number, w?: number): Layout;
        /**
         * start the layout process
         * @method start
         * @param {number} [initialUnconstrainedIterations=0] unconstrained initial layout iterations
         * @param {number} [initialUserConstraintIterations=0] initial layout iterations with user-specified constraints
         * @param {number} [initialAllConstraintsIterations=0] initial layout iterations with all constraints including non-overlap
         * @param {number} [gridSnapIterations=0] iterations of "grid snap", which pulls nodes towards grid cell centers - grid of size node[0].width - only really makes sense if all nodes have the same width and height
         */
        start(initialUnconstrainedIterations?: number, initialUserConstraintIterations?: number, initialAllConstraintsIterations?: number, gridSnapIterations?: number): Layout;
        resume(): Layout;
        stop(): Layout;
        prepareEdgeRouting(nodeMargin?: number): void;
        routeEdge(d: any, draw: any): any[];
        static getSourceIndex(e: any): any;
        static getTargetIndex(e: any): any;
        static linkId(e: any): string;
        static dragStart(d: any): void;
        static dragEnd(d: any): void;
        static mouseOver(d: any): void;
        static mouseOut(d: any): void;
    }
}
/// <reference path="../extern/d3.d.ts" />
/// <reference path="layout.d.ts" />
declare module cola {
    class D3StyleLayoutAdaptor extends Layout {
        event: D3.Dispatch;
        trigger(e: Event): void;
        kick(): void;
        drag: () => any;
        constructor();
        on(eventType: EventType | string, listener: () => void): D3StyleLayoutAdaptor;
    }
    /**
     * provides an interface for use with d3:
     * - uses the d3 event system to dispatch layout events such as:
     *   o "start" (start layout process)
     *   o "tick" (after each layout iteration)
     *   o "end" (layout converged and complete).
     * - uses the d3 timer to queue layout iterations.
     * - sets up d3.behavior.drag to drag nodes
     *   o use `node.call(<the returned instance of Layout>.drag)` to make nodes draggable
     * returns an instance of the cola.Layout itself with which the user
     * can interact directly.
     */
    function d3adaptor(): D3StyleLayoutAdaptor;
}
/// <reference path="rectangle.d.ts" />
/// <reference path="shortestpaths.d.ts" />
/// <reference path="geom.d.ts" />
/// <reference path="vpsc.d.ts" />
declare module cola {
    interface NodeAccessor<Node> {
        getChildren(v: Node): number[];
        getBounds(v: Node): cola.vpsc.Rectangle;
    }
    class NodeWrapper {
        id: number;
        rect: cola.vpsc.Rectangle;
        children: number[];
        leaf: boolean;
        parent: NodeWrapper;
        ports: Vert[];
        constructor(id: number, rect: cola.vpsc.Rectangle, children: number[]);
    }
    class Vert {
        id: number;
        x: number;
        y: number;
        node: NodeWrapper;
        line: any;
        constructor(id: number, x: number, y: number, node?: NodeWrapper, line?: any);
    }
    class LongestCommonSubsequence<T> {
        s: T[];
        t: T[];
        length: number;
        si: number;
        ti: number;
        reversed: boolean;
        constructor(s: T[], t: T[]);
        private static findMatch<T>(s, t);
        getSequence(): T[];
    }
    class GridRouter<Node> {
        originalnodes: Node[];
        groupPadding: number;
        leaves: any[];
        groups: NodeWrapper[];
        nodes: NodeWrapper[];
        cols: any;
        rows: any;
        root: any;
        verts: Vert[];
        edges: any;
        backToFront: any;
        obstacles: any;
        passableEdges: any;
        private avg(a);
        private getGridDim(axis);
        private getDepth(v);
        private midPoints(a);
        constructor(originalnodes: Node[], accessor: NodeAccessor<Node>, groupPadding?: number);
        private findLineage(v);
        private findAncestorPathBetween(a, b);
        siblingObstacles(a: any, b: any): any;
        static getSegmentSets(routes: any, x: any, y: any): any[];
        static nudgeSegs(x: string, y: string, routes: any, segments: any, leftOf: any, gap: number): void;
        static nudgeSegments(routes: any, x: string, y: string, leftOf: (e1: number, e2: number) => boolean, gap: number): void;
        routeEdges<Edge>(edges: Edge[], gap: number, source: (e: Edge) => number, target: (e: Edge) => number): geom.Point[][][];
        static angleBetween2Lines(line1: geom.Point[], line2: geom.Point[]): number;
        private static isLeft(a, b, c);
        private static getOrder(pairs);
        static orderEdges(edges: any): (l: number, r: number) => boolean;
        static makeSegments(path: geom.Point[]): geom.Point[][];
        route(s: number, t: number): geom.Point[];
        static getRoutePath(route: geom.Point[][], cornerradius: number, arrowwidth: number, arrowheight: number): {
            routepath: string;
            arrowpath: string;
        };
    }
}
declare module 'webcola' {
	import main = require('webcola/WebCola/index');
	export = main;
}
