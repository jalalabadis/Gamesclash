localforage['getItem']('UserID')['then'](_0xc51297 => {
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('Dice');
    _0x2da966['on']('value', function(_0x2738c8) {
        var _0x335834 = _0x2738c8['val']();
        localforage['setItem']('Diceresult', _0x335834);
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('TokenRun');
    _0x2da966['on']('value', function(_0x2583af) {
        var _0x46a2e7 = _0x2583af['val']();
        localforage['setItem']('TokenRun', _0x46a2e7);
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('Token1');
    _0x2da966['on']('value', function(_0x3e907d) {
        var _0x306f1d = _0x3e907d['val']();
        localforage['setItem']('Token1', _0x306f1d);
        _0x306f1d == 0x0 ? MoveuserEatToken1(_0x306f1d) : MoveuserToken1(_0x306f1d);;
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('Token2');
    _0x2da966['on']('value', function(_0x3a9115) {
        var _0x4f2a69 = _0x3a9115['val']();
        localforage['setItem']('Token2', _0x4f2a69);
        _0x4f2a69 == 0x0 ? MoveuserEatToken2(_0x4f2a69) : MoveuserToken2(_0x4f2a69);;
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('Token3');
    _0x2da966['on']('value', function(_0x48daf9) {
        var _0x1f6838 = _0x48daf9['val']();
        localforage['setItem']('Token3', _0x1f6838);
        _0x1f6838 == 0x0 ? MoveuserEatToken3(_0x1f6838) : MoveuserToken3(_0x1f6838);;
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('Token4');
    _0x2da966['on']('value', function(_0x4cefc4) {
        var _0x12e045 = _0x4cefc4['val']();
        localforage['setItem']('Token4', _0x12e045);
        _0x12e045 == 0x0 ? MoveuserEatToken4(_0x12e045) : MoveuserToken4(_0x12e045);;
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('TokenWin');
    _0x2da966['on']('value', function(_0x320c26) {
        var _0x122bc9 = _0x320c26['val']();
        _0x122bc9 == 0x4 && Gameover_UserWin();
    });
    var _0x2da966 = firebase['database']()['ref']('User/' + _0xc51297 + '/Joystick')['child']('StakeMiss');
    _0x2da966['on']('value', function(_0x3c04d6) {
        var _0x29a04a = _0x3c04d6['val']();
        _0x29a04a > 0x5 && Gameover_OpponentWin();
    });
});

function diceresult_database(_0x3607bf) {
    localforage['getItem']('UserID')['then'](_0x5df827 => {
        firebase['database']()['ref']('User/' + _0x5df827 + '/Joystick')['update']({
            'Dice': _0x3607bf
        });
    });
};

function DiceOverDatabase() {
    localforage['getItem']('UserID')['then'](_0x3bfc2f => {
        const _0x5dcb7c = firebase['database']()['ref']('User/' + _0x3bfc2f);
        _0x5dcb7c['once']('value')['then'](_0x39d707 => {
            var _0x4179aa = _0x39d707['val']()['Opponent'];
            firebase['database']()['ref']('User/' + _0x3bfc2f + '/Joystick')['update']({
                'Stake': 'OFF'
            }), _0x4179aa !== 0x0 && firebase['database']()['ref']('User/' + _0x4179aa + '/Joystick')['update']({
                'Stake': 'ON'
            });
        });
    }), localforage['setItem']('Diceresult', 0x0);
};

function DatabaseToken1() {
    localforage['getItem']('Diceresult')['then'](_0x46518f => {
        var _0x2efbd7 = _0x46518f;
        DatabaseNextToken1(_0x2efbd7);
    });
}

function DatabaseNextToken1(_0x58763a) {
    localforage['getItem']('UserID')['then'](_0x26e737 => {
        const _0x13f44a = firebase['database']()['ref']('User/' + _0x26e737 + '/Joystick');
        _0x13f44a['once']('value')['then'](_0xe5ece2 => {
            var _0x2f5ce8 = _0xe5ece2['val']()['Token1'];
            _0x2f5ce8 == 0x0 ? _0x13f44a['update']({
                'Token1': 0x1,
                'TokenRun': ++_0xe5ece2['val']()['TokenRun']
            }, reActiveDice) : _0x13f44a['update']({
                'Token1': +_0xe5ece2['val']()['Token1'] + _0x58763a
            });
        });
    });
};

function DatabaseToken2() {
    localforage['getItem']('Diceresult')['then'](_0x4031f9 => {
        var _0x1d7061 = _0x4031f9;
        DatabaseNextToken2(_0x1d7061);
    });
}

function DatabaseNextToken2(_0xdc727e) {
    localforage['getItem']('UserID')['then'](_0x1bfa9d => {
        const _0x4aa8dd = firebase['database']()['ref']('User/' + _0x1bfa9d + '/Joystick');
        _0x4aa8dd['once']('value')['then'](_0x386909 => {
            var _0x27907e = _0x386909['val']()['Token2'];
            _0x27907e == 0x0 ? _0x4aa8dd['update']({
                'Token2': 0x1,
                'TokenRun': ++_0x386909['val']()['TokenRun']
            }, reActiveDice) : _0x4aa8dd['update']({
                'Token2': +_0x386909['val']()['Token2'] + _0xdc727e
            });
        });
    });
};

function DatabaseToken3() {
    localforage['getItem']('Diceresult')['then'](_0x42f4c1 => {
        var _0x132145 = _0x42f4c1;
        DatabaseNextToken3(_0x132145);
    });
}

function DatabaseNextToken3(_0x3fc22a) {
    localforage['getItem']('UserID')['then'](_0x439b60 => {
        const _0x481dfc = firebase['database']()['ref']('User/' + _0x439b60 + '/Joystick');
        _0x481dfc['once']('value')['then'](_0x4f5f31 => {
            var _0x3057e6 = _0x4f5f31['val']()['Token3'];
            _0x3057e6 == 0x0 ? _0x481dfc['update']({
                'Token3': 0x1,
                'TokenRun': ++_0x4f5f31['val']()['TokenRun']
            }, reActiveDice) : _0x481dfc['update']({
                'Token3': +_0x4f5f31['val']()['Token3'] + _0x3fc22a
            });
        });
    });
};

function DatabaseToken4() {
    localforage['getItem']('Diceresult')['then'](_0x31b94c => {
        var _0x1a245a = _0x31b94c;
        DatabaseNextToken4(_0x1a245a);
    });
}

function DatabaseNextToken4(_0x5149bd) {
    localforage['getItem']('UserID')['then'](_0x4bfad1 => {
        const _0xdf1b4a = firebase['database']()['ref']('User/' + _0x4bfad1 + '/Joystick');
        _0xdf1b4a['once']('value')['then'](_0x3b5f4d => {
            var _0x4ebf83 = _0x3b5f4d['val']()['Token4'];
            _0x4ebf83 == 0x0 ? _0xdf1b4a['update']({
                'Token4': 0x1,
                'TokenRun': ++_0x3b5f4d['val']()['TokenRun']
            }, reActiveDice) : _0xdf1b4a['update']({
                'Token4': +_0x3b5f4d['val']()['Token4'] + _0x5149bd
            });
        });
    });
};

function DatabaseTokenWin() {
    localforage['getItem']('UserID')['then'](_0x3439d8 => {
        const _0x399030 = firebase['database']()['ref']('User/' + _0x3439d8 + '/Joystick');
        _0x399030['once']('value')['then'](_0x5b74b6 => {
            _0x399030['update']({
                'TokenWin': ++_0x5b74b6['val']()['TokenWin']
            });
        });
    });
}

function datalodDice(_0x13da7f) {
    let _0x20dbd2 = document['getElementById']('diceRoll');
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('Dice');
    _0x46079f['on']('value', function(_0x408eaa) {
        var _0xc5aea4 = _0x408eaa['val']();
        _0x20dbd2['dataset']['side'] = _0xc5aea4, _0x20dbd2['classList']['toggle']('reRoll');
    });
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('Token1');
    _0x46079f['on']('value', function(_0x5cf334) {
        var _0x575249 = _0x5cf334['val']();
        localforage['setItem']('OpponentToken1', _0x575249);
        _0x575249 == 0x0 ? MoveopponentEatToken1(_0x575249) : MoveopponentToken1(_0x575249);;
        callOpponentdicetime();
    });
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('Token2');
    _0x46079f['on']('value', function(_0x4b90aa) {
        var _0xde37dc = _0x4b90aa['val']();
        localforage['setItem']('OpponentToken2', _0xde37dc);
        _0xde37dc == 0x0 ? MoveopponentEatToken2(_0xde37dc) : MoveopponentToken2(_0xde37dc);;
        callOpponentdicetime();
    });
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('Token3');
    _0x46079f['on']('value', function(_0x468973) {
        var _0x53ffd4 = _0x468973['val']();
        localforage['setItem']('OpponentToken3', _0x53ffd4);
        _0x53ffd4 == 0x0 ? MoveopponentEatToken3(_0x53ffd4) : MoveopponentToken3(_0x53ffd4);;
        callOpponentdicetime();
    });
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('Token4');
    _0x46079f['on']('value', function(_0x4a3b6b) {
        var _0xa87e36 = _0x4a3b6b['val']();
        localforage['setItem']('OpponentToken4', _0xa87e36);
        _0xa87e36 == 0x0 ? MoveopponentEatToken4(_0xa87e36) : MoveopponentToken4(_0xa87e36);;
        callOpponentdicetime();
    });
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('TokenWin');
    _0x46079f['on']('value', function(_0x26b1cb) {
        var _0x1eb867 = _0x26b1cb['val']();
        _0x1eb867 == 0x4 && Gameover_OpponentWin();
    });
    var _0x46079f = firebase['database']()['ref']('User/' + _0x13da7f + '/Joystick')['child']('StakeMiss');
    _0x46079f['on']('value', function(_0x209f4e) {
        var _0x111d68 = _0x209f4e['val']();
        console['log'](_0x111d68), _0x111d68 > 0x5 && Gameover_UserWin();
    });
};

function databaseSearchToken1() {
    localforage['getItem']('OpponentID')['then'](_0x321743 => {
        const _0x10b208 = firebase['database']()['ref']('User/' + _0x321743 + '/Joystick');
        _0x10b208['once']('value')['then'](_0x39a035 => {
            _0x10b208['update']({
                'Token1': 0x0,
                'TokenRun': _0x39a035['val']()['TokenRun'] - 0x1
            }, reActiveDice);
        });
    });
};

function databaseSearchToken2() {
    localforage['getItem']('OpponentID')['then'](_0xe5096 => {
        const _0x35d0b7 = firebase['database']()['ref']('User/' + _0xe5096 + '/Joystick');
        _0x35d0b7['once']('value')['then'](_0x2248a5 => {
            _0x35d0b7['update']({
                'Token2': 0x0,
                'TokenRun': _0x2248a5['val']()['TokenRun'] - 0x1
            }, reActiveDice);
        });
    });
};

function databaseSearchToken3() {
    localforage['getItem']('OpponentID')['then'](_0x4f42e4 => {
        const _0x9a5ee9 = firebase['database']()['ref']('User/' + _0x4f42e4 + '/Joystick');
        _0x9a5ee9['once']('value')['then'](_0x2fb7bf => {
            _0x9a5ee9['update']({
                'Token3': 0x0,
                'TokenRun': _0x2fb7bf['val']()['TokenRun'] - 0x1
            }, reActiveDice);
        });
    });
};

function databaseSearchToken4() {
    localforage['getItem']('OpponentID')['then'](_0x29d4bc => {
        const _0x141424 = firebase['database']()['ref']('User/' + _0x29d4bc + '/Joystick');
        _0x141424['once']('value')['then'](_0x5e0ca1 => {
            _0x141424['update']({
                'Token4': 0x0,
                'TokenRun': _0x5e0ca1['val']()['TokenRun'] - 0x1
            }, reActiveDice);
        });
    });
};

function Gameover_UserWin() {
    localforage['getItem']('UserID')['then'](_0x49e945 => {
        const _0x4ff312 = firebase['database']()['ref']('User/' + _0x49e945);
        _0x4ff312['once']('value')['then'](_0x341129 => {
            var _0x2a994b = _0x341129['val']()['Username'],
                _0xd463f2 = _0x341129['val']()['Opponent'],
                _0x56b957 = _0x341129['val']()['RoomID'],
                _0x901654 = +_0x341129['val']()['WINNINGSCASH'],
                _0x2201a9 = +_0x341129['val']()['DEPOSITCASH'],
                _0x1afbbe = _0x341129['val']()['EntryFee'],
                _0x4d6545 = +_0x341129['val']()['TicketPrize'],
                _0x55c85d = +_0x901654 + _0x2201a9 + _0x4d6545;
            data_update_Game_History(_0xd463f2, _0x55c85d, _0x4d6545, _0x2a994b, _0x1afbbe);
            var _0x327726 = _0x4d6545 - _0x1afbbe;
            RefeerlsCommitionadd(_0x327726, _0x2a994b);
        }), firebase['database']()['ref']('User/' + _0x49e945 + '/Joystick')['update']({
            'Stake': 'OFF'
        });
    }), localforage['getItem']('EntryID')['then'](_0x4574e6 => {
        const _0x136bd9 = firebase['database']()['ref']('Lobby/Classic/' + _0x4574e6);
        _0x136bd9['once']('value')['then'](_0xd8498 => {
            var _0x177256 = _0xd8498['val']()['Playnow'];
            _0x177256 > 0x0 && _0x136bd9['update']({
                'Playnow': _0xd8498['val']()['Playnow'] - 0x2
            });;
        });
    }), clearInterval(timers), clearInterval(Utimers), localforage['setItem']('EntyFeee', 0x0), localforage['setItem']('OpponentToken1', 0x0), localforage['setItem']('OpponentToken2', 0x0), localforage['setItem']('OpponentToken3', 0x0), localforage['setItem']('OpponentToken4', 0x0), localforage['setItem']('Token1', 0x0), localforage['setItem']('Token2', 0x0), localforage['setItem']('Token3', 0x0), localforage['setItem']('Token4', 0x0), localforage['setItem']('TokenRun', 0x0), document['getElementById']('gameover')['style']['display'] = 'block', document['getElementById']('firework')['style']['display'] = 'block', document['getElementById']('fireworks')['style']['display'] = 'block', document['getElementById']('Congratulation')['style']['display'] = 'block', document['getElementById']('gameoverstutas')['innerHTML'] = 'You\x20Won😍';
};

function data_update_Game_History(_0x1d4227, _0x384c4c, _0xad8be9, _0x2d985f, _0x4077cf) {
    console['log']('GameHistory');
    var _0x187ddc = randomstring(0x8),
        _0x3b2338 = Date['now'](),
        _0x1ee76a = _0xad8be9 - _0x4077cf;
    localforage['getItem']('UserID')['then'](_0x40156a => {
        const _0x1e7877 = firebase['database']()['ref']('User/' + _0x1d4227);
        _0x1e7877['once']('value')['then'](_0x2b12ab => {
            var _0x20ea3b = _0x2b12ab['val']()['Username'],
                _0x56c2ff = +_0x2b12ab['val']()['WINNINGSCASH'],
                _0x5ec51f = +_0x2b12ab['val']()['DEPOSITCASH'],
                _0x1d642d = +_0x56c2ff + _0x5ec51f;
            firebase['database']()['ref']('Game-History/' + _0x40156a + _0x3b2338)['update']({
                'GameBanner': 'ludo_classic.jpeg',
                'Status': 'Won',
                'Against': _0x20ea3b,
                'BattleID': _0x187ddc,
                'Symbol': '(+)',
                'Earn': _0x1ee76a,
                'ClosingBalance': _0x384c4c,
                'Month': Month,
                'Date': Dates,
                'Time': strTime,
                'PlayerID': _0x40156a,
                'Ms': _0x3b2338
            }), firebase['database']()['ref']('Game-History/' + _0x1d4227 + _0x3b2338)['update']({
                'GameBanner': 'ludo_classic.jpeg',
                'Status': 'Lost',
                'Against': _0x2d985f,
                'BattleID': _0x187ddc,
                'Symbol': '(-)',
                'Earn': _0x4077cf,
                'ClosingBalance': _0x1d642d,
                'Month': Month,
                'Date': Dates,
                'Time': strTime,
                'PlayerID': _0x1d4227,
                'Ms': _0x3b2338
            }, data_update_Opponent);
        });
    });
};

function data_update_Opponent() {
    localforage['getItem']('UserID')['then'](_0x8c68f5 => {
        const _0x21f251 = firebase['database']()['ref']('User/' + _0x8c68f5);
        _0x21f251['once']('value')['then'](_0x57b935 => {
            var _0x13445b = _0x57b935['val']()['Opponent'];
            data_update_OpponentNext(_0x13445b);
        });
    });
};

function data_update_OpponentNext(_0x140496) {
    const _0x4ab12b = firebase['database']()['ref']('User/' + _0x140496);
    _0x4ab12b['once']('value')['then'](_0x301f84 => {
        _0x4ab12b['update']({
            'GAMEPLAY': ++_0x301f84['val']()['GAMEPLAY'],
            'EntryFee': 0x0,
            'Player': 0x0,
            'Ticket': 0x0,
            'TicketPrize': 0x0,
            'Opponent': 0x0,
            'LastGame': 'Los'
        }, data_update_Users);
    }), firebase['database']()['ref']('User/' + _0x140496 + '/Joystick')['update']({
        'Stake': 'OFF'
    });
};

function data_update_Users() {
    localforage['getItem']('UserID')['then'](_0xc69bfe => {
        const _0x481c9b = firebase['database']()['ref']('User/' + _0xc69bfe);
        _0x481c9b['once']('value')['then'](_0x1dbe9f => {
            var _0x312721 = +_0x1dbe9f['val']()['TicketPrize'];
            _0x481c9b['update']({
                'WINNINGSCASH': +_0x1dbe9f['val']()['WINNINGSCASH'] + _0x312721,
                'GAMEPLAY': ++_0x1dbe9f['val']()['GAMEPLAY'],
                'EntryFee': 0x0,
                'Player': 0x0,
                'Ticket': 0x0,
                'TicketPrize': 0x0,
                'Opponent': 0x0,
                'LastGame': 'Won'
            });
        });
    });
};

function Gameover_OpponentWin() {
    clearInterval(timers), clearInterval(Utimers), localforage['setItem']('EntyFeee', 0x0), localforage['setItem']('OpponentToken1', 0x0), localforage['setItem']('OpponentToken2', 0x0), localforage['setItem']('OpponentToken3', 0x0), localforage['setItem']('OpponentToken4', 0x0), localforage['setItem']('Token1', 0x0), localforage['setItem']('Token2', 0x0), localforage['setItem']('Token3', 0x0), localforage['setItem']('Token4', 0x0), localforage['setItem']('TokenRun', 0x0), document['getElementById']('gameover')['style']['display'] = 'block', document['getElementById']('gameoverstutas')['innerHTML'] = 'You\x20Lost,\x20Try\x20Again👊';
};