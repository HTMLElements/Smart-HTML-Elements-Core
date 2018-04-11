
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";Smart("smart-text-box",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"template",value:function(){return'<div id="container">\n                    <span id="label" inner-h-t-m-l="[[label]]" class="smart-label"></span>\n                    <div id="content" class="smart-content">\n                        <input type="text" id="input"\n                            autofocus="[[autoFocus]]"\n                            disabled="[[disabled]]"\n                            maxlength="[[maxLength]]"\n                            name="[[name]]"\n                            placeholder="[[placeholder]]"\n                            readonly="[[readonly]]"\n                            value="[[value]]">\n                        <div id="autoCompleteString"></div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-visibility-hidden">\n                           <smart-list-box id="listBox"\n                               data-source="[[dataSource]]"\n                               disabled="[[disabled]]"\n                               display-loading-indicator="[[displayLoadingIndicator]]"\n                               display-member="[[displayMember]]"\n                               item-height="[[itemHeight]]"\n                               item-template="[[itemTemplate]]"\n                               filter-mode="[[filterMode]]"\n                               loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"\n                               loading-indicator-position="[[loadingIndicatorPosition]]"\n                               name="[[name]]"\n                               readonly="[[readonly]]"\n                               selection-mode="[[selectionMode]]"\n                               value-member="[[valueMember]]">\n                                <content></content>\n                            </smart-list-box>\n                         </div>\n                    </div>\n                    <span id="hint" class ="smart-hint"></span>\n                </div>'}},{key:"propertyChangedHandler",value:function(e,n,o){var a=this;switch(e){case"autoComplete":a.$.listBox._filteredItems&&a.$.listBox._filteredItems.length!==a.$.listBox._items.length&&babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_autoComplete",this).call(this,!0);break;case"dataSource":case"displayMember":a._clearSelection(),a._setDropDownSize(),a._checkBrowserBounds("vertically"),a.dropDownAppendTo&&a.dropDownAppendTo.length>0&&a._rePositionListBox(),a._checkBrowserBounds("horizontally");break;case"displayMode":a.$.input.value="escaped"===o?a._toEscapedDisplayMode(a.value):a.value=a._toDefaultDisplayMode(a.$.input.value);break;case"value":a.$.input.value="escaped"===a.displayMode?a._toEscapedDisplayMode(a.value):a.value,o.length>0?a.$.addClass("has-value"):a.$.removeClass("has-value");break;case"hint":if(null===o)return a.$.hint.innerHTML="",void a.$.removeClass("invalid");a._handleHintContainer();break;default:babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"propertyChangedHandler",this).call(this,e,n,o)}}},{key:"open",value:function(){var e=this;if(0!==e.$.listBox.items.length&&"none"!==e.autoComplete)return 0===e.$.input.value.length&&e.$.listBox._filteredItems&&e.$.listBox._filteredItems.length!==e.$.listBox._items.length?void babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_autoComplete",this).call(this,!0):void babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"open",this).call(this)}},{key:"close",value:function(){var e=this;babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"close",this).call(this),e.$.autoCompleteString.textContent="",e.$.listBox._focusedItem&&(e.$.listBox._focusedItem.focused=!1),"none"!==e.autoComplete&&e.$.input._filteredItems&&e.$.input._filteredItems[0]&&e.$.input._filteredItems[0]!==e.$.input.value&&babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_autoComplete",this).call(this,!0)}},{key:"_setFocusable",value:function(){var e=this;if(e.disabled||e.unfocusable)return void(e.$.input.tabIndex=-1);e.$.input.removeAttribute("tabindex")}},{key:"reset",value:function(){var e=this;"escaped"===e.displayMode?(e.value=e._initializationValue,e.$.input.value=e._toEscapedDisplayMode(e._initializationValue)):e.$.input.value=e.value=e._initializationValue}},{key:"_createElement",value:function(){var e=this;e._setDropDownSize(),e._handleSelectedText(),e._setFocusable(),e._initializationValue=e.value,e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e._handleHintContainer()}},{key:"_checkBrowserBoundsVertically",value:function(){var e=this,t=e.getBoundingClientRect();e._dropDownListPosition&&e.$.dropDownContainer.removeAttribute(e._dropDownListPosition),document.documentElement.clientHeight-Math.abs(t.top+t.height+e.$.dropDownContainer.offsetHeight)>=0?e._dropDownListPosition="bottom":t.top-e.$.dropDownContainer.offsetHeight>=0?e._dropDownListPosition="top":e._dropDownListPosition="overlay-bottom",e.$.dropDownContainer.setAttribute(e._dropDownListPosition,"")}},{key:"_focusHandler",value:function(e){var t=this;if("blur"===e.type)return t.removeAttribute("focused"),t.$.autoCompleteString.textContent="",t.value.length>0?t.$.addClass("has-value"):t.$.removeClass("has-value"),void(("auto"===t.autoComplete||"inline"===t.autoComplete)&&t.$.input.value.length>0&&t.$.listBox._focusedItem&&t.$.listBox._focusedItem.focused&&(t.$.input.value=t.$.listBox._focusedItem.label));t.disabled||(t.setAttribute("focused",""),t.selectAllOnFocus&&t.$.input.select())}},{key:"_handlePointerInEscapedSymbol",value:function(e){var t=this;if("escaped"===t.displayMode){var n=t.$.input.selectionStart,o=t.$.input.selectionEnd,a=t.$.input.value;if("\\"===a[n-1]&&a[n].match(/n|r|s|t|f/g)){if(n===o){var l="next"===e?1:-1;return t.$.input.selectionStart=n+l,void(t.$.input.selectionEnd=n+l)}t.$.input.selectionStart=n-1,"\\"===a[o-1]&&a[o].match(/n|r|s|t|f/g)&&(t.$.input.selectionEnd=o+1)}}}},{key:"_handleSelectedText",value:function(){var e=this;null===e.selectionStart||null===e.selectionEnd||e.selectionStart===e.selectionEnd||e.selectAllOnFocus||(e.selectionStart=e.selectionStart<0?0:e.selectionStart,e.selectionEnd=e.selectionEnd>e.value.length?e.value.length:e.selectionEnd,e.$.input.setSelectionRange(e.selectionStart,e.selectionEnd))}},{key:"_handleHintContainer",value:function(){var e=this;if(e.hint){var t=e.$.hint;if("function"==typeof e.hint){var n=e.value;e.hint(n,t)?e.$.addClass("invalid"):e.$.removeClass("invalid")}else"string"==typeof e.hint&&(t.innerHTML=e.hint,e.$.removeClass("invalid"))}}},{key:"_keyDownHandler",value:function(e){var t=this;switch(e.stopPropagation(),e.key){case"ArrowUp":case"ArrowDown":if(e.altKey)return e.preventDefault(),void("ArrowDown"===e.key?t.open():t.close());t.opened&&(e.preventDefault(),t.$.listBox._handleKeyStrokes(e.key));break;case"PageUp":t.$.input.selectionStart=t.$.input.selectionEnd=0;break;case"PageDown":t.$.input.selectionStart=t.$.input.selectionEnd=t.$.input.value.length;break;case"Enter":t.opened&&t.$.listBox._focusedItem&&t.$.listBox._focusedItem.focused&&(t.$.listBox.$.filterInput.value=t.$.listBox._focusedItem.label,t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(t.$.listBox._focusedItem.label):t._toDefaultDisplayMode(t.$.listBox._focusedItem.label),t.select(t.$.listBox._focusedItem),t.close());break;case"Escape":t.close(),t._closedFromKeyCombination=!0;break;case" ":"escaped"===t.displayMode&&function(n){var o=t.$.input.selectionStart,a=t.$.input.selectionEnd,l=t.$.input.value;e.preventDefault(),l=l.substring(0,o)+n+l.substring(a,l.length),t.value=t._toDefaultDisplayMode(l),t.$.input.value=l,t.$.input.selectionStart=t.$.input.selectionEnd=o+2}("\\s");break;case"Backspace":if("escaped"===t.displayMode&&t.$.input.selectionStart===t.$.input.selectionEnd){var n=t.$.input.selectionStart;"\\"!==t.$.input.value[n-2]||"s"!==t.$.input.value[n-1]&&"n"!==t.$.input.value[n-1]||(t.$.input.value=t.$.input.value.substring(0,n-2)+t.$.input.value.substring(n-2,t.$.input.value.length),t.$.input.selectionStart=n-2)}}}},{key:"_keyUpHandler",value:function(){var e=this;e.disabled||"Escape"===event.key||event.target===e.$.listBox.$.filterInput||event.target===e.$.input&&"default"===e.selectionMode&&(e.$.listBox._keysPressed[event.key]=!1)}},{key:"_setDropDownPosition",value:function(e){var t=this;"auto"===e?t._checkBrowserBounds():t._dropDownListPosition=e,t.$.dropDownContainer.setAttribute(t._dropDownListPosition,"")}},{key:"_textBoxKeyUpHandler",value:function(e){var n=this;if(!(n.disabled||e.altKey||e.ctrlKey)){if("escaped"===n.displayMode){var o=n.$.input.value;n.value=n._toDefaultDisplayMode(n.$.input.value),n.$.input.value=o}else n.value=n.$.input.value;var a=void 0;if(1===n.$.listBox.selectedIndexes.length&&(a=n.$.listBox.getItem(n.$.listBox.selectedValues[0]),n.value!==a.label&&n.unselect(a)),n.$.autoCompleteString.textContent="","Alt"===e.key||"Control"===e.key||!n.opened&&"Escape"===e.key)return void(n._closedFromKeyCombination=!1);if(e.key&&e.key.indexOf("Arrow")>-1)return void n._handlePointerInEscapedSymbol("ArrowRight"===e.key?"next":void 0);if("none"!==n.autoComplete&&n.$.input.value.length>0){var l=babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_autoComplete",this).bind(n);n._autoCompleteTimer&&clearTimeout(n._autoCompleteTimer),n._autoCompleteTimer=setTimeout(function(){l(!0)},n.autoCompleteDelay)}else n.close()}}},{key:"_listBoxChangeHandler",value:function(e){var t=this;t.dropDownAppendTo&&t.dropDownAppendTo.length>0&&t.$.fireEvent("change",e.detail),e.detail.selected&&(t.$.listBox.$.filterInput.value=e.detail.label,t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(e.detail.value):t._toDefaultDisplayMode(e.detail.label))}},{key:"_mouseEventsHandler",value:function(e){var t=this;"mouseenter"===e.type?t.$.addClass("hovered"):t.$.removeClass("hovered")}},{key:"_textBoxChangeHandler",value:function(e){var t=this;if("escaped"===t.displayMode){var n=t.$.input.value,o=t.$.input.selectionStart,a=t.$.input.selectionEnd,l=e.clipboardData||e.originalEvent&&e.originalEvent.clipboardData||window.clipboardData;if(l){var i=l.getData("text"),s=t.$.input.value;e.preventDefault(),i=t._toEscapedDisplayMode(i),t.$.input.value=s.substring(0,o)+i+s.substring(a,s.length)}t.value=t._toDefaultDisplayMode(t.$.input.value),t.$.input.value=n}else t.value=t.$.input.value;t._handleHintContainer()}},{key:"_textBoxSelectHandler",value:function(){var e=this;e.disabled||(e.selectionStart=e.$.input.selectionStart,e.selectionEnd=e.$.input.selectionEnd)}},{key:"_toEscapedDisplayMode",value:function(e){for(var t=[{key:/\r\n|\n\r|\n|\r/g,value:"\\n"},{key:/\s/g,value:"\\s"},{key:/\n/g,value:"\\n"},{key:/\t/g,value:"\\t"},{key:/\f/g,value:"\\f"},{key:/\r/g,value:"\\r"}],n=0;n<t.length;n++)e=e.replace(t[n].key,t[n].value);return e}},{key:"_toDefaultDisplayMode",value:function(e){for(var t=[{key:/\\s/g,value:" "},{key:/\\n/g,value:"\n"},{key:/\\t/g,value:"\t"},{key:/\\f/g,value:"\f"},{key:/\\r/g,value:"\r"}],n=0;n<t.length;n++)e=e.replace(t[n].key,t[n].value);return e}},{key:"_documentDownHandler",value:function(e){var t=this;if(!t.disabled&&!t.readonly){var n=e.originalEvent.target.closest("smart-list-item");t.className.indexOf("material")>-1&&n&&Smart.Utilities.Animation.Ripple.animate(n,e.pageX,e.pageY),t._isListBoxThumbDragged=e.target!==document&&e.target.classList.contains("smart-thumb")&&e.target.ownerElement.ownerElement===t.$.listBox,n&&(t._preventDropDownClose=!0)}}},{key:"_documentUpHandler",value:function(e){var n=this;if(!n.disabled){var o=e.originalEvent.target;if(o&&("escaped"===n.displayMode&&o===n.$.input&&n._handlePointerInEscapedSymbol(),!n._isListBoxThumbDragged&&!n.readonly)){for(;o;){if(o instanceof Smart.ListItem&&o.ownerListBox===n.$.listBox)return"escaped"===n.displayMode?(n.value=o.label,n.$.input.value=n._toEscapedDisplayMode(o.label)):n.$.input.value=n.value=o.label,babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_autoComplete",this).call(this,!0),n.close(),o="item",void n.$.input.focus();if(o===n.$.listBox)return void(o="listBox");o=o.parentElement}return"listBox"!==o&&"item"!==o?void n.close():void 0}}}}],[{key:"properties",get:function(){return{autoFocus:{value:!1,type:"boolean"},autoComplete:{allowedValues:["none","manual","auto","inline"],type:"string",value:"manual"},displayMode:{value:"default",allowedValues:["default","escaped"],type:"string"},form:{value:"",type:"string"},hint:{value:null,reflectToAttribute:!1,type:"any?"},maxLength:{value:null,type:"number?"},minLength:{value:2,type:"number"},messages:{extend:!0,value:{en:{missingReference:"{{elementType}}: Missing reference to {{files}}."}},type:"object"},required:{value:!1,type:"boolean"},requiredMessage:{value:"",type:"string"},selectAllOnFocus:{value:!1,type:"boolean"},selectionMode:{value:"zeroOrOne",allowedValues:["none","default","zeroOrMany","oneOrMany","zeroOrOne","one","checkBox","radioButton"],type:"string"},value:{value:"",reflectToAttribute:!1,type:"string"}}}},{key:"listeners",get:function(){return{"document.up":"_documentUpHandler",focus:"_focusHandler",keydown:"_keyDownHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","input.blur":"_focusHandler","input.change":"_textBoxChangeHandler","input.focus":"_focusHandler","input.keyup":"_textBoxKeyUpHandler","input.paste":"_textBoxChangeHandler","input.select":"_textBoxSelectHandler"}}},{key:"requires",get:function(){return{"Smart.ComboBox":"smart.combobox.js"}}}]),t}(Smart.ComboBox));
//# sourceMappingURL=smart.textbox.js.map
