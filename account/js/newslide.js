function _0xa577(_0x456735, _0x4bfb8d) {
    var _0x5f4074 = _0x5f40();
    return _0xa577 = function(_0xa57725, _0x3bd891) {
        _0xa57725 = _0xa57725 - 0xcf;
        var _0x33bdcc = _0x5f4074[_0xa57725];
        return _0x33bdcc;
    }
    ,
    _0xa577(_0x456735, _0x4bfb8d);
}
function _0x5f40() {
    var _0x11ee1c = ['6NAtIoj', '9192BumqBf', 'size', '#dfile', '#dropzone\x20input', 'remove', '<img\x20/>', '1239RSkORC', '138812afrPDD', '<i\x20class=\x27bi\x20bi-info-circle\x27></i>', 'html', '67601NprInN', 'onload', 'hover', 'split', 'alert', 'src', 'result', 'addClass', '18196335cFqMaX', 'Your\x20photo\x20size\x20is\x20too\x20large.\x20Try\x20to\x20upload\x20a\x20photo\x20less\x20than\x206MB', 'dropped', 'pop', 'fileSize', 'type', 'accept', '4758260FNkHtX', 'removeClass', 'inArray', '3836544BHnobS', '#dropzone\x20div', 'name', 'files', 'val', '1556472dhPhfW'];
    _0x5f40 = function() {
        return _0x11ee1c;
    }
    ;
    return _0x5f40();
}
(function(_0x1b4836, _0x57886d) {
    var _0x3ded05 = _0xa577
      , _0x5c674b = _0x1b4836();
    while (!![]) {
        try {
            var _0x2f3b42 = parseInt(_0x3ded05(0xd3)) / 0x1 + parseInt(_0x3ded05(0xd0)) / 0x2 * (-parseInt(_0x3ded05(0xeb)) / 0x3) + parseInt(_0x3ded05(0xea)) / 0x4 + -parseInt(_0x3ded05(0xe2)) / 0x5 + -parseInt(_0x3ded05(0xe5)) / 0x6 + parseInt(_0x3ded05(0xcf)) / 0x7 * (-parseInt(_0x3ded05(0xec)) / 0x8) + parseInt(_0x3ded05(0xdb)) / 0x9;
            if (_0x2f3b42 === _0x57886d)
                break;
            else
                _0x5c674b['push'](_0x5c674b['shift']());
        } catch (_0x162a00) {
            _0x5c674b['push'](_0x5c674b['shift']());
        }
    }
}(_0x5f40, 0x851f9),
$(function() {
    var _0x91606 = _0xa577;
    $(document['body'])['on']('dragover', '#dropzone', function(_0x596208) {
        var _0x4f72be = _0xa577;
        $(this)[_0x4f72be(0xda)](_0x4f72be(0xd5));
    }),
    $(document['body'])['on']('dragleave', '#dropzone', function(_0x2cc7a0) {
        var _0x21973b = _0xa577;
        $(this)[_0x21973b(0xe3)](_0x21973b(0xd5));
    }),
    $(document['body'])['on']('change', _0x91606(0xef), function(_0x3e1c89) {
        var _0x98a5a8 = _0x91606
          , _0x5ddaa8 = this[_0x98a5a8(0xe8)][0x0];
        $('#dropzone')[_0x98a5a8(0xe3)]('hover');
        try {
            if (this[_0x98a5a8(0xe1)] && $[_0x98a5a8(0xe4)](_0x5ddaa8[_0x98a5a8(0xe0)], this['accept'][_0x98a5a8(0xd6)](/, ?/)) == -0x1)
                return $[_0x98a5a8(0xd7)]('The\x20selected\x20photo\x20type\x20is\x20not\x20allowed', _0x98a5a8(0xd1)),
                $('#dfile')[_0x98a5a8(0xe9)](''),
                ![];
            else {
                if (this[_0x98a5a8(0xe8)][0x0][_0x98a5a8(0xed)] > 0x5d0900 || this[_0x98a5a8(0xe8)][0x0][_0x98a5a8(0xdf)] > 0x5d0900)
                    return $[_0x98a5a8(0xd7)](_0x98a5a8(0xdc), _0x98a5a8(0xd1)),
                    ![];
            }
        } catch (_0xba7c66) {
            return ![];
        }
        $('#dropzone')[_0x98a5a8(0xda)](_0x98a5a8(0xdd)),
        $('#dropzone\x20img')[_0x98a5a8(0xf0)]();
        if (/^image\/(gif|png|jpeg|heif|heic|jpg)$/i['test'](_0x5ddaa8[_0x98a5a8(0xe0)])) {
            var _0x488f75 = new FileReader(_0x5ddaa8);
            _0x488f75['readAsDataURL'](_0x5ddaa8),
            _0x488f75[_0x98a5a8(0xd4)] = function(_0x43bd67) {
                var _0x2b691e = _0x98a5a8
                  , _0x7926b1 = _0x43bd67['target'][_0x2b691e(0xd9)]
                  , _0x2958c4 = $(_0x2b691e(0xf1))['attr'](_0x2b691e(0xd8), _0x7926b1)['fadeIn']();
                $(_0x2b691e(0xe6))['html'](_0x2958c4);
            }
            ;
        } else {
            var _0xdc08c3 = _0x5ddaa8[_0x98a5a8(0xe7)][_0x98a5a8(0xd6)]('.')[_0x98a5a8(0xde)]();
            $(_0x98a5a8(0xee))[_0x98a5a8(0xe9)](''),
            $(_0x98a5a8(0xe6))[_0x98a5a8(0xd2)](_0xdc08c3);
        }
    });
}));
