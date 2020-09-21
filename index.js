"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rDropdownButton = _interopRequireDefault(require("r-dropdown-button"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RChatBoxContext = /*#__PURE__*/(0, _react.createContext)();

var RChatbox = /*#__PURE__*/function (_Component) {
  _inherits(RChatbox, _Component);

  var _super = _createSuper(RChatbox);

  function RChatbox(props) {
    var _this;

    _classCallCheck(this, RChatbox);

    _this = _super.call(this, props);
    _this.replyMaxCharacter = 300;
    _this.state = {
      dragMode: false,
      messageInput: '',
      replyId: false
    };
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    var _this$props = _this.props,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme,
        getConfigSample = _this$props.getConfigSample;
    _this.theme = {
      background: '#eee',
      messsageBachground: '#fff',
      myMessageBackground: '#00a0fd',
      color: '#333',
      myColor: '#fff',
      attachmentBackground: '#1f80ee',
      replyBackground: 'rgba(0,0,0,.07)',
      ...theme
    };

    _this.updateTranslate();

    if (getConfigSample) {
      getConfigSample("\n        <Chatbox\n          userId={userId} // id of current user\n          rtl={boolean} // direction of chatbox\n          globalization={'en' or 'fa' or other implemented languages in translate props}\n          translate={{\n            en:{\n              'Close':'Close',\n              'Send':'Send',\n              'UploadFile':Upload File',\n              'ReplyTo':'Reply To',\n              'DropFilesHere':'Drop Files Here',\n              'Reply':'Reply',\n              'DeleteMessage':'Delete Message',\n              'DeletedMessage''Deleted Message',\n              'WriteMessage':'Write Message',\n            },\n            ...\n          }}\n          messages={messages} // list of chat messages\n          theme = {{\n            background:'#eee',\n            messsageBachground:'#fff',\n            myMessageBackground:'#00a0fd',\n            color:'#333',\n            myColor:'#fff',\n            attachmentBackground:'#1f80ee',\n            replyBackground:'rgba(0,0,0,.07)'\n          }}\n          header={{\n            onClose:()=>{ //render close button\n              // some codes ....\n            },\n            buttons:[\n              {\n                title:...,\n                onClick:...,\n                iconClass:...\n              },\n              ....\n            ],\n            title:... // title of chatbox\n          }}\n          dataset={{\n              text: 'Description', //text of message\n              ownerName: 'UserName', //name of message sender\n              ownerId: 'CreatorId', //id of message sender\n              time: 'CreateTimeCulture', //time of message \n              attachmentTitle: 'CommentAttachments.0.FileName', //title of attachment of message \n              attachmentFormat: 'CommentAttachments.0.FileExtention',  //format of attachment of message\n              attachmentId: 'CommentAttachments.0.Id',\n              replyTo: 'ReplyId', // id of message that this message is reply to it\n              date: 'CreateDateCulture', //date of message\n              id: 'Id' // id of message\n          }}\n          onUpload={({text,files = [], replyId}) => {\n            var { messages, tenant, token, EntityName } = this.state;\n            var { id } = this.props;\n            var data = new FormData();\n            if(text){data.append(\"Description\", text)}\n            for (var i = 0; i < files.length; i++) {data.append(\"file\", files[i]);}\n            data.append(\"EntityName\", EntityName);\n            data.append(\"EntityId\", id);\n            if (replyId) {data.append(\"ReplyId\", replyId)}\n            var settings = {\n              \"url\": 'https://attachment.dev.raveshmand.ir/' + tenant + '/Comment/CreateWithAttachmentAsync',\n              \"method\": \"POST\",\n              \"timeout\": 0,\n              \"headers\": {\"Authorization\": \"Bearer \" + token},\n              \"processData\": false,\n              \"mimeType\": \"multipart/form-data\",\n              \"contentType\": false,\n              \"dataType\": \"json\",\n              \"data\": data\n            };\n            $.ajax(settings).done((response) => {\n                var {Value = []} = response;\n                for(var i = 0; i < Value.length; i++){messages.push(Value[i]);}\n                this.setState({ messages })\n            });\n          }}\n          onDownload={async ({fileName,id,format})=>{\n            var settings = {\n                \"method\": \"POST\",\n                \"timeout\": 0,\n                \"headers\": {\n                    \"Authorization\": \"Bearer \" + token,\n                    \"Content-Type\": \"application/json\"\n                },\n                \"body\": JSON.stringify({ \"Id\": id }),\n            };\n            fetch('url',settings)\n              .then(resp => resp.blob())\n              .then(blob => {\n                  const url = window.URL.createObjectURL(blob);\n                  const a = document.createElement('a');\n                  a.style.display = 'none';\n                  a.href = url;\n                  a.download = fileName;\n                  document.body.appendChild(a);\n                  a.click();\n                  window.URL.revokeObjectURL(url);\n              })\n              .catch(() => alert('oh no!'));\n          }}\n        />\n        ");
    }

    return _this;
  }

  _createClass(RChatbox, [{
    key: "updateTranslate",
    value: function updateTranslate() {
      var _this$props$translate = this.props.translate,
          translate = _this$props$translate === void 0 ? {} : _this$props$translate;
      var dictionary = {
        'Close': {
          en: 'Close',
          fa: 'بستن'
        },
        'Send': {
          en: 'Send',
          fa: 'ارسال'
        },
        'UploadFile': {
          en: 'Upload File',
          fa: 'آپلود فایل'
        },
        'ReplyTo': {
          en: 'Reply To',
          fa: 'پاسخ به'
        },
        'DropFilesHere': {
          en: 'Drop Files Here',
          fa: 'فایل ها را به اینجا بکشید'
        },
        'Reply': {
          en: 'Reply',
          fa: 'پاسخ'
        },
        'DeleteMessage': {
          en: 'Delete Message',
          fa: 'حذف پیام'
        },
        'DeletedMessage': {
          en: 'Deleted Message',
          fa: 'پیام حذف شده'
        },
        'WriteMessage': {
          en: 'Write Message',
          fa: 'نوشتن پیام'
        }
      };

      for (var globalization in translate) {
        for (var key in globalization) {
          if (dictionary[key]) {
            dictionary[key][globalization] = globalization[key];
          }
        }
      }

      this.dictionary = dictionary;
    }
  }, {
    key: "translate",
    value: function translate(key) {
      var globalization = this.props.globalization;
      return this.dictionary[key][globalization];
    }
  }, {
    key: "getValueByField",
    value: function getValueByField(obj, field) {
      if (!field || field === null) {
        return undefined;
      }

      var fieldString = typeof field === 'function' ? field(obj) : field;

      if (!fieldString || typeof fieldString !== 'string') {
        console.error('chatbox.getValueByField() receive invalid field');
        return undefined;
      }

      var fields = fieldString.split('.');
      var value = obj[fields[0]];

      if (value === undefined) {
        return;
      }

      for (var i = 1; i < fields.length; i++) {
        value = value[fields[i]];

        if (value === undefined || value === null) {
          return;
        }
      }

      return value;
    }
  }, {
    key: "getMessageById",
    value: function getMessageById(id) {
      var _this$props2 = this.props,
          messages = _this$props2.messages,
          dataset = _this$props2.dataset;

      for (var i = 0; i < messages.length; i++) {
        if (this.getValueByField(messages[i], dataset.id) === id) {
          return messages[i];
        }
      }
    }
  }, {
    key: "getUploadIcon",
    value: function getUploadIcon() {
      var messageInput = this.state.messageInput;
      var rtl = this.props.rtl;
      var stroke = !messageInput ? '#eee' : '#777';
      var d1, d2;

      if (rtl) {
        d1 = "M2 12 L22 4 L20 12 L22 20 L2 12";
        d2 = "M3 12 L20 12 L3 12";
      } else {
        d1 = "M4 12 L2 4 L22 12 L2 20 L4 12";
        d2 = "M4 12 L21 12 L4 12";
      }

      return /*#__PURE__*/_react.default.createElement("svg", {
        width: "24",
        height: "24",
        style: {
          width: '24px',
          height: '24px'
        }
      }, /*#__PURE__*/_react.default.createElement("path", {
        strokeWidth: 1,
        strokeLinecap: "round",
        stroke: stroke,
        fill: "rgba(0,0,0,0)",
        strokeLinejoin: "miter",
        className: "path",
        d: d1
      }), /*#__PURE__*/_react.default.createElement("path", {
        strokeWidth: "1",
        strokeLinecap: "round",
        stroke: stroke,
        fill: "rgba(0,0,0,0)",
        strokeLinejoin: "miter",
        className: "path",
        d: d2
      }));
    }
  }, {
    key: "getAttachIcon",
    value: function getAttachIcon() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        width: "24",
        height: "24",
        style: {
          width: '24px',
          height: '24px'
        }
      }, /*#__PURE__*/_react.default.createElement("path", {
        strokeWidth: "1",
        strokeLinecap: "round",
        stroke: "#000",
        fill: "rgba(0,0,0,0)",
        strokeLinejoin: "miter",
        d: "M17 7 L7 7 q-5 0 -5 5 q0 5 5 5 L18 17 q4 0 4 -3 L22 13 q0 -3 -4 -3 L7 10 q-2 0 -2 2 q0 2 2 2 L17 14"
      }));
    }
  }, {
    key: "getPreviewIcon",
    value: function getPreviewIcon() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        width: "60",
        height: "60",
        style: "width: 60px; height: 60px; border: 1px solid; background-image: linear-gradient(rgb(221, 221, 221) 0px, transparent 0px), linear-gradient(90deg, rgb(221, 221, 221) 0px, transparent 0px), linear-gradient(rgb(221, 221, 221) 1px, transparent 1px), linear-gradient(90deg, rgb(221, 221, 221) 1px, transparent 1px); background-size: 1px 1px, 1px 1px;"
      }, /*#__PURE__*/_react.default.createElement("path", {
        "stroke-width": "1",
        "stroke-linecap": "round",
        stroke: "#6b7c8e",
        fill: "#6b7c8e",
        "stroke-linejoin": "miter",
        class: "path",
        d: "M43 43 L43 21 L35 13 L18 13 q-2 0 -2 2 L16 43 q0 2 2 2 L41 45 q2 0 2 -2"
      }), /*#__PURE__*/_react.default.createElement("path", {
        "stroke-width": "1",
        "stroke-linecap": "round",
        stroke: "#a6aebf",
        fill: "#a6aebf",
        "stroke-linejoin": "round",
        class: "path",
        d: "M35 13 L35 21 L43 21 L35 13"
      }));
    }
  }, {
    key: "dragEnter",
    value: function dragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
      var dragMode = this.state.dragMode;

      if (dragMode) {
        return;
      }

      this.setState({
        dragMode: true
      });
    }
  }, {
    key: "dragOver",
    value: function dragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: "dragLeave",
    value: function dragLeave(e) {
      e.stopPropagation();
      e.preventDefault();
      this.setState({
        dragMode: false
      });
    }
  }, {
    key: "drop",
    value: function drop(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      var code = e.keyCode;

      if (code === 13) {
        this.upload();
      }
    }
  }, {
    key: "upload",
    value: function upload() {
      var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var onUpload = this.props.onUpload;
      var _this$state = this.state,
          replyId = _this$state.replyId,
          messageInput = _this$state.messageInput;

      if (!messageInput) {
        return;
      }

      onUpload({
        files: files,
        text: messageInput,
        replyId: replyId
      });
      this.setState({
        dragMode: false,
        messageInput: '',
        replyId: false
      });
    }
  }, {
    key: "download",
    value: function download(_ref) {
      var fileName = _ref.fileName,
          id = _ref.id,
          format = _ref.format;
      var onDownload = this.props.onDownload;
      onDownload({
        fileName: fileName,
        id: id,
        format: format
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          messages = _this$props3.messages,
          userName = _this$props3.userName,
          userId = _this$props3.userId,
          dataset = _this$props3.dataset,
          header = _this$props3.header,
          rtl = _this$props3.rtl,
          onRemove = _this$props3.onRemove;
      var _this$state2 = this.state,
          dragMode = _this$state2.dragMode,
          messageInput = _this$state2.messageInput,
          replyId = _this$state2.replyId;
      this.currentDate = false;
      var context = {
        dataset: dataset,
        userName: userName,
        userId: userId,
        onRemove: onRemove,
        rtl: rtl,
        dragMode: dragMode,
        replyId: replyId,
        getValueByField: this.getValueByField.bind(this),
        SetState: this.setState.bind(this),
        download: this.download.bind(this),
        upload: this.upload.bind(this),
        getMessageById: this.getMessageById.bind(this),
        translate: this.translate.bind(this),
        theme: this.theme
      };
      return /*#__PURE__*/_react.default.createElement(RChatBoxContext.Provider, {
        value: context
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.dom,
        className: "r-chatbox",
        onDrop: function onDrop(e) {
          return _this2.drop(e);
        },
        onDragOver: function onDragOver(e) {
          return _this2.dragOver(e);
        },
        onDragEnter: function onDragEnter(e) {
          return _this2.dragEnter(e);
        },
        onDragLeave: function onDragLeave(e) {
          return _this2.dragLeave(e);
        },
        onKeyDown: this.keyDown.bind(this),
        style: {
          background: this.theme.background,
          color: this.theme.color
        }
      }, header && /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-header",
        style: {
          direction: rtl ? 'rtl' : 'ltr'
        }
      }, header.buttons && header.buttons.length && header.buttons.map(function (hb, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: i,
          className: 'r-chatbox-header-button',
          title: hb.title,
          onClick: hb.onClick
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: hb.iconClass
        }));
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-header-empty"
      }, header.title), header.onClose && /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-close",
        title: this.translate('Close')
      })), /*#__PURE__*/_react.default.createElement(RChatboxBody, {
        messages: messages
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-footer",
        style: {
          direction: rtl ? 'rtl' : 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-footer-button",
        title: this.translate('UploadFile')
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "r-chatbox-input-file"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "file",
        onChange: function onChange(e) {
          var files = e.target.files;

          _this2.upload(files);
        },
        multiple: true
      })), this.getAttachIcon(messageInput)), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        placeholder: this.translate('WriteMessage'),
        value: messageInput,
        onChange: function onChange(e) {
          return _this2.setState({
            messageInput: e.target.value
          });
        },
        style: _defineProperty({}, rtl ? 'marginLeft' : 'marginRight', messageInput ? undefined : '12px')
      }), messageInput && /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-footer-button",
        onClick: this.upload.bind(this),
        title: this.translate('Send')
      }, this.getUploadIcon(messageInput)))));
    }
  }]);

  return RChatbox;
}(_react.Component);

