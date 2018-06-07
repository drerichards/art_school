'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

var _home = require('../styles/scss/home.scss');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrerichards/Desktop/Projects/artschool/app/pages/index.js?entry';


var dummyText = "I'm a paragraph. Click here to add your own text and edit me.";
var dummyLink = 'Read More >>';
var dummyWords = [['F', 'Fine Art'], ['G', 'Graphic Design'], ['G', 'Graffiti'], ['I', 'Illustration']];

var filenames = [['head', 'paint', 'poster'], ['leaf', 'deer', 'ladies'], ['flower', 'melon', 'table'], ['ace', 'clip', 'horn']];

var imageGenerator = function imageGenerator(index) {
    var columnImages = [];
    filenames[index].map(function (name) {
        var imgTag = _react2.default.createElement('div', {
            key: name,
            alt: name,
            style: { backgroundImage: 'url("https://res.cloudinary.com/andrerichards/image/upload/v1528382161/artschool/' + name + '.png")' },
            __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        });
        columnImages.push(imgTag);
    });
    return columnImages;
};

var columnGenerator = function columnGenerator() {
    var columns = [];
    for (var i = 0; i < 4; i++) {
        columns.push(_react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }, _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 42
            }
        }), _react2.default.createElement('div', { className: 'img-column', __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }, imageGenerator(i))));
    }
    return columns;
};

var Index = function Index() {
    return _react2.default.createElement(_Theme2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _home2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }), _react2.default.createElement(_reactBootstrap.Jumbotron, { className: 'home-jumbo', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, _react2.default.createElement('main', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'CRE'), _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, 'ATIV'), _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, 'ITY.'), _react2.default.createElement(_reactBootstrap.Button, { className: 'chevron', bsSize: 'large', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'chevron-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    })))), _react2.default.createElement('div', { className: 'container home-course-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, 'OUR COURSES'), _react2.default.createElement('p', { className: 'btm-border', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }), _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, dummyWords.map(function (word) {
        return _react2.default.createElement(_reactBootstrap.Col, { className: 'home-course-columns', sm: 6, md: 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
            }
        }, _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 76
            }
        }), _react2.default.createElement('h1', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 77
            }
        }, word[0]), _react2.default.createElement('h5', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 78
            }
        }, word[1]), _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 79
            }
        }, dummyText), _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 80
            }
        }), _react2.default.createElement('a', { href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 81
            }
        }, dummyLink));
    })))), _react2.default.createElement('div', { className: 'container home-image-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, columnGenerator()))), _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, 'NEXT COURSES'), _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 104
        }
    })), _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    })), _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
        }
    }, _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 110
        }
    })), _react2.default.createElement(_reactBootstrap.Col, { sm: 6, md: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
        }
    }, _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 113
        }
    }))))), _react2.default.createElement(_reactBootstrap.Jumbotron, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 121
        }
    }, 'Hello, world!'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 126
        }
    }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 127
        }
    }, 'Learn more'))));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJKdW1ib3Ryb24iLCJHcmlkIiwiUm93IiwiQ29sIiwiR2x5cGhpY29uIiwiVGhlbWUiLCJpbmRleFN0eWxlIiwiaG9tZVN0eWxlIiwiZHVtbXlUZXh0IiwiZHVtbXlMaW5rIiwiZHVtbXlXb3JkcyIsImZpbGVuYW1lcyIsImltYWdlR2VuZXJhdG9yIiwiY29sdW1uSW1hZ2VzIiwiaW5kZXgiLCJtYXAiLCJpbWdUYWciLCJuYW1lIiwiYmFja2dyb3VuZEltYWdlIiwicHVzaCIsImNvbHVtbkdlbmVyYXRvciIsImNvbHVtbnMiLCJpIiwiSW5kZXgiLCJfX2h0bWwiLCJ3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFRLEFBQVcsQUFBTSxBQUFLLEFBQUs7O0FBQzVDLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZTs7Ozs7Ozs7O0FBRXRCLElBQU0sWUFBTixBQUFrQjtBQUNsQixJQUFNLFlBQU4sQUFBa0I7QUFDbEIsSUFBTSxhQUFhLENBQ2YsQ0FBQSxBQUFDLEtBRGMsQUFDZixBQUFNLGFBQ04sQ0FBQSxBQUFDLEtBRmMsQUFFZixBQUFNLG1CQUNOLENBQUEsQUFBQyxLQUhjLEFBR2YsQUFBTSxhQUNOLENBQUEsQUFBQyxLQUpMLEFBQW1CLEFBSWYsQUFBTTs7QUFHVixJQUFNLFlBQVksQ0FDZCxDQUFBLEFBQUMsUUFBRCxBQUFTLFNBREssQUFDZCxBQUFrQixXQUNsQixDQUFBLEFBQUMsUUFBRCxBQUFTLFFBRkssQUFFZCxBQUFpQixXQUNqQixDQUFBLEFBQUMsVUFBRCxBQUFXLFNBSEcsQUFHZCxBQUFvQixVQUNwQixDQUFBLEFBQUMsT0FBRCxBQUFRLFFBSlosQUFBa0IsQUFJZCxBQUFnQjs7QUFHcEIsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsc0JBQVMsQUFDNUI7UUFBTSxlQUFOLEFBQXFCLEFBQ3JCO2NBQUEs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QUFHSSxBQUNJLEFBQ00sQUFpQmQsMkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxxQ0FBSSxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSztBQURMO09BeENaLEFBc0NJLEFBQ0ksQUFDSSxBQU9SLHNDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxpQ0FBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLHFDQUFJLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7OztzQkFDSTt3QkFGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO0FBQUEseUJBRUosQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7OztzQkFDSTt3QkFMUixBQUlJLEFBQ0ksQUFFSjtBQUZJO0FBQUEseUJBRUosQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7OztzQkFDSTt3QkFSUixBQU9JLEFBQ0ksQUFFSjtBQUZJO0FBQUEseUJBRUosQUFBQyxxQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7OztzQkFDSTt3QkE3RHBCLEFBK0NJLEFBRUksQUFDSSxBQVVJLEFBQ0ksQUFPaEI7QUFQZ0I7QUFBQSw0QkFPaEIsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLGtDQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZKLEFBRUksQUFJQSxtSkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLHdDQUFPLFNBQVIsQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0E1RUYsQUFDVixBQW9FSSxBQU1JLEFBQ0k7QUE1RWhCLEFBa0ZBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZXJpY2hhcmRzL0Rlc2t0b3AvUHJvamVjdHMvYXJ0c2Nob29sIn0=