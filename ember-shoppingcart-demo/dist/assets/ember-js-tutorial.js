'use strict';



;define("ember-js-tutorial/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/adapters/application", ["exports", "@ember-data/adapter/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/rest"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class ApplicationAdapter extends _rest.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
    buildURL() {
      return `${super.buildURL(...arguments)}.json`;
    }
  }
  _exports.default = ApplicationAdapter;
});
;define("ember-js-tutorial/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ember-js-tutorial/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"ember-js-tutorial/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-js-tutorial/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/components/general-container", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route="cart" class="cart-link">
    <i class="fa fa-shopping-cart"></i>
    {{#if this.shoppingCart.itemList.length}}
      <span class="cart-count d-inline-flex justify-content-center align-items-center">
        {{this.itemCount}}
      </span>
    {{/if}}
  </LinkTo>
  
  <main class="container mt-5">
    {{yield}}
  </main>
  */
  {
    "id": "3x2CAjyu",
    "block": "[[[8,[39,0],[[24,0,\"cart-link\"]],[[\"@route\"],[\"cart\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"i\"],[14,0,\"fa fa-shopping-cart\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"shoppingCart\",\"itemList\",\"length\"]],[[[1,\"    \"],[10,1],[14,0,\"cart-count d-inline-flex justify-content-center align-items-center\"],[12],[1,\"\\n      \"],[1,[30,0,[\"itemCount\"]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null]],[]]]]],[1,\"\\n\\n\"],[10,\"main\"],[14,0,\"container mt-5\"],[12],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13]],[\"&default\"],false,[\"link-to\",\"if\",\"yield\"]]",
    "moduleName": "ember-js-tutorial/components/general-container.hbs",
    "isStrictMode": false
  });
  let GeneralContainerComponent = (_class = class GeneralContainerComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "shoppingCart", _descriptor, this);
    }
    get itemCount() {
      return this.shoppingCart.itemList.reduce((total, item) => {
        return total += item.count;
      }, 0);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "shoppingCart", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = GeneralContainerComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GeneralContainerComponent);
});
;define("ember-js-tutorial/components/product", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route="item" @model={{@product.id}} class="product">
    <Product::Image @src={{this.productImage}}/>
    <Product::Details
      @name={{@product.name}}
      @price={{@product.price}}
    />
  </LinkTo>
  
  
  */
  {
    "id": "S9Xfo5ap",
    "block": "[[[8,[39,0],[[24,0,\"product\"]],[[\"@route\",\"@model\"],[\"item\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@src\"],[[30,0,[\"productImage\"]]]],null],[1,\"\\n  \"],[8,[39,2],null,[[\"@name\",\"@price\"],[[30,1,[\"name\"]],[30,1,[\"price\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@product\"],false,[\"link-to\",\"product/image\",\"product/details\"]]",
    "moduleName": "ember-js-tutorial/components/product.hbs",
    "isStrictMode": false
  });
  class ProductComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "productImage", this.args.product.colors[0].image);
    }
  }
  _exports.default = ProductComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProductComponent);
});
;define("ember-js-tutorial/components/product/details", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="product-details">
  
    {{!-- Header --}}
    <section>
      <h3>{{@name}}</h3>
      <div class="text-warning">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
      </div>
    </section>
  
    {{!-- Price --}}
    <section class={{unless @isDetails 'h4'}}>
      <del class="small text-black-50">{{currency @price.original}}</del>
      <i class="text-danger font-weight-bold">{{currency @price.current}}</i>
    </section>
  
    {{#if @isDetails}}
      <div class="d-flex justify-content-between align-items-end">
        <div>
          <h5>Color</h5>
          <div class="product-colors active-{{@color}}">
            {{#each @colors as |colorInfo|}}
              <span class="product-color {{concat 'color-' colorInfo.color}}"
                {{on "click" (fn @onChangeColor colorInfo.color)}}></span>
            {{/each}}
          </div>
        </div>
        <button class="btn btn-info" type="button" {{on "click" this.addToCart}}>
          <i class="fa fa-shopping-cart mr-1"></i>
          Add to cart
        </button>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "kPI8LDud",
    "block": "[[[10,0],[14,0,\"product-details\"],[12],[1,\"\\n\\n\"],[1,\"  \"],[10,\"section\"],[12],[1,\"\\n    \"],[10,\"h3\"],[12],[1,[30,1]],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-warning\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa fa-star\"],[12],[13],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa fa-star-half-o\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[1,\"  \"],[10,\"section\"],[15,0,[52,[51,[30,2]],\"h4\"]],[12],[1,\"\\n    \"],[10,\"del\"],[14,0,\"small text-black-50\"],[12],[1,[28,[35,1],[[30,3,[\"original\"]]],null]],[13],[1,\"\\n    \"],[10,\"i\"],[14,0,\"text-danger font-weight-bold\"],[12],[1,[28,[35,1],[[30,3,[\"current\"]]],null]],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,2],[[[1,\"    \"],[10,0],[14,0,\"d-flex justify-content-between align-items-end\"],[12],[1,\"\\n      \"],[10,0],[12],[1,\"\\n        \"],[10,\"h5\"],[12],[1,\"Color\"],[13],[1,\"\\n        \"],[10,0],[15,0,[29,[\"product-colors active-\",[30,4]]]],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,5]],null]],null],null,[[[1,\"            \"],[11,1],[16,0,[29,[\"product-color \",[28,[37,5],[\"color-\",[30,6,[\"color\"]]],null]]]],[4,[38,6],[\"click\",[28,[37,7],[[30,7],[30,6,[\"color\"]]],null]],null],[12],[13],[1,\"\\n\"]],[6]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-info\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"addToCart\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"fa fa-shopping-cart mr-1\"],[12],[13],[1,\"\\n        Add to cart\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"@name\",\"@isDetails\",\"@price\",\"@color\",\"@colors\",\"colorInfo\",\"@onChangeColor\"],false,[\"unless\",\"currency\",\"if\",\"each\",\"-track-array\",\"concat\",\"on\",\"fn\"]]",
    "moduleName": "ember-js-tutorial/components/product/details.hbs",
    "isStrictMode": false
  });
  let ProductDetailsComponent = (_dec = (0, _service.inject)('shopping-cart'), (_class = class ProductDetailsComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    addToCart() {
      const {
        name,
        color,
        colors,
        price
      } = this.args;
      this.cart.addItem({
        name,
        color,
        image: colors.find(colorInfo => colorInfo.color === color).image,
        price: price.current
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addToCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addToCart"), _class.prototype)), _class));
  _exports.default = ProductDetailsComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProductDetailsComponent);
});
;define("ember-js-tutorial/components/product/image", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="product-image" {{on "click" @toggleZoom}}>
    <img src={{@src}} alt="">
  </div>
  */
  {
    "id": "swKN/VT7",
    "block": "[[[11,0],[24,0,\"product-image\"],[4,[38,0],[\"click\",[30,1]],null],[12],[1,\"\\n  \"],[10,\"img\"],[15,\"src\",[30,2]],[14,\"alt\",\"\"],[12],[13],[1,\"\\n\"],[13]],[\"@toggleZoom\",\"@src\"],false,[\"on\"]]",
    "moduleName": "ember-js-tutorial/components/product/image.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("ember-js-tutorial/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/controllers/cart", ["exports", "@ember/controller", "@ember/service", "@ember/object"], function (_exports, _controller, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let CartController = (_dec = (0, _service.inject)('shopping-cart'), (_class = class CartController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    get subtotal() {
      return this.cart.itemList.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    }
    get tax() {
      return 0.09 * this.subtotal;
    }
    get total() {
      return this.subtotal + this.tax;
    }
    updateItemCount(item, event) {
      const count = event.target.value;
      if (count >= 0) {
        item.count = count;
      } else {
        item.count = 0;
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateItemCount", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateItemCount"), _class.prototype)), _class));
  _exports.default = CartController;
});
;define("ember-js-tutorial/controllers/item", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ItemController = (_class = class ItemController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "color", _descriptor, this);
      _initializerDefineProperty(this, "isZoomed", _descriptor2, this);
    }
    get productImage() {
      return this.model.colors.find(_ref => {
        let {
          color
        } = _ref;
        return color === this.color;
      }).image;
    }
    onChangeColor(newColor) {
      this.color = newColor;
    }
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "color", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isZoomed", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onChangeColor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onChangeColor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleZoom", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleZoom"), _class.prototype)), _class);
  _exports.default = ItemController;
});
;define("ember-js-tutorial/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/data/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.products = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  const products = [{
    id: '1',
    name: 'Beats Solo Wireless Headphones',
    description: 'With up to 40 hours of battery life, Beats Solo Wireless is your perfect everyday headphone',
    price: {
      original: 199.95,
      current: 99.98
    },
    features: ['High-performance wireless noise cancelling headphones in red', 'Active Noise Cancelling (ANC) blocks external noise', 'Transparency helps you stay aware of your surroundings while listening', 'Features the Apple H1 Headphone Chip and Class 1 Bluetooth for extended range and fewer dropouts', 'Compatible with iOS and Android', 'Hands-free controls via “Hey Siri” on iOS devices, and voice capability with the push of the b button on a variety of compatible devices ', 'Up to 22 hours of listening time (up to 40 hours with ANC and Transparency turned off)'],
    colors: [{
      color: 'red',
      image: '/assets/images/beats-solo-red.png'
    }, {
      color: 'black',
      image: '/assets/images/beats-solo-black.png'
    }]
  }, {
    id: '2',
    name: 'Nike Air Force 1',
    description: 'Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world.',
    price: {
      original: 109.95,
      current: 89.98
    },
    features: ['Full-grain leather in the upper adds a premium look and feel.', 'Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.', 'The padded, low-cut collar looks sleek and feels great.'],
    colors: [{
      color: 'white',
      image: '/assets/images/nike-af1-white.png'
    }]
  }];
  _exports.products = products;
});
;define("ember-js-tutorial/helpers/app-version", ["exports", "@ember/component/helper", "ember-js-tutorial/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"ember-js-tutorial/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("ember-js-tutorial/helpers/currency", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f
  class currency extends _helper.default {
    compute(params) {
      let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // {{currency 25}}
      const [number] = params;
      const {
        sign = '$'
      } = hash;
      const dollars = Math.floor(number);
      let cents = Math.floor(number * 100 % 100);
      if (cents.toString().length === 1) {
        cents = '0' + cents;
      }
      return `${sign}${dollars}.${cents}`;
    }
  }
  _exports.default = currency;
});
;define("ember-js-tutorial/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-js-tutorial/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-js-tutorial/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-js-tutorial/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-js-tutorial/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"ember-js-tutorial/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-js-tutorial/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("ember-js-tutorial/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-js-tutorial/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("ember-js-tutorial/models/product", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProductModel = (_class = class ProductModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
      _initializerDefineProperty(this, "price", _descriptor3, this);
      _initializerDefineProperty(this, "features", _descriptor4, this);
      _initializerDefineProperty(this, "colors", _descriptor5, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "price", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "features", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "colors", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ProductModel;
});
;define("ember-js-tutorial/router", ["exports", "@ember/routing/router", "ember-js-tutorial/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"ember-js-tutorial/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('item', {
      path: '/item/:item_id'
    });
    this.route('not-found', {
      path: '/*path'
    });
    this.route('cart', {
      path: 'shopping-cart'
    });
  });
});
;define("ember-js-tutorial/routes/cart", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class CartRoute extends _route.default {
    model() {
      const items = [{
        price: 10
      }, {
        price: 15
      }];
      return items;
    }
  }
  _exports.default = CartRoute;
});
;define("ember-js-tutorial/routes/index", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let IndexRoute = (_class = class IndexRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model() {
      return this.store.findAll('product');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = IndexRoute;
});
;define("ember-js-tutorial/routes/item", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ItemRoute = (_class = class ItemRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model(params) {
      const {
        item_id
      } = params;
      const data = await this.store.findAll('product');
      const product = data.find(_ref => {
        let {
          id
        } = _ref;
        return id === item_id;
      });
      return product;
    }
    setupController(controller, model) {
      super.setupController(controller, model);
      controller.color = model.colors[0].color;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ItemRoute;
});
;define("ember-js-tutorial/routes/not-found", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class NotFoundRoute extends _route.default {}
  _exports.default = NotFoundRoute;
});
;define("ember-js-tutorial/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/serializers/application", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
  class ApplicationSerializer extends _rest.default {}
  _exports.default = ApplicationSerializer;
});
;define("ember-js-tutorial/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/services/shopping-cart", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _class3, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let Item = (_class = class Item {
    constructor(item) {
      _initializerDefineProperty(this, "count", _descriptor, this);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "color", void 0);
      _defineProperty(this, "image", void 0);
      _defineProperty(this, "price", void 0);
      this.count = item.count;
      this.name = item.name;
      this.color = item.color;
      this.image = item.image;
      this.price = item.price;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  let ShoppingCartService = (_class3 = class ShoppingCartService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "itemList", _descriptor2, this);
    }
    addItem(item) {
      const existingItem = this.itemList.find(_ref => {
        let {
          name,
          color
        } = _ref;
        return name === item.name && color === item.color;
      });
      if (existingItem) {
        existingItem.count += 1;
      } else {
        this.itemList = [...this.itemList, new Item({
          ...item,
          count: 1
        })];
      }
    }
  }, (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "itemList", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class3);
  _exports.default = ShoppingCartService;
});
;define("ember-js-tutorial/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    
  {{outlet}}
  */
  {
    "id": "ssncD7Vt",
    "block": "[[[1,\"\\n\"],[46,[28,[37,1],null,null],null,null,null]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "ember-js-tutorial/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-js-tutorial/templates/cart", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <main class="container mt-5">
    <h1>Shopping Cart</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <LinkTo @route="index">
          Home
        </LinkTo>
      </li>
      <li class="breadcrumb-item">Shopping Cart</li>
    </ol>
  
    {{#each this.cart.itemList as |item|}}
      <div class="cart-item d-flex align-items-center">
        <div class="cart-item-thumbnail">
          <img src={{item.image}} alt="">
        </div>
        <div class="ml-3">
          <h4>{{item.name}}</h4>
          <i class="font-weight-bold">{{currency item.price}}</i>
        </div>
        <input
          type="number"
          class="ml-auto"
          value={{item.count}}
          {{on "input" (fn this.updateItemCount item)}}
        >
      </div>
    {{/each}}
    <section class="w-50 ml-auto text-right mb-5">
      <div class="row">
        <span class="col">Subtotal</span>
        <span class="col">{{currency this.subtotal}}</span>
      </div>
      <div class="row">
        <span class="col">Tax</span>
        <span class="col">{{currency this.tax}}</span>
      </div>
      <div class="row">
        <span class="col">Total</span>
        <span class="col">{{currency this.total}}</span>
      </div>
    </section>
  
    <button type="button" class="btn btn-success float-right">
      Check out
    </button>
  </main>
  */
  {
    "id": "tJiq1NRP",
    "block": "[[[10,\"main\"],[14,0,\"container mt-5\"],[12],[1,\"\\n  \"],[10,\"h1\"],[12],[1,\"Shopping Cart\"],[13],[1,\"\\n  \"],[10,\"ol\"],[14,0,\"breadcrumb\"],[12],[1,\"\\n    \"],[10,\"li\"],[14,0,\"breadcrumb-item\"],[12],[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n        Home\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"li\"],[14,0,\"breadcrumb-item\"],[12],[1,\"Shopping Cart\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"cart\",\"itemList\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"cart-item d-flex align-items-center\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"cart-item-thumbnail\"],[12],[1,\"\\n        \"],[10,\"img\"],[15,\"src\",[30,1,[\"image\"]]],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"ml-3\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n        \"],[10,\"i\"],[14,0,\"font-weight-bold\"],[12],[1,[28,[35,3],[[30,1,[\"price\"]]],null]],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"input\"],[24,0,\"ml-auto\"],[16,2,[30,1,[\"count\"]]],[24,4,\"number\"],[4,[38,4],[\"input\",[28,[37,5],[[30,0,[\"updateItemCount\"]],[30,1]],null]],null],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[10,\"section\"],[14,0,\"w-50 ml-auto text-right mb-5\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,\"Subtotal\"],[13],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,[28,[35,3],[[30,0,[\"subtotal\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,\"Tax\"],[13],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,[28,[35,3],[[30,0,[\"tax\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,\"Total\"],[13],[1,\"\\n      \"],[10,1],[14,0,\"col\"],[12],[1,[28,[35,3],[[30,0,[\"total\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"button\"],[14,0,\"btn btn-success float-right\"],[14,4,\"button\"],[12],[1,\"\\n    Check out\\n  \"],[13],[1,\"\\n\"],[13]],[\"item\"],false,[\"link-to\",\"each\",\"-track-array\",\"currency\",\"on\",\"fn\"]]",
    "moduleName": "ember-js-tutorial/templates/cart.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-js-tutorial/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <GeneralContainer>
    {{#each this.model as |product|}}
      <Product @product={{product}}/>
    {{/each}}
  </GeneralContainer>
  */
  {
    "id": "QdHLIHhP",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@product\"],[[30,1]]],null],[1,\"\\n\"]],[1]],null]],[]]]]]],[\"product\"],false,[\"general-container\",\"each\",\"-track-array\",\"product\"]]",
    "moduleName": "ember-js-tutorial/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-js-tutorial/templates/item", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <GeneralContainer>
    <div class="product item-details-page {{if this.isZoomed 'is-zoomed'}}">
      <Product::Image 
      @src={{this.productImage}}
      @toggleZoom={{this.toggleZoom}} />
      
      <Product::Details 
      @isDetails={{true}}
      @name={{this.model.name}}
      @price={{this.model.price}}
      @colors={{this.model.colors}}
      @color={{this.color}} 
      @onChangeColor={{this.onChangeColor}}/>
    </div>
    <h5 class="mt-5">Features</h5>
    <ul>  
  
  {{#each this.model.features as |feature| }}
    <li>{{feature}}</li>
  {{/each}}
  
    </ul>
  </GeneralContainer>
  */
  {
    "id": "+J/tFwH/",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,0],[15,0,[29,[\"product item-details-page \",[52,[30,0,[\"isZoomed\"]],\"is-zoomed\"]]]],[12],[1,\"\\n    \"],[8,[39,2],null,[[\"@src\",\"@toggleZoom\"],[[30,0,[\"productImage\"]],[30,0,[\"toggleZoom\"]]]],null],[1,\"\\n    \\n    \"],[8,[39,3],null,[[\"@isDetails\",\"@name\",\"@price\",\"@colors\",\"@color\",\"@onChangeColor\"],[true,[30,0,[\"model\",\"name\"]],[30,0,[\"model\",\"price\"]],[30,0,[\"model\",\"colors\"]],[30,0,[\"color\"]],[30,0,[\"onChangeColor\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"h5\"],[14,0,\"mt-5\"],[12],[1,\"Features\"],[13],[1,\"\\n  \"],[10,\"ul\"],[12],[1,\"  \\n\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,0,[\"model\",\"features\"]]],null]],null],null,[[[1,\"  \"],[10,\"li\"],[12],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"feature\"],false,[\"general-container\",\"if\",\"product/image\",\"product/details\",\"each\",\"-track-array\"]]",
    "moduleName": "ember-js-tutorial/templates/item.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-js-tutorial/templates/not-found", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "NotFound"}}
  
  Page not found
  {{outlet}}
  */
  {
    "id": "UWgSwyj7",
    "block": "[[[1,[28,[35,0],[\"NotFound\"],null]],[1,\"\\n\\nPage not found\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-js-tutorial/templates/not-found.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-js-tutorial/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-js-tutorial/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('ember-js-tutorial/config/environment', [], function() {
  var prefix = 'ember-js-tutorial';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-js-tutorial/app")["default"].create({"name":"ember-js-tutorial","version":"0.0.0+32ad3726"});
          }
        
//# sourceMappingURL=ember-js-tutorial.map