exports.default = RChatbox;
RChatbox.defaultProps = {
  globalization: 'en'
};

var RChatboxBody = /*#__PURE__*/function (_Component2) {
  _inherits(RChatboxBody, _Component2);

  var _super2 = _createSuper(RChatboxBody);

  function RChatboxBody(props) {
    var _this3;

    _classCallCheck(this, RChatboxBody);

    _this3 = _super2.call(this, props);
    _this3.state = {};
    return _this3;
  }

  _createClass(RChatboxBody, [{
    key: "sortByDate",
    value: function sortByDate(messages) {
      var _this$context = this.context,
          getValueByField = _this$context.getValueByField,
          dataset = _this$context.dataset;
      var datedMessages = {};

      for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        message._index = i;
        var date = getValueByField(message, dataset.date);
        datedMessages[date] = datedMessages[date] || [];
        datedMessages[date].push(message);
      }

      return datedMessages;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$context2 = this.context,
          dragMode = _this$context2.dragMode,
          theme = _this$context2.theme,
          replyId = _this$context2.replyId,
          getMessageById = _this$context2.getMessageById,
          SetState = _this$context2.SetState,
          rtl = _this$context2.rtl,
          translate = _this$context2.translate;
      var messages = this.props.messages;
      var Messages = this.sortByDate(messages);
      var Items;

      if (dragMode) {
        Items = /*#__PURE__*/_react.default.createElement(DropZone, null);
      } else {
        Items = [];

        var _loop = function _loop(prop) {
          Items.push( /*#__PURE__*/_react.default.createElement("div", {
            key: prop,
            className: "r-chatbox-date-container",
            onClick: function onClick() {
              return _this4.toggle(prop);
            }
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "r-chatbox-date",
            style: {
              color: theme.color,
              background: theme.messsageBachground,
              border: "3px solid ".concat(theme.background)
            }
          }, prop)));

          for (var j = 0; j < Messages[prop].length; j++) {
            Items.push( /*#__PURE__*/_react.default.createElement(Message, {
              key: prop + j,
              message: Messages[prop][j]
            }));
          }
        };

        for (var prop in Messages) {
          _loop(prop);
        }
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-body"
      }, Items, replyId !== false && /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-reply",
        style: {
          background: '#fff'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-reply-header",
        style: {
          direction: rtl ? 'rtl' : 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-reply-header-title"
      }, translate('ReplyTo')), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-reply-header-close",
        onClick: function onClick() {
          return SetState({
            replyId: false
          });
        }
      })), /*#__PURE__*/_react.default.createElement(Message, {
        message: getMessageById(replyId),
        isReply: true,
        style: {
          float: rtl ? 'right' : 'left'
        },
        containerStyle: {
          padding: rtl ? '0px 12px 0px 36px' : '0px 36px 0px 12px'
        }
      })));
    }
  }]);

  return RChatboxBody;
}(_react.Component);

