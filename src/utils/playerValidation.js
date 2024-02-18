const {body, validationResult} = require('express-validator');
const validate = {};

/**
 * Add Player Validation Rules
 */
validate.addPlayerRules = () => {
    return [
        body('user_name')
        .exists()
        .trim()
        .isLength({min: 3})
        .withMessage('user_name is required'),

        body('is_online')
        .exists()
        .isBoolean()
        .withMessage('is_online is required'),

        body('in_game')
        .exists()
        .isBoolean()
        .withMessage('in_game is required'),

        body('email')
        .exists()
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('email is required'),

        body('first_name')
        .exists()
        .trim()
        .isLength({min: 3})
        .withMessage('first_name is required'),

        body('last_name')
        .exists()
        .trim()
        .isLength({min: 3})
        .withMessage('last_name is required'),

        body('last_login')
        .exists()
        .isISO8601()
        .toDate()
        .withMessage('last_login is required'),

        body('games_played')
        .exists()
        .isInt()
        .withMessage('games_played is required'),

        body('games_won')
        .exists()
        .isInt()
        .withMessage('games_won is required')
    ]
};

/**
 * Validate Player
 */

validate.validatePlayer = async (req, res, next) => {
    console.log('Validating Player');
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));
    return res.status(400).json({
        errors: extractedErrors
    });
}

module.exports = validate;