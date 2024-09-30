import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { User } from "src/users/user.entity"

export class CreateBookDto {
    
    @IsEmpty({message: 'you cant provide the id'})
    id: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsString()
    author: string

    @IsEmpty({message: 'you cant provide the id'})
    user: User

}