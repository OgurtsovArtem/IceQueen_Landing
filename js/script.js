"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var duration = 500;

var accordion = function accordion() {
  // const accordions = document.querySelectorAll('[data-accordions]');
  var buttons = document.querySelectorAll("[data-accordion-button]");
  var contents = document.querySelectorAll("[data-accordion-content]");
  var items = document.querySelectorAll("[data-accordion]");
  setAccListener(buttons);
  accordionInit(items, contents);
};

var setAccordionAction = function setAccordionAction(event) {
  event.preventDefault();
  var element = event.target;

  if (element.hasAttribute("data-accordion") || element.closest("[data-accordion]")) {
    var accordionBlock = element.hasAttribute("data-accordion") ? element : element.closest("[data-accordion]");
    var accordionContent = accordionBlock.querySelector("[data-accordion-content]");
    var mainContainer = accordionBlock.closest("[data-accordions]");

    if (mainContainer.hasAttribute("data-one-accordion") && !accordionBlock.classList.contains("_active") && !mainContainer.classList.contains("_slide")) {
      hideAccordionBody(mainContainer);
    }

    if (!accordionContent.classList.contains("_slide") && !mainContainer.classList.contains("_slide")) {
      accordionBlock.classList.toggle("_active");
      mainContainer.classList.add('_slide');
      slideToggle(accordionContent, duration);
    }
  }
};

var hideAccordionBody = function hideAccordionBody(accordionBlock) {
  var accordionActiveBlock = accordionBlock.querySelector("[data-accordion]._active");

  if (accordionActiveBlock) {
    accordionActiveBlock.classList.remove("_active");
    var accordionContent = accordionActiveBlock.querySelector("[data-accordion-content]");
    slideUp(accordionContent, 500);
  }
};

var setAccListener = function setAccListener(buttonArray) {
  if (buttonArray.length > 0) {
    buttonArray.forEach(function (button) {
      button.addEventListener("click", setAccordionAction);
    });
  } else return;
};

var accordionInit = function accordionInit(accItemsArray, contentArray) {
  if (contentArray.length > 0) {
    contentArray.forEach(function (contentItem) {
      slideToggle(contentItem);
    });
  }

  if (accItemsArray.length > 0) {
    accItemsArray.forEach(function (accItem) {
      accItem.classList.add("_init");
    });
  }
};

var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = "".concat(duration, "ms");
    target.style.height = "".concat(target.offsetHeight, "px"); // eslint-disable-next-line no-unused-expressions

    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      target.closest("[data-accordions]").classList.remove("_slide");
    }, duration);
  }
};

var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");

    if (target.hidden) {
      target.hidden = false;
    }

    var height = target.offsetHeight; // eslint-disable-next-line no-unused-expressions

    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = "".concat(duration, "ms");
    target.style.height = "".concat(height, "px");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      target.closest("[data-accordions]").classList.remove("_slide");
    }, duration);
  }
};

var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (target.hidden) {
    return slideDown(target, duration);
  }

  return slideUp(target, duration);
};

document.addEventListener("DOMContentLoaded", function () {
  accordion();
});
;
/* eslint-disable no-inner-declarations */

/* eslint-disable max-len */

