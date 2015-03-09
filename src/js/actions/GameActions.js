const GameConstants = require('../constants/GameConstants');
const AppDispatcher = require('../dispatcher/AppDispatcher');

const GameActions = {
  makeMove(from, to, capture, emitMove) {
    AppDispatcher.handleViewAction({
      actionType: GameConstants.MAKE_MOVE,
      from: from,
      to: to,
      capture: capture,
      emitMove: emitMove
    });
  },
  rematch() {
    AppDispatcher.handleViewAction({
      actionType: GameConstants.REMATCH
    });
  },
  gameOver(options) {
    AppDispatcher.handleViewAction({
      actionType: GameConstants.GAME_OVER,
      options: options
    });
  },
  changePromotion(promotion) {
    AppDispatcher.handleViewAction({
      actionType: GameConstants.CHANGE_PROMOTION,
      promotion: promotion
    });
  }
};

module.exports = GameActions;