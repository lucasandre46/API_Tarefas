import { Controller, Param, Get, NotFoundException, Post, Body, Res  } from '@nestjs/common';
import { RegisterDTO } from './UserDTO/registerDTO';
import { PassThrough } from 'stream';
import type { Response } from 'express'
import { LoginDTO } from './UserDTO/userDTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
     constructor(private readonly authService: AuthService) {}

     @Post('cad')
     async register(
        @Res({passthrough: true}) res: Response,
        @Body() registerDTO: RegisterDTO 
     ){

        const { access_token } = await this.authService.register(registerDTO);

      res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true ,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 1,
     })

      return this.authService.register(registerDTO);

     }

     @Post('login')
  async login(
   @Res({passthrough: true}) res: Response,
   @Body() loginDTO: LoginDTO){

      const { access_token } = await this.authService.login(loginDTO);

      res.cookie('access_token', access_token, {
         httpOnly: true,
         secure: true,
         sameSite: 'strict',
         maxAge: 1000 * 60 * 60 * 1,
      })

   return this.authService.login(loginDTO)
   
  }

}