import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDTO } from './UserDTO/registerDTO';
import { UserBD, userBD } from './Model/userBD';
import { ConflictException } from '@nestjs/common';
import { User } from './Model/user';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './UserDTO/userDTO';

@Injectable()
export class AuthService {

    private static idConter = 1;

    constructor(private readonly jwtService: JwtService) { }

    async register(registerDto: RegisterDTO): Promise<{ access_token: string }> {
        const UsuarioExistente = userBD.find(
            (user) => user.email === registerDto.email,
        );

        if (UsuarioExistente) {
            throw new ConflictException('O e-mail fornecido já está em uso');
        }


        const salt = await bcrypt.genSalt(10);
        const hashedSenha = await bcrypt.hash(registerDto.senha, salt);

        const novoUser: User = {
            id: AuthService.idConter++,
            name: registerDto.name,
            email: registerDto.email,
            senha: hashedSenha,
            cargo: registerDto.cargo,
        };

        userBD.push(novoUser)

        return this.geraToken(novoUser)
    }

    async login(loginDTO: LoginDTO): Promise<{ access_token: string }> {
        const existingUser = userBD.find((user) => user.email === loginDTO.email);

        if (!existingUser) {
            throw new UnauthorizedException('Email inválido');
        }

        const senhaCorreta = await bcrypt.compare(loginDTO.senha, existingUser.senha);

        if (!senhaCorreta) {
            throw new UnauthorizedException('Senha incorreta');
        }

        return this.geraToken(existingUser);

    }

    private async geraToken(user: User): Promise<{ access_token: string }> {
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
            
        }

        const accessToken = await this.jwtService.signAsync(payload);

        return {
            access_token: accessToken,
        }

    }

}