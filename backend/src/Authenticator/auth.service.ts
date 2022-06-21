import { JwtPayload } from '../Libraries/interfaces/auth';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private jwtSecret: string;
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET;
  }

  /**
   * @description Signs a jwt
   * @param  {User} user
   * @returns {string}
   */
  signUserJWT(user: User): string {
    const payload: JwtPayload = {
      sub: user.id,
      user: {
        id: user.id,
        name: user.name,
      },
    };

    return sign(payload, this.jwtSecret, { expiresIn: '30d' });
  }

  /**
   * @description Verifies a jwt
   * @param  {string} jwt
   * @returns {JwtPayload}
   */
  verifyJWT(jwt: string): JwtPayload {
    try {
      const decodedJwt = verify(jwt, this.jwtSecret);

      return decodedJwt as JwtPayload;
    } catch (err) {
      throw new Error('invalid token');
    }
  }
}
