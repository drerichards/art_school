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

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _reactBootstrap = require('react-bootstrap');

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
            lineNumber: 7
        }
    }, _react2.default.createElement(_reactBootstrap.FormControl, (0, _extends3.default)({}, props, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    })), help && _react2.default.createElement(HelpBlock, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, help));
};

var Contact = function Contact() {
    return _react2.default.createElement(_Theme2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(_reactBootstrap.Jumbotron, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Hello, world!'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'Learn more'))), _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, 'GET IN TOUCH'), _react2.default.createElement('section', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'To enroll or for any general information, please contact us:'), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }), _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, 'Telephone: '), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, '123-456-7890 ')), _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, '\u2022 Email: '), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, 'info@mysite.com')), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement('h4', { className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, 'Address: '), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, '500 Terry Francois St, San Francisco, CA 94158'))), _react2.default.createElement('form', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement(FieldGroup, {
        id: 'formControlsText',
        type: 'text',
        placeholder: 'Name *',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }), _react2.default.createElement(FieldGroup, {
        id: 'formControlsEmail',
        type: 'email',
        placeholder: 'Email *',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }), _react2.default.createElement(FieldGroup, {
        id: 'formControlsText',
        type: 'text',
        placeholder: 'Subject',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }), _react2.default.createElement(_reactBootstrap.FormGroup, { controlId: 'formControlsTextarea', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea', placeholder: 'Message', __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    })), _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, 'Submit'))));
};

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiQnV0dG9uIiwiSnVtYm90cm9uIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJpbmRleFN0eWxlIiwiRmllbGRHcm91cCIsImlkIiwiaGVscCIsInByb3BzIiwiQ29udGFjdCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBUSxBQUFXLEFBQVc7O0FBQ3ZDLEFBQU8sQUFBZ0I7Ozs7Ozs7OztBQUV2QixJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUE0QjtRQUF6QixBQUF5QixVQUF6QixBQUF5QjtRQUFyQixBQUFxQixZQUFyQixBQUFxQjtRQUFaLEFBQVksNERBQzNDOzsyQkFDRSxBQUFDLDJDQUFVLFdBQVgsQUFBc0I7c0JBQXRCO3dCQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLEFBQUMsc0VBQUQsQUFBaUI7O3NCQUFqQjt3QkFERixBQUNFLEFBQ0M7QUFERDtBQUFBLGlDQUNVLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQVk7QUFBWjtBQUFBLEtBQUEsRUFIYixBQUNFLEFBRVcsQUFHZDtBQVBIOztBQVNBLElBQU0sVUFBVSxTQUFWLEFBQVUsVUFBQTsyQkFDWixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLDJDQUNXLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7c0JBQTFDO3dCQURKLEFBQ0ksQUFFQTtBQUZBO3dCQUVBLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxrQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGSixBQUVJLEFBSUEsbUpBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx3Q0FBTyxTQUFSLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BVlosQUFHSSxBQU1JLEFBQ0ksQUFLUixpQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsaUNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBOztzQkFBQTt3QkFGSixBQUVJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSxnQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FMUixBQUdJLEFBRUksQUFFSixtQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBQ0EsbUNBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BVFIsQUFPSSxBQUVJLEFBRUoscUNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLDhCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWZaLEFBRUksQUFXSSxBQUVJLEFBS1IscUVBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEscUNBQ0ksQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtxQkFISixBQUdnQjs7c0JBSGhCO3dCQURKLEFBQ0ksQUFLQTtBQUxBO0FBQ0ksc0NBSUosQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtxQkFISixBQUdnQjs7c0JBSGhCO3dCQU5KLEFBTUksQUFLQTtBQUxBO0FBQ0ksc0NBSUosQUFBQztZQUFELEFBQ08sQUFDSDtjQUZKLEFBRVMsQUFDTDtxQkFISixBQUdnQjs7c0JBSGhCO3dCQVhKLEFBV0ksQUFLQTtBQUxBO0FBQ0ksd0JBSUosQUFBQywyQ0FBVSxXQUFYLEFBQXFCO3NCQUFyQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyw2Q0FBWSxnQkFBYixBQUE0QixZQUFXLGFBQXZDLEFBQW1EO3NCQUFuRDt3QkFqQlIsQUFnQkksQUFDSSxBQUVKO0FBRkk7eUJBRUosQUFBQyx3Q0FBTyxNQUFSLEFBQWE7c0JBQWI7d0JBQUE7QUFBQTtPQXZEQSxBQUNaLEFBZUksQUFvQkksQUFtQkk7QUF2RGhCLEFBNkRBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRhY3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJlcmljaGFyZHMvRGVza3RvcC9Qcm9qZWN0cy9hcnRzY2hvb2wifQ==