_defineProperty(RChatboxBody, "contextType", RChatBoxContext);

var DropZone = /*#__PURE__*/function (_Component3) {
  _inherits(DropZone, _Component3);

  var _super3 = _createSuper(DropZone);

  function DropZone() {
    _classCallCheck(this, DropZone);

    return _super3.apply(this, arguments);
  }

  _createClass(DropZone, [{
    key: "drop",
    value: function drop(e) {
      e.stopPropagation();
      e.preventDefault();
      var upload = this.context.upload;
      var dt = e.dataTransfer;
      var files = dt.files;
      upload(files);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var translate = this.context.translate;

      var content = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, "+"), translate('DropFilesHere'));

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-dropzone",
        onDrop: function onDrop(e) {
          return _this5.drop(e);
        }
      }, content);
    }
  }]);

  return DropZone;
}(_react.Component);

_defineProperty(DropZone, "contextType", RChatBoxContext);

var Message = /*#__PURE__*/function (_Component4) {
  _inherits(Message, _Component4);

  var _super4 = _createSuper(Message);

  function Message() {
    _classCallCheck(this, Message);

    return _super4.apply(this, arguments);
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          message = _this$props4.message,
          isReply = _this$props4.isReply,
          _this$props4$style = _this$props4.style,
          style = _this$props4$style === void 0 ? {} : _this$props4$style,
          _this$props4$containe = _this$props4.containerStyle,
          containerStyle = _this$props4$containe === void 0 ? {} : _this$props4$containe;
      var _this$context3 = this.context,
          userId = _this$context3.userId,
          dataset = _this$context3.dataset,
          getValueByField = _this$context3.getValueByField,
          theme = _this$context3.theme;
      var isMy = userId === getValueByField(message, dataset.ownerId);
      var background = isReply ? theme.replyBackground : !isMy ? theme.messsageBachground : theme.myMessageBackground;
      var color = isMy ? theme.myColor : theme.color;
      var id = getValueByField(message, dataset.id);
      var props = {
        isReply: isReply,
        message: message,
        isMy: isMy
      };
      var float = isMy ? 'right' : 'left';
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-chatbox-message-container' + (isMy ? ' is-my' : ' not-is-my'),
        id: id,
        style: containerStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-chatbox-message',
        style: {
          background: background,
          color: isReply ? undefined : color,
          float: float,
          ...style
        }
      }, !isReply && /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-arrow",
        style: _defineProperty({
          position: 'absolute',
          borderTop: "8px solid ".concat(background)
        }, isMy ? 'right' : 'left', '-8px')
      }), /*#__PURE__*/_react.default.createElement(MessageHeader, props), /*#__PURE__*/_react.default.createElement(MessageReplyTo, props), /*#__PURE__*/_react.default.createElement(MessageBody, props), /*#__PURE__*/_react.default.createElement(MessageFooter, props)));
    }
  }]);

  return Message;
}(_react.Component);

