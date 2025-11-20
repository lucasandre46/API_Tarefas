import { IsNotEmpty, IsString, IsEnum } from "class-validator";



export class LogoutDTO {

@IsNotEmpty()
@IsString()
email: string;

}
