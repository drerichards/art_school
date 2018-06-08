'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrerichards/Desktop/Projects/artschool/app/pages/contact.js?entry';


var FieldGroup = function FieldGroup(_ref) {
    var id = _ref.id,
        help = _ref.help,
        props = (0, _objectWithoutProperties3.default)(_ref, ['id', 'help']);

    return _react2.default.createElement(_reactBootstrap.FormGroup, { controlId: id, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_reactBootstrap.FormControl, (0, _extends3.default)({}, props, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })), help && _react2.default.createElement(_reactBootstrap.HelpBlock, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, help));
};

var Contact = function Contact() {
    return _react2.default.createElement(_Theme2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement(_reactBootstrap.Jumbotron, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Learn more'))), _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'GET IN TOUCH'), _react2.default.createElement('section', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, 'To enroll or for any general information, please contact us:'), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, 'Telephone: '), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, '123-456-7890 ')), _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, '\u2022 Email: '), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, 'info@mysite.com')), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, 'Address: '), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, '500 Terry Francois St, San Francisco, CA 94158'))), _react2.default.createElement('form', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement(FieldGroup, {
        id: 'formControlsText',
        type: 'text',
        placeholder: 'Name *',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }), _react2.default.createElement(FieldGroup, {
        id: 'formControlsEmail',
        type: 'email',
        placeholder: 'Email *',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }), _react2.default.createElement(FieldGroup, {
        id: 'formControlsText',
        type: 'text',
        placeholder: 'Subject',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }), _react2.default.createElement(_reactBootstrap.FormGroup, { controlId: 'formControlsTextarea', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea', placeholder: 'Message', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    })), _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, 'Submit'))));
};

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkp1bWJvdHJvbiIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiSGVscEJsb2NrIiwiVGhlbWUiLCJpbmRleFN0eWxlIiwiRmllbGRHcm91cCIsImlkIiwiaGVscCIsInByb3BzIiwiQ29udGFjdCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFRLEFBQVcsQUFBVyxBQUFhOztBQUNwRCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCLElBQU0sYUFBYSxTQUFiLEFBQWEsaUJBQUE7UUFBQSxBQUFHLFVBQUgsQUFBRztRQUFILEFBQU8sWUFBUCxBQUFPO1FBQVAsQUFBZ0IsNERBQWhCOzsyQkFDZixBQUFDLDJDQUFVLFdBQVgsQUFBc0I7c0JBQXRCO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUMsc0VBQUQsQUFBaUI7O3NCQUFqQjt3QkFESixBQUNJLEFBQ0M7QUFERDtBQUFBLGlDQUNTLEFBQUM7O3NCQUFEO3dCQUFBLEFBQVk7QUFBWjtBQUFBLEtBQUEsRUFIRSxBQUNmLEFBRWE7QUFIakI7O0FBUUEsSUFBTSxVQUFVLFNBQVYsQUFBVSxVQUFBOzJCQUNaLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsMkNBQ1cseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtzQkFBMUM7d0JBREosQUFDSSxBQUVBO0FBRkE7d0JBRUEsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx3Q0FBTyxTQUFSLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BTFosQUFHSSxBQUNJLEFBQ0ksQUFLUixpQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsaUNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBOztzQkFBQTt3QkFGSixBQUVJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSxnQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FMUixBQUdJLEFBRUksQUFFSixtQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBQ0EsbUNBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BVFIsQUFPSSxBQUVJLEFBRUoscUNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLDhCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWZaLEFBRUksQUFXSSxBQUVJLEFBS1IscUVBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEscUNBQ0ksQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtxQkFISixBQUdnQjs7c0JBSGhCO3dCQURKLEFBQ0ksQUFLQTtBQUxBO0FBQ0ksc0NBSUosQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtxQkFISixBQUdnQjs7c0JBSGhCO3dCQU5KLEFBTUksQUFLQTtBQUxBO0FBQ0ksc0NBSUosQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtxQkFISixBQUdnQjs7c0JBSGhCO3dCQVhKLEFBV0ksQUFLQTtBQUxBO0FBQ0ksd0JBSUosQUFBQywyQ0FBVSxXQUFYLEFBQXFCO3NCQUFyQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyw2Q0FBWSxnQkFBYixBQUE0QixZQUFXLGFBQXZDLEFBQW1EO3NCQUFuRDt3QkFqQlIsQUFnQkksQUFDSSxBQUVKO0FBRkk7eUJBRUosQUFBQyx3Q0FBTyxNQUFSLEFBQWE7c0JBQWI7d0JBQUE7QUFBQTtPQWxEQSxBQUNaLEFBVUksQUFvQkksQUFtQkk7QUFsRGhCLEFBd0RBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRhY3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJlcmljaGFyZHMvRGVza3RvcC9Qcm9qZWN0cy9hcnRzY2hvb2wifQ==