_defineProperty(Message, "contextType", RChatBoxContext);

var MessageAttachment = /*#__PURE__*/function (_Component5) {
  _inherits(MessageAttachment, _Component5);

  var _super5 = _createSuper(MessageAttachment);

  function MessageAttachment() {
    _classCallCheck(this, MessageAttachment);

    return _super5.apply(this, arguments);
  }

  _createClass(MessageAttachment, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          isReply = _this$props5.isReply,
          message = _this$props5.message;
      var _this$context4 = this.context,
          theme = _this$context4.theme,
          rtl = _this$context4.rtl,
          download = _this$context4.download,
          dataset = _this$context4.dataset,
          getValueByField = _this$context4.getValueByField;
      var fileName = getValueByField(message, dataset.attachmentTitle);
      var id = getValueByField(message, dataset.attachmentId);
      var format = getValueByField(message, dataset.attachmentFormat);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-chatbox-attachment' + (isReply ? ' is-reply' : ''),
        onClick: isReply ? undefined : function () {
          download({
            fileName: fileName,
            id: id,
            format: format
          });
        },
        style: {
          direction: rtl ? 'rtl' : 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-download",
        style: {
          background: theme.attachmentBackground
        }
      }, isReply && /*#__PURE__*/_react.default.createElement("svg", {
        width: "24",
        height: "24",
        style: {
          width: '24px',
          height: '24px'
        }
      }, /*#__PURE__*/_react.default.createElement("path", {
        strokeWidth: "2",
        strokeLinecap: "round",
        fill: "#fff",
        strokeLinejoin: "miter",
        d: "M17 18 L7 18 L7 6 L14 6 L17 9 L17 18"
      })), !isReply && /*#__PURE__*/_react.default.createElement("svg", {
        width: "24",
        height: "24",
        style: {
          width: '24px',
          height: '24px'
        }
      }, /*#__PURE__*/_react.default.createElement("path", {
        strokeWidth: "2",
        strokeLinecap: "round",
        stroke: "#fff",
        fill: "rgba(0,0,0,0)",
        strokeLinejoin: "miter",
        d: "M12 7 L12 17 L12 7"
      }), /*#__PURE__*/_react.default.createElement("path", {
        strokeWidth: "2",
        strokeLinecap: "round",
        stroke: "#fff",
        fill: "rgba(0,0,0,0)",
        strokeLinejoin: "round",
        d: "M7 12 L12 17 L17 12"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "r-chatbox-attachment-title"
      }, fileName));
    }
  }]);

  return MessageAttachment;
}(_react.Component);

