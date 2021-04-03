import jwt from 'jsonwebtoken';
import { promisify } from 'util'; //Tranforma a funçao callback em uma funcao que pode utilziar async await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token nao fornecido' });
  }

  const [, token] = authHeader.split(' ');


  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalido' });
  }

};