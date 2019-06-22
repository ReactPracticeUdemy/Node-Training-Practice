import * as jwt from 'jsonwebtoken';
import { default as hasPermission } from '../../../extraTs/utils/permissions';
import { configuration } from '../../config';

const errorMessage = {
  error: 'Unauthorized',
  status: 403,
  message: 'Your are unauthorized',
}
export const authMiddleWare = (module, permissionType) => (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];

    jwt.verify(token, configuration.secret, function(err, decode) {
      if (err) {
        next(errorMessage);
      } else {
        if (hasPermission(module, decode.role, permissionType)) {
          next();
        } else {
          next(errorMessage);
        }
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};