_defineProperty(MessageAttachment, "contextType", RChatBoxContext);

var MessageHeader = /*#__PURE__*/function (_Component6) {
  _inherits(MessageHeader, _Component6);

  var _super6 = _createSuper(MessageHeader);

  function MessageHeader() {
    _classCallCheck(this, MessageHeader);

    return _super6.apply(this, arguments);
  }

  _createClass(MessageHeader, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          isReply = _this$props6.isReply,
          message = _this$props6.message,
          isMy = _this$props6.isMy;
      var _this$context5 = this.context,
          getValueByField = _this$context5.getValueByField,
          dataset = _this$context5.dataset,
          rtl = _this$context5.rtl,
          onRemove = _this$context5.onRemove,
          SetState = _this$context5.SetState,
          translate = _this$context5.translate;
      var ownerName = getValueByField(message, dataset.ownerName);
      var id = getValueByField(message, dataset.id);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-message-header",
        style: {
          direction: rtl ? 'rtl' : 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-message-owner"
      }, isMy ? 'You' : ownerName), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '12px'
        }
      }), !isReply && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, {
        text: /*#__PURE__*/_react.default.createElement("div", {
          className: "r-chatbox-message-options",
          style: {
            transform: "rotate(".concat(rtl ? -90 : 90, "deg)")
          }
        }),
        items: [{
          text: translate('Reply'),
          onClick: function onClick() {
            return SetState({
              replyId: id
            });
          }
        }, {
          text: translate('DeleteMessage'),
          onClick: function onClick() {
            return onRemove(message);
          }
        }],
        rtl: rtl,
        style: {
          color: 'inherit'
        },
        openRelatedTo: ".r-chatbox-body"
      }));
    }
  }]);

  return MessageHeader;
}(_react.Component);

