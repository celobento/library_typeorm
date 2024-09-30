import { IsEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { User } from "src/users/user.entity"

export class UpdateBookDto {
    
    @IsEmpty({message: 'you cant provide the id'})
    id: string

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsNumber()
    price: number

    @IsOptional()
    @IsString()
    author: string

    @IsOptional()
    user: User

}