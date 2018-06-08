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
var dummyWords1 = [['F', 'Fine Art'], ['G', 'Graphic Design'], ['G', 'Graffiti'], ['I', 'Illustration']];

var dummyWords2 = [['14', 'March'], ['26', 'March'], ['09', 'April'], ['15', 'April']];

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
                lineNumber: 33
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
                lineNumber: 48
            }
        }, _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 49
            }
        }), _react2.default.createElement('div', { className: 'img-column', __source: {
                fileName: _jsxFileName,
                lineNumber: 50
            }
        }, imageGenerator(i))));
    }
    return columns;
};

var scrollToDiv = function scrollToDiv() {
    var homeCourse = document.getElementById('home-course');
    homeCourse.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

var Index = function Index() {
    return _react2.default.createElement(_Theme2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _home2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }), _react2.default.createElement(_reactBootstrap.Jumbotron, { className: 'home-jumbo', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement('main', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, 'CRE'), _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, 'ATIV'), _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, 'ITY.'), _react2.default.createElement(_reactBootstrap.Button, { className: 'chevron', bsSize: 'large', onClick: function onClick() {
            return scrollToDiv();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'chevron-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    })))), _react2.default.createElement('div', { id: 'home-course', className: 'container home-course-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, 'OUR COURSES'), _react2.default.createElement('p', { className: 'btm-border', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }), _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, dummyWords1.map(function (word) {
        return _react2.default.createElement(_reactBootstrap.Col, { className: 'home-course-columns', sm: 6, md: 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
            }
        }, _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 88
            }
        }), _react2.default.createElement('h1', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 89
            }
        }, word[0]), _react2.default.createElement('h5', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 90
            }
        }, word[1]), _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 91
            }
        }, dummyText), _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 92
            }
        }), _react2.default.createElement('a', { href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 93
            }
        }, dummyLink));
    })))), _react2.default.createElement('div', { className: 'container home-image-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
        }
    }, columnGenerator()))), _react2.default.createElement('div', { className: 'container next-course-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 112
        }
    }, 'NEXT COURSES'), _react2.default.createElement('p', { className: 'btm-border', __source: {
            fileName: _jsxFileName,
            lineNumber: 113
        }
    }), _react2.default.createElement(_reactBootstrap.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 114
        }
    }, _react2.default.createElement(_reactBootstrap.Row, { className: 'show-grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 115
        }
    }, dummyWords2.map(function (word) {
        return _react2.default.createElement(_reactBootstrap.Col, { className: 'next-course-columns', sm: 6, md: 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 118
            }
        }, _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 119
            }
        }), _react2.default.createElement('h1', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 120
            }
        }, word[0]), _react2.default.createElement('h5', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 121
            }
        }, word[1]), _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 122
            }
        }, dummyText), _react2.default.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 123
            }
        }), _react2.default.createElement('a', { href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 124
            }
        }, dummyLink));
    })))), _react2.default.createElement(_reactBootstrap.Jumbotron, { className: 'home-btm-jumbo', __source: {
            fileName: _jsxFileName,
            lineNumber: 133
        }
    }, _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 134
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 135
        }
    }, 'IDENTITY'), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 136
        }
    }, 'CONQUER YOUR OWN STYLE'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 137
        }
    }, _react2.default.createElement(_reactBootstrap.Button, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 138
        }
    }, 'Read More >>')))));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJKdW1ib3Ryb24iLCJHcmlkIiwiUm93IiwiQ29sIiwiR2x5cGhpY29uIiwiVGhlbWUiLCJpbmRleFN0eWxlIiwiaG9tZVN0eWxlIiwiZHVtbXlUZXh0IiwiZHVtbXlMaW5rIiwiZHVtbXlXb3JkczEiLCJkdW1teVdvcmRzMiIsImZpbGVuYW1lcyIsImltYWdlR2VuZXJhdG9yIiwiY29sdW1uSW1hZ2VzIiwiaW5kZXgiLCJtYXAiLCJpbWdUYWciLCJuYW1lIiwiYmFja2dyb3VuZEltYWdlIiwicHVzaCIsImNvbHVtbkdlbmVyYXRvciIsImNvbHVtbnMiLCJpIiwic2Nyb2xsVG9EaXYiLCJob21lQ291cnNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIkluZGV4IiwiX19odG1sIiwid29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBUSxBQUFXLEFBQU0sQUFBSyxBQUFLOztBQUM1QyxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWU7Ozs7Ozs7OztBQUV0QixJQUFNLFlBQU4sQUFBa0I7QUFDbEIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sY0FBYyxDQUNoQixDQUFBLEFBQUMsS0FEZSxBQUNoQixBQUFNLGFBQ04sQ0FBQSxBQUFDLEtBRmUsQUFFaEIsQUFBTSxtQkFDTixDQUFBLEFBQUMsS0FIZSxBQUdoQixBQUFNLGFBQ04sQ0FBQSxBQUFDLEtBSkwsQUFBb0IsQUFJaEIsQUFBTTs7QUFHVixJQUFNLGNBQWMsQ0FDaEIsQ0FBQSxBQUFDLE1BRGUsQUFDaEIsQUFBTyxVQUNQLENBQUEsQUFBQyxNQUZlLEFBRWhCLEFBQU8sVUFDUCxDQUFBLEFBQUMsTUFIZSxBQUdoQixBQUFPLFVBQ1AsQ0FBQSxBQUFDLE1BSkwsQUFBb0IsQUFJaEIsQUFBTzs7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QUFDLHFDQUFJLFdBQUwsQUFBZSx1QkFBc0IsSUFBckMsQUFBeUMsR0FBRyxJQUE1QyxBQUFnRDswQkFBaEQ7NEJBQUEsQUFDSTtBQURKO1NBQUE7OzBCQUNJOzRCQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsNEJBQ0EsY0FBQTs7MEJBQUE7NEJBQUEsQUFBSztBQUFMO0FBQUEsZ0JBRkosQUFFSSxBQUFLLEFBQUssQUFDVixxQkFBQSxjQUFBOzswQkFBQTs0QkFBQSxBQUFLO0FBQUw7QUFBQSxnQkFISixBQUdJLEFBQUssQUFBSyxBQUNWLHFCQUFBLGNBQUE7OzBCQUFBOzRCQUFBLEFBQUk7QUFBSjtBQUFBLFdBSkosQUFJSSxBQUNBOzswQkFBQTs0QkFMSixBQUtJLEFBQ0E7QUFEQTtBQUFBLDRCQUNBLGNBQUEsT0FBRyxNQUFILEFBQVE7MEJBQVI7NEJBQUEsQUFBYTtBQUFiO1dBUFIsQUFDSSxBQU1JLEFBR1g7QUEvRGpCLEFBK0NJLEFBR0ksQUFDSSxBQUNNLEFBaUJkLDJCQUFBLEFBQUMsMkNBQVUsV0FBWCxBQUFxQjtzQkFBckI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSw2QkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGSixBQUVJLEFBQ0EsMkNBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQzs7c0JBQUQ7d0JBQUE7QUFBQTtBQUFBLE9BM0VOLEFBQ1YsQUFxRUksQUFDSSxBQUdJLEFBQ0k7QUEzRXBCLEFBa0ZBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZXJpY2hhcmRzL0Rlc2t0b3AvUHJvamVjdHMvYXJ0c2Nob29sIn0=