_defineProperty(MessageHeader, "contextType", RChatBoxContext);

var MessageReplyTo = /*#__PURE__*/function (_Component7) {
  _inherits(MessageReplyTo, _Component7);

  var _super7 = _createSuper(MessageReplyTo);

  function MessageReplyTo() {
    _classCallCheck(this, MessageReplyTo);

    return _super7.apply(this, arguments);
  }

  _createClass(MessageReplyTo, [{
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          isReply = _this$props7.isReply,
          message = _this$props7.message;
      var _this$context6 = this.context,
          getValueByField = _this$context6.getValueByField,
          dataset = _this$context6.dataset,
          getMessageById = _this$context6.getMessageById,
          translate = _this$context6.translate;
      var replyTo = getValueByField(message, dataset.replyTo);

      if (isReply) {
        return '';
      }

      if (!replyTo) {
        return '';
      }

      var message = getMessageById(replyTo);
      return /*#__PURE__*/_react.default.createElement("a", {
        href: '#' + replyTo,
        className: "r-chatbox-reply-to"
      }, message && /*#__PURE__*/_react.default.createElement(Message, {
        message: message,
        isReply: true
      }), !message && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          paddingBottom: '6px'
        }
      }, translate('DeletedMessage')));
    }
  }]);

  return MessageReplyTo;
}(_react.Component);

