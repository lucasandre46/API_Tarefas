import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from 'express';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor () {
       super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SUAS_TAREFAS_SUPER_SECRETAS_DO_SEU_CARGO',
        })
    }
    
    private static cookieExtractor(req: Request): string | null {
        if(req.cookies && req.cookies.access_token) {
            return req.cookies.access_token;
        }
        return null;
    }

    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email, nome: payload.nome };
    }

}