var animation = function animation() {
  var animateBloks = document.querySelectorAll("._animation");
  var durationToStart = 300;
  var isScrolling = false;

  if (animateBloks.length > 0) {
    var throttleScroll = function throttleScroll() {
      if (isScrolling === false) {
        window.requestAnimationFrame(function () {
          elementOnFocus();
          isScrolling = false;
        });
      }

      isScrolling = true;
    };

    var offset = function offset(element) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    var elementOnFocus = function elementOnFocus() {
      for (var i = 0; i < animateBloks.length; i++) {
        var animateElement = animateBloks[i];
        var animateElementHeight = animateElement.getBoundingClientRect().height;
        var animateElementOffset = offset(animateElement).top;
        var animateStart = 4;
        var animationGo = window.innerHeight - animateElementHeight / animateStart;

        if (animateElementHeight > window.innerHeight) {
          animationGo = window.innerHeight - window.innerHeight / animateStart;
        }

        if (window.pageYOffset > animateElementOffset - animationGo && window.pageYOffset < animateElementOffset + animateElementHeight) {
          animateElement.classList.add("_active-animation");
        } else if (animateElement.classList.contains("_animation-repeat")) {
          animateElement.classList.remove("_active-animation");
        }
      }
    };

    window.addEventListener("scroll", throttleScroll);
    document.addEventListener("DOMContentLoaded", function () {
      return setTimeout(function () {
        elementOnFocus();
      }, durationToStart);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  animation();
});
;
/* eslint-disable class-methods-use-this */

document.addEventListener("DOMContentLoaded", function () {
  var largeForm = document.forms.largeForm;
  var averageForm = document.forms.averageForm;
  var mediumForm = document.forms.mediumForm;
  var popupForm = document.forms.popupForm;

  var FormValidator = /*#__PURE__*/function () {
    function FormValidator(_ref) {
      var inputs = _ref.inputs,
          form = _ref.form,
          button = _ref.button;

      _classCallCheck(this, FormValidator);

      this.inputs = inputs;
      this.button = button;
      this.form = form;
      this.listener();
    }

    _createClass(FormValidator, [{
      key: "statusForm",
      value: function statusForm() {
        var _this = this;

        var flag = true;
        this.inputs.forEach(function (input) {
          if (!_this.checkInputValidity(input)) flag = false;
          return flag;
        });
        this.setSubmitButtonState(flag, this.button);
      }
    }, {
      key: "checkInputValidity",
      value: function checkInputValidity(input) {
        if (input.value.length <= 0) {
          input.previousElementSibling.classList.add("_required");
          return false;
        }

        if (input.validity.tooShort === true) {
          input.previousElementSibling.classList.add("_error");
          return false;
        }

        if (input.validity.valueMissing === true) {
          input.previousElementSibling.classList.add("_error");
          return false;
        }

        if (input.validity.patternMismatch === true) {
          input.previousElementSibling.classList.add("_error");
          return false;
        }

        input.previousElementSibling.classList.remove("_error");
        input.previousElementSibling.classList.remove("_required");
        return true;
      }
    }, {
      key: "setSubmitButtonState",
      value: function setSubmitButtonState(flag, button) {
        if (flag === true) {
          button.removeAttribute("disabled");
        } else {
          button.setAttribute("disabled", true);
        }
      }
    }, {
      key: "listener",
      value: function listener() {
        this.form.addEventListener("input", this.statusForm.bind(this));
      }
    }]);

    return FormValidator;
  }();

  if (largeForm) {
    var VALIDATOR_LARGE = {
      inputs: _toConsumableArray(largeForm.getElementsByTagName("input")),
      form: largeForm,
      button: largeForm.querySelector("button[type=\"submit\"]")
    };
    var validationLarge = new FormValidator(VALIDATOR_LARGE);
    validationLarge.statusForm();
  }

  if (averageForm) {
    var VALIDATOR_AVERAGE = {
      inputs: _toConsumableArray(averageForm.getElementsByTagName("input")),
      form: averageForm,
      button: averageForm.querySelector("button[type=\"submit\"]")
    };
    var validationAverage = new FormValidator(VALIDATOR_AVERAGE);
    validationAverage.statusForm();
  }

  if (mediumForm) {
    var VALIDATOR_MEDIUM = {
      inputs: _toConsumableArray(mediumForm.getElementsByTagName("input")),
      form: mediumForm,
      button: mediumForm.querySelector("button[type=\"submit\"]")
    };
    var validationMedium = new FormValidator(VALIDATOR_MEDIUM);
    validationMedium.statusForm();
  }

  if (popupForm) {
    var VALIDATION_POPUP_FORM = {
      inputs: _toConsumableArray(popupForm.getElementsByTagName("input")),
      form: popupForm,
      button: popupForm.querySelector("button[type=\"submit\"]")
    };
    var validationPopup = new FormValidator(VALIDATION_POPUP_FORM);
    validationPopup.statusForm();
  }
});
;
/* eslint-disable max-len */

/* eslint-disable no-inner-declarations */

/* eslint-disable no-use-before-define */

var popup = function popup() {
  var allPopupElements = _toConsumableArray(document.querySelectorAll("[data-popup]"));

  var popups = _toConsumableArray(document.querySelectorAll("._popup")); // храним имена Popup'ов;


  var popupNames = {
    callUs: "callUs"
  };

  if (allPopupElements && popups) {
    var popupHandler = function popupHandler(event) {
      event.preventDefault();
      var target = event.currentTarget;
      var attributePopup = target.getAttribute("data-popup"); // Получаем имена Popup'ов

      var callUs = popupNames.callUs; // Проверяем успешен ли ответ от сервера
      // Условия

      if (attributePopup === callUs) {
        var requestPopup = document.querySelector(".request-popup");
        popupOpen(requestPopup);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: attributePopup
        });

        if (requestPopup.classList.contains("._open")) {
          popupClose(event);
        }
      }
    };

    var popupClose = function popupClose(event) {
      if (event.target.classList.contains("_popup-close") || event.target.classList.contains("_popup-close-area")) {
        var popupContainer = searchParent(event.target, "._popup");
        popupContainer.classList.remove("_open");
      } // else if (event.target.attributes.type !== undefined && (event.target.attributes.type.value === "submit")) {
      //   const popupContainer = searchParent(event.target, "._popup");
      //   popupContainer.classList.remove("_open");
      // }

    };

    var popupOpen = function popupOpen(elementOpen) {
      elementOpen.classList.add("_open");
    };

    var searchParent = function searchParent(el, selector) {
      if (Element.prototype.closest) {
        return el.closest(selector);
      }

      var parent = el;

      while (parent) {
        if (parent.matches(selector)) {
          return parent;
        }

        parent = parent.parentElement;
      }

      return null;
    };

    allPopupElements.forEach(function (popupEl) {
      popupEl.addEventListener("click", popupHandler);
    });
    popups.forEach(function (popupEl) {
      popupEl.addEventListener("click", popupClose);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  popup();
});
;
/* eslint-disable max-len */

/* eslint-disable no-inner-declarations */

/* eslint-disable no-plusplus */

var stikyBlock = function stikyBlock() {
  var mainContainer = document.querySelector("._stickyContainer");

  if (mainContainer) {
    var getClass = function getClass() {
      var indexEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var swipeBloks = mainContainer.querySelectorAll("._stickySwipeElement");
      var anotherSwipeBlocks = mainContainer.querySelectorAll("._anotherStickySwipeElement");
      swipeBloks.forEach(function (block, index) {
        if (index === indexEl) {
          block.classList.add("_active");
        } else {
          block.classList.remove("_active");
        }
      });
      anotherSwipeBlocks.forEach(function (block, index) {
        if (index === indexEl) {
          block.classList.add("_active");
        } else {
          block.classList.remove("_active");
        }
      });
    };

    var scrollWatcher = function scrollWatcher() {
      var mainContainerOffset = offset(mainContainer).top;

      function onScroll() {
        var scrollTopPosition = document.documentElement.scrollTop;

        if (oldScrollTopPosition > scrollTopPosition) {
          flag = false;
        } else {
          flag = true;
        }

        oldScrollTopPosition = scrollTopPosition;
        return flag;
      }

      function watch() {
        onScroll();

        if (window.pageYOffset - mainContainerOffset + heightToStartSwiping > counter + heightToStartSwiping && flag === true && counter < endPointAnimation) {
          index++;
          counter += heightToStartSwiping;

          if (index <= numberOfElements && index >= 0) {
            getClass(index);
          }
        } else if (window.pageYOffset - mainContainerOffset + heightToStartSwiping < counter && flag === false) {
          index--;
          counter -= heightToStartSwiping;

          if (index <= numberOfElements && index >= 0) {
            getClass(index);
          }
        }
      }

      if (window.pageYOffset > mainContainerOffset && window.pageYOffset < mainContainerOffset + mainContainerHeight) {
        watch();
      }
    };

    var numberOfElements = mainContainer.getAttribute("data-count");
    getClass();

    var offset = function offset(element) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    var mainContainerHeight = mainContainer.offsetHeight;
    var heightToStartSwiping = mainContainerHeight / numberOfElements;
    var endPointAnimation = mainContainerHeight - heightToStartSwiping;
    heightToStartSwiping = endPointAnimation / numberOfElements;
    var counter = 0;
    var index = -1;
    var oldScrollTopPosition = 0;
    var flag = true;
    window.addEventListener("scroll", scrollWatcher);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  stikyBlock();
});
;

var menuHandler = function menuHandler() {
  var burgerButtom = document.querySelector(".burger");

  var changeClass = function changeClass(event) {
    event.preventDefault();
    var target = event.target;
    var header = target.closest(".header");
    var html = document.getElementsByTagName("html")[0];

    if (header) {
      header.classList.toggle("_menu-open");
      html.classList.toggle("_fixed");
    }
  };

  burgerButtom.addEventListener("click", changeClass);
};

document.addEventListener("DOMContentLoaded", function () {
  menuHandler();
});
;

var videoFunction = function videoFunction() {
  var videoMainContainer = document.querySelector(".video__container");

  if (videoMainContainer) {
    var playButton = videoMainContainer.querySelector(".video__button");
    var video = videoMainContainer.querySelector(".video__player");
    playButton.addEventListener("click", function () {
      video.play();
      video.setAttribute("controls", true);
      playButton.classList.add("_hide");
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  videoFunction();
});
;
/* eslint-disable no-nested-ternary */

function phoneMask() {
  var phone = document.querySelectorAll("input[data-phone]");
  phone.forEach(function (el) {
    el.addEventListener("input", function (e) {
      var val = e.target.value.replace(/\D/g, "");

      if (val) {
        if (val[0] === "7" || val[0] === "8") {
          val = val.slice(1);
        }

        val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        val = "+7".concat(val[2] ? "(".concat(val[1], ")").concat(val[2]) : val[1] ? val[1] : "").concat(val[3] ? "-".concat(val[3]) : "").concat(val[4] ? "-".concat(val[4]) : "");
      }

      e.target.value = val;
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  phoneMask();
});
;
/* eslint-disable consistent-return */

function sendForms() {
  var _document = document,
      forms = _document.forms;

  function searchParent(el, selector) {
    if (Element.prototype.closest) {
      return el.closest(selector);
    }

    var parent = el;

    while (parent) {
      if (parent.matches(selector)) {
        return parent;
      }

      parent = parent.parentElement;
    }

    return null;
  }

  function apiPostForm(event) {
    var form = searchParent(event.target, "form");

    if (form) {
      var url = "https://icequeen-cryo.com";
      return fetch("".concat(url, "/send.php"), {
        method: "POST",
        body: new FormData(form)
      }).then(function (res) {
        if (res.ok) {
          var successfulPopup = document.querySelector(".successful-popup");
          var formTarget = searchParent(event.target, "form");

          if (formTarget) {
            var name = formTarget.getAttribute("name");

            if (name) {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: name
              });
              formTarget.reset();
            }
          }

          if (successfulPopup) {
            successfulPopup.classList.add("_open");
          }

          var popupContainer = searchParent(form, "._popup._open");

          if (popupContainer) {
            popupContainer.classList.remove("_open");
          }
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }

  Array.from(forms).forEach(function (form) {
    var formSubmitButton = form.querySelector("button[type=\"submit\"]");
    formSubmitButton.addEventListener("click", apiPostForm);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  sendForms();
});
;