'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _navigation = require('../styles/scss/navigation.scss');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrerichards/Desktop/Projects/artschool/app/components/navigation.js';


var Navigation = function Navigation() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _navigation2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement(_reactBootstrap.Navbar, { inverse: true, collapseOnSelect: true, className: 'navigation', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('a', { href: '#brand', className: 'bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, 'ART SCHOOL.')), _react2.default.createElement(_reactBootstrap.Navbar.Toggle, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    })), _react2.default.createElement(_reactBootstrap.Navbar.Collapse, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'Home')))), _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, 'About')))), _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement(_reactBootstrap.NavDropdown, { eventKey: 3, title: 'Courses', id: 'dropdown-no-caret', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.1, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement(_link2.default, { href: '/fine-art', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, 'Fine Art'))), _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.2, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement(_link2.default, { href: '/graphic-design', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, 'Graphic Design'))), _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.3, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement(_link2.default, { href: '/graffiti', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, 'Graffiti'))), _react2.default.createElement(_reactBootstrap.MenuItem, { eventKey: 3.4, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement(_link2.default, { href: '/illustration', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, 'Illustration')))))), _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 4, href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('span', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement(_link2.default, { href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, 'Contact'))))))));
};

exports.default = Navigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiTGluayIsIk5hdiIsIk5hdmJhciIsIk5hdkl0ZW0iLCJOYXZEcm9wZG93biIsIk1lbnVJdGVtIiwibmF2aWdhdGlvblN0eWxlIiwiTmF2aWdhdGlvbiIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBUSxBQUFTLEFBQWE7O0FBQzVDLEFBQU8sQUFBcUI7Ozs7Ozs7OztBQUU1QixJQUFNLGFBQWEsU0FBYixBQUFhLGFBQUE7MkJBQ2YsY0FBQTs7c0JBQUE7d0JBQUEsQUFFSTtBQUZKO0FBQUEsS0FBQSwyQ0FFVyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO3NCQUExQzt3QkFGSixBQUVJLEFBRUE7QUFGQTt3QkFFQSxBQUFDLHdDQUFPLFNBQVIsTUFBZ0Isa0JBQWhCLE1BQWlDLFdBQWpDLEFBQTJDO3NCQUEzQzt3QkFBQSxBQUNJO0FBREo7dUJBQ0ssY0FBRCx1QkFBQSxBQUFROztzQkFBUjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSyxjQUFELHVCQUFBLEFBQVE7O3NCQUFSO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsT0FBRyxNQUFILEFBQVEsVUFBUyxXQUFqQixBQUEyQjtzQkFBM0I7d0JBQUE7QUFBQTtPQUZSLEFBQ0ksQUFDSSxBQUVKLCtDQUFBLEFBQUMsdUJBQUQsQUFBUTs7c0JBQVI7d0JBTFIsQUFDSSxBQUlJLEFBRUo7QUFGSTtBQUFBLHlCQUVILGNBQUQsdUJBQUEsQUFBUTs7c0JBQVI7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxxQ0FBSSxXQUFMO3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLHlDQUFRLFVBQVQsQUFBbUIsR0FBRyxNQUF0QixBQUEyQjtzQkFBM0I7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FKaEIsQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQUlaLDRCQUFBLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO3NCQUEzQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVhoQixBQVFJLEFBQ0ksQUFDSSxBQUNJLEFBSVosNkJBQUEsQUFBQyx5Q0FBUSxVQUFULEFBQW1CLEdBQUcsTUFBdEIsQUFBMkI7c0JBQTNCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLDZDQUFZLFVBQWIsQUFBdUIsR0FBRyxPQUExQixBQUFnQyxXQUFVLElBQTFDLEFBQTZDO3NCQUE3Qzt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQywwQ0FBUyxVQUFWLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhaLEFBQ0ksQUFDSSxBQUNJLEFBR1IsK0JBQUEsQUFBQywwQ0FBUyxVQUFWLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVJaLEFBTUksQUFDSSxBQUNJLEFBR1IscUNBQUEsQUFBQywwQ0FBUyxVQUFWLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWJaLEFBV0ksQUFDSSxBQUNJLEFBR1IsK0JBQUEsQUFBQywwQ0FBUyxVQUFWLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQW5DeEIsQUFlSSxBQUNJLEFBQ0ksQUFnQkksQUFDSSxBQUNJLEFBTXBCLHNDQUFBLEFBQUMseUNBQVEsVUFBVCxBQUFtQixHQUFHLE1BQXRCLEFBQTJCO3NCQUEzQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQXpEYixBQUNmLEFBSUksQUFPSSxBQUNJLEFBeUNJLEFBQ0ksQUFDSSxBQUNJO0FBekRoQyxBQW1FQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZXJpY2hhcmRzL0Rlc2t0b3AvUHJvamVjdHMvYXJ0c2Nob29sIn0=