_defineProperty(MessageReplyTo, "contextType", RChatBoxContext);

var MessageFooter = /*#__PURE__*/function (_Component8) {
  _inherits(MessageFooter, _Component8);

  var _super8 = _createSuper(MessageFooter);

  function MessageFooter() {
    _classCallCheck(this, MessageFooter);

    return _super8.apply(this, arguments);
  }

  _createClass(MessageFooter, [{
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          isReply = _this$props8.isReply,
          message = _this$props8.message;
      var _this$context7 = this.context,
          getValueByField = _this$context7.getValueByField,
          dataset = _this$context7.dataset,
          rtl = _this$context7.rtl;

      if (isReply) {
        return '';
      }

      var time = getValueByField(message, dataset.time);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-message-footer",
        style: {
          direction: rtl ? 'rtl' : 'ltr'
        }
      }, !isReply && /*#__PURE__*/_react.default.createElement("div", {
        className: "r-chatbox-footer-time"
      }, time));
    }
  }]);

  return MessageFooter;
}(_react.Component);

_defineProperty(MessageFooter, "contextType", RChatBoxContext);

var MessageBody = /*#__PURE__*/function (_Component9) {
  _inherits(MessageBody, _Component9);

  var _super9 = _createSuper(MessageBody);

  function MessageBody() {
    _classCallCheck(this, MessageBody);

    return _super9.apply(this, arguments);
  }

  _createClass(MessageBody, [{
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          isReply = _this$props9.isReply,
          message = _this$props9.message;
      var _this$context8 = this.context,
          getValueByField = _this$context8.getValueByField,
          dataset = _this$context8.dataset,
          rtl = _this$context8.rtl;
      var text = getValueByField(message, dataset.text);

      if (text) {
        var style = {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          direction: rtl ? 'rtl' : 'ltr'
        };

        if (isReply) {
          style.maxHeight = '40px';
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "r-chatbox-text",
          style: style
        }, text);
      }

      return /*#__PURE__*/_react.default.createElement(MessageAttachment, {
        isReply: isReply,
        message: message
      });
    }
  }]);

  return MessageBody;
}(_react.Component);

_defineProperty(MessageBody, "contextType", RChatBoxContext);