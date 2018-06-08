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

var _contact = require('../styles/scss/contact.scss');

var _contact2 = _interopRequireDefault(_contact);

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
    })), help && _react2.default.createElement(_reactBootstrap.HelpBlock, {
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
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _contact2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement(_reactBootstrap.Jumbotron, { className: 'contact-jumbo', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('div', { className: 'container contact-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'GET IN TOUCH'), _react2.default.createElement('p', { className: 'btm-border', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('section', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('h5', { className: 'bold-only', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'To enroll or for any general information, please contact us:'), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('h5', { className: 'bold-only', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, 'Telephone: '), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, '123-456-7890 ')), _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('h5', { className: 'bold-only', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, ' \u2022 Email: '), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'info@mysite.com')), _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('h5', { className: 'bold-only', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, 'Address: '), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, '500 Terry Francois St, San Francisco, CA 94158'))), _react2.default.createElement('form', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement(FieldGroup, {
        id: 'formControlsText',
        type: 'text',
        placeholder: 'Name *',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }), _react2.default.createElement(FieldGroup, {
        id: 'formControlsEmail',
        type: 'email',
        placeholder: 'Email *',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), _react2.default.createElement(FieldGroup, {
        id: 'formControlsText',
        type: 'text',
        placeholder: 'Subject',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }), _react2.default.createElement(_reactBootstrap.FormGroup, { controlId: 'formControlsTextarea', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea', placeholder: 'Message', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    })), _react2.default.createElement(_reactBootstrap.Button, { type: 'submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, 'Send >>'))));
};

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkp1bWJvdHJvbiIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiSGVscEJsb2NrIiwiVGhlbWUiLCJpbmRleFN0eWxlIiwiY29udGFjdFN0eWxlIiwiRmllbGRHcm91cCIsImlkIiwiaGVscCIsInByb3BzIiwiQ29udGFjdCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFRLEFBQVcsQUFBVyxBQUFhOztBQUNwRCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWtCOzs7Ozs7Ozs7QUFFekIsSUFBTSxhQUFhLFNBQWIsQUFBYSxpQkFBQTtRQUFBLEFBQUcsVUFBSCxBQUFHO1FBQUgsQUFBTyxZQUFQLEFBQU87UUFBUCxBQUFnQiw0REFBaEI7OzJCQUNmLEFBQUMsMkNBQVUsV0FBWCxBQUFzQjtzQkFBdEI7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQyxzRUFBRCxBQUFpQjs7c0JBQWpCO3dCQURKLEFBQ0ksQUFDQztBQUREO0FBQUEsaUNBQ1MsQUFBQzs7c0JBQUQ7d0JBQUEsQUFBWTtBQUFaO0FBQUEsS0FBQSxFQUhFLEFBQ2YsQUFFYTtBQUhqQjs7QUFRQSxJQUFNLFVBQVUsU0FBVixBQUFVLFVBQUE7MkJBQ1osQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSwyQ0FDVyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO3NCQUExQzt3QkFESixBQUNJLEFBQ0E7QUFEQTtpREFDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO3NCQUExQzt3QkFGSixBQUVJLEFBRUE7QUFGQTt3QkFFQSxBQUFDLDJDQUFVLFdBQVgsQUFBcUI7c0JBQXJCO3dCQUpKLEFBSUksQUFFQTtBQUZBO3dCQUVBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxzREFBRyxXQUFILEFBQWE7c0JBQWI7d0JBRkosQUFFSSxBQUNBO0FBREE7d0JBQ0EsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBOztzQkFBQTt3QkFGSixBQUVJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSxnQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FMUixBQUdJLEFBRUksQUFFSixtQ0FBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBQ0Esb0NBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BVFIsQUFPSSxBQUVJLEFBRUoscUNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLDhCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWhCWixBQUdJLEFBV0ksQUFFSSxBQUtSLHFFQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHFDQUNJLEFBQUM7WUFBRCxBQUNPLEFBQ0g7Y0FGSixBQUVTLEFBQ0w7cUJBSEosQUFHZ0I7O3NCQUhoQjt3QkFESixBQUNJLEFBS0E7QUFMQTtBQUNJLHNDQUlKLEFBQUM7WUFBRCxBQUNPLEFBQ0g7Y0FGSixBQUVTLEFBQ0w7cUJBSEosQUFHZ0I7O3NCQUhoQjt3QkFOSixBQU1JLEFBS0E7QUFMQTtBQUNJLHNDQUlKLEFBQUM7WUFBRCxBQUNPLEFBQ0g7Y0FGSixBQUVTLEFBQ0w7cUJBSEosQUFHZ0I7O3NCQUhoQjt3QkFYSixBQVdJLEFBS0E7QUFMQTtBQUNJLHdCQUlKLEFBQUMsMkNBQVUsV0FBWCxBQUFxQjtzQkFBckI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsNkNBQVksZ0JBQWIsQUFBNEIsWUFBVyxhQUF2QyxBQUFtRDtzQkFBbkQ7d0JBakJSLEFBZ0JJLEFBQ0ksQUFFSjtBQUZJO3lCQUVKLEFBQUMsd0NBQU8sTUFBUixBQUFhO3NCQUFiO3dCQUFBO0FBQUE7T0EvQ0EsQUFDWixBQU1JLEFBcUJJLEFBbUJJO0FBL0NoQixBQXFEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJjb250YWN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZXJpY2hhcmRzL0Rlc2t0b3AvUHJvamVjdHMvYXJ0c2Nob29sIn0=