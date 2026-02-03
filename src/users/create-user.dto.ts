import { IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
    @IsString({ message: 'Поле имя должно быть строкой' })
    @MinLength(3, { message: 'Поле имя должно быть от 3 символов' })
    name: string;

    @MinLength(5, { message: 'Поле биография должно быть от 5 символов' })
    @IsString({ message: 'Поле биография должно быть строкой' })
    bio: string;
}
